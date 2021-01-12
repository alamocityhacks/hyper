import { useState } from 'react';

const SocialLogins = ({ onSubmit }) => {
  const providers = ['github'];
  const [isRedirecting, setIsRedirecting] = useState(false);
  return (
    <>
      <div className="mb-5 text-sm  text-gray-400 text-center">Or login with</div>
      {providers.map((provider) => {
        return (
          <div className="flex justify-center pb-8 font-inter" key={provider}>
            <button
              type='submit'
              className='flex flex-row justify-center space-x-5 px-4 mx-8 w-full img-provider center border border-black py-2 rounded-xl uppercase font-bold hover:bg-black hover:text-white outline-none'
              onClick={() => {
                setIsRedirecting(true);
                onSubmit(provider);
              }}
              key={provider}
            >
              <img width="25rem" src={`${provider}.png`} />
              <div className="fit-content mt-px">
                {provider.replace(/^\w/, (c) => c.toUpperCase())}
              </div>
            </button>
          </div>
        );
      })}
      {isRedirecting && <div className='redirecting'>Redirecting...</div>}
      <style jsx>{`
        .redirecting {
          color: gray;
          font-size: 12px;
          margin-bottom: 5px;
          padding-left: 2rem;
          padding-bottom: 2rem;
        }
      `}</style>
    </>
  );
};

export default SocialLogins;
