import Link from 'next/link'

export default function TextLink({ href, size, extraclasses, children }) {
    return (
        <Link href={href}>
            <a className={`font-inter font-bold text-${size ?? '2xl'} underline link ${extraclasses ?? ``}`}>
                {children}
                <svg className="inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </a>
        </Link>
    )
}