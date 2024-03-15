/* Contents of footer displayed at all routes */

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex items-center my-7 justify-around   h-[15vh] text-sm">
      <div>
        <Image src="/Neo-White.png" width={169} height={169} alt="Neo Logo" />
      </div>
      <div className="font-thin">© 2023 NEO, All rights reserved.</div>
      <div className="flex flex-col justify-around items-center font-thin">
        <p>NEO is an open-source project.</p>
        <p>Help us Improve!</p>
        <Link href="https://github.com/nsunku99/neo-extension">
          <Image
            src="/github-logo.png"
            width={30}
            height={30}
            alt="GitHub Logo with a link"
          />
        </Link>
      </div>
    </footer>
  );
}
