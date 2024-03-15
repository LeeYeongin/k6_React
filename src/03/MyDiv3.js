export default function MyDiv3(probs) {
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
        {`${probs.d1} > ${probs.d2} > ${probs.d3}`}
      </p>
    </div>
  )
}
