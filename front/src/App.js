import React from "react";
import Home from "./pages/Home/Home";
// import Forum from "./pages/Forum";
import Blog from "./pages/Blog/Blog";
// import BlogSingle from "./pages/Blog/BlogSingle";
import Events from "./pages/Events/Events";
import EventSingle from "./pages/Events/EventSingle";
import ContactUs from "./pages/ContactUs/ContactUs";
import NavBar from "./components/NavBar";
// import LatestArticles from "./components/LatestArticles";
import Slick from "./pages/Home/Slick";
// import ContactUs from "./pages/ContactUs/ContacUs";
import Articles from "./components/Articles";
import Comments from "./components/Comments";
import BlogSingle from "./pages/Blog/BlogSingle";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Home" exact component={Home} />
            <Route path="/Blog" exact component={Blog} />
            <Route path="/Events" component={Events} />
            <Route path="/ContactUs" component={ContactUs} />

            <Route
              path="/BlogSingle"
              render={props => <BlogSingle {...props} />}
            />

            <Route
              path="/EventSingle"
              render={props => <EventSingle {...props} />}
            />
          </Switch>
        </>
      </Router>
    );
  }
}
export default App;
