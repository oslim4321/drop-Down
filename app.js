 let text_box = document.getElementById('text_box')
let select= document.getElementById('mySelect')
let div =document.getElementById('div')
let color = document.getElementById('my-_color_Select') 



 function show(){

let select= document.getElementById('mySelect').value;
let div =document.getElementById('div')
let color = document.getElementById('my-color_Select').value;
let input =document.getElementById('text_box').value;
let newElement =`<${select} style="background-color: ${color}">${input}</${select}>`;
div.innerHTML +=newElement;
input.value=''

} 

/*   function show(params){
    let select =document.getElementById('mySelect').value
    let color= document.getElementById('my-color_Select').value
    let input =document.getElementById('text_box').value
    let div =document.getElementById('div')
    let latestElement=`<${select} style="background-color:${color}">${input}</${select}>`
    div.innerHTML +=latestElement
    input.value=''
}  */








/* function show(){
    if(select.value=='h1'){
        // div.innerHTML +='<h1>'+text_box.value+ '</h1>' 
        let newElement=`<h1 style="background-color: blue;">${text_box.value}</h1>`;
        div.innerHTML +=newElement;
}

    else if(select.value=='p'){
       // div.innerHTML +='<p>'+text_box.value+'</p>' 
        let newElement=`<p style="background-color: purple";>${text_box.value}</p>`
        div.innerHTML +=newElement
    }
 

   else if(select.value=='h2'){
        // div.innerHTML +='<h2>'+text_box.value+'</h2>' 
        let newElement= `<h2 style="background-color:green";> ${text_box.value}</h2>`
        div.innerHTML=newElement
    }


   else if(select.value=='h3'){
       div.innerHTML+='<h3>'+text_box.value+'</h3>'5
        let newElement= `<h3 style="background-color: yellow";>${text_box.value}</h3>`
        div.innerHTML=newElement
        text_box.value=''
    }



   else if(select.value=='h4'){
        // div.innerHTML+='<h4>'+text_box.value+'</h4>' 
        let newElement=`<h4 style="background-color:grey">${text_box.value}</h4>`
        div.innerHTML=newElement
    }

   else if(select.value=='h5'){
        let newElement=`<h5 style="background-color: green";>${text_box.value}</h5>`
        div.innerHTML=newElement
    }
    else if(select.value=='h6'){
        let newElement=`<h6 style="color:blue";>${text_box.value}</h6>`
        div.innerHTML +=newElement
    }

     else if(select.value=='i'){
        let newElement=`<i style="background-color:red";>${text_box.value}</i>`
        div.innerHTML=newElement

    }   


     else if(select.value=='i'){
        div.innerHTML +='<i>'+text_box.value+'</i>'
        text_box.value=''
    } 

}  */  