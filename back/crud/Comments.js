import express from "express";

const sqlite3 = require("sqlite3").verbose();

const router = express.Router();

let db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE, err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the db database.");
});

// *******Read *****//

router.get("/comments", (req, res, next) => {
  var sql = "select * from comments";
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

router.get("/Articles/Articles_Id/Comments", (req, res, next) => {
  var sql = "select * from comments";
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

router.get("/comments/:id", (req, res, next) => {
  var sql = "select * from Comments where ID = ?";
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

router.get("/Articles/Articles_Id/Comments", (req, res, next) => {
  var sql = "select * from Comments  where Articles_Id ?";
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
  if (!req.body.Text) {
    errors.push("No Text specified");
  }
  if (!req.body.Date) {
    errors.push("No Date specified");
  }

  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  var data = {
    Text: req.body.Text,
    Date: req.body.Date
  };
  var sql = "INSERT INTO comments (Text, Date) VALUES (?,?)";
  var params = [data.Text, data.Date];
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

// *******Update User_Account*****//

router.patch("/:id", (req, res, next) => {
  var data = {
    Text: req.body.Text,
    Date: req.body.Date
  };
  db.run(
    `UPDATE Comments set
     Text: COALESCE(?,Text),
    Date: COALESCE(?,Date),
   
    WHERE ID = ?`,
    [data.Text, data.Date],
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

// *******Delete User_Account*****//

router.delete("/:id", (req, res, next) => {
  db.run("DELETE FROM comments WHERE ID = ?", req.params.id, function(
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

// export default app;
module.exports = router;
