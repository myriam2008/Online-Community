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
  var sql = "select * from Post";
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
  var sql = "select * from Post where ID = ?";
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
  if (!req.body.Subject) {
    errors.push("No Subject specified");
  }
  if (!req.body.Text) {
    errors.push("No Text specified");
  }
  if (!req.body.Date) {
    errors.push("No Date specified");
  }
  if (!req.body.Parent_Id) {
    errors.push("No Parent_Id specified");
  }

  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  var data = {
    Subject: req.body.Subject,
    Text: req.body.Text,
    Date: req.body.Date,
    Parent_Id: req.body.Parent_Id
  };
  var sql =
    "INSERT INTO Post (Subject, Text, Date, Parent_Id) VALUES (?,?,?,?)";
  var params = [data.Subject, data.Text, data.Date, data.Parent_Id];
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
    Subject: req.body.Subject,
    Text: req.body.Text,
    Date: req.body.Date,
    Parent_Id: req.body.Parent_Id
  };
  db.run(
    `UPDATE Post set
     Subject: COALESCE(?,Subject),
    Text: COALESCE(?,Text),
    Date: COALESCE(?,Date),
    Parent_Id: COALESCE(?,Parent_Id),
    WHERE ID = ?`,
    [data.Subject, data.Text, data.Date, data.Parent_Id],
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
  db.run("DELETE FROM Post WHERE ID = ?", req.params.id, function(err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({ message: "deleted", changes: this.changes });
  });
});

// export default app;
module.exports = router;
