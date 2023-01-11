import Image  from "next/image";
import Smythe from "../constants/Smythe.png"
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center  justify-between">
              <h1 className="px-1">YOHANSEH</h1>
              <Image 
                  src={Smythe}
                  className="rounded-full"
                  height={50}
                  width={50}
                  alt="logo"
              />
          </Link>
        </div>
        <div>
          <Link 
            href="https://moonboiuniverse.com"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#FF0000] flex items-center rounded-full"
          >
            Sign up for Moon Boi Universe BETA
          </Link>
        </div>
    </header>
  )
}

export default Header