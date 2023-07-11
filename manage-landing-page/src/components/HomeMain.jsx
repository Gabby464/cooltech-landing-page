function HomeMain() {
    return (  <main>
        <section className="padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div className="flow">
                <h1 className="fs-primary-heading fw-bold">Bring everyone
                  together to build
                  better products.</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in
                  view.</p>
                <button className="button">Get Started</button>
              </div>
              <div>
                <img src="images/illustration-intro.svg" alt=""/>
              </div>
            </div>
          </div>
        </section>
    
        <section className="padding-block-900">
          <div className="container">
            <div className="even-columns">
              <div className="flow text-center-sm-only margi">
                <h2 className="fs-secondary-heading fw-bold">What’s different about Manage?</h2>
                <p>Manage provides all the functionality your team needs, without the complexity. Our software is
                  tailor-made for modern
                  digital product teams.</p>
              </div>
              <div>
                <ul className="numbered-items | flow" role="list">
                  <li>
                    <div className="flow">
                      <h3 className="numbered-items__title | fs-600 fw-bold">Track company-wide progress</h3>
                      <p className="numbered-items__body" data-width="wide">See how your day-to-day tasks fit into the wider
                        vision. Go from tracking
                        progress at the milestone
                        level all the way
                        done to the smallest of details. Never lose sight of the bigger picture again.</p>
                    </div>
                  </li>
                  <li>
                    <div className="flow" >
                      <h3 className="numbered-items__title | fs-600 fw-bold">Advanced built-in reports</h3>
                      <p className="numbered-items__body" data-width="wide">Set internal delivery estimates and track progress
                        toward company goals. Our
                        customisable dashboard
                        helps you build out
                        the reports you need to keep key stakeholders informed.</p>
    
                    </div>
                  </li>
                  <li>
                    <div className="flow" >
                      <h3 className="numbered-items__title | fs-600 fw-bold">Everything you need in one place</h3>
                      <p className="numbered-items__body" data-width="wide">Stop jumping from one service to another to
                        communicate, store files, track tasks
                        and share
                        documents. Manage offers an
                        all-in-one team productivity solution.</p>
    
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    
        <section className="carousel | padding-block-700  text-center">
          <h2 className="fs-secondary-heading fw-bold">What theyve said</h2>
          <ul className="slider">
            <li>
              <img src="images/avatar-anisha.png" alt=""/>
    
            <div className="slider-content | flow" >
                <h3 className="fw-bold">Anisha Li</h3>
                <p data-width="wide">“Manage has supercharged our team’s workflow. The ability to maintain visibility on
                  larger milestones at all times keeps
                  everyone motivated.”</p>
              </div>
            </li>
            <li>
              <img src="images/avatar-ali.png" alt=""/>
    
              <div className="slider-content | flow" >
                <h3 className="fw-bold">Ali Bravo</h3>
                <p data-width="wide">“We have been able to cancel so many other subscriptions since using Manage. There is
                  no
                  more cross-channel
                  confusion
                  and everyone is much more focused.”</p>
              </div>
            </li>
            <li>
              <img src="images/avatar-richard.png" alt=""/>
    
              <div className="slider-content | flow" >
                <h3 className="fw-bold">Richard Watts</h3>
                <p data-width="wide">“Manage allows us to provide structure and process. It keeps us organized and focused.
                  I
                  can’t stop recommending them to
                  everyone I talk to!” </p>
              </div>
            </li>
            <li>
              <img src="images/avatar-shanai.png" alt="" />
    
              <div className="slider-content | flow" >
                <h3 className="fw-bold">Shanai Gough</h3>
                <p data-width="wide">“Their software allows us to track, manage and collaborate on our projects from
                  anywhere.
                  It keeps the whole team
                  in-sync without being intrusive.” </p>
              </div>
            </li>
          </ul>
          <button className="button">Get Started</button>
        </section>
    
        <section className="cta | padding-block-900 bg-accent-400 text-neutral-100">
          <div className="container">
            <div className="even-columns vertical-align-center">
              <div>
                <p className="fs-primary-heading fw-bold">Simplify how your team works today.</p>
              </div>
              <div className="justify-self-end-md">
                <button className="button" data-type="inverted">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </main>
     );
}

export default HomeMain;