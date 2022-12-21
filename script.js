let string="";
let buttons=document.querySelectorAll('button');
buttons.forEach(butt=>{
    butt.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('.previous-operand').innerText=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('.previous-operand').innerText=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,-1);
            document.querySelector('.previous-operand').innerText=string;
        }
        else{
            string=string+e.target.innerText;
            document.querySelector('.previous-operand').innerText=string;
        }
    })
})
