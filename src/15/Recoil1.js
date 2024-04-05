import Recoil2 from "./Recoil2";
import { useRecoilValue } from "recoil";
import { rcnt } from "./RecoilAtom";

export default function Recoil1() {
    const cnt = useRecoilValue(rcnt);
    return (
        <div className='w-full h-full flex flex-col
                    justify-center items-center
                    text-2xl font-bold'>
            Recoil1 : {cnt}
            <Recoil2/>
        </div>
    )
}
