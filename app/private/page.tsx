import Image from 'next/image';
import { auth } from '@/auth';
import Link from 'next/link';
import LogoutForm from '@/components/logout-form';

const Private = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col gap-3 mt-10 min-h-full items-center justify-center lg:w-[600px]">
      <div
          className='mb-9 flex items-center justify-center gap-2 leading-none dark:text-white'
        >
          <p className="text-[40px]">Private Page!</p>
      </div>
      <Image
        src="/Science_plasticrain.webp"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div className="flex flex-col w-full rounded-md bg-gray-100 dark:bg-gray-500">
        <div className="rounded-t-md bg-gray-200 p-4 font-bold dark:bg-gray-600">
          Your Session
        </div>
        <pre className="whitespace-pre-wrap break-all px-4 py-6">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
      <div className="flex mt-10 w-full min-h-full gap-3 items-center justify-center p-4">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href='/'
        >
          Back MainPage
        </Link>
        <div className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
          <LogoutForm />
        </div>
      </div>
    </div>
  );
};

export default Private;