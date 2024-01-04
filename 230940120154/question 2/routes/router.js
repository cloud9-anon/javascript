const express = require("express");
var router = express.Router();
var connection = require("../db/dbconnect");

router.get("/users", function (req, resp) {
  connection.query("select * from users", (err, data, fields) => {
    if (err) {
      console.log(err);
      resp.status(500).send("<h3>no data found</h3>");
    }
  });
});

router.post("/users/user/", function (req, resp) {
  connection.query(
    "insert into users values(?,?,?)",
    [req.body.name, req.body.gender, req.body.dob],
    (err, result) => {
      if (err) {
        console.log(err);
        resp.status(500).send("<h3>no data found</h3>");
      }
    }
  );
});

module.exports = router;
