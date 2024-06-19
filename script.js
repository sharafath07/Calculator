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
    document.querySelector('.calculation').innerHTML = `${calculation}`

    equal()
}

function operator(value) {
    const num = '' + value
    arrayValue.push(num);
    if(calculation !== '0'){        
        calculation += num;
    }else{
        return 0;
    }
    document.querySelector('.calculation').innerHTML = `${calculation}`
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
    document.querySelector('.calculation').innerHTML = `${calculation}`
    document.querySelector('.result').innerHTML = `${result}`
}

function del(){
    let space = ''
    let num = arrayValue.length - 1
    arrayValue.splice(num, 1)

    if (num <= 0) {
        space = '0' 
    } else {
        for (let i = 0; i < arrayValue.length; i++) {
            const element = arrayValue[i];
            space += element
            
        }
    }

    calculation = space

    document.querySelector('.calculation').innerHTML = `${calculation}`
}
