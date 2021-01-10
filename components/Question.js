import Link from "next/link";

export default function Question({ title, children, href }) {
    return (
        href
            ?
            <Link href={href ?? ``}>
                <a className="bg-black bg-opacity-5 p-5 rounded-xl font-inter hover:bg-opacity-10">
                    <h3 className="mb-1 font-bold text-3xl">{title}</h3>
                    <p className="opacity-100">{children}</p>
                </a>
            </Link>
            :
            <a className="bg-black bg-opacity-5 p-5 rounded-xl font-inter">
                <h3 className="mb-1 font-bold text-3xl">{title}</h3>
                <p className="opacity-100">{children}</p>
            </a>
    )
}