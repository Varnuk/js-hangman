const passwordsLib=['elephant', 'sentence', 'provision','choose','market','random','banana','limited','no pain no gain','keep your secrets','źdźbło','koń','ćma']
const randomIndex = Math.round(Math.random()*(passwordsLib.length-1));
var password = passwordsLib[randomIndex];


password = password.toUpperCase(); 
let mistakes=0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var password1 = "";
for (let i = 0; i < password.length; i++) //change, char to "-" and space stays space
{
    if(password.charAt(i)==" ") password1+=" "; 
    else password1+="-";
}

function writePassword()
{
    document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";


function start()
{
    var divContent ="";

    for (let i = 0; i < 35; i++) {
        var element = "l" + i;
        divContent+=`<div class="letter" onclick="check(`+i+`)" id="`+element+`">`+ letters[i] +`</div>`;
        if( (i+1) % 7 ===0) divContent+=`<div style="clear:both;"</div>`
    } 

    document.getElementById("alphabet").innerHTML=divContent;
    writePassword();
}

String.prototype.setChar = function(position, character)
{
    if(position>this.length -1)
        return this.toString();
    else return this.substr(0, position) + character + this.substr(position + 1);

}


function check(nr)
{
    var hitted = false;
    for (let i = 0; i < password.length; i++) {

        if(password.charAt(i)==letters[nr])
        {
            password1=password1.setChar(i, letters[nr]);
            hitted=true;
        }
    }

    var element = "l" + nr;
    
    if(hitted==true)
    {
        yes.play();
        document.getElementById(element).style.background = "#003300"
        document.getElementById(element).style.color = "#00C000"
        document.getElementById(element).style.border = "3px solid #00C000"
        document.getElementById(element).style.cursor = "default"
        writePassword();

    }
    else
    {
        no.play();
        document.getElementById(element).style.background = "#330000"
        document.getElementById(element).style.color = "#C00000"
        document.getElementById(element).style.border = "3px solid #C00000"
        document.getElementById(element).style.cursor = "default"
        document.getElementById(element).setAttribute("onclick",";");
        mistakes++;
        var picture = "img/s" + mistakes +".jpg";
        document.getElementById("gallows").innerHTML = `<img src="`+picture+`"  alt=""/>`;
    }
    // win
    if(password == password1)
    {
        document.getElementById("alphabet").innerHTML = "Congratulation! The correct password is: " + password + `</br></br><span class = "reset" onclick="location.reload()">Try again?</span>`;
    }
    //defeat
    if(mistakes>=9)
    {
        document.getElementById("alphabet").innerHTML = "Defeat! The correct password is: " + password + `</br></br><span class = "reset" onclick="location.reload()">Try again?</span>`;
    }

}