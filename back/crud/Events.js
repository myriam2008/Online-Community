import express from "express";

const sqlite3 = require("sqlite3").verbose();

const router = express.Router();

let db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE, err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the db database.");
});

// *******Read Events*****//

router.get("/", (req, res, next) => {
  var sql = "select * from Events where status = 'accepted'";
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
  var sql = "select * from Events where ID = ?";
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
  if (!req.body.Image) {
    errors.push("No Image specified");
  }
  if (!req.body.Title) {
    errors.push("No Title specified");
  }
  if (!req.body.Description) {
    errors.push("No Description specified");
  }
  if (!req.body.Date) {
    errors.push("No Date specified");
  }
  if (!req.body.Status) {
    errors.push("No Status specified");
  }

  if (errors.length) {
    res.status(400).json({ error: errors.join(",") });
    return;
  }

  var data = {
    Image: req.body.Image,
    Title: req.body.Title,
    Description: req.body.Description,
    Date: req.body.Date,
    Status: req.body.Status
  };
  var sql =
    "INSERT INTO Events (Image, Title, Description, Date, Status) VALUES (?,?,?,?,?)";
  var params = [
    data.Image,
    data.Title,
    data.Description,
    data.Date,
    data.Status
  ];
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

// *******Update User_Account*****//           Image, Title, Description, Date, Status

router.patch("/:id", (req, res, next) => {
  var data = {
    Image: req.body.Image,
    Title: req.body.Title,
    Description: req.body.Description,
    Date: req.body.Date,
    Status: req.body.Status
  };
  db.run(
    `UPDATE events set
     Image: COALESCE(?,Image),
    Title: COALESCE(?,Title),
    Description: COALESCE(?,Description),
    Date: COALESCE(?,Date),
    Status: COALESCE(?,Status),
    WHERE ID = ?`,
    [
      data.Image,
      data.Title,
      data.Description,
      data.Date,
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

// *******Delete User_Account*****//

router.delete("/:id", (req, res, next) => {
  db.run("DELETE FROM Events WHERE ID = ?", req.params.id, function(
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
