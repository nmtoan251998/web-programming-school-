document.addEventListener("DOMContentLoaded", () => {
    const a = document.getElementById("a"),
          b = document.getElementById("b"),  
          c = document.getElementById("c"),
          btn = document.getElementById("solve-btn"),
          deltaHTML = document.getElementById("delta"),
          messageHTML = document.getElementById("message"),
          x1HTML = document.getElementById("x1"),
          x2HTML = document.getElementById("x2");
    
    const solution = (a, b, c) => {
        const delta = Math.pow(b, 2) - (4 * a * c);        
        
        let result = {
            x1: undefined,
            x2: undefined,
            message: ""
        };        

        if((a + b + c) === 0) {
            result = { x1: 1, x2: c/a, message: "Phương trình có 2 nghiệm:"}
        } else if((a - b + c) === 0) {            
            result = { x1: 1, x2: -(c / a), message: "Phương trình có 2 nghiệm:"}
        }

        if(delta < 0) {
            result = { x1: null, x2: null, message: "Phương trình vô nghiệm:" }            
        } else if(delta === 0) {
            result = { x1: -(b / 2 * a), x2: -(b / 2 * a), message: "Phương trình có nghiệm kép:" }            
        } else if(delta > 0) {
            result = { x1: ((-b) + Math.sqrt(delta)) / (2 * a), x2: ((-b) - Math.sqrt(delta)) / (2 * a), message: "Phương trình có 2 nghiệm riêng lẻ:" }                        
        } 
                        
        return {result, delta};
    }   

    btn.addEventListener("click", (el) => {
        el.preventDefault();
        
        const aValue = Math.abs(parseInt(a.value)),
        bValue = Math.abs(parseInt(b.value)),
        cValue = Math.abs(parseInt(c.value));        
        
        if(!a.value || parseInt(a.value) === 0) {
            alert("A phải khác 0");
            return;
        }                    
        
        const {result, delta} = solution(aValue, bValue, cValue);
            
        deltaHTML.innerHTML = delta;
        messageHTML.innerHTML = result.message;      
        x1HTML.innerHTML = result.x1;
        x2HTML.innerHTML = result.x2;        
    })
})