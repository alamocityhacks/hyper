import { useEffect } from "react"

export default function Hero({ color, title }) {
    useEffect(() => {
        const colors = {
            red: '#E94957',
            orange: '#FF7E47',
            yellow: '#FFFD85',
            green: '#10B981',
            blue: '#69709F',
            turquoise: '#2CDAC5',
        }
        document.querySelector('#hero').style.backgroundColor = colors[color];
    })
    return (
        <div id="hero" className={`py-20 bg-${color ?? `black`}`}>
            <h1 className={`uppercase font-rubik font-bold text-7xl ${color === 'yellow' ? 'text-black' : 'text-white'}`}>{title}</h1>
        </div>
    )
}