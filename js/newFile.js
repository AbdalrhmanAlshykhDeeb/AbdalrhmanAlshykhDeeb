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
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    if (products[i] === 'Pen') {
        break;
    }
}
