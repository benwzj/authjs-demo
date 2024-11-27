'use client';

import { login } from '@/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';


const LoginForm = () => {
  const [formState, dispatch] = useFormState(login, undefined);

  return (
    <form action={dispatch} className='space-y-4 w-full max-w-sm'>
      <input 
        required 
        name='email' 
        placeholder='email' 
      />
      <input
        required
        name='password'
        type='password'
        placeholder='password'
      />
      <LoginButton />
      <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
        {formState && (
          <>
            <p className="text-sm text-red-500">{formState}</p>
          </>
        )}
      </div>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-4 flex h-10 w-full items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      aria-disabled={pending}
    >
      Log in
    </button>
  );
}

export default LoginForm;