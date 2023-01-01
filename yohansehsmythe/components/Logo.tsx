import Image from "next/image";
import Smythe from "../constants/Smythe.png"

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image 
        src={Smythe} 
        className="rounded-full object-cover"
        height={50}
        width={50}
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}
export default Logo