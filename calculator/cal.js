let Str="";
let buttons =document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.value == '='){
            Str=eval(Str);
            document.querySelector('input').value=Str;
        }
        else if(e.target.value== 'C'){
          Str="";
          document.querySelector('input').value=Str;
        }
        else{
        console.log(e.target)
        Str=Str+e.target.value;
        document.querySelector('input').value=Str;
        } 
    })

})