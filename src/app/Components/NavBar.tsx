import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

  return (
    <nav className="p-5">
      <div className="flex flex-wrap items-center justify-between gap-x-10">
        <div className="flex items-center justify-around gap-x-8">
          <Image className='mx-5' src="/Neo-White.png" width={125} height={125} priority={true} alt="Neo Logo" />
          <a className="text-xl" href="#team">Team</a>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <a href="#test1">Test 1</a>
          <a href="#test2">Test 2</a>
          <Link href={'https://github.com/nsunku99/neo-extension'}>
            <Image src="/github-logo.png" width={30} height={30} alt="GitHub Logo with a link"></Image>
          </Link>
          <Link href={'https://www.linkedin.com/company/next-metrics/'}>
            <Image className="rounded" src="/linkedin-logo-white.png" width={30} height={30} alt="LinkedIn Logo with a link"></Image>
          </Link>
        </div>
      </div>
    </nav>

  )

}