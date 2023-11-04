import Image from "next/image";

export default function NavBar() {

  return (
    <nav className="mx-auto my-5 w-[60vw]">
      <div className="flex flex-wrap items-center justify-between gap-x-10">
          <Image className='my-5' src="/Neo-White.png" width={220} height={220} priority={true} alt="Neo Logo" />
          <div className="flex items-center justify-between gap-x-8 my-auto text-2xl font-light text-white">
            <a href="#test1">Test 1</a>
            <a href="#test2">Test 2</a>
            <a href="#test3">Test 3</a>
          </div>
        </div>
    </nav>

  )

}