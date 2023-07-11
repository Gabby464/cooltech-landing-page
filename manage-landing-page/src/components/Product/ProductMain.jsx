import './product.css'

function ProductMain() {
  return (<main>
    <section className="padding-block-900 margin-bottom-700">
      <div className="container">
        <div className="even-columns">
          <div className="flow width-low revert">
            <h1 className="fs-primary-heading fw-bold  ">Meet Manage AI</h1>
            <p>Say goodbye to unnecessary meetings.</p>
            <p>Yes, they waste time...</p>
            <button className="button">Request a demo</button>
          </div>
          <div>
            <img className="image-maxwidth" src="images/product-image2.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section className="padding-block-700">
      <div className="container " >
        <div className="even-columns product-page-logos">
          <div className="flow text-center-sm-only">
            <h2 className="fs-secondary-heading fw-bold margin-bottom-700 ">Trusted by teams at</h2>
          </div>

          <div>
            <ul className="company-list" role="list" aria-label="Social links">
              <li><a aria-label="asus" href="#">
                <img className="company-icon" src="images/company-logos/asus-6630-logo-svgrepo-com.svg" alt="asus logo" />
              </a>
              </li>
              <li><a aria-label="bose" href="#">
                <img className="company-icon" src="images/company-logos/bose-logo-svgrepo-com copy.svg" alt="bose logo" />
              </a>
              </li>
              <li><a aria-label="instagram" href="#">
                <img className="company-icon" src="images/company-logos/instagram-1-logo-svgrepo-com.svg" alt="instagram logo" />
              </a></li>
              <li><a aria-label="tidal" href="#">
                <img className="company-icon" src="images/company-logos/tidal-logo-svgrepo-com.svg" alt="tidal logo" />
              </a></li>
              <li><a aria-label="uber" href="#">
                <img className="company-icon" src="images/company-logos/uber-logo-svgrepo-com.svg" alt="uber logo" />
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className=" cta | padding-block-900 product-page">
      <div className="container ">
        <div className="even-columns center">
          <div className="flow width-low">
            <h3 className="fs-secondary-heading fw-bold fs-650">Co-create with ease</h3>
            <p>Manage brings together powerful developer tools with multiplayer collaboration, allowing teams to explore ideas while capturing quality feedback in real time—or anytime.</p>
          </div>
          <div>
            <img className="image-maxwidth" src="images/product-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section className=" padding-block-900 product-page-secondary">
      <div className="container ">
        <div className="even-columns center">
          <div className="flow width-low revert">
            <h3 className="fs-secondary-heading fw-bold fs-650">Management workspaces</h3>
            <p>The Management Workspace provides a way to distribute and track work across multiple teams from a single Management Board. Think of this as a master board making it easy to see the big picture, all while maintaining dependencies between work items.</p>
          </div>
          <div>
            <img className="image-maxwidth" src="images/product-planning.png" alt="" />
          </div>
        </div>
      </div>
    </section>


    <section className=" padding-block-900">
      <div className="container quote">
          <h3 className="fw-bold fs-900 center">“The best of team organization and collaboration (without all the bullshit)”</h3>
          <p>– Our customers</p>
      </div>
    </section>

  </main>);
}

export default ProductMain;