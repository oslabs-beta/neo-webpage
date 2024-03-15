'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="border m-2 p-4 bg-[rgba(31,34,59,0.97)] z-10 rounded-md sticky top-2">
      <div className="flex justify-between md:mx-[10dvw]">
        <Image
          className="ml-2 mb-2"
          src="/Neo-White.png"
          width={125}
          height={125}
          priority={true}
          alt="Next Engine Optimization Logo"
        />
        <div className="hover:cursor-pointer" onClick={() => setOpen(!open)}>
          <Image
            className="mr-2 mb-2"
            src="menu.svg"
            width={60}
            height={60}
            priority={true}
            alt="Next Engine Optimization Navigation Menu"
          />
          {open && (
            <div
              className={
                open
                  ? 'absolute md:right-36 lg:right-48 right-10 border rounded-sm bg-[rgba(31,34,59,1)] animade-fade-down'
                  : 'absolute md:right-36 lg:right-48 right-10 border rounded-sm bg-[rgba(31,34,59,1)] animade-fade-down'
              }
            >
              <div className="flex flex-col">
                <a
                  className="text-center text-lg p-4 border-b hover:bg-gray-700"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="text-center text-lg p-4 border-b hover:bg-gray-700"
                  href="#start"
                >
                  Start
                </a>
                <a
                  className="text-center text-lg p-4 border-b hover:bg-gray-700"
                  href="#team"
                >
                  Team
                </a>
                <p className="flex">
                  <Link
                    className="flex p-4 border-b hover:bg-gray-700"
                    href={
                      'https://marketplace.visualstudio.com/items?itemName=NextEngineOptimization.next-engine-optimization'
                    }
                  >
                    <Image
                      className="mr-2"
                      src="/code-stable-white.png"
                      width={30}
                      height={30}
                      alt="VSCode Logo with a link to Next Engine Optimization's download in the VSCode marketplace"
                    ></Image>
                    vsCode
                  </Link>
                </p>

                <p className="flex">
                  <Link
                    className="flex p-4 border-b hover:bg-gray-700"
                    href={'https://github.com/nsunku99/neo-extension'}
                  >
                    <Image
                      className="mr-2"
                      src="/github-logo.png"
                      width={30}
                      height={30}
                      alt="GitHub Logo with a link to Next Engine Optimization's Open Source GitHub Repository"
                    ></Image>
                    GitHub
                  </Link>
                </p>

                <p className="flex">
                  <Link
                    className="flex p-4 border-b hover:bg-gray-700"
                    href={'https://www.linkedin.com/company/next-metrics/'}
                  >
                    <Image
                      className="rounded mr-2"
                      src="/linkedin-logo-white.png"
                      width={30}
                      height={30}
                      alt="LinkedIn Logo with a link to Next Engine Optimization's LinkedIn Page"
                    ></Image>
                    LinkedIn
                  </Link>
                </p>

                <p className="flex">
                  <Link
                    className="flex p-4 hover:bg-gray-700"
                    href={
                      'https://medium.com/@nguyentomt/neo-next-js-technical-seo-metrics-made-easier-85fc3a333a25'
                    }
                  >
                    <Image
                      className="rounded mr-2"
                      src="/Medium-Logo.png"
                      width={30}
                      height={30}
                      alt="Medium Logo with a link to an article about Next Engine Optimization"
                    ></Image>
                    Medium
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
