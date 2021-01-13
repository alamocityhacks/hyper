import Link from 'next/link';
import { useUser } from '../lib/hooks';

// 0 = logged out, 1 = logged in
const links = [
  { name: 'The Game', href: '/thegame', when: 0 },
  { name: 'Location', href: '/location', when: 0 },
  { name: 'Schedule', href: '/schedule', when: 0 },
  { name: 'Quests', href: '/quests', when: 1 },
  { name: 'Profile', href: '/profile', when: 1 },
  { name: 'Logout', href: '/api/logout', when: 1 },
]

export default function Nav() {
  const user = useUser();
  return (
    <nav className="sticky top-0 lg:px-8 px-6 bg-white bg-opacity-50 border-b backgroundblur z-50 flex flex-wrap items-center lg:py-0 py-2">
      <div className="flex-1 flex justify-between items-center font-cormorant text-xl">
        <Link href="/">
          <a className="font-rubik-mono text-xl">Alamo City Hacks</a>
        </Link>
      </div>
      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg
        className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg></label>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
          <ul className="lg:flex items-center justify-between text-sans text-gray-700 text-sm align-middle pt-4 lg:pt-0">
            {user ? (
              <>
                {links.filter(link => (link.when > 0)).map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href}>
                      <a className="font-inter text-black uppercase text-xl lg:p-4 py-3 px-0 block hover:text-gray-500">
                        {name}
                      </a>
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                {links.filter(link => link.when < 1).map(({ name, href }) => (
                  <li key={name}>
                    <Link href={href}>
                      <a className="font-inter text-black uppercase text-xl lg:p-4 py-3 px-0 block hover:text-gray-500">
                        {name}
                      </a>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
      </div>
    </nav>
  );
};