const people = [{
    name: 'Tanjiro',
    age: 13,
    salary: 250,
    status: 'alive',
},
{
    name: 'Nezuko',
    age: 12,
    salary: 300,
    status: 'alive',
},
{
    name: 'Zenitsu',
    age: 16,
    salary: 250,
    status: 'alive',
},
{
    name: 'Inosuke',
    age: 15,
    salary: 300,
    status: 'alive',
},
{
    name: 'Tengen',
    age: 23,
    salary: 400,
    status: 'alive',
},
{
    name: 'Rengoku',
    age: 20,
    salary: 500,
    status: 'dead',
},
];

// for(let i = 0; i<people.length; i++){
//     console.log(people[i]);
// }


// !==================FOREACH================================
// ? ВЫПОЛНЯЕТ указанную функцию один раз для каждого элемента в массива (не созлает новый массив)

// people.forEach(function(person, index, array){
// console.log(person);
// console.log(array);
// console.log(index);
// })
// ==========================================
// Кыскартылган
// people.forEach((person)=>console.log(person))

// ===========================================
// people.forEach(function(index){
// console.log(person);
// console.log(array);
//     console.log(index);
// })


// Задание №3
// Дан массив let arrNums = [12, 21, 27, 31, 45, 50 ];
//  С помощью цикла foreach и оператора if выведите в console элементы массива, которые больше 20-ти, но меньше 30-ти.

// let arrNums = [4, 15, -4, 27, 12, 8]; 
// let nums = arrNums.forEach(item =>{
//     if( item ===27 ) {
//         console.log(item);
//     }
// })




//TODO У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

//   let users = [ 
//     { name: 'Kim', age: 41 }, 
//     { name: 'Kortney', age: 42 }, 
//     { name:  'Khloe', age: 37 }, 
//     { name: 'Kendall', age: 26 }, 
//     { name: 'Kylie', age: 24 }, 
//   ]; 
//   let names = users.map((person) => { 
//         return` ${person.name} `
//     }) 

//     console.log(names); // Kim, Kortney, Khloe, Kendall,Kylie

//TODO Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст. Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.



// !===================map
// ? создает новый массив с результатом вызова указанный функции для каждого элементта


// const newpeople = people.map((person) =>{
// return person
// return person.name;
// return ${person.name} salam   
// return person.age + 10

// })
// console.log(newpeople);


// let lengthName = [Patricia , William , Barbara , James , Chloe , Elizabeth ];
// let names = lengthName.map((item) =>{
//     return item.length
// })
// console.log(names);

// ! filter
// ? создает новый массив со всеми элементами которые прошли проверку задаеваему в передаваемую функции
// let adults = people.filter((person)=> person.age >= 15);
// console.log(adults);


// let arr = [12, 10, 99, 9, 3, 2, 120, 200,];
// newarr = arr.filter((item) =>{
//     return item>= 10
// })
// console.log(newarr);
// ! reduce
// ?   применяет функцию к каждому элементу массива возвращая одно резултирующее значение


// let amount = 0;
// for( let i = 0; i < people.length; i++){
//     amount += people[i].salary;
// }
// console.log(amount);

// const amount = people.reduce((total, person)=>{
//     return total + person.salary;
// }, 0)

// console.log(amount);


// let name = ['m', 'a', 'k', 'e', 'r', 's']
// let newarr = name.reduce((a,b) => a+b)
// console.log(newarr);

// Задание №4
// Дан массив let total = [ 1, 5, 0, 3, 6 ];
// Суммируйте все значения в данном массиве и выведите результат в alert(). Используйте метод reduce().

// let total = [ 1, 5, 0, 3, 6 ];
// let totals = total.reduce ((a, b)=> a+b)
// console.log(totals);