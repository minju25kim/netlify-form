let url = document.URL;
// let url = "https://contact-form-submitted.netlify.app/?name=Minju+Kim&email=minju25kim%40gmail.com&company=Nivea&message=This+is+test+message."


let questionInfo = url.split('?');
let stringInfo = questionInfo[1].split('&')
let submitted = document.querySelector('.submitted')
let propertyArray = [];
let valueArray = [];
let property = ['name:','email:','company:','message:'];

for(let i=0;i<stringInfo.length;i++){
    let newDiv = document.createElement('div')
    let newSpan = document.createElement('span')
    let newP = document.createElement('p')
    newSpan.textContent= property[i];
    newP.textContent = splitInfo(stringInfo)[i];
    newDiv.appendChild(newSpan)
    newDiv.appendChild(newP)
    submitted.appendChild(newDiv);
}

function arrayToString(array){
    let stringValue ='';
    array.forEach(element=>{
        stringValue += ` ${element}`;
    })
    return stringValue;
}

function splitInfo(stringInfo){
    stringInfo.forEach(element=>{
        let splittedInfo = element.split('=');
        propertyArray.push(splittedInfo[0]);
        valueArray.push(splittedInfo[1]);
    })
    let name = valueArray[0].split('+');
    let email = valueArray[1].split('%40')
    let company=valueArray[2].split('+');
    let message = valueArray[3].split('+');
    let nameValue = arrayToString(name);
    let emailValue = arrayToString(email)
    let companyValue = arrayToString(company)
    let messageValue = arrayToString(message)
    let value = [];
    value.push(nameValue,emailValue,companyValue,messageValue);
    return value;
}

