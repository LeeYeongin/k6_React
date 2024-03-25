export default function TailInput({type, ref, ph}) {
    return (
        <input type={type}
                ref={ref}
                className="bg-gray-50 border border-gray-300
                            text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-
                            block w-full p-2.5"
                            placeholder={ph} 
        />
    )
}
