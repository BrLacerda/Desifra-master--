function strToCesar(locNumb) {
    var input = document.querySelector('#txt').value
    var text = ""
    var locNumb = parseInt(locNumb)
    for (var i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i)
        if (charCode > 47 && charCode < 58) {
            charCode = ((charCode - 48 + locNumb) % 10) + 48
        }
        else if (charCode > 64 && charCode < 91) {
            charCode = ((charCode - 65 + locNumb) % 26) + 65
        }
        else if (charCode > 96 && charCode < 123) {
            charCode = ((charCode - 97 + locNumb) % 26) + 97
        }
        text = text + String.fromCharCode(charCode)
    }
    return document.getElementById('translate').innerHTML=`Tradução: ${text}`
}

function cesarToStr(locNumb) {
    var input = document.querySelector('#txt').value
    var text = ""
    var locNumb = parseInt(locNumb)
    for (var i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i)
        if (charCode > 47 && charCode < 58) {
            charCode = ((charCode - 48 + (26 - locNumb)) % 10) + 48
        }
        else if (charCode > 64 && charCode < 91) {
            charCode = ((charCode - 65 + (26 - locNumb)) % 26) + 65
        }
        else if (charCode > 96 && charCode < 123) {
            charCode = ((charCode - 97 + (26 - locNumb)) % 26) + 97
        }
        text = text + String.fromCharCode(charCode)
    }
    console.log(text)
    return document.getElementById('translate').innerHTML=`Tradução: ${text}`
}

function strToB64() {
    var input = document.querySelector('#txt').value
    var text = btoa(input);
    return document.getElementById('translate').innerHTML=`Tradução: ${text}`
}

function b64ToStr() {
    var input = document.querySelector('#txt').value
    var text = atob(input);
    return document.getElementById('translate').innerHTML=`Tradução: ${text}`
}
