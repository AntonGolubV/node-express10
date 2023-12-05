async function getAllStudents(){
  let setting = document.querySelector('#settings').value;
  let response = await fetch(`/getAllStudents?param=${setting}`);
  if(response.ok){
    const responseObj = await response.text();
    document.body.innerHTML = `${responseObj}`;
    console.log(responseObj);
    /* renderStudent(responseObj); */
    return;
  }
  alert('error');
}

/* function createBlock(inBlock, classL, innerText = "") {
  let el = document.createElement(`div`);
  el.classList.add(`${classL}`);
  el.innerText = `${innerText}`;
  inBlock.append(el);
}

function renderStudent(obj){
  if (obj) {
    for (let k = 0; k < obj.length; k++) {
        createBlock(main, "in-main-car");
    }
    let inMainCar = document.querySelectorAll(".in-main-car");
    for (let i = 0; i < inMainCar.length; i++) {
        createBlock(inMainCar[i], "block", `Марка: ${car[i].mark}`);
        createBlock(inMainCar[i], "block", `Номер: ${car[i].number}`);
        createBlock(inMainCar[i], "block", `Цвет: ${car[i].color}`);
        createBlock(inMainCar[i], "block", `Вес: ${car[i].weight}`);
        createBlock(inMainCar[i], "block", `Год выпуска: ${car[i].age}`);
        createBlock(inMainCar[i], "block", `Тип двигателя: ${car[i].type}`);
        createBlock(inMainCar[i], "block", `Кол-во наруш: ${car[i].offense}`);
        createBlock(inMainCar[i], "block", `Кол-во шраф: ${car[i].fine}`);
    }
} else {
    alert("Err");
  }
}
 */