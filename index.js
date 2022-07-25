// Slugify
const slugify = require('slugify')
// const shaxs = require("./app");
// const user = require("./app");
const {num2, alv2} = require("./app") // bu tug'ri yuli disrtuktizatsiya
// const num2 = require("./app")  bunde caqirsa xato

// const text = "Hello world"
// const slug = slugify(text, "-")
// console.log(slug);a 


// console.log(shaxs);
// console.log(user);
// console.log(user.hello());



// LOCAL
// GLOBAL 


// console.log(num2(5, 6));
// console.log(alv2());


// ======== Modullar =======

// Path moduli yunalishlarni kursatib beradi

const path = require("path");

console.log(__filename); // bu qaysi fayldaligimizni kursatib beradi
console.log(path.dirname(__filename)); // berda indi uwa faylmiz qaysi papkada joylashganini kursatib beradi
console.log(path.extname(__filename)); // bu uwa iwlatekkan faylimiz qanaqaligin kursatib beradi js || html || css
console.log(__dirname); // bu qaysi papkadaligimizni kursatib beradi

console.log(path.parse(__filename)); // bu qaysi faylda busek uwa faylni hamma danniylarini kursatadi
console.log(path.parse(__filename).dir);

console.log(path.join(__dirname, "test", "index.html")); // bu glavni papkamizdan qerga bormoqchi busek uwa joyga yunaltirib beradi
console.log(__filename); 