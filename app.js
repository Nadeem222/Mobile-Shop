let brand = document.querySelector("#brandSearch");
let container = document.querySelector("#container");
let searchByModel = document.querySelectorAll("h1");
let logo = document.querySelector(".logoImg");




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
            image : "./img/iphone 15.jpg",

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
            price: "170,000",
            ram: "6Gb",
            rom: "128gb",
            colors: ["#475345" , "BLack" , "#FFECE8"],
            image : "./img/iphone 13back.jpg",
            imageHover: "./img/th.jpg"

        },
        iphone12 :{
            maker: "Apple",
            model: "iPhone 12",
            price: "150,000",
            ram: "6Gb",
            rom: "128gb",
            colors: ["#475345" , "BLack" , "red"],
            image : "./img/iphone12.jpg",
            imageHover: "./img/th.jpg"

        }
    },
    samsung:{
        s24ultra:{
            maker:"Samsung",
            model:"S24 Ultra",
            price: "374,000",
            colors: ["#C2CDBA" , "#DD9C6B" , "#FFECE8"],
            image : "./img/S24ultra.jpg",
            imageHover: "./img/S24ultra.jpg"
        },
        zfold:{
            maker:"Samsung",
            model:"Galaxy Z fold 5",
            price: "332,999",
            colors: [ "#F2D6CE" , "#41424C" ," #192343"
        ],
            image : "./img/zflip.jpeg",
            imageHover: "./img/S24ultra.jpg",
            ram: "8gb",
            rom: "128gb/256gb/512",
            main:"Dual 12 MP, f/1.8, 24mm (wide), Dual Pixel PDAF, OIS + 12 MP, f/2.2, (ultrawide), LED Flash ",
            front: "10 MP, f/2.4, 26mm (wide), HDR, Video (4K@30fps)  "                
       

        },
        zflip:{
            maker:"Samsung",
            model:"Galaxy Z Flip ",
            price: "332,999",
            colors: [ "#F2D6CE" , "#41424C" ," #192343"
        ],
            image : "./img/flip.jpg",
            imageHover: "./img/S24ultra.jpg",
            ram: "8gb",
            rom: "128gb/256gb/512",
            main:"Dual 12 MP, f/1.8, 24mm (wide), Dual Pixel PDAF, OIS + 12 MP, f/2.2, (ultrawide), LED Flash ",
            front: "10 MP, f/2.4, 26mm (wide), HDR, Video (4K@30fps)  "                
       

        },
        s24:{
            maker:"Samsung",
            model:"S24",
            price: "374,000",
            colors: ["#C2CDBA" , "#DD9C6B" , "#FFECE8"],
            image : "./img/s24.jpg",
            imageHover: "./img/s2"
        }

    },
    google:{
        pixel7a:{
            maker:"Google",
            model:"Google pixel 7a",
            price: "140,000",
            colors: ["#C2CDBA" , "#DD9C6B" , "#FFECE8"],
            image : "./img/pixel7a.jpg",
            imageHover: "./img/s2"
        },
        pixel7:{
            maker:"Google",
            model:"Google pixel 7",
            price: "125,000",
            colors: ["#CFDED9" , "#DD9C6B" , "#FFECE8"],
            image : "./img/pixel-7.jpg",
            imageHover: "./img/s2"
        },
        pixel8a:{
            maker:"Google",
            model:"Google pixel 8a",
            price: "180,000",
            colors: ["#C2CDBA" , "#DD9C6B" , "#FFECE8"],
            image : "./img/Pixel-8a.jpg",
            imageHover: "./img/s2"
        },
        pixel8:{
            maker:"Google",
            model:"Google pixel 8",
            price: "165,000",
            colors: ["#C2CDBA" , "#DD9C6B" , "#FFECE8"],
            image : "./img/Pixel-8.jpg",
            imageHover: "./img/s2"
        },
    },
    oppo:{
        oppof19:{
            maker: "Oppo",
            model: "Oppo F19 Pro",
            price: "48,000",
            ram: "8Gb",
            rom: "128gb",
            colors: ["purple" , "blue" , "oliveGreen"],
            image : "./img/oppoF19.jpg"
        },
        oppof21:{
            maker: "Oppo",
            model: "OppoF21",
            price: "85,000",
            ram: "16Gb",
            rom: "256gb",
            colors: ["#F19A4A" , "Black" , "gray"],
            image : "./img/oppoF21.jpg"
        },
        opporeno6:{
            maker: "Oppo",
            model: "Oppo Reno 6",
            price: "62,000",
            ram: "16Gb",
            rom: "256gb",
            colors: ["#BDE2EF" , "Black" , "gray"],
            image : "./img/opporeno6.webp"
        },
        oppoa5:{
            maker: "Oppo",
            model: "Oppo A5 ",
            price: "50,000",
            ram: "16Gb",
            rom: "256gb",
            colors: ["#BDE2EF" , "Black" , "gray"],
            image : "./img/oppoa5.jpg"
        },
    }
    
}
logo.addEventListener('click' , function(){
    container.innerHTML = "";
    showAllItems()
});

function showAllItems(){
    container.innerHTML = "";
    if (mobiles){
        const mobile = mobiles;
        for(let key in mobile){
            const model = mobile[key];
            for (let key in model){
                const phone = model[key]
                container.innerHTML += generateCard(phone)
            }
        }
        // attachEventListeners();
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
            <button class="viewDetailBtn" onclick="generateDetailCard('${model.model}')" >View Detail's</button>
            <button class="cartBtn">Add to Cart</button>
        </div>
        
    </div>
    `;
}
function generateDetailCard(model) {
    container.innerHTML = ''; 
    for (let key in mobiles) {
        for (let key1 in mobiles[key]) {
            const item = mobiles[key][key1];
            if (item.model === model) {
                container.innerHTML += detailCard(item);
                break;
            }
        }
    }
}
function attachEventListeners() {
    const viewDetailButtons = document.querySelectorAll('.viewDetailBtn');
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const model = this.getAttribute('data-model');
            generateDetailCard(model);
        });
    });
}

function detailCard(item){
    console.log(item.model)
    return `
    <div class="detailCard">
        <div class="imageSec">

            <div class="leftSide">
                <ul>
                    <li><img src="${item.image}" alt=""></li>
                    <li><img src="${item.image}" alt=""></li>
                    <li><img src="${item.image}" alt=""></li>
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


