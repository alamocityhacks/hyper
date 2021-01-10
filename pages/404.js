import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function ErrorPage() {
    return (
        <div>
            <Nav />
            <div className="my-32 h-10 font-rubik uppercase italic font-black text-center align-middle text-6xl md:leading-loose">
                404. Not found.
            </div>
            <Footer />
        </div>
    )
}