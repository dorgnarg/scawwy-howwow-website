if (window.matchMedia("(max-width: 840px)").matches) {
  $("#flipbook").turn({
    width: 420,
    height: 649,
    autoCenter: true,
    display: "single"
  });

} else if (window.matchMedia("(max-width: 767px)").matches) {
  $("#flipbook").turn({
    width: 350,
    height: 541,
    autoCenter: true,
    display: "single"
  });
} else {
  $("#flipbook").turn({
    width: 840,
    height: 650,
    autoCenter: true,
  });
}
