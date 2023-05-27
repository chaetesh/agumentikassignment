import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{ padding: "11px" }}>
        <div class="container-fluid" style={{ alignItems: "normal" }}>
          <a
            class="navbar-brand"
            href="#"
            style={{
              marginLeft: "40px",
              fontFamily: "Lato",
              fontWeight: "600",
            }}
          >
            Teambo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ justifyContent: "center", fontFamily: "Lato" }}
          >
            <ul class="navbar-nav">
              <li class="nav-item" style={{ margin: "0px 25px" }}>
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item" style={{ margin: "0px 25px" }}>
                <a class="nav-link active" href="#">
                  Choose Packet
                </a>
              </li>
              <li class="nav-item" style={{ margin: "0px 25px" }}>
                <a class="nav-link active">Program</a>
              </li>
              <li class="nav-item" style={{ margin: "0px 25px" }}>
                <a class="nav-link active">Pricing</a>
              </li>
              <li class="nav-item" style={{ margin: "0px 25px" }}>
                <a class="nav-link active">Help&Center</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar