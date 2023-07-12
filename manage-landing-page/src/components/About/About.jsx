
import "./about.css"
function About() {
    return (<main>
        <section className="padding-block-900 margin-bottom-700 margin-top-700">
            <div className="container">
                <div className="even-columns center">
                    <div className="flow ">
                        <h1 className="fs-primary-heading fw-bold">We’re building the future of work</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className="padding-block-900">
            <div className="container">
                <div className="even-columns story">
                    <div className="flow text-center-sm-only">
                        <h2 className="fs-primary-heading fw-bold">Our Story</h2>
                        <p>
                            We started Manage with the unwavering belief that great people build outstanding products.
                            Back then, we knew that just hosting a group of talented people on our premises was not enough. We needed to build an environment where unique individuals were empowered to put in their best work and leave a piece of their hearts.
                            We wanted to create a philosophy, a craft, a way of life. And that's how Manage was born.</p>
                    </div>
                    <div>
                        <img className="about-image" src="images/about.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="carousel | padding-block-700  text-center">
            <h2 className="fs-secondary-heading fw-bold">Our values</h2>
            <ul className="values">
                <li className="list-item">
                <img className="values-icons" src="images/values/focus.png" alt="" />
                    <div className="slider-content | flow" >
                        <h3 className="fw-bold">Strive for Excellence</h3>
                        <p data-width="wide">We are relentless in our pursuit of excellence. We set the bar high, challenge the status quo, and push ourselves beyond limits to achieve greatness. Our commitment to excellence drives us to deliver exceptional results, exceed expectations, and create a lasting impact. We embrace the opportunity to constantly improve and set new benchmarks for success.</p>
                    </div>
                </li>
                <li className="list-item">
                <img className="values-icons"  src="images/values/reliability.png" alt="" />

                    <div className="slider-content | flow" >
                        <h3 className="fw-bold">Aspire</h3>
                        <p data-width="wide">We encourage everyone to dream big and dare to aspire. Our company is a place where ambitions are nurtured, and possibilities are limitless. We empower individuals to envision their highest potential and provide them with the tools and support to turn their aspirations into reality. By reaching for the stars, we inspire innovation, creativity, and breakthrough achievements.</p>
                    </div>
                </li>
                <li className="list-item">
                    <img className="values-icons" src="images/values/creativity.png" alt="" />

                    <div className="slider-content | flow" >
                        <h3 className="fw-bold">Growth</h3>
                        <p data-width="wide">Growth is the lifeblood of our organization. We believe in continuous learning, development, and advancement. We foster an environment that fuels personal and professional growth, enabling individuals to unlock their true potential. By embracing growth, we embrace change, adapt to new challenges, and seize opportunities to evolve and excel. Together, we grow stronger, smarter, and more resilient. </p>
                    </div>
                </li>
                <li className="list-item">
                <img className="values-icons" src="images/values/struggle.png" alt="" />

                    <div className="slider-content | flow" >
                        <h3 className="fw-bold">Teamwork</h3>
                        <p data-width="wide"> Collaboration is our superpower. We value the collective strength of our teams, where diverse talents and perspectives come together to drive innovation and solve complex problems. Our commitment to teamwork fosters trust, open communication, and a shared sense of purpose. Together, we rise, support each other, and achieve remarkable outcomes.</p>
                    </div>
                </li>
            </ul>
            <button className="button">Get Started</button>
        </section>

        <section className="cta | padding-block-900 bg-accent-400 text-neutral-100">
            <div className="container">
                <div className="even-columns vertical-align-center">
                    <div>
                        <p className="fs-primary-heading fw-bold">You like what you see?</p>
                    </div>
                    <div className="justify-self-end-md">
                        <button className="button" data-type="inverted">Come join us</button>
                    </div>
                </div>
            </div>
        </section>
    </main>);
}

export default About;