'use client'
import { onAuthStateChanged } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth } from './lib/firebase';

export default function HomePage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const lookForLoggedInUser= onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User logged in:", currentUser.email)
        setUser(currentUser)
      } else {
        console.log('No user logged in')
        setUser(null)
      }
    })
  })


  return (
    <section className="text-center">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mx-auto"
      />
      <h2 className="text-3xl font-semibold mt-20 text-black font-mono">Hello, I’m Ritha </h2>
      <p className="mt-2 text-gray-600">
        I’m a full-stack developer passionate about building modern web apps.
      </p>

      <div className="mt-6 space-x-4">
        <Link href="/projects" className="bg-purple-700 text-white px-4 py-2 rounded">
          View My Work
        </Link>
        <Link href="/contact" className="border px-4 py-2 bg-purple-700 rounded">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
