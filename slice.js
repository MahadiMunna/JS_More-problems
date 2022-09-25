const friends = [122,14,135,34,52,634,54,65];
const partial =friends.slice(1,4);
console.log(partial); 
console.log(friends);

//splice
const friend = [122,14,135,34,52,634,54,65];
const partials =friend.splice(1,4,23,24,25,26);
console.log(partials); 
console.log(friend);