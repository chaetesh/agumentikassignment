import React, { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  // getting social links from api
  const getLink = async () => {
    await axios
      .get("https://agumentik-zs4w.onrender.com/api/socialLink/")
      .then((response) => {
        setSocialMediaLinks(response.data);
      });
  };

  useEffect(() => {
    getLink();
  }, []);

  return (
    <footer id="Footer" class="page-footer font-small stylish-color-dark pt-4">
      <div class="text-center text-md-left">
        <div class="row">
          <div class="col-md-4 mx-auto">
            <h5 class="text-uppercase font-weight-bold mt-3 mb-4">Teambo</h5>
            <p>Terms of Service | Privacy Policy</p>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div id="link10" class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Support</h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />
            <p>
              <a href="#!">Tutorial</a>
            </p>
            <p>
              <a href="#!">Presentation</a>
            </p>
            <p>
              <a href="#!">Messages</a>
            </p>
            <p>
              <a href="#!">Managment</a>
            </p>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div id="link10" class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">About Us</h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />
            <p>
              <a href="#!">Our Team</a>
            </p>
            <p>
              <a href="#!">Support Us</a>
            </p>
            <p>
              <a href="#!">Developer</a>
            </p>
            <p>
              <a href="#!">Design Team</a>
            </p>
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase font-weight-bold">Get in Touch</h6>
            <hr
              class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />
            <div class="Social-media">
              {socialMediaLinks.map((link) => (
                <a href={link.url} className="social-icons">
                  <i className={`fab fa-${link.name}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
