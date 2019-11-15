import express from "express";

const sqlite3 = require("sqlite3").verbose();
const router = express.Router();

let db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE, err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the db database.");
});

// *******Read User_Account*****//

router.get("/", (req, res, next) => {
  var sql = "select * from Articles where status = 'accepted'";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows
    });
  });
});

router.get("/:id", (req, res, next) => {
  var sql = "select * from Articles where Articles_Id = ?";
  var params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row
    });
  });
});

// *******Create User_Account*****//

router.post("/", (req, res, next) => {
  var errors = [];
  console.log(req.body);
  if (!req.body.Author) {
    errors.push("No Author specified");
  }

  if (!req.body.Title) {
    errors.push("No Title specified");
  }
  if (!req.body.Text) {
    errors.push("No Text specified");
  }
  if (!req.body.Image) {
    errors.push("No Image specified");
  }
  if (!req.body.Status) {
    errors.push("No Status specified");
  }
  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  var data = {
    Author: req.body.Author,
    Title: req.body.Title,
    Text: req.body.Text,
    Image: req.body.Image,
    Status: req.body.Status
  };
  var sql =
    "INSERT INTO Articles (Author, Title, Text, Image, Status) VALUES (?,?,?,?,?)";
  var params = [data.Author, data.Title, data.Text, data.Image, data.Status];
  db.run(sql, params, function(err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: data,
      ID: this.lastID
    });
  });
});

// *******Update *****//

router.patch("/:id", (req, res, next) => {
  var data = {
    Author: req.body.Author,
    Title: req.body.Title,
    Text: req.body.Text,
    Image: req.body.Image,
    Status: req.body.Status
  };
  db.run(
    `UPDATE Articles set
     Author: COALESCE(?,Author),
    Title: COALESCE(?,Title),
    Text: COALESCE(?,Text),
    Image: COALESCE(?,Image),
    Status: COALESCE(?,Status),
    WHERE ID = ?`,
    [
      data.Author,
      data.Title,
      data.Text,
      data.Image,
      data.Status,
      req.params.id
    ],
    function(err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes
      });
    }
  );
});

// *******Delete *****//

router.delete("/:id", (req, res, next) => {
  db.run("DELETE FROM Articles WHERE ID = ?", req.params.id, function(
    err,
    result
  ) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({ message: "deleted", changes: this.changes });
  });
});
module.exports = router;
// export default app;
