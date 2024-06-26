
export default function TailSelect({opDefault, selRef, handleSel, ops}) {
    const opTags = ops.map(item => 
        <option value={item} key={`op${item}`}>
            {item}
        </option>
    );

    return (
            <select id="sel"
                onChange={handleSel}
                ref={selRef}
                className="w-full bg-gray-50 border border-gray-300
                                            text-gray-900 text-sm rounded-lg 
                                            focus:ring-blue-500 focus:border-blue-500 
                                            block p-2.5">
                <option value='' defaultValue>{opDefault}</option>
                {opTags}
            </select>
    )
}
