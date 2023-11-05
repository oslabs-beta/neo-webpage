import Contact from "./Components/Card";
import Start from "./Components/Start";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="flex items-center flex-col m-0 min-h-[70vh] animate-fade-down animate-duration-[3000ms] animate-ease-in-out z-0 font-uk text-7xl">
        Enter Neo
        <Link 
          className="text-base mt-16 rounded-xl py-3 pl-3 flex text-center justify-center items-center bg-[rgb(71,139,178)]"
          href={'https://marketplace.visualstudio.com/items?itemName=NextEngineOptimization.next-engine-optimization'}>
          <Image src="/code-stable-white.png" width={30} height={30} alt="VSCode Logo with a link"></Image>
          <span className="mx-3">Download NEO</span>
        </Link>
        <Link 
          className="text-base my-5 rounded-xl py-3 pl-3 flex text-center justify-center items-center bg-[rgb(70,53,121)]"
          href={'https://github.com/nsunku99/neo-extension'}>
          <Image src="/github-logo.png" width={30} height={30} alt="GitHub Logo with a link"></Image>
          <span className="mx-3">Contribute to NEO</span>
        </Link>
      </p>
      <div id='start'>
        <p className="mt-28 mb-20 text-center font-uk text-3xl">
          Get Started
        </p>
        <Start />
      </div>
      <div id='team'>
        <p className="mt-28 text-center font-uk text-3xl">
          Our Team
        </p>
        <Contact />
      </div>
    </main>
  )
}
