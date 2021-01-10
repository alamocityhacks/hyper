export default function File({
    name,
    href,
}) {
    return (
        <a href={href ?? ``} target="_blank" className="flex flex-row">
            <div className="text-black ">
                <svg className="w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <div className="ml-4 pt-1 font-rubik text-black text-3xl uppercase">
                <div>{name}</div>
            </div>
        </a>
    )
}