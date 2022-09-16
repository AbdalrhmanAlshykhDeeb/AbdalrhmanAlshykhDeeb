/*1 > 9*/
// document.write("<h1>Elzero</h1>");

// document.querySelector("h1").style.color = "blue";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "Arial";

// console.log("%cElzero %cWeb %cSchool", "font-size: 40px; color:red","color:green; font-weight: bold; font-size: 40px","font-size:40px; color:white; background: blue;");


// console.group("group 1");
// console.log("massge 1");
// console.log("massge 2");
// console.group("child group 1");
// console.log("massge 1");
// console.log("massge 2");
// console.group("grand child group 1");
// console.log("massge 1");
// console.log("massge 2");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("group 2");
// console.log("massge 1");
// console.log("massge 2");

// console.table(["Ahmed", "Khaled", "Morad", "Jafer", "Sadek", "Kaseem"]);

// console.log("Iam In Console"); // stoped comment
// document.write("Iam In Page"); // stoped comment


/*
console.log("Iam In Console"); // stoped comment
document.write("Iam In Page"); // stoped comment

*/

/*17*/

// let theTitle = "Elzero", pageDescraption="Elzero Web School", pageDate="5/25";

// let card =
          
//           `<div>
//             <h3>${theTitle}</h3>
//             <p>${pageDescraption}</p>
//             <span>${pageDate}</span>
//           </div>`;
// document.write(card.repeat(4));

/*10 > 17*/


// let numberOne = 10;
// let numberTow = 20;

// console.log(numberOne + "" + numberTow);
// console.log(typeof (numberOne + "" + numberTow));
// console.log(`${numberOne}${numberTow}`);
// console.log(typeof`${numberOne}  ${numberTow}`);

// console.log(numberTow + "\n" +numberOne);
// console.log(`${numberTow}
// ${numberOne} `);

// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// console.log("`I\'m In \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n \+\+ With \+\+ \n \\\"\"\"\\\"\"\" \n \"\"Javascript\"\"`` ");

// console.log(`I'm In
// \\\\ Love \\\\ """ ''''
// ++ With ++
// \\"""\\'''
// "" Javascript ""\`\` `);

// let a = 21;
// let b = 20;
// let c = `${b}${a}`;
// console.log(`_${a}_${c}_${c}_${c}_${b}`);// _21_2021_2021_2021_20_;
// let a = 21;
// let b = 20;
// let c=`${b}${a}_`;

// result=c.repeat(3);

// console.log(`_${a}_${result}_${b}`);

// let a = 21;

// let b = 20;

// console.log('_' + (a + '_' + b).repeat(4) + '_');


// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e); //2000
// console.log(++e * ++g + -d + ++f)// 173

// let a = 10;
// let b = '20';
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
/* 

[++a] [+] [+b++] [+] [+c++] [-] [+a++]

[++a]
value: 11
Explain: pre increment

[+]
Explain: add operator

[+b++]
value: 20
Explain: post increment

[+]
Explain: add operator

[+c++]
value: 80
Explain: post increment

[-]
Explain: add operator

[+a++]
value: 11
Explain: post increment
*/
// console.log(11 + 20 + 80 - 11);
// console.log(++a + -b + +c++ - -a++ + +a);
/* 

[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]

[++a]
value: 13
Explain: pre increment

[+]
Explain: add operator

[-b]
value: -21
Explain: no increment

[+]
Explain: add operator

[+c++]
value: 81
Explain: post increment

[-]
Explain: add operator

[-a++]
value: -13
Explain: post increment

[+a]
value: 14
*/
// console.log(13 + -21 + 81 - -13 + 14);

// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/* 

[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a]

[--c]
value: 81
Explain: pre decrement

[+]
Explain: add operator

[+b]
value: 21
Explain: no increment

[+]
Explain: add operator

[--a]
value: 13
Explain: pre decrement

[*]
Explain: add operator

[+b++]
value: 21
Explain: post increment

[-]
Explain: add operator

[+b] 
value: 22
Explain: post increment

[*] 
Explain: add operatorExplain: post increment

[a]
value: 13
Explain: post increment

[+] 

[--a]
value: 12
Explain: post increment

[+true]
vlue: 1;
*/

// console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1);

// console.log(10 * 20 * 15 % 3 * 190 * 10 * 400);



// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(num ** num / num - num); // 6

// // Soultion Three
// console.log(++num * --num / --num); // 6

// // Soultion Four
// console.log(++num  * --num); // 6

// // Solution Five
// console.log(num * ++num); // 6

// // Solution Six
// console.log(num / num + ++num + true); // 6

// let num10 = "10";

// // Solution One
// console.log(+num10 + +num10); // 20

// // Solution Two
// console.log(+num10 * +num10 / +num10 + +num10); // 20

