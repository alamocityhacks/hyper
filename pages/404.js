import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Nav from "../components/Nav";

export default function ErrorPage() {
    return (
        <div>
            <Head />
            <Nav />
            <motion.img
                src="/rocket.png"
                className="absolute top-1/4 w-24"
                animate={{
                    scale: 0.5,
                    x: ['0vw', '100vw'],
                    y: [40, -40, 40],
                    rotateZ: [0, 45, 90],
                }}
                transition={{
                    duration: 5,
                    //repeat: Infinity  // For Dev Only
                }}
            />
            <div
                className="my-32 h-10 font-rubik uppercase italic font-black text-center align-middle text-6xl md:leading-loose">
                404. Not found.
            </div>
            <Footer />
        </div>
    )
}