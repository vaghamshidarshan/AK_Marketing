import './Service.css'; 

export default function Timeline() {
 



  return (
<section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="section-header text-center">
        <h2 className="fw-bold fs-1" id='Servicess1' style={{color:"#be0303af" }}>
          Our
          <span className="b-class-secondary" id='Servicess'> Services </span>
        </h2>
        {/* <p className="sec-icon"><i className="fa-solid fa-gear"></i></p> */}
      </div>
    </div>
    <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <h3>Tracking Lead</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-arrows-down-to-people"></i>
          </div>
          <h3>Advanced Targeting solution</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-globe"></i>
          </div>
          <h3>Global Reach & Quality Traffic</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-money-check-dollar"></i>
          </div>
          <h3>Flexible pricing models</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-regular fa-circle-check"></i>
          </div>
          <h3>Advanced optimization technologies & methodologies</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <i className="fa-solid fa-people-group"></i>
          </div>
          <h3>Dedicated account management team</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
