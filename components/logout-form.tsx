'use client';

import { logout } from '@/lib/actions';

const LogoutForm = () => {

  return (
    <form action={logout}>
      <button>
        Sign Out
      </button>
    </form>
  );
};

export default LogoutForm;