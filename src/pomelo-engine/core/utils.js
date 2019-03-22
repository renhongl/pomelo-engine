export const randomColor = function() {
  let r = Number.parseInt(Math.random() * 256);
  let g = Number.parseInt(Math.random() * 256);
  let b = Number.parseInt(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 1)`;
};

export function degreesToRadians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}
