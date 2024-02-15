let brand = document.querySelector("#brandSearch");
let container = document.querySelector("#container");
let searchByModel = document.querySelectorAll("h1");



// let model = prompt("Enter Model Name");


let mobiles = {
    iphone: {
        iphone15 :{
            maker: "Apple",
            model: "iphone15",
            price: "450,000",
            ram: "8Gb",
            rom: "256gb",
            colors: ["Gray" , "BLack" , "#E7E4DD"],
            image : "./img/iphone 15.jpg"

        },
        iphone14 :{
            maker: "Apple",
            model: "iPhone 14 Pro Max",
            price: "450,000",
            ram: "6Gb",
            rom: "128gb",
            colors: ["Gray" , "BLack" , "#A1B2C4"],
            image : "./img/iphone 14.jpg"

        },
        iphone13 :{
            maker: "Apple",
            model: "iPhone 13 Pro",
            price: "150,000",
            ram: "6Gb",
            rom: "128gb",
            colors: ["#475345" , "BLack" , "#FFECE8"],
            image : "./img/iphone 13back.jpg",
            imageHover: "./img/th.jpg"

        }
    },
    samsung:{
        s24:{
            maker:"Samsung",
            model:"S24 Ultra",
            price: "374,000",
            colors: ["#C2CDBA" , "#DD9C6B" , "#FFECE8"],
            image : "./img/S24ultra.jpg",
            imageHover: "./img/S24ultra.jpg"
        }
    },
    oppo:{
        oppof19:{
            maker: "Oppo",
            model: "OppoF19",
            price: "450,000",
            ram: "8Gb",
            rom: "128gb",
            colors: ["purple" , "White" , "oliveGreen"],
            image : "./img/oppoF19.jpg"
        },
        oppof21:{
            maker: "Oppo",
            model: "OppoF21",
            price: "450,000",
            ram: "16Gb",
            rom: "256gb",
            colors: ["purple" , "Black" , "Yellow"],
            image : "./08Ir7mtBq7b4sRVypsg9ozIIRGGsLsg2oJxQXDEt.png"
        }
    }
    
}

function showAllItems(){
    if (mobiles){
        const mobile = mobiles;
        for(let key in mobile){
            const model = mobile[key];
            for (let key in model){
                const phone = model[key]
                container.innerHTML += generateCard(phone)
            }
        }
    }
}
showAllItems()

searchByModel.forEach(searchByModel => {
    searchByModel.addEventListener('click' , function (){
        let brandValue= searchByModel.textContent;
        renderBrand(brandValue)
    })
    
});

brand.addEventListener('keypress' , function (){
    if (event.key === 'Enter') {
        container.innerHTML = "";
        let selectedBrand = brandSearch.value.trim().toLowerCase();

        if(selectedBrand === ""){
            showAllItems()
        }else{

            renderBrand(selectedBrand);
        }
    }

});

function renderBrand(brand){

    container.innerHTML = '';


    if (mobiles[brand]) {
        const models = mobiles[brand];
        for (let key in models) {
            console.log(key)
            const model = models[key];
            container.innerHTML += generateCard(model);
        }
    }
}


function generateCard(model) {
    return `
    <div class="card-con">
        <div class="card">
            <img src="${model.image}" alt="${model.model}">
         <div class="card-details">
            <h2>${model.maker}</h2>
            <p class="model">${model.model}</P>
            <p>${model.colors.map(color => `<span class="color" style="background-color: ${color}; "></span>`).join('')}</p>
            <span>Rs </span>
            <p class="price">${model.price}</p>
            </div>
        </div>
        <div class="bottom">
            <span><input type="checkbox" > Compare</span>
            <button>View Detail's</button>
            <button class="cartBtn">Add to Cart</button>
        </div>
        
    </div>
    `;
}


