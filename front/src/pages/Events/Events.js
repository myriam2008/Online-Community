import React from "react";
import NavBar from "../../components/NavBar";

class Events extends React.Component {
  state = {
    events: []
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/events");
    const results = await response.json();
    this.setState({
      events: results.data
    });
  }

  render() {
    return (
      <div id="wrapper">
        <NavBar />
        <div>
          {this.state.events.map(event => (
            <div>
              <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tech-single.html" title>
                      <img
                        src="upload/tech_blog_02.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="hovereffect" />
                    </a>
                  </div>
                  {/* end media */}
                </div>
                {/* end col */}
                <div className="blog-meta big-meta col-md-8">
                  <h4>
                    <a href="tech-single.html" title>
                      {event.Title}
                    </a>
                  </h4>

                  {/* <small className="firstsmall"><a className="bg-orange" href="tech-category-01.html" title>Reviews</a></small> */}
                  <small>
                    <div className="event-date" title>
                      {event.Date}
                    </div>
                  </small>

                  {/* <small><a href="tech-single.html" title><i className="fa fa-eye" /> 4412</a></small> */}
                </div>
                {/* end meta */}
              </div>

              {/* <hr className="invis" />
              <div className="blog-box row">
                <div className="col-md-4">
                  <div className="post-media">
                    <a href="tech-single.html" title>
                      <img
                        src="upload/tech_blog_02.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="hovereffect" />
                    </a>
                  </div>
                  {/* end media */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Events;
