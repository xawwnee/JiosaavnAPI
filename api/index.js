const package = require("../package.json");

module.exports = async (req, res) => {
  res.json({
    alive: true,
    made_for: "https://radiobollyfm.in",
    version: package.version,
    //docs: `${process.env.APP_URL || "http://localhost:3000"}/docs`,
  });
};
