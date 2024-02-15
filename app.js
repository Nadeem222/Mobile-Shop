let brand = document.querySelector("#brand");
let container = document.querySelector("#container");

// let model = prompt("Enter Model Name");


let mobiles = {
    iphone: {
        iphone15 :{
            maker: "Apple",
            model: "iphone15",
            ram: "8Gb",
            rom: "256gb",
            colors: ["Gray" , "BLack" , "Yellow"],
            image : "./img/iphone 15.jpg"

        },
        iphone14 :{
            maker: "Apple",
            model: "iphone14",
            ram: "6Gb",
            rom: "128gb",
            colors: ["Gray" , "BLack" , "Yellow"],
            image : "./img/iphone 14.jpg"

        }
    },
    oppo:{
        oppoF19:{
            maker: "Oppo",
            model: "OppoF19",
            ram: "8Gb",
            rom: "128gb",
            colors: ["purple" , "White" , "oliveGreen"],
            image : "./img/oppoF19.jpg"
        },
        oppoF21:{
            maker: "Oppo",
            model: "OppoF21",
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


brand.addEventListener('change' , function (){
    let selectedBrand = brand.value;
    renderBrand(selectedBrand);

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
    <div class="card">
        <img src="${model.image}" alt="${model.model}">
        <div class="card-details">
            <h2>${model.maker}</h2>
            <p>${model.model}</P>
            <p>RAM: ${model.ram}</p>
            <p>ROM: ${model.rom}</p>
            <p>Colors: ${model.colors.join(', ')}</p>
        </div>
    </div>
    `;
}


