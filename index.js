const E = v;
(function (s, f) {
  const p = v,
    q = s();
  while (!![]) {
    try {
      const P =
        parseInt(p(0x93)) / 0x1 +
        (-parseInt(p(0x8f)) / 0x2) * (-parseInt(p(0x9b)) / 0x3) +
        parseInt(p(0x92)) / 0x4 +
        -parseInt(p(0x91)) / 0x5 +
        -parseInt(p(0x9c)) / 0x6 +
        (-parseInt(p(0x9e)) / 0x7) * (-parseInt(p(0x8e)) / 0x8) +
        (-parseInt(p(0x87)) / 0x9) * (parseInt(p(0x97)) / 0xa);
      if (P === f) break;
      else q["push"](q["shift"]());
    } catch (d) {
      q["push"](q["shift"]());
    }
  }
})(W, 0xd297d);
function W() {
  const j = [
    "8FXXlqy",
    "1522vDbdpv",
    "querySelector",
    "2657145zLhcQt",
    "4805772PSKaeJ",
    "203851xneusq",
    "contains",
    ".fa-bars",
    "log",
    "20sHikXg",
    "hide-modal-menu",
    ".hide-toggle",
    ".modal-menu",
    "3039gMzJxa",
    "1052274WuhbJi",
    "addEventListener",
    "9030938fsmpqa",
    "hide-toggle",
    "8536158HXcIGK",
    "click",
    "target",
    ".fa-xmark",
    "classList",
    "remove",
    "add",
  ];
  W = function () {
    return j;
  };
  return W();
}
const toggleBars = document[E(0x90)](E(0x95)),
  toggleClose = document[E(0x90)](E(0x8a)),
  modalMenu = document[E(0x90)](E(0x9a));
function v(s, f) {
  const q = W();
  return (
    (v = function (P, d) {
      P = P - 0x87;
      let p = q[P];
      return p;
    }),
    v(s, f)
  );
}
toggleBars[E(0x9d)]("click", (s) => {
  const S = E;
  console[S(0x96)](s["target"]),
    !s[S(0x89)]["classList"]["contains"](S(0x99)) &&
      (s[S(0x89)][S(0x8b)][S(0x8d)](S(0x9f)),
      toggleClose[S(0x8b)][S(0x8c)](S(0x9f)),
      modalMenu[S(0x8b)][S(0x8c)](S(0x98)));
}),
  toggleClose[E(0x9d)](E(0x88), (s) => {
    const T = E;
    console["log"](s[T(0x89)]),
      !s["target"][T(0x8b)][T(0x94)](T(0x99)) &&
        (s[T(0x89)][T(0x8b)][T(0x8d)](T(0x9f)),
        toggleBars[T(0x8b)][T(0x8c)]("hide-toggle"),
        modalMenu[T(0x8b)]["add"](T(0x98)));
  });
