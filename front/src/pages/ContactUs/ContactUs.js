import React from "react";
// import NavBar from "../components/NavBar";

class ContactUs extends React.Component {
  render() {
    return (
      <div className="col-lg-7">
        <form className="form-wrapper">
          <input type="text" className="form-control" placeholder="Your name" />
          <input
            type="text"
            className="form-control"
            placeholder="Email address"
          />
          <input type="text" className="form-control" placeholder="Phone" />
          <input type="text" className="form-control" placeholder="Subject" />
          <textarea
            className="form-control"
            placeholder="Your message"
            defaultValue={""}
          />
          <button type="submit" className="btn btn-primary">
            Send <i className="fa fa-envelope-open-o" />
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
