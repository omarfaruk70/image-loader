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
container.addEventListener('dragover', (text) => {
    event.preventDefault();
    container.classList.add('active');
    textChange.textContent = 'Ralease to upload file';
});
container.addEventListener('dragleave', (text) => {
    textChange.textContent = 'Drag and drop';
});

container.addEventListener('drop', () =>{
    event.preventDefault();
    myFile = event.dataTransfer.files[0];
});

function showPicture(){
    let fileType = myFile.type;
    let  validExtention  = ['image/jpg', 'image/pnh'];

    if(validExtention.includes(fileType)){
        let fileReader = new fileReader();
        fileReader.onload = () =>{
            let imgURL = fileReader.result;
            let img = `<img src= '${imgURL}' alt=''>`
            container.innerHTML = img;
        }
        fileReader.readAsDataURL(myFile);
    }
    else{
        alert('This file is not valid');
        container.classList.remove('active');
        textChange.textContent = 'Drag and Drop';
    }
};
