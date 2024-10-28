let calculation = JSON.parse(localStorage.getItem('calculation')) || '0';
let result = 0
let arrayValue = []

function number(value) {
    const num = '' + value
    arrayValue.push(num);
    if(calculation !== '0'){
        calculation += num;
    }else{
        calculation = '';
        calculation += num;
    }
    document.querySelector('.result').innerHTML = `${calculation}`
}

function operator(value) {
    const num = '' + value
    arrayValue.push(num);
    if(calculation !== '0'){        
        calculation += num;
    }else{
        return 0;
    }
    document.querySelector('.result').innerHTML = `${calculation}`
}

function equal() { 
    result = eval(calculation);  /*eval() converts the calculation into actual math*/
    document.querySelector('.result').innerHTML = `${result}`
    localStorage.setItem('calculation',JSON.stringify(calculation))
}

function remove() {
    calculation = '0'
    result = '0'
    arrayValue = []
    localStorage.removeItem('calculation')
    // document.querySelector('.calculation').innerHTML = `${calculation}`
    document.querySelector('.result').innerHTML = `${result}`
}