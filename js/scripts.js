var score=0;
var chancesLeft=10;

document.getElementById("Game").addEventListener("submit",function(event){
    event.preventDefault();

    var user=document.getElementById("guessnumber").value;
    var result=document.getElementById("Score");
    var chances=document.getElementById("Chances");
    var message = document.getElementById("Message");

    if(user!=null && user.trim()!==""&& !isNaN(user) && user>=1 && user<=10 ){

            var k=Math.random()*10;
            var s=Math.floor(k);

            if(user==s){

                score++;
                result.textContent=`🎯 Correct! Your score is: ${score}`;
                message.classList.remove("error");
                message.classList.add("success");

            }else{

                result.textContent="Sorry...! Correct number is: " + s + " your score is: "+ score;
                message.classList.remove("success");
                message.classList.add("error");
                
            }
            chancesLeft--
            chances.textContent="Still you have "+ chancesLeft +"chances";



    }else{
        result.textContent="❌ You have not entered any number..."
        message.classList.add("error");
    }

    if(chancesLeft===0){
        alert("Game Over...!");
        window.location.reload();

    }


})