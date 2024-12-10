import Link from 'next/link';
import { auth } from '@/auth';
import LogoutForm from '@/components/logout-form';

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-3 pb-20 gap-16 lg:w-[600px]">
      <div className="flex flex-col w-full gap-8 row-start-2 items-center sm:items-start">
        <div
          className='mb-9 flex flex-col w-full items-center justify-center gap-4 leading-none dark:text-white'
        >
          <p className="text-[40px]">Main Page!</p>
          <div className="flex flex-col w-full rounded-md bg-gray-100 dark:bg-gray-500">
            <div className="rounded-t-md bg-gray-200 p-4 font-bold dark:bg-gray-600">
              Session information
            </div>
            <pre className="whitespace-pre-wrap break-all px-4 py-6">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>

        <div className="flex gap-4 w-full items-center justify-center flex-col sm:flex-row">
          <div className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
          {
            session ? <LogoutForm /> : <Link href="/login">Login</Link>
          }
          </div>
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/private"
          >
            Visit PrivatePage
          </Link>
        </div>
      </div>

    </div>
  );
}
