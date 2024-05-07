// import { Button } from "./components";

import { Button } from "./button";

export function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="search">
            <h1>RECEIVE MORE INFORMATION</h1>
            <p>
              Fill in the field below to receive more information about your
              course.
            </p>
            <label>
              <input type="text" placeholder="Enter Email Here" />
              <Button>receive information</Button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
