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
  var sql = "select * from User";
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
  var sql = "select * from User where ID = ?";
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
  if (!req.body.Name) {
    errors.push("No Name specified");
  }
  if (!req.body.Email) {
    errors.push("No Email specified");
  }
  if (!req.body.Password) {
    errors.push("No Password specified");
  }

  // if (errors.length) {
  //   res.status(400).json({ error: errors.join(",") });
  //   return;
  // }

  var data = {
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password
  };
  console.log(data);
  var sql = "INSERT INTO User (Name, Email, Password) VALUES (?,?,?)";
  var params = [data.Name, data.Email, data.Password];
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
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password
  };
  db.run(
    `UPDATE User set
     Name: COALESCE(?,Name),
    Email: COALESCE(?,Email),
    Password: COALESCE(?,Password),
 
    WHERE ID = ?`,
    [data.Name, data.Email, data.Password],
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
  db.run("DELETE FROM User WHERE ID = ?", req.params.id, function(err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({ message: "deleted", changes: this.changes });
  });
});

// export default app;
module.exports = router;
