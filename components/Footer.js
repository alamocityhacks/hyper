import Link from "next/link";

const links = [
    { name: 'Press Kit', href: '/press', },
    { name: 'Sponsor Deck', href: '/SponsorshipDeck.pdf', },
    { name: 'Donate', href: 'https://bank.hackclub.com/donations/start/alamocityhacks', },
    { name: 'Contact', href: 'mailto:team@alamocityhacks.com', },
]

export default function Footer() {
    return (
        <div id="footer" className="mt-32 text-black font-inter font-semibold uppercase text-center">
            <div id="footernav" className="mb-10 flex flex-col md:flex-row space-y-6 md:space-x-12 md:space-y-0 md:w-screen text-xl justify-center items-center">
                {links.map(({name, href}) => (
                    <Link href={href ?? ``}>
                        <a className="">{name ?? ``}</a>
                    </Link>
                ))}
            </div>
            <h1 className="opacity-60 px-4 md:px-0 text-2xl md:text-3xl mb-4">copyright alamo city hacks {new Date().getFullYear()} all rights reserved</h1>
        </div>
    )
}