import LoginForm from '@/components/login-form';
import { signIn } from '@/auth';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-80 gap-3 items-center justify-center p-4">
        <div
          className='mb-9 flex items-center justify-center gap-2 leading-none dark:text-white'
        >
          <p className="text-[44px]">Lets Sign In</p>
        </div>
        <div className='flex items-center justify-center w-full p-1 rounded-md bg-orange-200 hover:bg-orange-400 dark:text-slate-600'>
          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
          >
            <button type="submit">Signin with Google</button>
          </form>
        </div>
        <div className='flex items-center justify-center w-full p-1 rounded-md bg-green-200 hover:bg-green-400 dark:text-slate-600'>
          <form
            action={async () => {
              "use server"
              await signIn("github")
            }}
          >
            <button type="submit">Signin with GitHub</button>
          </form>
        </div>
        <div className='w-full p-1 rounded-md bg-blue-200'>
          <p className='text-center dark:text-slate-600'>Sign with email and password</p>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

