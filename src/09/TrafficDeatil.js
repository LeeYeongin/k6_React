export default function TrafficDeatil({info}) {
  return (
    <div className="w-11/12 grid grid-cols-2
                                 sm:grid-cols-3
                                 md:grid-cols-5 
                                 gap-4">
        {info}
      </div>
  )
}
