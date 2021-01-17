import HeadObject from "../components/Head"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const brand = {
    text: [
        {
            type: 'Logo',
            font: 'Rubik Mono One',
            weight: 400,
            italic: false,
            description: 'Rubik Mono One. The only content that can use this style is our logo with the content Alamo City Hacks. Don\'t use this style with any other text.',
            sample: 'Alamo City Hacks',
        },
        {
            type: 'Hyper',
            font: 'Rubik',
            weight: 900,
            italic: true,
            description: 'Rubik Black Italic. The HYPER logo should be in all caps and italicized. The style can ONLY be used with the word HYPER.',
            sample: 'HYPER',
        },
        {
            type: 'Heading',
            font: 'Rubik',
            weight: 700,
            italic: false,
            description: 'Rubik Bold Regular. This is our heading font.',
            sample: 'Waltz, bad nymph, for quick jigs vex.'
        },
        {
            type: 'Paragraph',
            font: 'Inter',
            weight: 400,
            italic: false,
            description: 'Inter Regular. This is our body/paragraph font. Text opacity is almost always set to 60% or 50%.',
            sample: 'Quick zephyrs blow, vexing daft Jim.'
        }
    ],
    colors: {
        main: [
            { name: 'Space Blue', color: '#69709F' },
            { name: 'Tantalizer', color: '#2CDAC5' },
            { name: 'Sunlight', color: '#FFFD85' },
            { name: 'King Orange', color: '#FF7E47' },
            { name: 'Rad Red', color: '#E94957' },
        ],
        alt: [
            { name: 'Deep Space', color: '#272A3D' },
            { name: 'Treehouse', color: '#34D399' },
            { name: 'Solar Green', color: '#B6FFB5' },
            { name: 'Passionfruit', color: '#FFC0CB' },
            { name: 'Posh Purple', color: '#BC68FF' }
        ]
    }
}

export default function Press() {
    return (
        <div>
            <HeadObject />
            <Nav />
            <Hero title="Press Kit" color="orange" />
            <main>
                <section>
                    <h1>Main Colors</h1>
                    <div className="mt-4 grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-none md:grid-flow-col md:gap-2">
                        {brand.colors.main.map(({ name, color }) => (
                            <div>
                                <div className="h-20 md:w-36 rounded-2xl" style={{ backgroundColor: color }}></div>
                                <h3 className="mt-2 md:mt-4 font-bold text-xl">{name}</h3>
                                <p className="text-lg">{color}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h1>Alternate Colors</h1>
                    <div className="mt-4 grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-none md:grid-flow-col md:gap-2">
                        {brand.colors.alt.map(({ name, color }) => (
                            <div>
                                <div className="h-20 md:w-36 rounded-2xl" style={{ backgroundColor: color }}></div>
                                <h3 className="mt-2 md:mt-4 font-bold text-xl">{name}</h3>
                                <p className="text-lg">{color}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h1>Typography</h1>
                    <div className="mt-8 flex flex-col space-y-8">
                        {brand.text.map(({ type, font, weight, italic, description, sample }) => (
                            <div>
                                <div className="text-5xl" style={{
                                    fontFamily: `${font}, sans-serif`,
                                    fontWeight: weight,
                                    fontStyle: italic ? 'italic' : 'normal'
                                }}>{sample}</div>
                                <h3 className="mt-2 text-xl font-inter">{description}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}