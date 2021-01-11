export default function Hero({ color, title }) {
    return (
        <div className={`py-20 pl-4 md:pl-24 bg-${color ?? `blue`}`}>
            <h1 className={`uppercase font-rubik font-bold text-7xl ${color === 'yellow' ? 'text-black' : 'text-white'}`}>{title}</h1>
        </div>
    )
}