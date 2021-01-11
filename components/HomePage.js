import Calendar from './Calendar'
import Head from './Head'
import Nav from './Nav'
import Hyper from './Hyper'
import Card from './Card'
import TextLink from './Link'
import Question from './Question'
import { motion } from 'framer-motion'
import File from './File'
import Footer from './Footer'

export default function HomePage() {
    return (
        <div>
            <Head />
            <Nav />
            <div id="hero" className="bg-gradient-to-b from-blue to-blue-dark h-full sm:min-h-screen xl:min-h-0 xl:h-full xl:pb-12 pt-6 pb-8 md:py-12 text-white font-rubik">
                {/*<div className="absolute z-0 w-screen h-screen left-3/4 flex flex-col space-y-16 md:space-y-10">
                    <motion.svg
                        className="w-16 h-16" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
                        animate={{
                            x: [-40, 40],
                            y: [0, 15],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <circle cx="100" cy="100" r="100" fill="#C4C4C4" />
                    </motion.svg>
                    <motion.svg
                        className="w-16 h-16" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg"
                        animate={{
                            x: [-20, 40],
                            y: [0, 15],
                        }}
                        transition={{
                            duration: 3,
                            delay: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <rect width="170" height="170" rx="15" fill="#C4C4C4"/>
                    </motion.svg>
                    <motion.svg
                        className="w-16 h-16" viewBox="0 0 178 170" fill="none" xmlns="http://www.w3.org/2000/svg"
                        animate={{
                            x: [-40, 40],
                            y: [0, 15],
                        }}
                        transition={{
                            duration: 3,
                            delay: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <path d="M81.3915 6.41641C83.7864 -0.954075 94.2136 -0.954073 96.6085 6.41641L111.9 53.4803C112.971 56.7765 116.043 59.0081 119.509 59.0081H168.995C176.745 59.0081 179.967 68.9251 173.697 73.4803L133.662 102.567C130.858 104.604 129.685 108.215 130.756 111.512L146.048 158.575C148.443 165.946 140.007 172.075 133.737 167.52L93.7023 138.433C90.8984 136.396 87.1016 136.396 84.2977 138.433L44.2628 167.52C37.9931 172.075 29.5573 165.946 31.9521 158.575L47.244 111.512C48.315 108.215 47.1418 104.604 44.3379 102.567L4.30297 73.4803C-1.96674 68.9251 1.25546 59.0081 9.00525 59.0081H58.4911C61.9569 59.0081 65.0286 56.7765 66.0996 53.4803L81.3915 6.41641Z" fill="#C4C4C4"/>
                    </motion.svg>
                    <motion.svg
                        className="w-16 h-16" viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg"
                        animate={{
                            x: [-40, 40],
                            y: [0, 15],
                        }}
                        transition={{
                            duration: 3,
                            delay: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <path d="M71.3397 5C75.1887 -1.66666 84.8112 -1.66667 88.6603 5L157.942 125C161.791 131.667 156.98 140 149.282 140H10.718C3.01997 140 -1.79129 131.667 2.05771 125L71.3397 5Z" fill="#C4C4C4"/>
                    </motion.svg>
                </div>*/}
                <div className="z-10 relative">
                    <div className="uppercase opacity-60 text-2xl md:text-4xl">Presents</div>
                    <h1 className="uppercase hyper text-6xl md:text-8xl">Hyper</h1>
                    <h2 className="uppercase text-4xl md:text-5xl w-3/5">A coding competition for high schoolers</h2>
                    <div className="mt-4 flex flex-col sm:flex-row sm:space-x-10">
                        <Calendar month="September" day="25" />
                        <div className="font-inter text-2xl pt-4 sm:pt-6">
                            <div className="font-bold mb-2">Noon to noon</div>
                            <div className="mb-4">Trinity University, SATX</div>
                            <a href="" className="mt-8 px-4 py-2 text-xl rounded-xl border border-white hover:bg-white hover:text-black">
                                    Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <main className="mt-10 bg-white">
                <section id="welcome">
                    <h1>Welcome to <Hyper size="5xl" color="blue" /></h1>
                    <p>
                        Hyper is a 24-hour event where 350 high schoolers will come from San Antonio and Austin to compete in South Texas’ first coding competition. We’ll provide workshops, mentorship, free meals and drinks, and places to sleep. You’ll compete in a team of 4 and solve quests. Get points, beat others. The next morning, we’ll find out who wins.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Card icon="lightbulb" color="red" heading="Made for beginners">
                            Whether you're a complete beginner or an advanced Javascript expert, we'll hold multiple intro workshops and have mentors to help you through the night!
                        </Card>
                        <Card icon="sparkles" color="orange" heading="Lots of fun">
                            We don't just code all night. We'll have dance parties, Jackbox party games, and you'll be able to meet a ton of new friends!
                        </Card>
                        <Card icon="cake" color="turquoise" heading="Yummy food">
                            You'll be served Freebirds dinner, midnight cookies, bagel breakfast, and continuous snacks courtesy of our sponsors throughout the competition. We have options for dietary-restricted people as well.
                        </Card>
                        <Card icon="gift" color="blue" heading="Awesome prizes">
                            Yee-haw over the Airpods Pros, Oculus Quest 2s, MX Masters 3s, and Mavic Minis. You can also win a Foo.bar invite which gives you the chance to get hired at Google.
                        </Card>
                    </div>
                </section>
                <section id="whatishyper">
                    <h1><Hyper size="5xl" color="black" /> is <span className="font-black text-blue">NOT</span> a hackathon</h1>
                    <p>
                        Hyper is a challenge. Hyper was not made for the experts and was not made for the beginners. It was made for all. You’ll be tasked with a number of quests each representing this year’s theme: space. Solve them and the leading team takes control of the hill. Every 30 minutes you keep the lead, you’ll get a point.
                    </p>
                    <div className="mt-4 mb-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Card icon="map" color="red" heading="Beginners" extraclasses="leading-loose">
                            30 quests.
                            <br />
                            <div className="leading-normal">
                                Not king-of-the-hill (KOTH) style. Every quest gets you 1 point. Team with the highest points the next day wins.
                            </div>
                        </Card>
                        <Card icon="puzzle" color="orange" heading="Intermediates" extraclasses="leading-loose">
                            20 quests.
                            <br />
                            <div className="leading-normal">
                                KOTH style. Every quest gets you to the next, the leading team gets 1 point every half-hour.
                            </div>
                        </Card>
                        <Card icon="flag" color="turquoise" heading="Advanced" extraclasses="leading-loose">
                            5 quests.
                            <br />
                            <div className="leading-normal">
                                KOTH style. Every 1 hour in control of the hill, you'll win a point. These quests are harder than they look.
                            </div>
                        </Card>
                        <Card icon="pencil" color="blue" heading="Workshops">
                            We'll have workshops on each quest once 3/4 of the teams have solved them. Then they'll be invalidated with a reduced point value.*
                            <br />
                            <span className="text-sm">*Beginner quests won't be invalidated however.</span>
                        </Card>
                    </div>
                    <TextLink href="/thegame">
                        Still have questions? Learn more about the game
                    </TextLink>
                </section>
                <section id="faq">
                    <h1>FAQ</h1>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Question title="Is it free?">
                            It is 100% free. Registration, attendance, meals, drinks, swag, and workshops included. We'll even reimburse some of you for travel costs (with receipts).
                        </Question>
                        <Question title="Is there an age limit?">
                            You must be entering high school or just leaving high school, so that’s grades 8-12. Email us if you don’t fit those age  limits, and we’ll see what we can do!
                        </Question>
                        <Question title="Can beginners join?">
                            Don’t worry, you can still win AirPods Pros for your team! We expect beginners so we got a team of mentors and created a series of workshops to get you started!
                        </Question>
                        <Question title="Are there any pre-requisites?" href="/languages">
                            There are no pre-requisites! If you already know a coding language, click on this box, and we’ll show you a list of coding languages we know can solve these challenges.
                        </Question>
                        <Question title="How do teams work?">
                            To make it fair, we’ll randomly generate teams with people at equal coding levels. Since this happens at the competition, you’re guaranteed a partner.
                        </Question>
                        <Question title="Can I be by myself?">
                            Currently looking in the rulebook... yep! You can totally be by yourself, but we’ve found when testing, it’s difficult to do these quests by yourself within the time.
                        </Question>
                        <Question title="What should I bring?">
                            Your computer, student ID, chargers, your thinking brain (trust us, you won’t be able to do quests without them), toiletries, and a sleeping bag (power naps, not a sleepover).
                        </Question>
                        <Question title="Where can I practice?">
                            That’s a good question! First, I would join the <a href="https://hackclub.com/slack"><span className="text-red font-bold">Hack Club</span></a> Slack. It’s a place for high schoolers where they can get support on coding, design and other cool stuff.<br />We have some <a href="/#docs" className="text-red font-bold underline">practice problems</a> too!
                        </Question>
                        <Question title="Sleeping?">
                            Ya we were a bit vague. Typically at hackathons like SoHacks, you’d be sleeping on the couches, beanbags, or  benches. If you bring a sleeping bag, you can also sleep on the floor. The second floor of the building will be dark after 2am.
                        </Question>
                        <Question title="Do I drop my student off?">
                            Yep! Come at or before registration time, and drop your kid off. We’ll give you our number day-of in case you need to contact us immediately. You’ll be able to stay until quests start. That’s 1pm.
                        </Question>
                        <Question title="Safety?">
                            We’ve got campus police surrounding the entire building day-of and all night, and the building is locked from both sides. We can’t exit, and they can’t enter (unless they’re police of course).
                        </Question>
                        <Question title="What about COVID Risk?">
                            If the pandemic is not over by September, then we’ll move on over to a different date and let y’all know. We’ll start only when the CDC tells us it’s safe to have this event.
                        </Question>
                    </div>
                </section>
                <section id="details">
                    <h1>Details</h1>
                    <div className="mt-4 mb-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Card type={2} icon="calendar" color="red" heading="Schedule">
                            Saturday 12pm - Sunday 12pm. Doors open at 11am and hacking starts at 1pm. Lunch served on arrival. Quests last 20 hours and Jackbox game time at 9pm.
                            <br /><br />
                            <TextLink href="/schedule" size={'lg'} extraclasses="text-red">
                                See the full schedule
                            </TextLink>
                        </Card>
                        <Card type={2} icon="pin" color="turquoise" heading="Location">
                            <span className="font-bold">Trinity University</span><br />
                            Center for the Sciences and Innovation<br />
                            E Hollywood Ave<br />
                            San Antonio, TX 78212
                            <br /><br />
                            <TextLink href="/venue" size={'lg'} extraclasses="text-turquoise text-base">
                                Check out the venue
                            </TextLink>
                        </Card>
                        <Card type={2} icon="star" color="orange" heading="Perks for y'all">
                            Every attendee gets <span className="font-bold text-orange">repl.it</span>'s Hacker Plan. You'll also get high-quality T-shirts (we promise they feel good), exclusive stickers, & sponsor swag.
                        </Card>
                        <img className="w-3/4 md:w-1/2" src="/sitting.svg" />
                    </div>
                </section>
                {/*<section id="sponsors">
                    <h1>Sponsors</h1>
                    <h2></h2>
                </section>*/}
                <section id="docs">
                    <h1>Documents</h1>
                    <div className="mt-4 mb-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <File href="/documents/Emergency Medical Authorization Form.pdf" name="Emergency Medical Authorization Form" />
                        <File href="/documents/Event Liability Release.pdf" name="Event Liability Release Form" />
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    )
}