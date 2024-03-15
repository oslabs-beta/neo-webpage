import Contact from './Components/Card';
import Start from './Components/Start';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="md:flex md:justify-center items-center m-auto">
        <div className="flex flex-col gap-y-5 justify-center items-center mt-[10dvh]">
          <p className="flex flex-col font-bold mb-4 md:mb-8 text-4xl md:text-5xl text-center animate-fade-down">
            SEO Metrics for developers
            <span
              className="text-sm
              md:text-xl
              font-normal
              mt-2"
            >
              Optimize pre-deployment
            </span>
          </p>
          <Link
            className="text-xs p-2 rounded-xl flex text-center justify-center items-center animate-fade-down animate-delay-[500ms] bg-[rgb(71,139,178)]"
            href={
              'https://marketplace.visualstudio.com/items?itemName=NextEngineOptimization.next-engine-optimization'
            }
          >
            <Image
              src="/code-stable-white.png"
              width={30}
              height={30}
              alt="VSCode Logo with a link"
            ></Image>
            <span className="mx-3">Download NEO</span>
          </Link>
          <Link
            className="text-xs p-2 rounded-xl flex text-center justify-center items-center animate-fade-down animate-delay-[1000ms] bg-[rgb(70,53,121)]"
            href={'https://github.com/nsunku99/neo-extension'}
          >
            <Image
              src="/github-logo.png"
              width={30}
              height={30}
              alt="GitHub Logo with a link"
            ></Image>
            <span className="mx-3">Contribute to NEO</span>
          </Link>
          <div className="md:mt-10 mt-6 w-[80dvw] md:w-[40dvw]">
            <Image
              className="rounded-xl animate-fade-down animate-delay-[1500ms]"
              src="/gifs/GeneratingMetrics.gif"
              height={400}
              width={800}
              alt="GIF of Opening NextJS Project"
            ></Image>
          </div>
        </div>
      </div>
      <div id="start">
        <p className="mt-28 mb-20 text-center font-black text-3xl">
          Get Started
        </p>
        <Start />
      </div>
      <div id="team">
        <p className="mt-28 text-center font-black text-3xl">Our Team</p>
        <Contact />
      </div>
      <Image
        className="fixed -z-10 -right-5 top-1/2 rotate-6 -translate-y-1/2 hidden md:block "
        src="/nextjsicon.png"
        height={500}
        width={500}
        alt="next.js icon"
      ></Image>
      <Image
        className="fixed -z-10 left-1 top-1/2 -rotate-12 -translate-y-1/2 hidden md:block "
        src="/donutchart.png"
        height={400}
        width={400}
        alt="donut icon"
      ></Image>
    </main>
  );
}
