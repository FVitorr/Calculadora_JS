const $ = document.querySelector.bind(document);

let body  =  $("body");
let display = $(".display")
let calculator = $(".body_calculator")
let keyboard = $(".keyboard");
let button = document.querySelectorAll("#colorMode");

//Bloco para criar as teclas na tela
let keyl = [7,8,9,"/",4,5,6,"X",1,2,3,"-",0,".","=","+"];
let controle = 0
for (let i = 0; i < 4; i++){
    let line = document.createElement("div");
    line.setAttribute("class","line");
    for (let j = 0; j < 4; j++){
        if (typeof(keyl[controle]) == "string"){
            let value = keyl[controle].toString()
            line.innerHTML += `<input type = button class = "signals" value = "`+ keyl[controle] +
            `" onclick="subValue('`+ value +`')">`
        }else{
            line.innerHTML += `<input type = button class = "" value = "`+ keyl[controle] +
            `" onclick="subValue(`+ keyl[controle] +`)">`
        }
        controle++;
    }
    keyboard.appendChild(line);
}

function clearElemnt(selector){
    selector.innerHTML = '';
}

function AddElemnt(selector,text){
    selector.innerHTML += text;
}

let opDisplay = $(".entry")
let reDisplay = $(".result")
let newOperation = 0;
//Bloco que trata das entradas
let op = 0; // 0 -
let num_ = [];
let fNum = '';
function subValue(value){
    //console.log(value);
    //Se for nova op limpar div 
    if (newOperation == 1){
        newOperation = 0;
        clearElemnt(opDisplay)
    }
    if (typeof(value) == "number") {
        fNum += value;
        //Adiciona os numeros na tela
        AddElemnt(opDisplay,value);
    } else {
        num_.push(fNum,value); // adc sinal
        //num_.push(value);
        if (typeof(value) != "number") {
            fNum = ''  //redefinir variavel para formar novo numero
        }
        if (value == '='){
            let result = 0;
            let num1 = parseFloat(num_[0]);
            let num2 = parseFloat(num_[2]);
            if (num_[1] == '/'){ // Sinal
                result = num1 / num2;
            } else if (num_[1] == 'X'){ // Sinal
                result = num1 * num2;
            } else if (num_[1] == '-'){ // Sinal
                result = num1 - num2;
            } else if (num_[1] == '+'){ // Sinal
                result = num1 + num2;
            }
            console.log(result);
            clearElemnt(reDisplay); //Limpar resposta
            let result_s = result.toString();
            if  (result_s.indexOf('.') != -1){
                result_s = result_s.slice(result_s.indexOf('.') + 1,result_s.length - 1)
                console.log(result_s)
            }
            if (result_s.length > 4){
                AddElemnt(reDisplay,result.toFixed(5));
            }else{
                AddElemnt(reDisplay,result);
            }
            //Preparar para nova resposta
            newOperation = 1;
            //resetar array q forma os numeros
            num_ = [];
        }else {
            AddElemnt(opDisplay,' ' + value + ' ');
        }
    }
    //console.log(value);
    //console.log(num_);
}





let color = 0 // 0-White 1-Black

//Mode Dark
/* 
Alterar cor body
Alterar cor body_calculator
Alterar cor display
Alterar cor buttons 

<button class="firt" onclick="white()"><i class="fa-solid fa-sun"></i></button>
*/
let input = document.querySelectorAll("input");

let btnColorMode = document.querySelector("#colorMode");
btnColorMode.addEventListener("click", ()=>{
    console.log()
    body.classList.toggle("body_dark")
    calculator.classList.toggle("body_calculator_dark")
    display.classList.toggle("display_dark")
    for (let i = 0; i < input.length; i++){
        console.log(i)
        input[i].classList.toggle("button_dark")
    }
    //button.classList.toggle("button_dark")
    button.innerHTML = "<i class='fa-solid fa-sun'></i>"
//    bodyColor.classList.toggle("bodyDark")
//    navBottom.classList.toggle("nav-bottom-dark")
})