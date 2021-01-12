import jwt from 'jsonwebtoken';
import { setTokenCookie } from '../../lib/cookies';
import { getUser } from '../../lib/dynamodb';

export default async function user(req, res) {
  try {
    if (!req.cookies.token) return res.json({ user: null });
    let token = req.cookies.token;
    let { email, issuer, publicAddress } = jwt.verify(token, process.env.JWT_SECRET);
    const userInfo = await getUser(email);
    let newToken = jwt.sign(
      {
        email,
        issuer,
        publicAddress,
        userInfo,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // one week
      },
      process.env.JWT_SECRET
    );
    setTokenCookie(res, newToken);
    res.status(200).json({ user });
  } catch (error) {
    res.status(200).json({ user: null });
  }
}
