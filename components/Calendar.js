export default function Calendar({month, day}) {
    return (
        <div className="my-4 rounded-3xl font-inter bg-white font-black w-40 p-2">
            <div className="uppercase text-center text-blue text-xl md:text-lg">{month}</div>
            <div className="text-7xl h-24 bg-blue rounded-b-2xl text-center leading-tight">
                {day}
            </div>
        </div>
    )
}