import React from "react";

class Comments extends React.Component {
  state = {
    articles_id: 2,
    comments: []
  };

  async componentDidMount() {
    const response = await fetch(
      "http://localhost:8080/Articles/Articles_Id/Comments"
    );
    const results = await response.json();
    this.setState({
      comments: results.data
    });
  }

  render() {
    return (
      //       <div>
      //         <hr className="invis1" />
      //         <div className="custombox clearfix">
      //           <h4 className="small-title">3 Comments</h4>
      //           <div className="row">
      //             <div className="col-lg-12">
      //               {this.state.comments.map(comments => (
      //                 // <div className="comments-list">
      //                 //   <div className="media">
      //                 //     <a className="media-left" href="#">
      //                 //       <img
      //                 //         src="upload/author.jpg"
      //                 //         alt=""
      //                 //         className="rounded-circle"
      //                 //       />
      //                 // </a>

      //                 <div className="media-body">
      //                   <small>{comments.Date}</small>

      //                   <p>{comments.Text}</p>

      //                   ))}
      //                   <div>
      //                   <a href="#" className="btn btn-primary btn-sm">
      //                     Reply
      //                   </a>

      //                 </div>
      // {/*
      //                 //   <div className="media-body">
      //                 //     <h4 className="media-heading user_name">
      //                 //       Baltej Singh <small>5 days ago</small>
      //                 //     </h4>
      //                 //     <p>
      //                 //       Drinking vinegar stumptown yr pop-up artisan sunt. Deep
      //                 //       v cliche lomo biodiesel Neutra selfies. Shorts fixie
      //                 //       consequat flexitarian four loko tempor duis
      //                 //       single-origin coffee. Banksy, elit small.
      //                 //     </p>
      //                 //     <a href="#" className="btn btn-primary btn-sm">
      //                 //       Reply
      //                 //     </a>
      //                 //   </div>
      //                 // </div> */}
      //                 // <div className="media last-child">
      //                 //   <a className="media-left" href="#">
      //                 //     <img
      //                 //       src="upload/author_02.jpg"
      //                 //       alt=""
      //                 //       className="rounded-circle"
      //                 //     />
      //                 //   </a>
      //                 //   <div className="media-body">
      //                 //     <h4 className="media-heading user_name">
      //                 //       Marie Johnson <small>5 days ago</small>
      //                 //     </h4>
      //                 //     <p>
      //                 //       Kickstarter seitan retro. Drinking vinegar stumptown yr
      //                 //       pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra
      //                 //       selfies. Shorts fixie consequat flexitarian four loko
      //                 //       tempor duis single-origin coffee. Banksy, elit small.
      //                 //     </p>
      //                 //     <a href="#" className="btn btn-primary btn-sm">
      //                 //       Reply
      //                 //     </a>
      //                 // </div>
      //                 // </div>
      //                 // </div>

      //           {/* end custom-box */}
      //          <div>
      //           <div className="custombox clearfix">
      //             <h4 className="small-title">Leave a Reply</h4>
      //             <div className="row">
      //               <div className="col-lg-12">
      //                 <form className="form-wrapper">
      //                   <input
      //                     type="text"
      //                     className="form-control"
      //                     placeholder="Your name"
      //                   />
      //                   <input
      //                     type="text"
      //                     className="form-control"
      //                     placeholder="Email address"
      //                   />
      //                   <input
      //                     type="text"
      //                     className="form-control"
      //                     placeholder="Website"
      //                   />
      //                   <textarea
      //                     className="form-control"
      //                     placeholder="Your comment"
      //                     defaultValue={""}
      //                   />
      //                   <button type="submit" className="btn btn-primary">
      //                     Submit Comment
      //                   </button>
      //                 </form>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      <div>
        <div>
          {/* <comments /> */}
          {this.state.comments.map(item => (
            <div>
              {item.Date}
              {item.Text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Comments;
