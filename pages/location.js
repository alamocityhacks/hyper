import Footer from '../components/Footer'
import Head from '../components/Head'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Nav from '../components/Nav'

export default function Location() {
    return (
        <div>
            <Head />
            <Nav />
            <Hero title="Location" color="red" />
            <main>
                <section>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Card type={4} color="red" heading="Trinity University">
                            <span className="text-2xl font-bold">Center for the Sciences and Innovation</span><br />
                            E Hollywood Ave<br />San Antonio, TX 78212
                        </Card>
                        <Card type={5}>
                            <iframe className="rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1052.8724475777867!2d-98.48376338724988!3d29.464651929041082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf5875d60db79%3A0xfd780dcf6fc0ad23!2sCenter%20for%20the%20Sciences%20and%20Innovation%2C%20E%20Hollywood%20Ave%2C%20San%20Antonio%2C%20TX%2078212!5e0!3m2!1sen!2sus!4v1610337911198!5m2!1sen!2sus" width={`100%`} height={`100%`} frameBorder={0} style={{border: 0}} aria-hidden="false" tabIndex={0} />
                        </Card>
                        <Card type={4} icon="cash" color="green" heading="Travel reimbursement">
                            We'll be reimbursing bus fares up to $30 for some of y'all. Bring your receipts!
                        </Card>
                        <Card type={4} icon="moon" color="blue" heading="Sleeping Arrangements">
                            Sleeping might make you lose, so while we won't have a dedicated sleeping room, the second floor will be dark after 2am. Bring your blankets, pillows, or sleeping bags!
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}