// // Solution Three
// console.log(+num10 / +num10 + --num10 + +num10 +true); // 20

// // Solution Four
// console.log(++num10 / ++num10 * num10  + --num10); // 20

// let points = 10;

// points += 3;
// // Write Your Code Here
// console.log(points); // 13

// points-= 5;
// // Write Your Code Here
// console.log(points); // 8;

// // Write Your Code Here
// console.log(points + +true + +true + +true + +true + +true); // 13

// // Write Your Code Here
// console.log(points - true - true); // 8;


// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.trunc(Math.min(a, b, d, c)));
// //a + d
// console.log(a ** Math.trunc(d))//10000
// console.log(Math.pow(a, Math.floor(d)))

// console.log(Math.trunc(d));//trunc Int 2
// console.log(Math.floor(d));// floor 2
// console.log(parseInt(d))// parseInt 2
// console.log(Math.round(d))// round d = 2.4 round value 2
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));//66.67 string

// console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2));//66.67 string

// console.log(Math.round(Math.trunc(b) / Math.ceil(d)));//67 Number

// console.log(Math.round(b) / Math.ceil(d));////67 Number


// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.trunc(Math.min(a, b, d, c)));
// //a + d
// console.log(a ** Math.trunc(d)); //10000
// console.log(Math.pow(a, Math.floor(d)));

// console.log(Math.trunc(d)); //trunc Int 2
// console.log(Math.floor(d)); // floor 2
// console.log(parseInt(d)); // parseInt 2
// console.log(Math.round(d)); // round d = 2.4 round value 2
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); //66.67 string

// console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); //66.67 string

// console.log(Math.round(Math.trunc(b) / Math.ceil(d))); //67 Number

// console.log(Math.round(b) / Math.ceil(d)); ////67 Number

// // Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(1e5); // 100000
// console.log(2e5 / 2); // 100000
// console.log(2e5 - 100_000); // 100000
// console.log(200_000 - 1e5); // 100000
// console.log(50000 + 50000); // 100000
// console.log(1e6 / 10); // 100000
// console.log(500_000 - 4e5); // 100000
// console.log(1e3 * 100); // 100000
// console.log(10_000 * 10); // 100000
// console.log(3e5 - 2e5); // 100000
// console.log(Math.ceil(99999.1)); // 100000
// console.log(Math.round(99999.6)); // 100000
// console.log(Math.floor(100_000.9)); // 100000
// console.log(Math.trunc(1e5)); // 100000
// console.log(Math.min(100000)); // 100000
// console.log(Math.max(100_000)); // 100000
// console.log(Math.pow(10, 5)); // 100000
// console.log(Number((100000.4).toFixed(0))); // 100000
// console.log(parseInt('100000')); // 100000
// console.log(Math.floor(parseInt(100000.99))); // 100000

// console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991

// console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16
// console.log(Number.MAX_SAFE_INTEGER.toString().length); //16

// let myVar = '100.56789 Views';

// console.log(parseInt(myVar)); // 100
// console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// let num = 10;

// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// let flt = 10.4;

// console.log(Math.round(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Number(flt.toFixed(0))); // 10
// console.log(parseInt(flt)); // 10

// console.log(Math.trunc(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4
// console.log(Math.floor(Math.random() * 4) + 1);// + 1  not number 0 floor 0.2
// console.log(Math.ceil(Math.random() * 4));// + 1  not number 0 ceil 0.2


// let b = 'Elzero Web School';

// console.log(b.charAt(2).toLocaleUpperCase() + a.slice(3, 6));

// console.log(b.charAt(13).toUpperCase().repeat(8));
// console.log(b.slice(-4, -3).toUpperCase().repeat(8));

// console.log(b.split(' ', 1));

// console.log(`${b.substr(0, 6)} School`)
// console.log(`${b.substr(0, 6)} ${b.substr(-6)}`);

// console.log(b.charAt(0).toLowerCase() + b.slice(1, length -1).toUpperCase() + b.slice(-1).toLowerCase())

// let userName = "Elzero";
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName.substr(0, 1).toLowerCase()); // e
// console.log(userName.slice(0, 1).toLowerCase()); // e
// console.log(userName.substring(0, 1).toLowerCase()); // e
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.slice(-6, 1).toLowerCase().repeat(3)); // eee

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True




// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log('10 To 40');
// } else if (a > 40) {
//   console.log('>40');
// } else {
//   console.log('Unknown');
// }

// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log('10 To 40')
//   : a > 40
//   ? console.log('>40')
//   : console.log('Unknoun');

// let st = 'Elzero Web School';

