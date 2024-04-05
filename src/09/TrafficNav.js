import TailButton from '../UI/TailButton'


export default function TrafficNav({ title, category, sel, setSel }) {
    const handleBtClick = (item) => {
        setSel(item);
    };

    const bts = category.map(item => 
        <TailButton caption={item} color={item === sel ? 'red' : 'sky'} 
                    handleClick={() => handleBtClick(item)}
                    key={item}/>
    );

    // console.log(category);
    // console.log(bts);

    return (
        <div className='w-11/12 flex justify-between items-center
                        mt-5'>
            <div>
                <h1 className='text-xl font-bold'>
                    교통사고 {title}
                </h1>
            </div>
            <div className='flex flex-row'>
                {bts}
            </div>
        </div>
    )
}
