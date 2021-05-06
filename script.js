/******** dom elements of game  */
let user_score_dom = document.querySelector("#user_score");
let computer_score_dom = document.querySelector("#computer_score");

let box_result_dom = document.querySelector(".box_result");
let box_result_content_dom = document.querySelector(".box_result p");

let score_user =0;
let score_computer =0;

let choices_dom = document.querySelector("#choices");
let compare_vs_dom = document.querySelector("#compare_vs");

console.log(compare_vs_dom);


let computer_dom = document.querySelector(".computer");
let user_dom = document.querySelector(".user");



let repeat_game_dom = document.querySelector(".repeat_game");

repeat_game_dom.addEventListener(["click"],function(){

    choices_dom.style.display="flex";
    compare_vs_dom.style.display="none";
    repeat_game_dom.style.display="none";
    box_result_dom.style.display="none";

    computer_dom.classList.remove("draw_gray");
    computer_dom.classList.remove("lose_red");
    computer_dom.classList.remove("win_green");

    user_dom.classList.remove("lose_red");
    user_dom.classList.remove("draw_gray");
    user_dom.classList.remove("win_green");
    
});

document.onkeydown = function(e){
        if(e.keyCode == 13){
            choices_dom.style.display="flex";
            compare_vs_dom.style.display="none";
            repeat_game_dom.style.display="none";
            box_result_dom.style.display="none";

            computer_dom.classList.remove("draw_gray");
            computer_dom.classList.remove("lose_red");
            computer_dom.classList.remove("win_green");
    
            user_dom.classList.remove("lose_red");
            user_dom.classList.remove("draw_gray");
            user_dom.classList.remove("win_green");
        }
}

/********* end dom */

/******* start  game */
function get_computer_choice(){
    let rnd_choice = ["rock","paper","scissor"];
    let number_choice = Math.random()*3;
     number_choice = Math.floor(number_choice);
    let computer_choice = rnd_choice[number_choice];
    return computer_choice;
}

function get_user_choice(choice,get_computer_choice){
     console.log("user choice before : "+choice);
       game(get_computer_choice,choice);
       
}



function game(get_computer_choice,get_user_choice){
   console.log("user choice after : "+get_user_choice);

    switch(get_user_choice){
        case "paper":
            if(get_computer_choice =="rock"){
                console.log("user choice : "+get_user_choice);
                console.log("computer choice : "+get_computer_choice);
                box_result_content_dom.innerHTML="you win"
            }
            else if(get_computer_choice =="scissor"){
                console.log("user choice : "+get_user_choice);
                console.log("computer choice : "+get_computer_choice);
                box_result_content_dom.innerHTML="you lose";
            }
            else if(get_computer_choice=="paper"){
                console.log("user choice : "+get_user_choice);
                console.log("computer choice : "+get_computer_choice);
                box_result_content_dom.innerHTML="no one win";
            }
    
        break;

        case "rock":
            if(get_computer_choice =="rock"){
                console.log("user choice : "+get_user_choice);
                console.log("computer choice : "+get_computer_choice);
                box_result_content_dom.innerHTML="no one win";
            }
            else if(get_computer_choice =="scissor"){
                console.log("user choice : "+get_user_choice);
                console.log("computer choice : "+get_computer_choice);
                box_result_content_dom.innerHTML="you win";
            }
            else if(get_computer_choice =="paper"){
                console.log("user choice : "+get_user_choice);
                console.log("computer choice : "+get_computer_choice);
                box_result_content_dom.innerHTML="you lose";
            }
            break;
        
        case "scissor":
            if(get_computer_choice =="rock"){
                console.log("user choice : "+get_user_choice);
                console.log("computer choice : "+get_computer_choice);
                box_result_content_dom.innerHTML="you lose"
            }
            else if(get_computer_choice =="scissor"){
                console.log("user choice : "+get_user_choice);
                console.log("computer choice : "+get_computer_choice);
                box_result_content_dom.innerHTML="no one win";
            }
            else if(get_computer_choice =="paper"){
                console.log("user choice : "+get_user_choice);
                console.log("computer choice : "+get_computer_choice);
                box_result_content_dom.innerHTML="you win";
            }
            break;
    }

    computer_dom.children[0].src = convert_choiceToimg(get_computer_choice);
    user_dom.children[0].src = convert_choiceToimg(get_user_choice);

     let check_win = box_result_content_dom.innerHTML;
     who_win(check_win);
}

function convert_choiceToimg(item){
   if(item == "paper"){
        return item = "paper.svg";
   }
   else if(item == "rock"){
       return item = "rock.svg";
   }
   else{
      return item = "scissors.svg";
   }
}

function  who_win(check_win){
    choices_dom.style.display="none";
    compare_vs_dom.style.display="flex";
    
    box_result_dom.style.display="block";
    repeat_game_dom.style.display="block";
    choices_dom.style.display ="none";
    box_result_dom.style.display="block";
    compare_vs_dom.style.display="flex";
    
    if(check_win == "you win"){
       score_user++;
       computer_dom.classList.add("lose_red");
       user_dom.classList.add("win_green");
        user_score_dom.innerHTML = score_user;
    }else if(check_win == "you lose"){
        score_computer++;
        computer_score_dom.innerHTML = score_computer;
        computer_dom.classList.add("win_green");
        user_dom.classList.add("lose_red");
    }else if(check_win =="no one win"){
        computer_dom.classList.add("draw_gray");
        user_dom.classList.add("draw_gray");
    }


  
   
}


