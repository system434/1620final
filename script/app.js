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
const cart = document.querySelector(".cart");


function addtocart(event){
    //use event.target
    //console.log(event.target);
    for(let album of albums){
        if(album.name = event.target.id){
            if(album.addedToCart == true){
                alert("This item is already in your cart.")
                break;
            }
            else{
                album.addedToCart = true;

                let img = document.createElement("img");
                img.src = event.target.src;
                img.alt = event.target.alt;
                cart.appendChild(img);

                let nam = document.createElement("p");
                nam.textContent = event.target.alt;
                cart.appendChild(nam);

                let price = document.createElement("p");
                price.textContent = albums[`${event.target.alt}`].price;
                cart.appendChild(price);
            }
            break;
        }
        

    }

    
    
}


alb.addEventListener("click",addtocart);





















