import Image from 'next/image';

export default function About() {
  return (
    <div className="text-center mx-[10dvw]">
      <p className="text-lg font-semibold mb-4">
        What is Next Engine Optimization?
      </p>
      <div className="block md:flex justify-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            className="rounded-xl"
            src="/gifs/downloadExtension.gif"
            alt="Activating Next Engine Optimization in the command palette"
            height={400}
            width={600}
          ></Image>
        </div>
        <p className="flex items-center p-6 border rounded-md md:w-[33dvw]">
          Next Engine Optimization (NEO) is an Open Source VSCode extension
          meant for Next.js developers to retrieve technical SEO metrics such as
          First Contentful Paint, Largest Contentful Paint, and Hydration time.
          The idea was brought to life when our team identified that a lot of
          tools meant for retrieving SEO metrics was usually only meant for
          deployed applications, and we wanted to allow developers to optimize
          their SEO during development. Leveraging SSR and NEO together provides
          the abilty to launch websites fully optimized for any search engine.
        </p>
      </div>
    </div>
  );
}
