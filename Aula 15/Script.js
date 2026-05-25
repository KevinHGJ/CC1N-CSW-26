//document.writeln("Hello World !!!");
//window.alert("Hello World Again!!!")
document.getElementById("title").innerHTML = "Hello World, i like JavaScript"

let nameprompt = window.prompt("What's your name?")

document.getElementById("name").innerHTML = nameprompt

let resp = window.confirm("You like JavaScript")

if (resp){
    document.getElementById("resposta").innerHTML = "The student likes Java Script class"
}
else {
    document.getElementById("resposta").innerHTML = "The student does like Java Script class"
}

function sendname(){
    let nameAnswer = document.getElementById("InputName").value

    const answer = document.getElementById("containeranswer")
    answer.innerHTML = "The name Write was " + nameAnswer;

    answer.style.height = "150px"
    answer.style.display = "flex"
    answer.style.border = "2px solid #ff0000"
}