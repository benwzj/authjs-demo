import { auth } from '@/auth';
import Link from 'next/link';
import LogoutForm from '@/components/logout-form';

const Private = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col mt-10 w-screen min-h-full items-center justify-center p-4">
      <div
          className='mb-9 flex items-center justify-center gap-2 leading-none dark:text-white'
        >
          <p className="text-[40px]">This is Private Page!</p>
      </div>
      <div className="flex flex-col rounded-md bg-gray-100 dark:bg-gray-500">
        <div className="rounded-t-md bg-gray-200 p-4 font-bold dark:bg-gray-600">
          Session Content:
        </div>
        <pre className="whitespace-pre-wrap break-all px-4 py-6">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
      <div className="flex mt-10 min-h-full gap-3 items-center justify-center p-4">
        <Link
          className="mt-4 flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          href='/'
        >
          MainPage
        </Link>
        <div className="mt-4 flex h-10 w-full items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
          <LogoutForm />
        </div>
      </div>
    </div>
  );
};

export default Private;