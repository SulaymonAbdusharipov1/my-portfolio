const offcanvasElementList = document.querySelectorAll('.offcanvas'),
    bars = document.querySelector(".barsi"),
    form = document.querySelector(".form"),
    inp = document.querySelector("#name"),
    inp1 = document.querySelector("#email"),
    inp2 = document.querySelector("#tel"),
    sms = document.querySelector("#sms")
   
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
bars.style.display = "none"

Check = () =>{
    if(inp.value.length === 0 || inp1.value.length === 0 || inp2.value.length === 0 || sms.value.length === 0 ){
        alert("Please fill in the blanks")
        return false
    }
    else{
        alert("message sent sucsesfully")
        return true
    }
}