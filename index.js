switch (confirm("Do u want leave from site?")) {
  case true:
    alert("Goodbye");
    break;
  case false:
    alert("Thanks");
  default:
    break;
}

confirm("Do u want leave from site?")
 ? alert("Goodbye")
 : alert("Thanks");
