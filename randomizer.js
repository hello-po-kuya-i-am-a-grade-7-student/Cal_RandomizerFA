function OnPlay (form){
    const homediv = document.querySelector('#home');
    homediv.style.display = 'none';
    const playdiv = document.querySelector('#play');
    playdiv.style.display = 'block';

    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);

    document.getElementById("n1").innerHTML = num1;
    document.getElementById("n2").innerHTML = num2;
    document.getElementById("n3").innerHTML = num3;

    const alphabet = "ABCDEFGHIJKLMNOPQRST";
    const num1thletter = alphabet[num1-1];
    document.getElementById("num1letter").innerHTML = num1thletter;

    let array = [num1,num2,num3];
    let largest = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i];
        }
    }
    let minutes = num2 * num3;
    const hours = Math.floor(minutes/ 60);
    const remainingMinutes = minutes % 60;

    document.getElementById("n1letter").innerHTML = num1thletter;
    document.getElementById("biggestnumber").innerHTML = largest;
    document.getElementById("time").innerHTML = hours + "hour(s) " + remainingMinutes + "minute(s)";
}

function PlayAgain() {
    const homediv = document.querySelector('#home');
    homediv.style.display = 'block';
    const playdiv = document.querySelector('#play');
    playdiv.style.display = 'none';
    document.getElementById("namebox").value = "";
    document.getElementById("n1").innerHTML = "";
    document.getElementById("n2").innerHTML = "";
    document.getElementById("n3").innerHTML = "";
}