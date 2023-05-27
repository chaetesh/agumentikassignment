import React from "react";

const LandingPage = () => {
  return (
    <div id="content">
      <div id="content-text">
        {window.innerWidth < 700 ? (
          <img
            style={{width:'250px',marginBottom:'30px'}}
            class=""
            src="https://github.com/malunaridev/Landing-Pages-Are-Fun/blob/master/2-business-agency-concept-2/assets/image.png?raw=true"
            alt="a business man standing and smiling"
          />
        ) : (
          ""
        )}
        <h1 className="heading mb-4">
          Manage your team's task easily remotely
        </h1>
        <h2 className="heading2">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipisicing elit pariatur quibusdam <br />
          voluptatem pariatur dolore.
        </h2>
        <button>Get Started</button>
      </div>
      <img
        class="header-image"
        src="https://github.com/malunaridev/Landing-Pages-Are-Fun/blob/master/2-business-agency-concept-2/assets/image.png?raw=true"
        alt="a business man standing and smiling"
      />
    </div>
  );
};

export default LandingPage;
