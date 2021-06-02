const express = require("express");

const router = express.Router();

const genFakeClass = require("../services/genFakeClass");

router.get("/", async (req, res) => {
  let per_page = parseInt(req.headers["per_page"]) || 100;
  if (per_page > 500) per_page = 500;
  const page = parseInt(req.headers["page"]) || 1;
  const total_pages = parseInt(req.headers["total_pages"]) || 3;
  let classes = [];

  if (page <= total_pages && page > 0) {
    for (let x = 0; x < per_page; x++) {
      classes.push(genFakeClass());
    }
  }

  res.json({
    classes: classes,
    meta: {
      current_page: page,
      next_page: page === total_pages ? page : page + 1,
      total_pages: total_pages,
      total_count: total_pages * per_page,
      per_page: per_page,
    },
  });
});

module.exports = router;
