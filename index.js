const massage = `write language like want to speak
1) Ukraine - ua
2) English- en
3) Poland - pl
4) Spainish - es
`;

const lang = prompt(massage);

switch (lang) {
  case "ua":
  case "1":
  case "ukraine":
    alert("Привiт");
    break;
  case "en":
  case "2":
  case "english":
    alert("Hello");
    break;
  case "pl":
  case "3":
  case "poland":
    alert("Cześć");
    break;
  case "es":
  case "4":
  case "spanish":
    alert("Hola");
    break;
  default:
    alert("launguage not support");
    break;
}

// if (lang === "ua") {
//   alert("Привiт");
// } else if (lang === "en") {
//   alert("Hello");
// } else if (lang === "pl") {
//   alert("Cześć");
// } else if (lang === "es") {
//   alert("Hola");
// } else {
//   alert("launguage not support");
// }
