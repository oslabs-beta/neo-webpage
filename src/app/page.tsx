import Contact from "./Components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id='test1' className='p-[200px]'>
        <a href="#test2">Test 1</a>
      </div>
      <div id='test2' className='p-[200px]'>
        <a href="#test3">Test 2</a>
      </div>
      <div id='test3' className='p-[200px]'>
        <a href="#test1">Test 3</a>
      </div>
      <div className='m-[200px]'>
      </div>
      <div id='team'>
        <Contact />
      </div>
    </main>
  )
}
