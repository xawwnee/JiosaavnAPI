module.exports = function (res) {
  res.setHeader("Access-Control-Allow-Origin", "https://*.radiobollyfm.in");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("server", "https://radiobollyfm.in");
  res.setHeader("Made-For", "radiobollyfm, https://radiobollyfm.in");
  return;
};
