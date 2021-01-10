import Link from 'next/link'

export default function TextLink({ href, extraclasses, children }) {
    const color = ['red', 'orange', 'turquoise'][Math.floor(Math.random() * 3)];
    return (
        <Link href={href}>
            <a className={`font-inter font-bold text-2xl underline link hover:text-${color} ${extraclasses}`}>
                {children}
                <svg className="inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </Link>
    )
}