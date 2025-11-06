'use client'
import { useRouter } from 'next/navigation';
import './globals.css';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { auth } from './lib/firebase';

// export const metadata = {
//   title: 'My Portfolio',
//   description: 'Built with Next.js App Router',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter ()
  const handleLogout = async () => {
    try{
      await signOut(auth)
      alert('you have logged out successfully')
      router.push('/login')
    } catch(error:any){
      alert(error.message)
    }
  }
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <header className="p-4 bg-purple-300 shadow-md flex justify-between items-center">
          <h1 className="font-bold text-xl">My Portfolio</h1>
          <nav className="space-x-4 font-bold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>

            <button onClick={handleLogout}>
              SignOut
            </button>
          </nav>
        </header>

        <main className="p-8">{children}</main>

        <footer className="p-4 bg-purple-300 text-center text-sm border-t mt-80">
          © 2025 My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
