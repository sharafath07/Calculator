        let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
        let result = 0

        console.log(calculation)

        function number(value) {
            calculation += value;
            document.querySelector('.calculation').innerHTML = `${calculation}`
        }

        function operator(value) {
            calculation += value;
            document.querySelector('.calculation').innerHTML = `${calculation}`
        }

        function add() {
            calculation += ' + ';
            document.querySelector('.calculation').innerHTML = `${calculation}`
        }

        function substract() {
            calculation += ' - ';
            document.querySelector('.calculation').innerHTML = `${calculation}`
        }

        function multiple() {
            calculation += ' * ';
            document.querySelector('.calculation').innerHTML = `${calculation}`
        }

        function divide() {
            calculation += ' / ';
            document.querySelector('.calculation').innerHTML = `${calculation}`
        }

        function equal() { 
            result = eval(calculation);  /*eval() converts the calculation into actual math*/
            document.querySelector('.result').innerHTML = `${result}`
            localStorage.setItem('calculation',JSON.stringify(calculation))
        }

        function remove() {
            calculation = ' '
            result = '0'
            localStorage.removeItem('calculation')
            document.querySelector('.calculation').innerHTML = `${calculation}`
            document.querySelector('.result').innerHTML = `${result}`

        }
