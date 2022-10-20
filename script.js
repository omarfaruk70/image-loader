const container = document.querySelector('.container'),
textChange = container.querySelector('h1'),
button = document.querySelector('button'),
input = document.querySelector('input');
let myFile;

button.onclick = () =>{
    input.click();
}
input.addEventListener('change', function(){
    myFile = this.files[0];
    container.classList.add('active');
})