// if (typeof st === typeof '34') {
//   console.log('Good');
// }
// if ((st.length * 2).toString() === '34') {
//   console.log('Good');
// }
// if (st.charAt(st.indexOf('W')).toLowerCase() === 'w') {
//   console.log('Good');
// }
// if (st !== 'String') {
//   console.log('Good');
// }
// if (st.length !== 'String') {
//   console.log('Good');
// }
// if (typeof st.length === 'number') {
//   console.log('Good');
// }

// if (st.slice(0, 6).repeat(2) === 'ElzeroElzero') {
//   console.log('Good');
// }

// // Test Case 1
// let num = 11; // "009"

// if (num < 10) {
//   console.log(`"00${num}"`);
// }
// if (num > 10 && num < 100) {
//   console.log(`"0${num}"`);
// }
// if (num >= 100) {
//   console.log(`"${num}"`);
// }

// if (num < 10) {
//   console.log(`"00${num}"`);
// } else if (num > 10 && num < 100) {
//   console.log(`"0${num}"`);
// } else {
//   console.log(`"${num}"`);
// }

// num < 10
//   ? console.log(`"00${num}"`)
//   : num > 10 && num < 100
//   ? console.log(`"0${num}"`)
//   : console.log(`"${num}"`);

// let num1 = 9;
// let str = '9';
// let str2 = '20';

// if (num1 == str) {
//   console.log('{num1} Is The Same Value As {str}');
// }

// if (num1 !== str) {
//   console.log('{num1} Is The Same Value As {str} But Not The Same Type');
// }

// if (num1 !== str2) {
//   console.log('{num1} Is Not The Same Value Or The Same Type As {str2}');
// }
// if (str !== str2) {
//   console.log('{str} Is The Same Type As {str2} But Not The Same Value');
// }
// if (typeof str === typeof str2) {
//   console.log('{str} Is The Same Type As {str2} But Not The Same Value');
// }
// if (str != str2) {
//   console.log('{str} Is The Same Type As {str2} But Not The Same Value');
// }

// let num_1 = 10;
// let num2 = 30;
// let num3 = '30';

// if (
//   num3 > num_1 &&
//   num2 !== num3 &&
//   num3 > num_1 &&
//   num3 == num2 &&
//   num3 != num_1
// ) {
//   console.log(
//     '30 Is Larger Than 10 And Type string Not The Same Type As number' +
//       '\n' +
//       '30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number' +
//       '\n' +
//       '{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}',
//   );
// }


// let numOne = 9;
// let numTwo = 3;
// let numThree = 9;
// let numFour = 36;
// // Condition 1

// if (numOne > numTwo) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // Condition 2

// if (numOne > numTwo && numOne < numFour) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // Condition 3

// if (numOne > numTwo && numOne === numThree) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // Condition 4

// if (numOne + numTwo < numFour) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // Condition 5

// if (numOne + numThree < numFour) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // Condition 6

// if (numOne + numTwo + numThree < numFour) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // Condition 7

// if (numFour - (numOne + numThree) + numTwo === 21) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// let Day = 5;

// switch (Day) {
//   default:
//     console.log('klp');
//     break;
//   case 0:
//     console.log('Satrday');
//     break;
//   case 1:
//   case 2:
//     console.log('Sunday');
//     break;
//   case 3:
//     console.log('Monday');
//     break;
//   // default:
//   //   console.log('Unkown');
// }

// let job = 'Manager';
// let salary = 0;

// if (job === 'Manager') {
//   salary = 8000;
// } else if (job === 'IT' || job === 'Support') {
//   salary = 6000;
// } else if (job === 'Developer' || job === 'Designer') {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// switch (job) {
//   case 'Manager':
//     salary = 8000;
//     console.log(salary);
//     break;
//   case 'IT':
//   case 'Support':
//     salary = 6000;
//     console.log(salary);
//     break;
//   case 'Developer':
//   case 'Designer':
//     salary = 7000;
//     console.log(salary);
//     break;
//   default:
//     salary = 4000;
//     console.log(salary);
// }

// let holidays = 0;
// let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

// if (holidays == 0) {
//   money = 5000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 1 || holidays == 2) {
//   money = 3000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 3) {
//   money = 2000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 4) {
//   money = 1000;
//   console.log(`My Money is ${money}`);
// } else if (holidays == 5) {
//   money = 0;
//   console.log(`My Money is ${money}`);
// } else {
//   console.log(`My Money is ${money}`);
// }

// let dayS = '   thursday  ';

// dayS = dayS.trim();
// dayS = dayS.charAt(0).toUpperCase() + dayS.slice(1);


// switch (dayS) {
//   case 'Friday':
//   case 'Saturday':
//   case 'Sunday':
//     console.log('No Appointments Available');
//     break;
//   case 'Monday':
//   case 'Thursday':
//     console.log('From 10:00 AM To 5:00 PM');
//     break;
//     case 'Tuesday':
//       console.log('From 10:00 AM To 6:00 PM');
//       break;
//     case 'Wednesday':
//       console.log("From 10:00 AM To 7:00 PM");
//       break;
//     default: 'World'
//       console.log('Its Not A Valid Day');
//
//}



