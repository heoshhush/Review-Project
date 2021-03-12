const personPic = document.querySelector('.personPic');
const name = document.querySelector('.name');
const position = document.querySelector('.position');
const reviewText = document.querySelector('.reviewText');
const arrowButtons = document.querySelector('.arrowButtons');
const buttons = document.querySelector('.buttons');

let i = 0

function loadItems(){
return fetch('data.json')
.then(response => response.json())
.then(myJson => myJson.personData);
}

function displayItem(item){
    personPic.src = item["src"];
    name.innerText = item["personName"];
    position.innerText = item["position"];
    reviewText.innerText = item["review"]
}



buttons.addEventListener('click', (event) => {
    const target = event.target;

    if(target.matches('.fa-chevron-left')){

        i = --i
        if(i < 0){
            i = 0
        }
        console.log(i);
        console.log('hi');
        onClickButton();
    }
     else if(target.matches('.fa-chevron-right')){
        i = ++i

        if(i > 6){
            i = 6
        }
        console.log(i);
        console.log('hi');
        onClickButton();
    }
    else if(target.matches('.surpriseMe')){
        i = Math.floor(Math.random()*6)
        onClickButton();
    }
    
});

function onClickButton(){
loadItems()
.then((items) => {
        displayItem(items[i]);
    })
}
    
onClickButton();


// json을 fetch를 통해 불러올려고해도, fetch 구문을 벗어나면 그 밖에서는 정상적으로 불러와지지 않았음.
// 따라서, fetch 이후 .then으로 잇고 잇고 해서 그 안에서 끝내기 위해 시도함.
