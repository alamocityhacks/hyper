export default function Question({title, children}) {
    return (
        <div className="bg-black bg-opacity-5 p-5 rounded-xl font-inter">
            <h3 className="mb-1 font-bold text-3xl">{title}</h3>
            <p className="text-opacity-=">{children}</p>
        </div>
    )
}