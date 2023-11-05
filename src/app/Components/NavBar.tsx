import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

  return (
    <nav className="p-5 sticky top-0 z-9999 bg-[rgba(29,15,43,0.75)] border-b-2 border-black font-uk">
      <div className="flex flex-wrap items-center justify-between gap-x-10">
        <div className="flex items-center justify-around gap-x-8">
          <Image className='mx-5' src="/Neo-White.png" width={125} height={125} priority={true} alt="Neo Logo" />
          <a className="text-lg" href="#team">Team</a>
          <a className="text-lg" href="#start">Start</a>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <Link href={'https://marketplace.visualstudio.com/items?itemName=NextEngineOptimization.next-engine-optimization'}>
            <Image src="/code-stable-white.png" width={30} height={30} alt="VSCode Logo with a link"></Image>
          </Link>
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