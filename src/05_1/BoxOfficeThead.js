export default function BoxOfficeThead() {
    return (
        <thead>
            <tr className='h-10
                           text-center 
                           bg-slate-800 text-white'>
                <th className='w-14 px-2'>순위</th>
                <th>영화명</th>
                <th className='w-20'>매출액</th>
                <th className='w-1/5'>관객수</th>
                <th className='w-20'>증감율</th>
            </tr>
        </thead>
    )
}
