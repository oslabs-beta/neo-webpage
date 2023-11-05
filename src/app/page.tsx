import Contact from "./Components/Card";
import Start from "./Components/Start";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="m-0 min-h-[90vh] animate-fade-down animate-duration-[3000ms] animate-ease-in-out z-0 font-uk text-7xl">
        Enter Neo
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
