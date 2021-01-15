import { useUser } from '../lib/hooks'
import Head from './Head'
import Nav from './Nav'
import Footer from './Footer'
import Link from 'next/link';

export default function ChallengesPage() {
    const user = useUser({ redirectTo: '/login' });
    const challenges = require("../lib/challenges.json");
    return (
        <>
            {user && (
                <div>
                    <Head />
                    <Nav />
                    <div className="max-w-xl mx-auto mt-16 rounded-xl bg-black bg-opacity-5 p-8">
                        <h1 className="text-4xl font-bold">Quests</h1>
                        <div className="mt-4 flex flex-col space-y-4">
                            {
                                user.userInfo.roles["SS"].includes("Beginner") ?
                                    challenges[0].map(({number, name, points, difficulty}) => (
                                        <div>{name}</div>
                                    ))
                                : ''
                            }
                            {
                                user.userInfo.roles["SS"].includes("Intermediate") ?
                                    challenges[1].map(({number, name, points, difficulty}) => (
                                        <div>{name}</div>
                                    ))
                                : ''
                            }
                            {
                                user.userInfo.roles["SS"].includes("Advanced") ?
                                    challenges[2].map(({number, name, points, difficulty}) => (
                                        <Link href={user.userInfo.completedChallenges["NS"].includes(number.toString()) ? '' : `/quests/${number}`}>
                                            <div className={`${user.userInfo.completedChallenges["NS"].includes(number.toString()) ? 'bg-green bg-opacity-80' : 'border'} p-5 rounded-xl hover:border-transparent ${user.userInfo.completedChallenges["NS"].includes(number.toString()) ? '' : 'hover:bg-black hover:bg-opacity-10'}`}>
                                                <div className="flex flex-row space-x-2">
                                                    {number}
                                                    <h2 className="ml-2 inline font-bold text-3xl">{name}</h2>
                                                </div>
                                                <p>Points: {points} Difficulty: {difficulty}</p>
                                            </div>
                                        </Link>
                                    ))
                                : ''
                            }
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    )
}