import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-black/60 absolute top-0 z-10">
      <nav className="container mx-auto px-8 py-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="">
          <img src="/images/bcc-typelogo.png" alt="Logo" className="h-6 md:h-8 w-auto text-white" />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-white md:hidden"
        >
          {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 w-full md:w-auto mt-2 md:mt-0`}
        >
          <li>
            <Link
              href="/about"
              className={`${
                router.pathname === '/about' ? 'text-blue-600' : ''
              } block md:inline-block text-xl text-white font-medium hover:text-gray-600`}
            >
              Music
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`${
                router.pathname === '/services' ? 'text-blue-600' : ''
              } block md:inline-block text-xl text-white font-medium hover:text-gray-600`}
            >
              Shows
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                router.pathname === '/contact' ? 'text-blue-600' : ''
              } block md:inline-block text-xl text-white font-medium hover:text-gray-600`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;