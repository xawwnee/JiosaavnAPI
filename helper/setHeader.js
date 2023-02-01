module.exports = function (res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("Open-Source", "https://github.com/xawwnee/JiosaavnAPI");
  res.setHeader("Made-By", "xawwnee, https://github.com/xawwnee");
  return;
};
