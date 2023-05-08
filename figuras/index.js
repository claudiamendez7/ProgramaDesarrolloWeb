// Pedir al usuario que escoja una figura
var figura = prompt("¿Qué figura quieres calcular? Ingresa 'cuadrado', 'círculo' o 'triángulo'.");

// Declarar variables
var area, perimetro;

// Calcular el área y perímetro de la figura seleccionada
if (figura === "cuadrado") {
  var lado = parseFloat(prompt("Ingresa la longitud de un lado del cuadrado:"));
  area = lado * lado;
  perimetro = lado * 4;
} else if (figura === "círculo") {
  var radio = parseFloat(prompt("Ingresa el radio del círculo:"));
  area = Math.PI * radio ** 2;
  perimetro = 2 * Math.PI * radio;
} else if (figura === "triángulo") {
  var base = parseFloat(prompt("Ingresa la longitud de la base del triángulo:"));
  var altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
  area = (base * altura) / 2;
  perimetro = base * 3;
} else {
  alert("Figura inválida. Inténtalo de nuevo.");
}

// Mostrar los resultados en alertas
if (figura === "cuadrado" || figura === "círculo" || figura === "triángulo") {
  alert("Área de " + figura + " = " + area);
  alert("Perímetro de " + figura + " = " + perimetro);
}