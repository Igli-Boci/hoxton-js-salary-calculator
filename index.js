//  Less than 80 Eu (3d world country)
let salary1 = 80;
const pension = salary1 * 0.05;
const tax1 = salary1 - pension;
let taxUnder80Eu = 0;
let totalSalary = tax1;
console.log("I'm sorry to inform you that with " + totalSalary + " EUR you can barely breathe let alone live a normal life.");

//  Less than 250 (Still 3d world country)
let salary2 = 210;
const pension2 = salary2 * 0.05;
const tax2 = salary2 - pension2;
let taxUnder250Eu = (tax2 - 80) * 0.04;
let totalSalary2 = tax2 - taxUnder250Eu
console.log("Survival mode with " + totalSalary2 + " EUR.");

// Less than 450 (Welcome to my 3d world country)
let salary3 = 380;
const pension3 = salary3 * 0.05;
const tax3 = salary3 - pension3;
let taxUnder450Eu = (tax3 - 250) * 0.08 + (250 - 80) * 0.04;
let totalSalary3 = tax3 - taxUnder450Eu;
console.log("Actually you can put some food on the table with " + totalSalary3 + " EUR.");


// 450+ (A Myth in here)
let salary4 = 500;
const pension4 = salary4 * 0.05;
const tax4 = salary4 - pension4;
let taxOver450Eu = (tax4 - 450) * 0.1 + (450 - 250) * 0.08 + (250 - 80) * 0.04;
let totalSalary4 = tax4 - taxOver450Eu
console.log("Would be nice for a starter to have " + totalSalary4 + " EUR.");