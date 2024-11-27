export { auth as middleware } from "@/auth" // add this code to keep the session alive, this will update the session expiry every time its called.

// export function middleware() {
  
// }

export const config = {
  matcher: '/private/:path*',
}