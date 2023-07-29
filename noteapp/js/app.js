const d= document
const input = d.getElementById('input-field')
const note_Section  = d.getElementById('notesection')
const listed = d.getElementById('listed')
const btn_Save = d.getElementById('btn-save')
const btn_Delete = d.getElementById('btn-delete')
const colors = d.querySelectorAll('.color-box')


colors.forEach(function(colors){
    colors.addEventListener('click',(event)=>{
        let pickcolor = event.target.style.backgroundColor 
        input.style.backgroundColor=pickcolor
    })
})

// Events 
input.addEventListener('keyup',(event)=>{
    if(input.value){
        let text = input.value
    let par = d.createElement('p')
    let div = d.createElement('div')
    par.innerHTML=text
    if (event.key==='Enter') {
        div.classList.add("card" ,"shadow-sm","rounded" )
        par.classList.add('card-text' ,'p-3')
        div.appendChild(par)
        listed.append(div)
        div.style.backgroundColor=input.style.backgroundColor
        div.addEventListener("click",()=>{
            div.remove()
        })
        input.value=''
        
    }
    }
    
})
btn_Save.addEventListener('click',()=>{
    if(input.value){
        let text = input.value
        let par = d.createElement('p')
        let div = d.createElement('div')
        par.innerHTML=text
       
            div.classList.add("card","crt" ,"shadow-sm","rounded" )
            par.classList.add('card-text' ,'p-3')
            div.appendChild(par)
            listed.append(div)
            div.style.backgroundColor=input.style.backgroundColor
            div.addEventListener("click",()=>{
                div.remove()
            })
            input.value=''
    }
   
        
        
        
    
})

btn_Delete.addEventListener('click',()=>{
    input.value=''
    input.style.backgroundColor='white'
})

Array.from(listed).forEach((item) => {
    item.addEventListener('click', (event) => {
      p("hello")
    });
  });
 
//Functions 
function p (name){
    console.log(name)
}
