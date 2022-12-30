function W() {
  const l = [
    ".fa-sun",
    "253328AQruLm",
    "138tKcyYH",
    "15297849GVNiYt",
    "querySelector",
    ".fa-moon",
    "click",
    "6043852FEPOBw",
    "setItem",
    "199505thUmxC",
    "dark-mode",
    "getItem",
    "enabled",
    "add",
    "addEventListener",
    "isDarkMode",
    "hide",
    "1586914iYHZpg",
    "classList",
    "contains",
    "remove",
    "MOuse",
    "2757022ZirwFT",
    "target",
    "1974688NdKaXP",
    "mouseover",
    "documentElement",
    "3BHhpIf",
    "disabled",
  ];
  W = function () {
    return l;
  };
  return W();
}
const E = v;
(function (s, f) {
  const p = v,
    q = s();
  while (!![]) {
    try {
      const P =
        parseInt(p(0x122)) / 0x1 +
        (parseInt(p(0x11a)) / 0x2) * (parseInt(p(0x11f)) / 0x3) +
        -parseInt(p(0x10b)) / 0x4 +
        (-parseInt(p(0x10d)) / 0x5) * (parseInt(p(0x123)) / 0x6) +
        -parseInt(p(0x115)) / 0x7 +
        parseInt(p(0x11c)) / 0x8 +
        parseInt(p(0x124)) / 0x9;
      if (P === f) break;
      else q["push"](q["shift"]());
    } catch (d) {
      q["push"](q["shift"]());
    }
  }
})(W, 0xe15a8);
const darkModeSun = document["querySelector"](E(0x121)),
  darkModeMoon = document[E(0x125)](E(0x109)),
  docBody = document[E(0x11e)],
  darkModeFeature = localStorage[E(0x10f)](E(0x113));
function v(s, f) {
  const q = W();
  return (
    (v = function (P, d) {
      P = P - 0x109;
      let p = q[P];
      return p;
    }),
    v(s, f)
  );
}
darkModeFeature === E(0x110) && darkModeOn();
darkModeSun[E(0x112)](E(0x11d), () => {
  const S = E;
  console["log"](S(0x119)),
    (darkModeFeature == null || darkModeFeature === "disabled") &&
      localStorage[S(0x10c)](S(0x113), S(0x120));
}),
  darkModeSun[E(0x112)](E(0x10a), (s) => {
    const T = E;
    !s[T(0x11b)][T(0x116)][T(0x117)](T(0x114)) &&
      (s[T(0x11b)][T(0x116)]["add"](T(0x114)),
      darkModeMoon["classList"][T(0x118)](T(0x114)),
      darkModeOn());
  }),
  darkModeMoon[E(0x112)](E(0x10a), (s) => {
    const j = E;
    !s["target"][j(0x116)][j(0x117)]("hide") &&
      (s[j(0x11b)]["classList"]["add"](j(0x114)),
      darkModeSun["classList"][j(0x118)](j(0x114)),
      darkModeOff());
  });
function darkModeOn() {
  const b = E;
  docBody[b(0x116)]["add"](b(0x10e)),
    darkModeSun[b(0x116)][b(0x111)](b(0x114)),
    darkModeMoon[b(0x116)][b(0x118)](b(0x114)),
    localStorage["setItem"](b(0x113), b(0x110));
}
function darkModeOff() {
  const y = E;
  docBody[y(0x116)][y(0x118)](y(0x10e)),
    darkModeSun["classList"][y(0x118)]("hide"),
    darkModeMoon["classList"][y(0x111)](y(0x114)),
    localStorage[y(0x10c)]("isDarkMode", "disabled");
}
