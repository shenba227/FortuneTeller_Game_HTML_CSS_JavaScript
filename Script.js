function tellfortune(){
    let favcolor=document.getElementById("favcolor").value.toLocaleLowerCase();
    let career;
    if(favcolor==="yellow"){
        career="You create your own destiny. You make choices and decisions that lead you to the life you live";

    }else if(favcolor==="blue"){

        career="Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment";

    }else if(favcolor==="orange"){
        career="Your future is created by what you do today, not tomorrow.";

    }else if(favcolor==="pink"){
        career="You have within you right now, everything you need to deal with whatever the world can throw at you.";

    }else if(favcolor==="White"){
        career="It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change";

    }else if(favcolor==="black"){
        career="You can’t go back and change the beginning, but you can start where you are and change the ending.";

    }else if(favcolor==="red"){
        career="The future belongs to those who prepare for it today.";

    }else if(favcolor==="purple"){
        career="Every moment is a fresh beginning.";
    }else if(favcolor==="green"){
career="The future holds many exciting stuff for you!";
    }else{
        career="The world of creativity awaits you";
    }
    document.getElementById("Fortune").innerHTML=career;
    alert("Find Out What Your Future Holds");
}

