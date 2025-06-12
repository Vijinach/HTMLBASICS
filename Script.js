// Arithmetic operator
let a = 30;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
let c = 40;
c++;
console.log(c);
let d = 41;
d--;
console.log(d);

// // Assignment operator
let e = 40;
e += 41;
console.log(e);
let f = 45;
f -= 41;
console.log(f);
let g = 2;
g *= 4;
console.log(g);
let h = 40;
h /= 20;
console.log(h);
let i = 40;
i %= 20;
console.log(i);

// // Comparison Operator
let j = 40;
let k = 20;
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a == b);
console.log(a === b);
console.log(a != b);

// // Logical Operator
console.log((j<k) && (j=k));
console.log((j>k) || (j=k));
console.log(!((j<k) && (j=k)));
console.log(!((j<k) || (j=k)));

// // Data Type
let name = "viji";
console.log(typeof(name));
let age = 25;
console.log(typeof(age));
let accno = 25.5487;
console.log(typeof(accno));
let boolean = true;
console.log(typeof(boolean));
let nu = null;
console.log(typeof(nu));
console.log(typeof(un));
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple
console.log(fruits); 
let person = {
    name: "viji",
    age: 25,
    email: "viji@gmail.com"
}
console.log(person.name);
console.log(person);

// // Statement
// // Condition Statement
// // If and Else if statement
let num = 17
if(num > 18){
    console.log("allow to drive");
}else{
    console.log("not allow to drive");
}
let num1 = 18
if(num > 18){
    console.log("allow to work");
}else if(num = 18){
    console.log("either or work");
}
else{
    console.log("not allow to work");
}

// // switch statement
let vowels = "a"
switch (vowels){
    case 'a': console.log("it is a vowel");
    break;
    case 'e': console.log("it is a vowel");
    break;
    case 'i': console.log("it is a vowel");break;
    case 'o': console.log("it is a vowel");break;
    case 'u': console.log("it is a vowel");break;
    default: break;
}

// // Looping Statement
// // while
let m = 1;
while(m <=10){
    console.log(m);
    m++;
}
// // Do while
let n = 0;
do {
  console.log(n);
  n++;
} while (n < 5);
// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// // Jumping statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exits the loop when i is 5
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skips to the next iteration when i is 5
  }
  console.log(i);
}

// // METHODS
// // Array Method
let method = "shree"
let len = method.length
console.log(len);
let method1 = "FGIGIU"
let char = method1.charAt(2)
console.log(char);
let method2 = "gdhdjdidi"
console.log(method2.toUpperCase());
let method3 = "SDFFFDFFFGG"
console.log(method3.toLowerCase());
let str1 = "divya"
let str2 = "shree"
console.log(str1.concat(str2));
let tr = "    gjkghkj "
console.log(tr.trim());
let trs = "pink is not my favourite color but i have pink pen";
let result= trs.repeat(2);
console.log(result);
let trss = "pink is not my favourite color but i have pink pen";
let results= trs.replace("pink","blue");
console.log(results);
let trsss = "pink is not my favourite color but i have pink pen";
let resultss= trss.replaceAll("pink","blue");
console.log(resultss);
let arr = "pink,yellow,blue"
let ars = arr.split(",")
console.log(ars);

// String Method
let arr3 = ["pink","purple","blue"]
console.log(arr.length);
let arr4 = ["pink","purple","blue"]
let res = arr1.toString()
console.log(res);
let arr5 = ["pink","purple","blue"]
let es = arr2.at(1)
console.log(es);
let arr6 = ["pink","purple","blue"]
arr3.pop()
console.log(arr3);
let arr7 = ["pink","purple","blue"]
arr4.push("orange")
console.log(arr4);
let arr8 = ["pink","purple","blue"]
let arr9 = ["pink","purple","blue"]
console.log(arr5.concat(arr6));

// Math method
console.log(Math.sqrt(64));
console.log(Math.abs(-67));
console.log(Math.round(78.36));
console.log(Math.ceil(89.01));
console.log(Math.floor(45.65));
console.log(Math.round(Math.random()*10000));
console.log(Math.PI);

// // Functions
// // Normal Function
function addnum(a,b){
  return a + b;
}
function subnum(a,b){
  return a - b;
}
function multnum(a,b){
  return a * b;
}
function divnum(a,b) {
  return a / b
}
// let a = 30;
// let b = 10;
let add = addnum(a,b)
console.log(add);
let sub = subnum(a,b)
console.log(sub);
let mult = multnum(a,b)
console.log(mult);
let div = divnum(a,b)
console.log(div);
let div1 = divnum(20,10)
console.log(div1);


// Arrow Function
const addnum1 = (a, b) => a + b;
const subnum1 = (a, b) => a - b;
let add2 = addnum1(73,43)
console.log(add2);
let sub1 = subnum1(a,b)
console.log(sub1);

// // Date
let date = new Date()
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getTime());
console.log(date.getMinutes());
console.log(date.getSeconds());

// // Try catch method to avoid unnecessary errors
try{
  let x = 5;
  let y = x + z; 
  // z is not defined so it will not show ass error it will show as message because we use try and catch method
  console.log(y);
}
catch(err){
  console.log(err);
}
console.log("hi");

// // spread operator for array
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5,6];
console.log(arr2);

// // spread operator for object
let obj = {1:'One', 2:'Two'};
let obj1 = {...obj, 3:'Three', 4:'Four'}
console.log(obj1);

// // Ternary operator
let age1 = 20;
let message = age1 >= 18 ? "You are an adult" : "You are a minor";
console.log(message); 

// // Integer + String = string
let x = 8;
let y = "8";
console.log(x+y);
console.log(typeof(x+y));



















