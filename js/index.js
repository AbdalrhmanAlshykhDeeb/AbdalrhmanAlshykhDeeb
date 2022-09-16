// let myFriends = [1, 2, 'Ahmed', 'Khaled', 3, 'Ali', 'Hossen', 'Mourad', 'Jafar'];

// let onlayName = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === 'string') {
//     onlayName.push(myFriends[i]);
//   }
// }
// console.log('#'.repeat(20));
// console.log(onlayName);
// console.log('#'.repeat(20))
// // let b = ['Saeed', 'Hssan', 'ouac', 'ajbczib', 'jaonz', 'svnz'];

// // for (let i = 0; i < b.length; i++) {
// //   console.log(b[i]);
// // }



// let i = 0;


// for (; ;) {
//     console.log(products[i]);
//     i++;
//     if (i === products.length) break;
// }
// for (; i < products.length;) {
//     console.log(products[i]);
//     i++;
// }
// for (let i = 0; i < products.length; i++) {
//   console.log('#'.repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log('#'.repeat(15));
//   console.log('Colors:')
//   for (let j = 0; j < colors.length; j++){
//     console.log(`_ ${colors[j]}`)
//   }
//   for (let k = 0; k < models.length; k++){
//     console.log(`_ ${models[k]}`)
//   }
// }

///break loop
// for (let i = 0; i < products.length; i++) {
//   if (products[i] === 'Pen') {
//     break
//   }
//   console.log(products[i]);
// }


// continue loop
// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === 'number') {
//     continue;
//   }
//   console.log(products[i]);
// }

///label loop
// mainLoop:for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(colors[j]);
//     if (colors[j] === 'Green') {
//       break mainLoop
//     }
//   }
// }


// let products = ['Keyboard', 'Mouse', 'Pen', 'pad', 'Moniter', 'Aplle', 'Samsung'];

// let colors = ['Red', 'Green', 'Black', 'welloe'];

// let showCount = 5;

// document.write(`<h1>Show ${ showCount } Count</h1>`);

// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`);
//     document.write(`<h2>[${ i + 1 }] ${ products[i] }</h2>`);
//     for (let j = 0; j < colors.length ; j++){
//         document.write(`<p> ${colors[j]} </p>`)
//     }
//     document.write(`<p>${colors.join(' | ')}</p>`)
//     document.write(`</div>`);
// }




// let products = ['Keyboard', 'Mouse', 'Pen', 'pad', 'Moniter', 'Aplle', 'Samsung'];


// let index = 0;

// while (index < products.length) {
//     console.log(products[index]);
//     index++;
// }

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
while (index < friends.length) {
    if (typeof friends[index] === 'number' || friends[index].startsWith('A')) {
     index++   
     continue
    }
    console.log(`${++counter} => ${friends[index]}`)
    index++
}


// Output
"1 => Sayed";
"2 => Mahmoud";