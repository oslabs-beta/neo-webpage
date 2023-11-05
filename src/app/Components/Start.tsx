import Image from "next/image";

export default function Start() {

  return (
    <>
      <div className="grid grid-cols-2 gap-20 text-2xl text-[whitesmoke] text-center leading-relaxed">
        <p className="flex items-center justify-center">
          Open an App Router based NextJS Project with the src directory
        </p>
        <Image src='/gifs/openNextProject.gif' height={400} width={800} alt='GIF of Opening NextJS Project'></Image>
        <Image src='/gifs/downloadExtension.gif' height={400} width={800} alt='GIF of Opening NextJS Project'></Image>
        <p className="flex items-center justify-center">
          Install NEO from the VSCode Marketplace
        </p>
        <p className="flex items-center justify-center">
          Activate NEO
        </p>
        <Image src='/gifs/cpActivate.gif' height={400} width={800} alt='GIF of Opening NextJS Project'></Image>
        <Image src='/gifs/inputLink.gif' height={400} width={800} alt='GIF of Opening NextJS Project'></Image>
        <p className="flex items-center justify-center">
          Start Server and Input Your Localhost
        </p>
        <p className="flex items-center justify-center">
          Right Click Any Page Folder, Click NEO:Generate Metrics, and Behold
        </p>
        <Image src='/gifs/GeneratingMetrics.gif' height={400} width={800} alt='GIF of Opening NextJS Project'></Image>
      </div>
    </>
  )

}