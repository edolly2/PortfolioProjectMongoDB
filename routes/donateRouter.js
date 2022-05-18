const express = require("express");
const donateRouter = express.Router();

donateRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the donation options to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the foundation receiving the donation: ${req.body.name} in the amount of: $${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported");
  })
  .delete((req, res) => {
    res.end("Deleting all donations");
  });

donateRouter
  .route("/:donateId")

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(`Will send the donation details of: ${req.params.donateId} to you`);
  })

  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /donate/${req.params.donateId}`);
  })

  .put((req, res) => {
    res.write(`Updating the donation: ${req.params.donateId}\n`);
    res.end(`Will update the donation: ${req.body.name}
            in the amount of: $${req.body.description}`);
  })

  .delete((req, res) => {
    res.end(`Deleting donation: ${req.params.donateId}`);
  });

module.exports = donateRouter;
