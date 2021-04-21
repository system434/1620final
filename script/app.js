let albums = [{ name: "Album 1", price: 12.99, addedToCart: false },
{ name: "Album 2", price: 14.99, addedToCart: false}, 
{ name: "Album 3", price: 9.99, addedToCart: false }, 
{ name: "Album 4", price: 19.99, addedToCart: false }];


const imagearray = document.querySelectorAll("img");

function addimgsrc(imgarray){
    // console.log("this ran");
    for(let temp of imgarray){
        temp.src = `images/${temp.id}.png`;

    }
}
addimgsrc(imagearray);




const alb = document.querySelector(".Albums");


function addtocart(event){
    //use event.target
    console.log(event.target);
}


alb.addEventListener("click",addtocart);





















