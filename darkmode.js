const n = b;
(function (c, d) {
  const k = b,
    e = c();
  while (!![]) {
    try {
      const f =
        (-parseInt(k(0x97)) / 0x1) * (parseInt(k(0xaf)) / 0x2) +
        (-parseInt(k(0x9d)) / 0x3) * (-parseInt(k(0xa8)) / 0x4) +
        -parseInt(k(0xb3)) / 0x5 +
        parseInt(k(0xa3)) / 0x6 +
        (parseInt(k(0x9b)) / 0x7) * (-parseInt(k(0xa7)) / 0x8) +
        parseInt(k(0x9f)) / 0x9 +
        (-parseInt(k(0xa9)) / 0xa) * (-parseInt(k(0xb0)) / 0xb);
      if (f === d) break;
      else e["push"](e["shift"]());
    } catch (g) {
      e["push"](e["shift"]());
    }
  }
})(a, 0x59184);
function W() {
  const l = b,
    c = [
      l(0xa4),
      l(0xa1),
      l(0xaa),
      l(0xb2),
      "querySelector",
      l(0xa6),
      l(0xb8),
      l(0xb7),
      l(0x9e),
      "199505thUmxC",
      l(0xab),
      "getItem",
      l(0x98),
      l(0xad),
      "addEventListener",
      l(0xb1),
      l(0xa0),
      l(0xac),
      l(0x99),
      "contains",
      l(0x9a),
      "MOuse",
      "2757022ZirwFT",
      l(0x9c),
      "1974688NdKaXP",
      l(0xa5),
      l(0xb6),
      l(0xb4),
      l(0xb5),
    ];
  return (
    (W = function () {
      return c;
    }),
    W()
  );
}
const E = v;
(function (c, e) {
  const m = b,
    g = v,
    h = c();
  while (!![]) {
    try {
      const i =
        parseInt(g(0x122)) / 0x1 +
        (parseInt(g(0x11a)) / 0x2) * (parseInt(g(0x11f)) / 0x3) +
        -parseInt(g(0x10b)) / 0x4 +
        (-parseInt(g(0x10d)) / 0x5) * (parseInt(g(0x123)) / 0x6) +
        -parseInt(g(0x115)) / 0x7 +
        parseInt(g(0x11c)) / 0x8 +
        parseInt(g(0x124)) / 0x9;
      if (i === e) break;
      else h["push"](h[m(0xae)]());
    } catch (j) {
      h["push"](h[m(0xae)]());
    }
  }
})(W, 0xe15a8);
function a() {
  const s = [
    "4027815mXuFdQ",
    "hide",
    "253328AQruLm",
    "querySelector",
    "1289520tBRsPp",
    ".fa-sun",
    "mouseover",
    ".fa-moon",
    "16HMfUBc",
    "16WPUMPl",
    "2410DwmPYa",
    "138tKcyYH",
    "dark-mode",
    "1586914iYHZpg",
    "add",
    "shift",
    "254iQuVqU",
    "59213naOgsM",
    "isDarkMode",
    "15297849GVNiYt",
    "3492855MYeRzR",
    "3BHhpIf",
    "disabled",
    "documentElement",
    "6043852FEPOBw",
    "click",
    "4559IlSLkm",
    "enabled",
    "classList",
    "remove",
    "2343775wboCAH",
    "target",
    "264291syvksx",
    "setItem",
  ];
  a = function () {
    return s;
  };
  return a();
}
const darkModeSun = document[n(0xa2)](E(0x121)),
  darkModeMoon = document[E(0x125)](E(0x109)),
  docBody = document[E(0x11e)],
  darkModeFeature = localStorage[E(0x10f)](E(0x113));
function v(c, d) {
  const e = W();
  return (
    (v = function (g, h) {
      g = g - 0x109;
      let i = e[g];
      return i;
    }),
    v(c, d)
  );
}
function b(c, d) {
  const e = a();
  return (
    (b = function (f, g) {
      f = f - 0x97;
      let h = e[f];
      return h;
    }),
    b(c, d)
  );
}
darkModeFeature === E(0x110) && darkModeOn(),
  (darkModeSun[E(0x112)](E(0x11d), () => {
    const o = n,
      c = E;
    console["log"](c(0x119)),
      (darkModeFeature == null || darkModeFeature === o(0xb5)) &&
        localStorage[c(0x10c)](c(0x113), c(0x120));
  }),
  darkModeSun[E(0x112)](E(0x10a), (c) => {
    const p = n,
      d = E;
    !c[d(0x11b)][d(0x116)][d(0x117)](d(0x114)) &&
      (c[d(0x11b)][d(0x116)]["add"](d(0x114)),
      darkModeMoon[p(0x99)][d(0x118)](d(0x114)),
      darkModeOn());
  }),
  darkModeMoon[E(0x112)](E(0x10a), (c) => {
    const q = n,
      d = E;
    !c[q(0x9c)][d(0x116)][d(0x117)](q(0xa0)) &&
      (c[d(0x11b)][q(0x99)][q(0xad)](d(0x114)),
      darkModeSun[q(0x99)][d(0x118)](d(0x114)),
      darkModeOff());
  }));
function darkModeOn() {
  const c = E;
  docBody[c(0x116)]["add"](c(0x10e)),
    darkModeSun[c(0x116)][c(0x111)](c(0x114)),
    darkModeMoon[c(0x116)][c(0x118)](c(0x114)),
    localStorage["setItem"](c(0x113), c(0x110));
}
function darkModeOff() {
  const r = n,
    c = E;
  docBody[c(0x116)][c(0x118)](c(0x10e)),
    darkModeSun[r(0x99)][c(0x118)](r(0xa0)),
    darkModeMoon[r(0x99)][c(0x111)](c(0x114)),
    localStorage[c(0x10c)](r(0xb1), r(0xb5));
}
