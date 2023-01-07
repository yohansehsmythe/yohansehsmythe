import Link from "next/link"; 
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#FF0000] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#FF0000] mr-2" />
                Back to YohansehSmythe.com
            </Link>
            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#FF0000]">
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