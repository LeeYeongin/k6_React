export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className='h-4/6 w-4/5
                    flex justify-center items-start
                    bg-cyan-500
                    text-cyan-50'>
      <p className='w-4/5
                    flex justify-start
                    font-bold text-2xl
                    my-5
                    '>
        {`${d1} > ${d2} > ${d3}`}
      </p>
    </div>
  )
}
