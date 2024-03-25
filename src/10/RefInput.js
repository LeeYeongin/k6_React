import React from 'react'
import TailInput from '../UI/TailInput'
import TailButton from '../UI/TailButton'
import { useState, useEffect, useRef } from 'react'

export default function RefInput() {
    const inputRef = useRef();
    const [bts, setBts] = useState([]);
    const [tags, setTags] = useState([]);

    const handleAdd = () => {
        if (inputRef.current.value === '') {
            alert('값을 입력하세요');
            inputRef.current.focus();
            return;
        }

        setBts([inputRef.current.value, ...bts])    // 앞에 새로운 값 추가
        // setBts([...bts, inputRef.current.value]) // 뒤에 새로운 값 추가
        console.log(inputRef.current.value);

    }

    const handleRemove = () => {
        // 입력한 값과 일치하는 값만 삭제
        // let tm = bts.filter(item => item != inputRef.current.value);
        // setBts(tm);

        // 전체를 삭제
        setBts([]);
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    useEffect(() => {
        inputRef.current.value = ''; // bts에 추가되면 input value 초기화
        inputRef.current.focus();    // 해당 input박스에 focus

        let tm = bts.map((item, idx) =>
            <TailButton caption={item}
                key={`bt${idx}`}
                color="orange" />
        );

        setTags(tm);

    }, [bts]);

    return (
        <div className='w-11/12 flex flex-col 
                        justify-center items-center'>
            <div className='w-full flex
                            justify-center items-center'>
                <div className='w-1/2 flex justify-center items-center'>
                    <TailInput type="text" 
                                inputRef={inputRef}
                                ph="값 입력" />
                    {/* <input type="text"
                        // input의 ref 속성으로 연결
                        ref={inputRef}
                        className="bg-gray-50 border border-gray-300
                            text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-
                            block w-full p-2.5"
                        placeholder="값 입력"
                    /> */}
                </div>
                <div className='flex justify-center items-center'>
                    <TailButton caption="등록"
                        color="blue"
                        handleClick={handleAdd} />
                    <TailButton caption="취소"
                        color="blue"
                        handleClick={handleRemove} />
                </div>
            </div>
            <div className='w-full border p-5'>
                {tags}
            </div>
        </div>
    )
}
