import React from "react";
import "./contact.css";
// import "./contact2.css";

const Contact = () => {
  return (
    <div>
      <div className="page-content bg-white">
        <div className="banner-wraper">
          <div
            className="page-banner banner-lg contact-banner"
            style={{
              backgroundImage:
                'url("https://meditro.themetrades.com/react/static/media/pic-2.0593bc2f.jpg")',
            }}
          >
            <div className="container">
              <div className="page-banner-entry text-center">
                <h1>Contact Us</h1>
                <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/react/">
                        <svg
                          xmlns="https://meditro.themetrades.com/react/static/media/pic-2.0593bc2f.jpg"
                          width={22}
                          height={22}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>{" "}
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <img
              className="pt-img1 animate-wave"
              src="https://meditro.themetrades.com/react/static/media/pic-2.0593bc2f.jpg"
              alt=""
            />
            <img
              className="pt-img2 animate2"
              src="https://meditro.themetrades.com/react/static/media/pic-2.0593bc2f.jpg"
              alt=""
            />
            <img
              className="pt-img3 animate-rotate"
              src="https://meditro.themetrades.com/react/static/media/pic-2.0593bc2f.jpg"
              alt=""
            />
          </div>
        </div>
        <section className>
          <div className="container">
            <div className="contact-wraper">
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <form className="form-wraper contact-form ajax-form">
                    <div className="ajax-message" />
                    <div className="row">
                      <div className="form-group col-md-12">
                        <input
                          name="name"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          name="email"
                          type="email"
                          required
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          name="phone"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Phone Numbers"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <select className="form-select form-control">
                          <option>Selecty Department</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          name="message"
                          required
                          className="form-control"
                          placeholder="Type Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="btn w-100 btn-secondary btn-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6 mb-30">
                  <div
                    className="contact-info ovpr-dark"
                    style={{
                      backgroundImage:
                        'url("https://meditro.themetrades.com/react/static/media/pic-2.0593bc2f.jpg")',
                    }}
                  >
                    <div className="info-inner">
                      <h4 className="title mb-30">
                        Contact Us For Any Informations
                      </h4>
                      <div className="icon-box">
                        <h6 className="title">
                          <i className="ti-map-alt" />
                          Location
                        </h6>
                        <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                      </div>
                      <div className="icon-box">
                        <h6 className="title">
                          <i className="ti-id-badge" />
                          Email &amp; Phone
                        </h6>
                        <a className="text-white" href="/react/contact-us">
                          info@yourdomain.com
                        </a>
                        <p>(+68) 120034509</p>
                      </div>
                      <div className="icon-box">
                        <h6 className="title">
                          <i className="ti-world" />
                          Follow Us
                        </h6>
                        <ul className="social-media">
                          <li>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://twitter.com/"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.linkedin.com/"
                            >
                              <i className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://www.instagram.com/"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx4 feature4">
                  <div className="icon-md feature-icon">
                    <img
                      src="https://meditro.themetrades.com/react/static/media/pic-2.0593bc2f.jpg"
                      alt=""
                    />
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-title">Contact Number</h5>
                    <p>+001 123 456 790</p>
                    <p>+002 3424 44 00</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx4 feature3">
                  <div className="icon-md feature-icon">
                    <img
                      src="https://meditro.themetrades.com/react/static/media/pic-2.0593bc2f.jpg"
                      alt=""
                    />
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-title">Email Address</h5>
                    <p>info@yourdomain.com</p>
                    <p>example@support.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="feature-container feature-bx4 feature2">
                  <div className="icon-md feature-icon">
                    <img
                      src="https://meditro.themetrades.com/react/static/media/pic-3.fa689b10.jpg"
                      alt=""
                    />
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-title">Address</h5>
                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
