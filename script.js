//1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.
let str = 'aaa@bbb@ccc';
console.log('aaa@bbb@ccc'.replace(/@/g,'!'));

//2  В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.
let date = '2025-12-31';
let newdate = date.replace(/(2025)(-)(12)(-)(31)/, '$5,$4,$3,$2,$1');
//console.log('2025-12-31'.replace(/-/g,'/'));
console.log(newdate.replace(/,-,/g,'/'));

//3 Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).
let str1 = 'Я учу javascript!';
console.log(str1.substr(2,14));
console.log(str1.slice(2,[16]));
console.log(str1.substring(2,[16]));

//4 Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let newArr = [];
let sum = 0;
for (let i = 0; i<arr.length; i++) {
    newArr.push(arr[i]*arr[i]*arr[i]);
    sum += newArr[i];
}
console.log(Math.sqrt(sum));

//5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b,равных соответственно 3 и 5, 6 и 1.
//let a = +prompt('введи а');
//let b = +prompt('введи b');
//let c = a - b;
//console.log(Math.abs(c));

//6??? Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
let dateNow = new Date();
console.log(dateNow.toLocaleString('ru'));

//7 Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
let str3 = 'aa aba abba abbba abca abea';
console.log(str3.replace(/ab+a/g, 'str'));

