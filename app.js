const j = b;
function b(c, d) {
  const e = a();
  return (
    (b = function (f, g) {
      f = f - 0xf2;
      let h = e[f];
      return h;
    }),
    b(c, d)
  );
}
(function (c, d) {
  const i = b,
    e = c();
  while (!![]) {
    try {
      const f =
        (-parseInt(i(0x106)) / 0x1) * (parseInt(i(0x10c)) / 0x2) +
        (parseInt(i(0x129)) / 0x3) * (parseInt(i(0x113)) / 0x4) +
        (-parseInt(i(0xfd)) / 0x5) * (parseInt(i(0xf4)) / 0x6) +
        (-parseInt(i(0xfa)) / 0x7) * (-parseInt(i(0x121)) / 0x8) +
        parseInt(i(0xff)) / 0x9 +
        (parseInt(i(0xfc)) / 0xa) * (parseInt(i(0x12a)) / 0xb) +
        (-parseInt(i(0x124)) / 0xc) * (parseInt(i(0x119)) / 0xd);
      if (f === d) break;
      else e["push"](e["shift"]());
    } catch (g) {
      e["push"](e["shift"]());
    }
  }
})(a, 0xd1726);
const formDOM = document["querySelector"](".form-input"),
  inputDOM = document[j(0xf5)](j(0x108)),
  submitDOM = document[j(0xf5)](j(0x115)),
  rowDOM = document[j(0xf5)](j(0x104)),
  errorMessage = document[j(0xf5)](j(0x126));
let resultGPA = document[j(0xf5)](j(0xf7)),
  totalCredHrs = document[j(0xf5)](j(0x103));
formDOM[j(0x117)]("submit", (c) => {
  const k = j;
  c["preventDefault"]();
  const d = letterGradeInputDOM[k(0x128)];
  console[k(0x10a)](d);
});
function computeSemesterGPA() {
  const l = j,
    c = document["querySelectorAll"](l(0x127)),
    d = document[l(0xfe)](".credit-hours");
  let e = 0x0,
    f = 0x0;
  for (let h = 0x0; h < d[l(0x112)]; h++) {
    d[h][l(0x128)] === "" &&
      c[h][l(0x128)][l(0xf2)]() === "" &&
      ((d[h][l(0x128)] = l(0xf9)), (c[h]["value"] = "")),
      (e +=
        parseFloat(d[h][l(0x128)]) * calcGradeScale(c[h]["value"][l(0xf2)]())),
      (f += parseFloat(d[h][l(0x128)]));
  }
  let g = (e[l(0x11e)](0x2) / f)[l(0x11e)](0x2);
  return (
    (resultGPA["innerHTML"] =
      "<h4\x20class=\x22sem-gpa\x22>Your\x20Semester\x20GPA\x20is:" +
      g +
      l(0x11c) +
      f +
      l(0x101)),
    g
  );
}
submitDOM[j(0x117)]("click", () => {
  computeSemesterGPA();
}),
  rowDOM["addEventListener"]("click", () => {
    addRow();
  });
