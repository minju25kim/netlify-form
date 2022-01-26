let url = document.URL;

// url will be document.URL

let questionInfo = url.split('?');
let stringInfo = questionInfo[1].split('&')
let submitted = document.querySelector('.submitted')

for(let i=0;i<stringInfo.length;i++){
    let newDiv = document.createElement('div')
    newDiv.textContent= stringInfo[i]
    submitted.appendChild(newDiv);
}

