import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Nav from "../components/Nav";

export default function ErrorPage() {
    return (
        <div>
            <Head />
            <Nav />
            {/*<motion.img
                src="/planet1.svg"
                className="md:absolute w-72 flex justify-center"
                animate={{
                    y: [-10, 10],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 4,
                }}
            />*/}
            <motion.img
                src="/rocket.png"
                className="absolute z-20 top-1/4 w-24"
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
                className="relative z-10 h-10 mt-12 font-rubik uppercase italic font-black text-center align-middle text-6xl md:leading-loose">
                404. Not found.
            </div>
            <Footer />
        </div>
    )
}