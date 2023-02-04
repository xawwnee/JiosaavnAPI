module.exports = function (res) {
  //res.setHeader("Access-Control-Allow-Origin", "https://*.radiobollyfm.in");
  var allowedDomains = ['https://*.radiobollyfm.in','http://localhost:3000' ];
  var origin = req.headers.origin;
  if(allowedDomains.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("server", "https://radiobollyfm.in");
  res.setHeader("Made-For", "radiobollyfm, https://radiobollyfm.in");
  return;
};
