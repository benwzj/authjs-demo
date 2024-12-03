import LoginForm from '@/components/login-form';
import { signIn } from '@/auth';

export default function LoginPage() {
  return (

      <div className="flex flex-col min-h-full items-center justify-center p-4">
        <div
          className='mb-9  flex items-center justify-center gap-2 leading-none dark:text-white'
        >
          <p className="text-[44px]">Lets Sign In</p>
        </div>
        <div className='flex flex-co border border-cyan-500'>
          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
          >
            <button type="submit">Signin with Google</button>
          </form>
        </div>
        <div className='flex flex-col'>
          <p>Sign with email:</p>
          <LoginForm />
        </div>
        
      </div>

  )
}

