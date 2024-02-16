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
        iPhone14ProMax :{
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
        },
        zflip:{
            maker:"Samsung",
            model:"Galaxy Z Flip 4",
            price: "332,999",
            colors: ["#C2CDBA" , "#F2D6CE" , "#41424C" ," #192343"
        ],
            image : "./img/zflip.jpeg",
            imageHover: "./img/S24ultra.jpg",
            ram: "8gb",
            rom: "128gb/256gb/512",
            main:"Dual 12 MP, f/1.8, 24mm (wide), Dual Pixel PDAF, OIS + 12 MP, f/2.2, (ultrawide), LED Flash ",
            front: "10 MP, f/2.4, 26mm (wide), HDR, Video (4K@30fps)  "                
       

        },
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
        let brandValue= searchByModel.textContent.toLocaleLowerCase();
        renderBrand(brandValue)
    })
    
});

brand.addEventListener('keypress' , function (){
    if (event.key === 'Enter') {
        container.innerHTML = "";
        let selectedBrand = brandSearch.value.trim().toLowerCase();

        if (selectedBrand === "") {
            showAllItems();
        } else {
            let modelFound = false;
            for (let brand in mobiles) {
                const models = mobiles[brand];
                for (let key in models) {
                    if (key.toLowerCase() === selectedBrand) {
                        container.innerHTML += generateCard(models[key]);
                        modelFound = true;
                        break;
                    }
                }
                if (modelFound) break;
            }
            if (!modelFound) {
                
                renderBrand(selectedBrand);
            }
        }
    }

});

function renderBrand(brand){

    container.innerHTML = '';
    console.log(brand)

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
            <button id="item" onclick="generateDetailCard('${model.model}')" >View Detail's</button>
            <button class="cartBtn">Add to Cart</button>
        </div>
        
    </div>
    `;
}
function generateDetailCard(maker){
    container.innerHTML = '';
    // console.log(maker)

    if (mobiles[maker]) {
        const models = mobiles[maker];
        console.log(models)
        for (let key in models) {
            const model = models[key];
            container.innerHTML += detailCard(model);
        }
    }
}


function detailCard(item){
    console.log(item.image)
    return `
    <div class="detailCard">
        <div class="imageSec">

            <div class="leftSide">
                <ul>
                    <li><img src="./img/zflip.jpeg" alt=""></li>
                    <li><img src="./img/zflip.jpeg" alt=""></li>
                    <li><img src="./img/zflip.jpeg" alt=""></li>
                </ul>
            </div>
            <div class="mainImg">
                <img src="${item.image}" alt="">
                
            </div>
            <div class="modelDetail">
                <h2>${item.maker} - ${item.model}</h2>
                <p>Model:MMMA3LL/ASKU:6417792</p>
                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><span>4.8</span><small>(900reviews)</small> </p>
                <p>${item.colors.map(color => `<span class="color" style="background-color: ${color}; "></span>`).join('')}</p>
                <p class="price">RS 375,000</p>
            </div>
        </div>
        <div class="speficationDetail">
            <h3>Spefications</h3>
            <div class="speficationPara screen">
                <p >Screen size</p>
                <p>6.1inches</p>
            </div>
            <div class="speficationPara">
                <p>Rear-Facing Camera</p>
                <p>6.1inches</p>
            </div>
            <div class="speficationPara screen" >
                <p >Front-Facing Camera</p>
                <p>6.1inches</p>
            </div>
            <div class="speficationPara">
                <p>Series</p>
                <p>Iphone13</p>
            </div>
        </div>
    </div>
    `
}


