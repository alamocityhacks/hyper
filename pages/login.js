import { useState, useEffect } from 'react';
import Router from 'next/router';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { WebAuthnExtension } from '@magic-ext/webauthn';
import { useUser } from '../lib/hooks';
import Form from '../components/form';
import SocialLogins from '../components/social-logins';
import HeadObject from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Login = () => {
  useUser({ redirectTo: '/', redirectIfFound: true });
  const [magic, setMagic] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    !magic &&
      setMagic(
        new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, {
          extensions: [new OAuthExtension(), new WebAuthnExtension()],
        })
      );
    magic?.preload();
  }, [magic]);

  async function handleLoginWithEmail(email) {
    try {
      setDisabled(true); // disable login button to prevent multiple emails from being triggered
      let didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: `${process.env.NEXT_PUBLIC_SERVER_URL}/callback`,
      });
      authenticateWithServer(didToken);
    } catch (error) {
      setDisabled(false); // re-enable login button - user may have requested to edit their email
      console.log(error);
    }
  }

  async function handleLoginWithSocial(provider) {
    await magic.oauth.loginWithRedirect({
      provider,
      redirectURI: `${process.env.NEXT_PUBLIC_SERVER_URL}/callback`,
    });
  }

  // try to login with webauthn, if that fails, revert to registering with webauthn
  async function handleLoginWithWebauthn(email) {
    try {
      let didToken = await magic.webauthn.login({ username: email });
      await authenticateWithServer(didToken);
    } catch (error) {
      try {
        let didToken = await magic.webauthn.registerNewUser({ username: email });
        await authenticateWithServer(didToken);
      } catch (err) {
        alert(
          'Failed to authenticate. Must be using a supported device and a username not already taken.'
        );
        console.log(err);
      }
    }
  }

  async function authenticateWithServer(didToken) {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + didToken,
      },
    });
    res.status === 200 && Router.push('/');
  }

  return (
    <div id="login">
      <HeadObject />
      <Nav />
      <div className="max-w-xs mx-auto mt-16 bg-black bg-opacity-5 rounded-xl">
        <Form
          disabled={disabled}
          onEmailSubmit={handleLoginWithEmail}
          onWebauthnSubmit={handleLoginWithWebauthn}
        />
        <SocialLogins onSubmit={handleLoginWithSocial} />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
