function myfunc(){
    event.preventDefault();
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let address = document.getElementById("address");
   

    if((name.value != "") && (number.value != "")&& (address.value != "")){
        setTimeout(function() {
            alert('Your order is accepted')
        }, 0000);
        setTimeout(function() {
            alert('Your order is being Prepared ')
        }, 3000);
        setTimeout(function() {
            alert('Your order is being packed ')
        }, 8000);
        setTimeout(function() {
            alert('Your order is out for delivery ')
        }, 10000);
        setTimeout(function() {
            alert(' Order delivered')
        }, 12000);
        
    }else{
        alert('Invalid info');
    }
}