function addRow() {
  const m = j,
    c = document["createElement"]("div");
  c[m(0x111)]("class", m(0x110));
  const d = document["createElement"](m(0x11b)),
    e = document[m(0x105)](m(0x11b)),
    f = document["createElement"](m(0x11b));
  c[m(0x122)](createClass(d)),
    c["appendChild"](createCreditHours(e)),
    c["appendChild"](createLetterGrade(f)),
    formDOM["appendChild"](c);
}
const createClass = (c) => {
    const n = j;
    c[n(0x111)](n(0x11f), n(0xf6));
    const d = document[n(0x105)](n(0x10e));
    return (
      d["setAttribute"](n(0x11f), n(0xf8)),
      d[n(0x111)](n(0x116), "Enter\x20Class"),
      c[n(0x122)](d),
      c
    );
  },
  createCreditHours = (c) => {
    const o = j;
    c["setAttribute"](o(0x11f), o(0xf6));
    const d = document[o(0x105)](o(0x10e));
    return (
      d[o(0x111)](o(0x11f), o(0x10f)),
      d[o(0x111)](o(0x125), "4"),
      d[o(0x111)](o(0x116), o(0x10b)),
      d[o(0x111)](o(0x10d), "0"),
      c[o(0x122)](d),
      c
    );
  },
  createLetterGrade = (c) => {
    const p = j;
    c[p(0x111)]("class", p(0xf6));
    const d = document[p(0x105)]("input");
    return (
      d[p(0x111)]("type", p(0x12b)),
      d[p(0x111)](p(0x11f), p(0x11a)),
      d[p(0x111)]("maxlength", "2"),
      d[p(0x111)](p(0x116), p(0x10b)),
      d["setAttribute"](p(0x10d), "0"),
      c[p(0x122)](d),
      c
    );
  };
function a() {
  const t = [
    "input",
    "user-input\x20credit-hours",
    "input-container",
    "setAttribute",
    "length",
    "11752mNGkTW",
    "2.33",
    ".submit-input",
    "placeholder",
    "addEventListener",
    "1.67",
    "7600723Dmhitv",
    "user-input\x20letter-grade",
    "div",
    "</h4><p>Total\x20Credit\x20Hours:",
    "1.00",
    "toFixed",
    "class",
    "0.67",
    "3615512AsrcjS",
    "appendChild",
    "innerHTML",
    "24hfYhrM",
    "maxlength",
    ".error",
    ".letter-grade",
    "value",
    "204PgClpH",
    "41085kDbGAz",
    "text",
    "toUpperCase",
    "4.00",
    "12KWjetI",
    "querySelector",
    "input-content",
    ".results-container",
    "user-input\x20class",
    "0.00",
    "21dVdzNL",
    "3.67",
    "230MMdoct",
    "648835NOBLoE",
    "querySelectorAll",
    "6798015rlMPCJ",
    "2.00",
    "</p>",
    "1.33",
    ".total-creds",
    ".add-row",
    "createElement",
    "8467qFFYOS",
    "3.33",
    ".user-input",
    "textContent",
    "log",
    "---",
    "26HaoxYV",
    "min",
  ];
  a = function () {
    return t;
  };
  return a();
}
function displayErrorMessage() {
  const q = j;
  (errorMessage[q(0x109)] =
    "Error!\x20Check\x20Input\x20Values\x20And\x20Try\x20Again..."),
    setTimeout(() => {
      clearErrorMessage();
    }, 0x3e8);
}
function clearErrorMessage() {
  const r = j;
  errorMessage[r(0x123)] = "";
}
function calcGradeScale(c) {
  const s = j;
  switch (c) {
    case "":
      c = s(0xf9);
      break;
    case "A+":
      (c = "4.00"), clearErrorMessage();
      break;
    case "A":
      (c = s(0xf3)), clearErrorMessage();
      break;
    case "A-":
      (c = s(0xfb)), clearErrorMessage();
      break;
    case "B+":
      (c = s(0x107)), clearErrorMessage();
      break;
    case "B":
      (c = "3.00"), clearErrorMessage();
      break;
    case "B-":
      (c = "2.67"), clearErrorMessage();
      break;
    case "C+":
      (c = s(0x114)), clearErrorMessage();
      break;
    case "C":
      (c = s(0x100)), clearErrorMessage();
      break;
    case "C-":
      (c = s(0x118)), clearErrorMessage();
      break;
    case "D+":
      (c = s(0x102)), clearErrorMessage();
      break;
    case "D":
      (c = s(0x11d)), clearErrorMessage();
      break;
    case "D-":
      (c = s(0x120)), clearErrorMessage();
      break;
    case "F":
      (c = s(0xf9)), clearErrorMessage();
      break;
    default:
      displayErrorMessage();
      break;
  }
  return parseFloat(c);
}
