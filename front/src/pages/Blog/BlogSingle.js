import React from "react";
import NavBar from "../../components/NavBar";
import Articles from "../../components/Articles";
import Comments from "../../components/Comments";

class BlogSingle extends React.Component {
  state = {
    comments: []
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/Articles/Articles_Id/");
    const results = await response.json();
    const response2 = await fetch(
      "http://localhost:8080/Articles/Articles_Id/Comments/"
    );
    const results2 = await response2.json();
    this.setState({
      comments: results.data,
      articles: results2.data
    });
  }

  render() {
    return (
      <div>
        <hr className="invis1" />
        <div className="custombox clearfix">
          <h4 className="small-title">3 Comments</h4>
          <div className="row">
            <div className="col-lg-12">
              <div className="comments-list">
                <div className="media">
                  <a className="media-left" href="#">
                    <img
                      src="upload/author.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                  </a>
                </div>
                <div>
                  <div className="media-body">
                    {this.state.comments.map(comment => (
                      <div>
                        <h4 className="media-heading user_name">
                          {comment.Author} <small>{comment.Date}</small>
                        </h4>
                        <p>{comment.Text} </p>

                        <a href="#" className="btn btn-primary btn-sm">
                          Reply
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="invis1" />
          <div className="custombox clearfix">
            <h4 className="small-title">Leave a Reply</h4>
            <div className="row">
              <div className="col-lg-12">
                <form className="form-wrapper">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Website"
                  />
                  <textarea
                    className="form-control"
                    placeholder="Your comment"
                    defaultValue={""}
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogSingle;
