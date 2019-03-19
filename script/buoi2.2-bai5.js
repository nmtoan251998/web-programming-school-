document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("name"),
          sex = document.getElementById("sex"),
          email = document.getElementById("email"),
          dob = document.getElementById("dob"),
          city = document.getElementById("city"),
          add = document.getElementById("add"),
          region = document.getElementById("region"),
          zip = document.getElementById("zip"),
          btnFinished = document.getElementById("btn-finished"),
          btnClear = document.getElementById("btn-clear");

    const clearInput = () => {
        name.value = "";
        sex.value = "";
        email.value = "";
        dob.value = "";
        city.value = "";
        add.value = "";
        region.value = "";
        zip.value = "";    
    }

    btnClear.addEventListener("click", (el) => {
        el.preventDefault();

        clearInput();
    })

    btnFinished.addEventListener("click", (el) => {
        el.preventDefault();

        if(name.value === "" || sex.value === "" || email.value === "" ||
           dob.value === "" || city.value === "" || add.value === "" ||
           region.value === "" || zip.value === "") {
               alert("Input value for the text boxes");
               return;
           }

        alert("Submitted");

        clearInput();
    })    
})