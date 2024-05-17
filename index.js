const textBox= document.getElementById("textbox");
const  tofahrenheit = document.getElementById("tofahrenheit");
const  tocelsius= document.getElementById("tocelsius");
const  result= document.getElementById("result");
let temp;



function convert(){
    if( tofahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp *9 /5 +32;
        result.textContent = temp.toFixed() + "\u2109";
    }
    else if(tocelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32)*(5/9);
        result.textContent = temp.toFixed() + "\u2103";
    }
    else{
        result.textContent ="select a unit";
    }

    
}