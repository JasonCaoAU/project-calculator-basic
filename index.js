//switch between daytime and night
const button = document.querySelector(".btn");
const switchMode = document.querySelector("main");
// method1
// button.addEventListener("click", () => {
//     switchMode.classList.toggle("light");
// })

// method2
button.onclick = () => {
    switchMode.classList.toggle("daytime");
}

//calculate function=>method1
const spans = document.querySelectorAll(".num");
console.log(spans);
spans[0].onclick = () => {
    document.calc.show.value ='';
    
}
spans[1].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '(': calc.show.value = calc.show.value.split('=')[1] +'(';
}
spans[2].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= ')': calc.show.value = calc.show.value.split('=')[1] +')';
}
spans[3].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '/': calc.show.value = calc.show.value.split('=')[1] +'/';
}
spans[4].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '7': null;
}
spans[5].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '8': null;
}
spans[6].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '9': null;
}
spans[7].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '*': calc.show.value = calc.show.value.split('=')[1] +'*';
}
spans[8].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '4': null;
}
spans[9].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '5': null;
}
spans[10].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '6': null;
}
spans[11].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '+': calc.show.value = calc.show.value.split('=')[1] +'+';
}
spans[12].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '1': null;
}
spans[13].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '2': null;
}
spans[14].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '3': null;
}
spans[15].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '-': calc.show.value = calc.show.value.split('=')[1] +'-';
}
spans[16].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '0': null;
}
spans[17].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '.': null;
}
spans[18].onclick = () => {
    document.calc.show.value.search('=') === -1 ? calc.show.value+= '%': calc.show.value = calc.show.value.split('=')[1] +'%';
}
spans[19].onclick = () => {
    document.calc.show.value = calc.show.value + '=' + eval(document.calc.show.value);
}


// method 2: put the js calculate function in html
