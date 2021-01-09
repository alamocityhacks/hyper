import Calendar from './Calendar'
import Nav from './Nav'
import Hyper from './Hyper'

export default function HomePage() {
    return (
        <div>
            <Nav />
            <div id="hero" className="mt-12 text-white font-rubik">
                <p className="uppercase opacity-60 text-4xl">Presents</p>
                <h1 className="uppercase hyper text-6xl md:text-8xl">Hyper</h1>
                <h2 className="uppercase text-4xl md:text-5xl w-3/5">A coding competition for high schoolers</h2>
                <div className="mt-4 flex flex-col sm:flex-row sm:space-x-10">
                    <Calendar month="September" day="21" />
                    <div className="pt-4 sm:pt-12 font-inter text-2xl">
                        <div className="font-bold mb-2">Noon to noon</div>
                        <div>Trinity University, SATX</div>
                    </div>
                </div>
            </div>
            <main className="mt-10 bg-white">
                <section className="">
                    <h1 className="font-rubik text-5xl uppercase font-bold">Welcome to <Hyper size="5xl" color="blue" /></h1>
                    <p className="mt-2 text-2xl w-11/12">
                        Hyper is a 24-hour event where 350 high schoolers will come from San Antonio and Austin to compete in South Texas’ first coding competition. We’ll provide workshops, mentorship, free meals and drinks, and places to sleep. You’ll compete in a team of 4 and solve quests. Get points, beat others. The next morning, we’ll find out who wins.
                    </p>
                </section>
            </main>
        </div>
    )
}