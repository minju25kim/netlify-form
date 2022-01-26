let url = "https://contact-form-submitted.netlify.app/?name=Minju+Kim&email=minju%40minju.co.rk&company=foundersandcoders&message=this+is+test";

// url will be document.URL

let questionInfo = url.split('?');
let stringInfo = questionInfo[1].split('&')
let submitted = document.querySelector('.submitted')

for(let i=0;i<stringInfo.length;i++){
    let newDiv = document.createElement('div')
    newDiv.textContent= stringInfo[i]
    submitted.appendChild(newDiv);
}

