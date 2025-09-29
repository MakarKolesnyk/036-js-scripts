const massage = `write language like want to speak
Ukraine - ua
English- en
Poland - pl
Spainish - es
`;

const lang = prompt(massage);

switch (lang) {
  case "ua":
    alert("Привiт");
    break;
  case "en":
    alert("Hello");
    break;
  case "pl":
    alert("Cześć");
    break;
  case "es":
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
