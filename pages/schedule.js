import Footer from '../components/Footer'
import Head from '../components/Head'
import Nav from '../components/Nav'

export default function Schedule() {
    return (
        <div>
            <Head />
            <Nav />
            <div className="mt-10 px-4 md:px-64 font-rubik text-3xl text-center">Our schedule is not finalized at the moment. Come back in April to see our full schedule.</div>
            <Footer />
        </div>
    )
}