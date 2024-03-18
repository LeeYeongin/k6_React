import { VscTriangleDown } from "react-icons/vsc";
import { VscTriangleUp } from "react-icons/vsc";

//순위, 영화명, 매출액, 관객수, 증감율
export default function MovieInfo({ rank, title, saleAmt, audi, rankInten }) {
    return (
        <tr className='h-10 w-full text-center'>
            <td className='w-10'>{rank}</td>
            <td>{title}</td>
            <td className='w-20'>{saleAmt}.toLocal</td>
            <td className='w-1/5'>{audi}</td>
            <td className='w-20 flex justify-center items-center'>{rankInten < 0 ? <>{<VscTriangleDown className="text-blue-600 mr-2"/>}{rankInten * -1}</>: rankInten === 0 ? '-' : <>{<VscTriangleUp className="text-red-600 mr-2"/>}{rankInten}</>}</td>
        </tr>
    )
}
