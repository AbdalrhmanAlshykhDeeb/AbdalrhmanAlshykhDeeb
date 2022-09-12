let myFriends = [1,2,'Ahmed','Khaled','Ali','Hossen','Mourad','Jafar'];

let onlayName = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === 'string') {
    onlayName.push(myFriends[i]);
    console.log(onlayName[i]);
  }
}

// if (typeof myFriends[0] === 'string') {
//   onlayName.push(myFriends[0]);
// }
// if (typeof myFriends[1] === 'string') {
//   onlayName.push(myFriends[1]);
// }
// if (typeof myFriends[2] === 'string') {
//   onlayName.push(myFriends[2]);
// }
// if (typeof myFriends[3] === 'string') {
//   onlayName.push(myFriends[3]);
// }
// if (typeof myFriends[4] === 'string') {
//   onlayName.push(myFriends[4]);
// }
// console.log(onlayName);
// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

