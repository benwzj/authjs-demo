import { auth } from '@/auth';
import { logout } from '@/lib/actions';

const Private = async () => {
  const session = await auth();

  return (
    <form
      action={logout}
      className='h-screen w-screen flex flex-col justify-center items-center gap-10'
    >
      <div>
        <p className='text-white'>{session?.user?.name}</p>
        <p className='text-white'>{session?.user?.email}</p>
      </div>
      <button type='submit' className='w-40'>
        logout
      </button>
    </form>
  );
};

export default Private;