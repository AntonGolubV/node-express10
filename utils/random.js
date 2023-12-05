const { surnames,  names, patronymics } = require("../data/student");
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomStudent(){
  let a = {};
    a.avatar = randInt(1e6, 1e7); 
    a.full_name = `${surnames[randInt(0, surnames.length - 1)]} ${names[randInt(0, names.length - 1)]} ${patronymics[randInt(0, patronymics.length - 1)]}`;
    a.age = `Возраст: ${randInt(16, 23)}`;
    a.email = `Почта: ${(Math.random() + 1).toString(36).substring(7)}@gmail.com`;
    a.number = `Телефон: 37529${randInt(1e6, 1e7)}`;
    a.almz = randInt(0, 999);
    a.coin = randInt(0, 300);
    a.avg_grade = randInt(50, 100) / 10;
    a.visit = `Посещаемость: ${randInt(30, 100)}%`;
    a.estimation = `${randInt(5, 10)} оценок по ${randInt(2, 5)} предметам`;

    return a;
}

function templ(string, user) {
  for (key in user) {
      string = string.replace(`{{${key}}}`, `${user[key]}`);
  }
  
  return string;
}
function createSortArr(arr, sortKey = 'avg_grade'){
  if(sortKey){
    arr = sortArr(arr, sortKey);
  } 
  return arr;
}

function sortArr(arr, key) {
  return arr.sort((a, b) => b[key] - a[key]);
}

module.exports = { getRandomStudent, randInt, templ, createSortArr};
