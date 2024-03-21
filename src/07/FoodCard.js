import bank from './img/bank.png'
import market from './img/market.png'
import busan from './img/busan.png'
import { useState } from 'react'

export default function FoodCard({fobj}) {
    // const [tel, setTel] = useState('');
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClick);
    }

    const fimg = fobj['구분'] === '기초푸드뱅크' ? bank :
                    fobj['구분'] === '기초푸드마켓' ? market : busan;

    return (
        <div className='flex justify-center items-center
                        border rounded-md w-11/12 min-h-48
                        my-3
                        '
                onClick={handleClick}>
            <div className='w-1/6 max-w-lg m-1
                            flex justify-center items-center'>
                <img src={fimg} alt='bank' className='w-full inline-flex'/>
            </div>
            <div className='text-gray-700 my-5 mr-5 ml-2 w-5/6'>
                <h1 className='font-bold text-2xl'>
                    {fobj['사업장명']}
                </h1>
                <h2 className='font-bold text-xl'>
                    {fobj['운영주체명']}
                </h2>
                <p className='truncate'>
                    {fobj['사업장 소재지']}
                </p>
                <div className='flex items-center truncate
                                w-full min-h-7 p-1 mt-1 
                                bg-gray-500 text-white text-sm'>
                    {isClick && `Tel: ${fobj['연락처(대표번호)']} Fax: ${fobj['팩스번호']}`}
                </div>
            </div>
        </div>
    )
}
