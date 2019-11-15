import React from "react";
import Popup from "reactjs-popup";
import NavBar from "../../components/NavBar";
import Button from "react-bootstrap/Button";
import Editor from "../../components/Editor";

class Blog extends React.Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/articles");
    const results = await response.json();
    this.setState({
      articles: results.data
    });
  }
  render() {
    return (
      <div id="wrapper">
        <div>
          <NavBar />

          <Popup
            trigger={
              <Button variant="primary" size="lg" block>
                Post an article
              </Button>
            }
            modal
            position="right center"
          >
            <div>
              <Editor />
            </div>
          </Popup>

          {/* <div>
            <Button variant="primary" size="lg" block>
              Post an article
            </Button>
          </div> */}

          {this.state.articles.map(article => (
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
                      {article.Title}
                    </a>
                  </h4>
                  <p>{article.Text}</p>
                  {/* <small className="firstsmall"><a className="bg-orange" href="tech-category-01.html" title>Reviews</a></small> */}
                  <small>
                    <a href="tech-single.html" title>
                      {article.Date}
                    </a>
                  </small>
                  <small>
                    <a href="tech-author.html" title>
                      by {article.Author}
                    </a>
                  </small>
                  {/* <small><a href="tech-single.html" title><i className="fa fa-eye" /> 4412</a></small> */}
                </div>
              </div>
              <hr className="invis" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
