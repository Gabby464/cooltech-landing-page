import CareerCard from './TeamCard';
import './careers.css'
function Careers() {
    return ( <main>
        <section className="padding-block-900 margin-bottom-700 margin-top-700">
        <div className="container">
            <div className="even-columns center">
                <div className="flow ">
                    <h1 className="fs-primary-heading fw-bold">Let's make the change together</h1>
                </div>
            </div>
        </div>
    </section>
    <section className="padding-block-900 flex">
       <CareerCard/>
       <CareerCard/>
       <CareerCard/>
       <CareerCard/>

    </section>
    </main>
         );
}

export default Careers;