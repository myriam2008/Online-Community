import app from "./app";
import initializeDatabase from "./db";
import { async } from "q";
import { EROFS } from "constants";
const path = require("path");
import multer from "multer";

var express = require("express");
// var app = express();

// Server port
var HTTP_PORT = 8080;
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});

// Insert here other API endpoints
// app.get("/articles", async (req, res) => {
//   console.log("hii");
//   const articles = await controller.getArticlesList();
//   console.log(articles);
//   res.json({
//     data: articles
//   });
// });

// app.get("/Articles_Id", async (req, res) => {
//   console.log("hii");
//   const articles = await controller.getArticlesList();
//   console.log(articles);
//   res.json({
//     data: articles
//   });
// });

// Default response for any other request
app.use(function(req, res) {
  res.status(404);
});

// const start = async () => {
//   const controller = await initializeDatabase();

//   app.get("/events", async (req, res) => {
//     console.log("hii");
//     const events = await controller.getEventsList();
//     console.log(events);
//     res.json({
//       data: events
//     });
//   });

//   app.post("/events/add", async (req, res) => {
//     console.log("hi");
//     try {
//       const { Image, Title, Description, Date, Status } = req.body;
//       const events = await controller.addEvent({
//         Image,
//         Title,
//         Description,
//         Date,
//         Status
//       });
//       res.json({ success: true, events });
//     } catch (err) {
//       throw new Error("error");
//     }
//   });

//   app.get("/", (req, res) => res.send("ok"));
//   app.get("/post", async (req, res) => {
//     const posts = await controller.getPostList();
//     console.log(posts);
//     res.json({
//       data: posts
//     });
//   });

//   app.post("/post/add", async (req, res) => {
//     console.log("hi");
//     try {
//       const { Subject, Text, Date, Parent_Id } = req.body;
//       const events = await controller.addEvent({
//         Subject,
//         Text,
//         Date,
//         Parent_Id
//       });
//       res.json({ success: true, events });
//     } catch (err) {
//       throw new Error("error");
//     }
//   });

//   app.get("/articles", async (req, res) => {
//     console.log("hii");
//     const articles = await controller.getArticlesList();
//     console.log(articles);
//     res.json({
//       data: events
//     });
//   });

//   app.post("/articles/add", async (req, res) => {
//     console.log("hi");
//     try {
//       const { Author, Title, Text, Image, Status } = req.body;
//       const articles = await controller.addArticles({
//         Author,
//         Title,
//         Text,
//         Image,
//         Status
//       });
//       res.json({ success: true, articles });
//     } catch (err) {
//       throw new Error("error");
//     }
//   });

//   app.get("/user", async (req, res) => {
//     console.log("hii");
//     const articles = await controller.getUserList();
//     console.log(user);
//     res.json({
//       data: user
//     });
//   });

//   app.post("/user/add", async (req, res) => {
//     console.log("hi");
//     try {
//       const { Name, Email, Password } = req.body;
//       const articles = await controller.addArticles({
//         Name,
//         Email,
//         Password
//       });
//       res.json({ success: true, user });
//     } catch (err) {
//       throw new Error("error");
//     }
//   });

//   app.get("/comments", async (req, res) => {
//     console.log("hii");
//     const articles = await controller.getCommentsList();
//     console.log(user);
//     res.json({
//       data: comments
//     });
//   });

//   app.post("/comments/add", async (req, res) => {
//     console.log("hi");
//     try {
//       const { Text, Date } = req.body;
//       const articles = await controller.addComments({
//         Text,
//         Date
//       });
//       res.json({ success: true, comments });
//     } catch (err) {
//       throw new Error("error");
//     }
//   });
// };

// start();
// module.exports = app;
// app.listen(8080, () => console.log("server listening on port 8080"));
