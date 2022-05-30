// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffee = JSON.parse(localStorage.getItem("coffee"));

function gettotal(){
    let total = document.getElementById("total_amount");
    let x = 0;
    let price = coffee.reduce(function(sum,ele,i){
        return sum+ele.price;
    }, 0);
    total.innerHTML = price;
}
gettotal();

coffee.forEach((ele, i) => {
    restore()
    function restore(){
        let bucket = document.getElementById("bucket");
        let boxes = document.createElement("div");
        boxes.setAttribute("class", "boxes");
        
        let title = document.createElement("p");
        title.innerText ="Type  :"+" "+ ele.title;
        title.setAttribute("class", "title");

        let image = document.createElement("img");
        image.src = ele.image;
        image.setAttribute("class", "image");

        let price = document.createElement("p");
        price.innerText ="Price :"+" "+ ele.price;
        price.setAttribute("class", "price");

        let btn = document.createElement("button");
        btn.innerText = "Remove"
        btn.setAttribute("class", "btn");

        btn.addEventListener("click", function(){
           this.remove(ele,i);
        });
        function remove(ele, i){
            items.spice(i,1);
            localStorage.setItem("coffee", JSON.stringify(coffee));
            // boxes.innerHTML=null
            window.location.reload();
        }
        boxes.append(image,title,price,btn);
        document.querySelector("#bucket").append(boxes);
    }
    
});