/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];

// // Write Code Here

// // console.log(my.reverse().slice(--counter)); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(++zero, --counter).reverse()); // ["Elham", "Mazero"]

// my[0] = 'Elzero';

// console.log(`${my.slice(--zero, ++zero)}`); // "Elzero"

// console.log(`${my[--zero][++counter]}${my[zero][++counter].toUpperCase()}`); // "rO"

// let myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
// let num = 3;

// // myFriends.pop();
// // // Method 1
// // console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// myFriends.length = num;
// // Method 2
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// let friends = ['Ahmed', 'Eman', 'Osama', 'Gamal'];

// // Write Your Code Here
// friends.shift();
// friends.pop();
// console.log(friends); // ["Eman", "Osama"]

// let arrOne = ['C', 'D', 'X'];
// let arrTwo = ['A', 'B', 'Z'];
// let finalArr = [];

// // Write One Single Line Of Code
// finalArr = arrTwo.concat(arrOne).sort().reverse();
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// let website = 'Go';
// let words = [`${website}ogle`, 'Facebook', ['Elzero', 'Web', 'School']];

// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// console.log(
//   words[website.length][website.length - website.length]
//     .slice(website.length)
//     .toUpperCase(),
// );
// let needle = 'JS';
// let haystack = ['PHP', 'JS', 'Python'];

// // Write 3 Solutions

// if (haystack.includes(needle)) {
//   console.log('Found');
// }

// if (needle === haystack[1]) {
//   console.log('Found');
// }

// if (haystack.indexOf(needle)) {
//   console.log('Found');
// }

// let arr1 = ['A', 'C', 'X'];
// let arr2 = ['D', 'E', 'F', 'Y'];
// let allArrs = [];

// allArrs = arr1
//   .concat(arr2)
//   .sort()
//   .join('')
//   .toLowerCase()
//   .slice(++arr1.length);
// console.log(allArrs);


// let start = 10;
// let end = 100;
// let exclude = 40;


// for (let i = start; i <= end; i += start) {
//     if (i === exclude) {
//         continue
//     }
//     console.log(i);
// }
// Output
// 10;
// 20;
// 30;
// 50;
// 60;
// 70;
// 80;
// 90;
// 100;

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i > end; i--){
//     if (i < start) {
//         console.log(`0${i}`)
//     } else{
//         console.log(`${i}`)
//     }
//     if (i === stop) {
//         break
//     }
// }

// Output
// 10;
// 09;
// 08;
// 07;
// 06;
// 05;
// 04;
// 03;


// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++){
//     console.log(i);
//     for (let j = breaker; j < end; j+= breaker){
//         console.log(`--${j}`)
//     }
// }

// Output
// 1;
// --2;
// --4;
// 2;
// --2;
// --4;
// 3;
// --2;
// --4;
// 4;
// --2;
// --4;
// 5;
// --2;
// --4;
// 6;
// --2;
// --4;

// let index = 10;
// let jump = 2;
// let end = 0;
// let i = index;
// for (; ;) {
//     if (i === jump) break;
//     if (i > end) {
//         console.log(i);
//     }
//     i -= jump;
// }

// // Output
// // 10;
// // 8;
// // 6;
// // 4;

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// number = letter.length

// for (let i = letter.length - letter.length; i < friends.length; i++){
//     if (friends[i].startsWith(letter.toUpperCase())) {
//         continue;
//     }
//     console.log(`" ${ number } => ${ friends[i] }"`)
//     number++
// }
// // Output
// "1 => Sayed";
// "2 => Eman";
// "3 => Mahmoud";
// "4 => Osama";
// "5 => Sameh";

// let start = 0;
// let swappedName = "elZerO";
// let result = '';
// // Output

// for (let i = start; i < swappedName.length; i++) {
//     if (swappedName[i] === swappedName[i].toLowerCase()) {
//         result += swappedName[i].toUpperCase();
//     } else if (swappedName[i] === swappedName[i].toUpperCase()) {
//         result += swappedName[i].toLowerCase()
//     }
// }
// console.log(result);

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];


// for (let i = ++start; i < mix.length; i++){
//     if (typeof mix[i] === 'number') {
//         console.log(mix[i]);
//     }
// }

// for (let i = ++start; i < mix.length; i++) {
//     if (typeof mix[i] === 'string') {
//         continue;
//     }
//     console.log(mix[i]);
// }

// for (let i = start + mix.indexOf(2); i < mix.length; i++) {
//     if (typeof mix[i] === 'string') {
//         continue;
//     }
//     console.log(mix[i]);
// }
// Output
// 2;
// 3;
// 4;
