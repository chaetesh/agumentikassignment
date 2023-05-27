import React, { useState, useEffect } from "react";
import axios from "axios";
import { Notify } from "notiflix";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();

      // Make an API call to the /form endpoint.
      axios
        .post("https://agumentik-zs4w.onrender.com/api/contact/form/", {
          name,
          email,
        })
        .then((res) => {
          // Handle the response from the API call.
          if (res.status === 200) {
            // The form was submitted successfully.
            setName("");
            setEmail("");
            Notify.success("Form Submitted");
          } else {
            // The form was not submitted successfully.
            console.log(res.status);
          }
        })
        .catch((err) => {
          // Handle the error from the API call.
          console.log(err);
        });
    };

  return (
    <div>
      <div
        className="mb-5"
        style={{ justifyContent: "center", flexDirection: "column" }}
      >
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Have any Questions?
        </h1>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px auto",
          }}
        >
          Contact Us
        </button>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Contact
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label mb-1">
                    Name:
                  </label>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label mb-1">
                    email:
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    class="form-control"
                  ></input>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
