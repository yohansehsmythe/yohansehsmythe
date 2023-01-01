import Link from "next/link"; 
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#f7ab0a] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#f7AB0A] mr-2" />
                Back to YohansehSmythe.com
            </Link>
            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
                <h1 className="font-bold text-white">
                    If you want things to change you must change first
                </h1>
            </div>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar