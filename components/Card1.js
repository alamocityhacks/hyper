export default function Card({
    icon,
    color,
    heading,
    children
}) {
    const description = children;
    return (
        <div>
            
        </div>
    )
}

renderIcon(icon) {
    switch (icon) {
        case 'lightbulb':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60" stroke="#E94957">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
            break;
        case 'sparkles':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60" stroke="#FF7E47">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
            break;
        case 'cake':
            return (
                
            )
            break;
        case 'gift':
            return (
                
            )
            break;
        case 'map':
            return (
                
            )
            break;
        case 'puzzle':
            return (
                
            )
            break;
        case 'flag':
            return (
                
            )
            break;
        case 'pencil':
            return (
                
            )
            break;
        case 'calendar':
            return (
                
            )
            break;
        case 'pin':
            return (
                
            )
            break;
        case 'star':
            return (
                
            )
            break;
        default:
            break;
    }
}