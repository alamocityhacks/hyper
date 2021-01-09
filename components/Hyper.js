export default function Hyper({size, color}) {
    return (
        <div className={`inline hyper text-${size ?? 'base'} text-${color ?? 'black'}`}>Hyper</div>
    )
}