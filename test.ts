// interface circle {
//   kind: 'circle',
//   dimension: 2;
// }
// interface square {
//   kind: square,
//   side: 4;
// }

// type Shape = circle | square;

// function radius(shape: Shape): shape is circle{
// return shape.kind === 'circle'
// }

// function rady(shape: Shape): shape is square{
//     return false
// }

// let shapes: shape = {
//   kind: "square",
//   dimension: 1,
//   kind: "circle",
//   side: 4,
// };

//document.addEventListener('timeupdate',() =>console.log('hahahahaha'))
 function test<T extends string | number>(str: T): T{
  console.log(str)
  return str
 }
 test<number>(23)
 test<string>('er')