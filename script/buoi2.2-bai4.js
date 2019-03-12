document.addEventListener("DOMContentLoaded", () => {
    const a = document.getElementById("a"),
          b = document.getElementById("b"),  
          c = document.getElementById("c"),
          btn = document.getElementById("solve-btn");
    
    const solution = (a, b, c) => {
        const delta = Math.pow(b, 2) - 4 * a * c;
        const result = {
            x1: undefined,
            x2: undefined
        };        

        if((a + b + c) === 0) {
            result.x1 = 1;
            result.x2 = c / a;
        } else if((a - b + c) === 0) {
            result.x1 = -1;
            result.x2 = -(c / a);
        }

        if(delta < 0) {
            result.x1 = null;
            result.x2 = null;
        } else if(delta === 0) {
            result.x1 = result.x2 = -(b / 2 * a);
        } else if(delta >= 0) {
            result.x1 = (-(b) + Math.sqrt(delta) ) / 2 * a;
            result.x2 = (-(b) - Math.sqrt(delta) ) / 2 * a;
        } 
                        
        return {result, delta};
    }   

    btn.addEventListener("click", (el) => {
        el.preventDefault();
        
        let aValue = parseInt(a.value),
        bValue = parseInt(b.value),
        cValue = parseInt(c.value);
        
        if(!a.value || parseInt(a.value) === 0) {
            alert("A phải khác 0");
            return;
        }                    
        
        const {result, delta} = solution(aValue, bValue, cValue);
            
        alert("delta = "+delta +"\nx1 = " +result.x1 +"\nx2 = "+result.x2)
    })
})