import Footer from '../components/Footer'
import Head from '../components/Head'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Nav from '../components/Nav'

export default function TheGame() {
    return (
        <div>
            <Head />
            <Nav />
            <Hero color="yellow" title="The Game" />
            <main>
                <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <Card icon="map" color="red" heading="Beginners" extraclasses="leading-loose">
                        30 quests.
                        <br />
                        <div className="leading-normal">
                            Not king-of-the-hill (KOTH) style. Every quest gets you some points. The team with the highest points the next day wins.
                        </div>
                    </Card>
                    <Card icon="puzzle" color="orange" heading="Intermediates" extraclasses="leading-loose">
                        20 quests.
                        <br />
                        <div className="leading-normal">
                            KOTH style. Every quest gets you to the next. Every hour, the leading team gets the points.
                        </div>
                    </Card>
                    <Card icon="flag" color="turquoise" heading="Advanced" extraclasses="leading-loose">
                        5 quests.
                        <br />
                        <div className="leading-normal">
                            KOTH style. Every 2 hours in control of the hill, you'll win the points. These quests are harder than they look.
                        </div>
                    </Card>
                    <Card icon="pencil" color="blue" heading="Workshops">
                        We'll have workshops on each quest once 3/4 of the teams have solved them. Then they'll be invalidated with a reduced point value.*
                        <br />
                        <span className="text-sm">*Beginner quests won't be invalidated however.</span>
                    </Card>
                </section>
                <section>
                    <Card type={3} icon="map" color="red" heading="Beginners">
                        <p>You’ll have <span className="text-red font-bold">30 quests</span>. If you find them too easy, we’ll move you up to Intermediates.<br /></p>
                        <p className="pt-2">Quests for Beginners will follow a set pattern of rules:<br /></p>
                        <p className="pt-2"><b>1.</b> First to win a challenge gets all the points. Second to win gets half of the points. Third to win gets 1/3 of the points. Everybody after that gets 1/4 of the points.<br /></p>
                        <p className="pt-2"><b>2.</b> Quests start from easy to hard difficulty. You cannot jump quests, and you cannot manually do them. You’ll be asked for your source code at the end of the challenge.</p>
                    </Card>
                    <Card type={3} icon="puzzle" color="orange" heading="Intermediates">
                        <p>You’ll have <span className="text-orange font-bold">30 quests</span>. If you find them too easy, we’ll move you up to Advanced.<br /></p>
                        <p className="pt-2">Quests for Intermediates work KOTH style.<br /></p>
                        <p className="pt-2"><b>1.</b> First to win a challenge takes a lead. Keep that lead and in 30 minutes, you'll get those points. If another team gets that challenge within that time period, they get 1/2 the points the first team gets.<br /></p>
                        <p className="pt-2"><b>2.</b> Take back control of the hill by doing the next challenge. In the same way, you'll get your points.</p>
                        <p className="pt-2"><b>3.</b> Quests do not start from easy to hard difficulty. Some are easy, and some are hard. You can jump quests but you cannot manually do them. You'll be asked for your source code at the end of the challenge.</p>
                    </Card>
                    <Card type={3} icon="flag" color="turquoise" heading="Advanced">
                        <p>You’ll have <span className="text-turquoise font-bold">5 quests</span>. Don't be fooled by the number. These aren't easy.<br /></p>
                        <p className="pt-2">Points can be earned KOTH style like above. Above rules apply. Here's a few additions and changes:<br /></p>
                        <p className="pt-2"><b>1.</b> Winning takes patience. Instead of 30 minutes, you'll be required to hold that hill for 1 hour.<br /></p>
                        <p className="pt-2"><b>2.</b> Unlike Intermediates, your quests aren't the same as beginners. Be ready to be challenged.</p>
                        <p className="pt-2"><b>3.</b> Quests do not start from easy to hard difficulty. They are all of immense difficulty. You can jump quests but you cannot manually do them. You'll be asked for your source code at the end of the challenge.</p>
                        <p className="pt-2"><b>4. </b> You'll be able to talk with your team, but <span className="opacity-100 font-bold">you won't have internet access.</span> If you don't know how to do something, you'll have 3 lifelines to ask a mentor. Use them wisely. If you do receive a phone call from somebody, we'll pass it on to you.</p>
                    </Card>
                    <Card type={3} heading="Breaks and Workshops">
                        <p>All quests will stop for everybody during dinner, breakfast, and at our <span className="text-blue font-bold">2am Jackbox Break Time</span>.<br /></p>
                        <p className="pt-4">There will be an Intro to Javascript and Intro to Python session before quests start. Make sure to come on time.<br /></p>
                        <p className="pt-4">Advanced is not for the meek. Beginners and Intermediates will have workshops throughout the night for each quest. Advanced will have no workshops at all. The one listed is for Beginners and Intermediates curious to see what they have to solve.<br /></p>
                    </Card>
                </section>
            </main>
            <Footer />
        </div>
    )
}
