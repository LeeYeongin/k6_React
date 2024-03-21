import fdata from './fooddata.json';
import FoodCard from './FoodCard';
import TailButton from '../UI/TailButton';
import { useState } from 'react';

export default function FoodMain() {
    let c1 = fdata.map(item => item['운영주체 분류']);
    c1 = new Set(c1); // 중복제거
    c1 = [...c1]; // 집합을 배열로 변환(전개 연산자)
    // console.log(c1)

    const [cards, setCards] = useState();

    const handleList = (citem) => {
        // console.log(citem);
        const tmp = fdata.filter(item => item['운영주체 분류'] === citem)
            .map(item =><FoodCard fobj={item} key={item.사업장명} />
        );

        setCards(tmp);
    }

    const c1Bts = c1.map(item =>
        <TailButton caption={item} color={'sky'} 
                    key = {item}
                    handleClick={() => handleList(item)}/>
    );

   
    return (
        <div className='flex flex-col justify-start items-center
                        w-full h-full'>
            <div className='bg-sky-100 w-full p-5
                            flex justify-center items-center'>
                {c1Bts}
            </div>
            <div className="w-full grid grid-cols-1 
                                 md:grid-cols-2 
                                 lg:grid-cols-3 
                                 gap-4
                                 place-items-center">
                {cards}
            </div>
        </div>
    )
}
