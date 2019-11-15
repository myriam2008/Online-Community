import React from "react";

class EventSingle extends React.Component {
  render() {
    return (
      <div id="wrapper">
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
                Event Title
              </a>
            </h4>
            <div className="event-content">
              <div className="pp">
                <p>
                  In lobortis pharetra mattis. Morbi nec nibh iaculis, ultrices
                  nulla. Nunc velit ante, lacinia id tincidunt eget, faucibus
                  nec nisl. In mauris purus, bibendum et gravida dignissim,
                  venenatis commodo lacus. Duis consectetur quis nisi nec
                  accumsan. Pellentesque enim velit, ut tempor turpis. Mauris
                  felis neque, egestas in lobortis et,iaculis at nunc ac,
                  rhoncus sagittis ipsum.{" "}
                </p>

                {/* <small className="firstsmall"><a className="bg-orange" href="tech-category-01.html" title>Reviews</a></small> */}
                <small>
                  <div className="event-date" title>
                    Date
                  </div>
                </small>

                {/* <small><a href="tech-single.html" title><i className="fa fa-eye" /> 4412</a></small> */}
              </div>
              {/* end meta */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventSingle;
