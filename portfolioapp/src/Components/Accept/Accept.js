import React, { useState } from "react";

const Accept = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  function toggle(value) {
    return !value;
  }
  function checkbox1() {
    setChecked1(!checked1);
    setChecked2(true);
  }
  function checkbox2() {
    setChecked2(!checked2);
  }
  function checkbox3() {
    setChecked2(!checked2);
  }

  console.log(!setChecked1);

  return (
    <div className="accept-container">
      <div className="accept-box">
        <h1 className="terms-title">Terms & Conditions</h1>
        <div className="option">
          <label for="all" id="all-label">
            <button
              className="show-more-btn"
              href=""
              onClick={() => {
                let collapse = document.getElementById("collapsible-info");
                let arrow = document.getElementById("pr");
                if (collapse.style.display == "block") {
                  collapse.style.display = "none";
                } else {
                  collapse.style.display = "block";
                }
              }}
            >
              {" "}
              Zgoda na wszystko <i class="pr bi-caret-down" id="pr"></i>
            </button>
          </label>
          <input
            className="checkbox"
            name="all"
            type="checkbox"
            id="all"
            checked={checked1}
            onClick={checkbox1}
          ></input>
          <div
            className="collapsible-info"
            id="collapsible-info"
            style={{ display: "none" }}
          >
            <div className="accept-info">
              <div className="info">
                Informacja o ciasteczkach{" "}
                <i
                  class="plus bi-plus-lg"
                  onClick={() => {
                    let cookiesInfo = document.getElementById("cookies-info");
                    if (cookiesInfo.style.display == "block") {
                      cookiesInfo.style.display = "none";
                    } else {
                      cookiesInfo.style.display = "block";
                    }
                  }}
                ></i>
                <div
                  className="more-info"
                  id="cookies-info"
                  style={{ display: "none" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>
              <div className="info">
                Przeczytaj regulamin{" "}
                <i
                  class="plus bi-plus-lg"
                  onClick={() => {
                    let cookiesInfo = document.getElementById("more-info");
                    if (cookiesInfo.style.display == "block") {
                      cookiesInfo.style.display = "none";
                    } else {
                      cookiesInfo.style.display = "block";
                    }
                  }}
                ></i>
                <div className="more-info" id="more-info">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="option">
          <label for="optional" id="optional-label">
            Otrzymywanie ofert na mail
          </label>
          <input
            className="checkbox"
            name="optional"
            type="checkbox"
            id="optional"
            checked={checked2}
            onClick={checkbox2}
          ></input>
        </div>
        <div className="option">
          <label for="required" id="required-label">
            Akceptuje regulamin
          </label>
          <input
            className="checkbox"
            type="checkbox"
            name="required"
            id="required"
            checked={true}
            disabled={true}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Accept;
