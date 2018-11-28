//Array.prototype.map
const arr1 = ["1", "2", "3","4", "5"];
const newArr1 = arr1.map(num => {
    return parseInt(num);
});
console.log(newArr1);
//double value for array
const arr2 = [6,7,8,9,10];
const newArr2 = arr2.map(num =>{
    return num+num;
});
console.log(newArr2);


//Array.prototype.filter
//filter through movies in array by reating
const movies = [
    {name :"Jaws", rating: "R"},
    {name :"Venom", rating: "PG-13"},
    {name :"shrek", rating: "PG"},

] 
const newMovies = movies.filter(movie => movie.rating === "R");
   // if(movie.rating === "R") return true;
//});
console.log(newMovies);


//Array.prototype.reduce
//Min and max
const arr3 = [5, 1000, 25, 9652, 4444444, 3];
const newValue = arr3.reduce((acc,curr)=> {
    console.log(acc);
    return(acc < curr) ? curr : acc;
}, 0);
console.log(newValue);

//Flatten a 2D array
const twoD = [
    [0,1,2,3,4],
    [5,6,7,8,9],
    [10,11,12,13,14],
]

const flatten = twoD.reduce((acc, curr)=> {
    console.log(acc);
    return acc.concat(curr);
}, []);
console.log(flatten);

