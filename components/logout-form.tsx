'use client';

import { logout } from '@/lib/actions';

const LogoutForm = () => {

  return (
    <form action={logout} className='flex flex-col space-y-2 w-full max-w-sm'>
      <button
        className="mt-4 flex h-10 w-full items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
      >
        Sign Out
      </button>
    </form>
  );
};

export default LogoutForm;