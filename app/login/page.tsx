import LoginForm from '@/components/login-form';

export default function LoginPage() {
  return (
    <div className="fixed inset-0 z-10 h-screen w-screen overflow-y-auto">
      <div className="flex flex-col min-h-full items-center justify-center p-4">
        <div
          className='mb-9 flex items-center justify-center gap-2 leading-none dark:text-white'
        >
          <p className="text-[44px]">Lets Sign In</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

