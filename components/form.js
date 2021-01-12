import { useState } from 'react';
import Webauthn from './webauthn';
import { validateEmail } from '../lib/helpers';
import { useToast } from '@magiclabs/ui';

const Form = ({ onEmailSubmit, disabled, onWebauthnSubmit }) => {
  const [email, setEmail] = useState('');
  const { createToast } = useToast();

  const addToast = () => {
    createToast({ message: 'Invalid email', type: 'error', lifespan: 2000 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    !email || !validateEmail(email) ? addToast() : onEmailSubmit(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative z-30 p-8 flex flex-col space-y-4">
        <h3 className='text-2xl font-inter font-bold text-left'>Login</h3>
        <div className='input-wrapper'>
          <input
            className="focus:outline-none bg-transparent border p-4 rounded-xl"
            placeholder='Enter your email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flow-row space-x-8'>
          <div
            className="border border-black py-2 px-4 rounded-xl font-rubik hover:bg-black hover:text-white"
            onClick={handleSubmit}
          >
            <div className="pointer-events-none">Send Magic Link</div>
          </div>
          <Webauthn onSubmit={onWebauthnSubmit} email={email} addToast={addToast} />
        </div>
      </form>
    </>
  );
};

export default Form;
