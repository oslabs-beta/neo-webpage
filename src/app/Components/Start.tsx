import Image from 'next/image';

export default function Start() {
  return (
    <>
      <div className="grid md:grid-cols-2 m-auto gap-20  max-w-[75dvw] text-md md:text-4xl font-medium text-[whitesmoke] text-center leading-relaxed">
        <p className="flex items-center justify-center">
          1. Open an App Router based NextJS Project with the src directory
        </p>
        <Image
          className="rounded-xl"
          src="/gifs/openNextProject.gif"
          height={400}
          width={800}
          alt="GIF of Opening NextJS Project"
        ></Image>
        <p className="flex items-center justify-center">
          2.Install NEO from the VSCode Marketplace
        </p>
        <Image
          className="rounded-xl"
          src="/gifs/downloadExtension.gif"
          height={400}
          width={800}
          alt="GIF of Opening NextJS Project"
        ></Image>
        <p className="flex items-center justify-center">3. Activate NEO</p>
        <Image
          className="rounded-xl"
          src="/gifs/cpActivate.gif"
          height={400}
          width={800}
          alt="GIF of Opening NextJS Project"
        ></Image>
        <p className="flex items-center justify-center">
          4. Start Server and Input Your Localhost
        </p>
        <Image
          className="rounded-xl"
          src="/gifs/inputLink.gif"
          height={400}
          width={800}
          alt="GIF of Opening NextJS Project"
        ></Image>
        <p className="flex items-center justify-center">
          5. Right Click Any Page Folder, Click NEO:Generate Metrics, and Behold
        </p>
        <Image
          className="rounded-xl"
          src="/gifs/GeneratingMetrics.gif"
          height={400}
          width={800}
          alt="GIF of Opening NextJS Project"
        ></Image>
      </div>
    </>
  );
}
