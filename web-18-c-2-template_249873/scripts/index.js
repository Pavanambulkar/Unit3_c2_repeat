// Add the coffee to local storage with key "coffee"
let url = `https://masai-mock-api.herokuapp.com/coffee/menu`

fetch(url)
.then(function(res){
    return res.json();

})
.then(function(res){
    console.log(res.menu.data);
    itemsdata(res.menu.data);
})
.catch(function(err){
    console.log(err);
})

function itemsdata(data){
    data.forEach((ele, i) => {
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
        btn.innerText = "Add to Bucket"
        btn.setAttribute("class", "btn");

        btn.addEventListener("click", function(){
            addTobucket(ele,i);
        })

        boxes.append(image,title,price,btn);
        document.querySelector("#menu").append(boxes);

    });
}

function addTobucket(ele, i){
    let arr = JSON.parse(localStorage.getItem("coffee"))|| [];
    arr.push(ele);
    localStorage.setItem("coffee", JSON.stringify(arr));

    let count = document.querySelector("#coffee_count>p");
    count.innerHTML = JSON.parse(localStorage.getItem("coffee")).length;
}