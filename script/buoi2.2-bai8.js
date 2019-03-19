document.addEventListener("DOMContentLoaded", () => {
    const btnGroup = Array.from(document.querySelectorAll('.button__calc')),          
          btnClear = document.getElementById('clear'),        
          display = document.getElementById('display');
        
    const calcPlus = (a, b) => a + b;    
    const calcMinus = (a, b) => a - b;
    const calcMultiply = (a, b) => a * b;
    const calcDivide = (a, b) => a / b;

    const isNum = (checker) => {
        if(checker === '1' || checker === '2' || checker === '3' || checker === '4' || checker === '5' || checker === '6' || checker === '7' || checker === '8' || checker === '9')
            return true
        else if(checker === '+' || checker === '-' || checker === '*' || checker === '/')
            return false
    }

    let firstNum = 0, secondNum = 0, operator, result; 
    let content = new Array();           

    btnGroup.forEach(btn => {
        btn.addEventListener('click', (el) => {
            const curVal = el.target.textContent;     

            content.push(curVal);

            display.innerHTML = content.join('');

                                            
            if(!isNum(curVal) && curVal !== "=") {
                operator = curVal;                
            }
                
            if(operator === undefined && isNum(curVal)) {                
                firstNum += curVal;                
            }                
            else if(operator && isNum(curVal)) {                
                secondNum += curVal;                 
            }
                                                       
            if(firstNum && secondNum && operator && curVal === "=")
                firstNum = parseInt(firstNum);
                secondNum = parseInt(secondNum);

                switch (operator) {
                    case '+':
                        result = calcPlus(firstNum, secondNum);
                        break;
                    case '-':
                        result = calcMinus(firstNum, secondNum);
                        break;
                    case '*':
                        result = calcMultiply(firstNum, secondNum);
                        break;
                    case '/':
                        result = calcDivide(firstNum, secondNum);
                        break;                                                                           
                }                                
                if(curVal === "=")
                    display.innerHTML = result;
        })
    })

    btnClear.addEventListener('click', () => {        
        display.innerHTML = '';
        firstNum = 0, secondNum = 0, operator = undefined, result = 0, content = [];        
    })        
})