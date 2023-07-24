const d = document

const input = d.getElementById('inputt')
const todo = d.querySelector('.todos')
const modal = d.getElementById('mod')
/* const btndel = d.querySelector('.todos') */
const li = d.querySelectorAll('.list-group-item')
const itags = Array.from(d.getElementsByTagName('i'))
input.addEventListener('keydown',function(event){
    
    if(event.key==='Enter')
    {
        event.preventDefault()
       let text = input.value
       p(text)
       let newLi = d.createElement('li')
       newLi.classList.add('list-group-item' ,'d-flex' ,'justify-content-between', 'align-items-center')
       let newspan = d.createElement('span')
       newspan.innerHTML=text
       let newi = d.createElement('i')
       newi.classList.add('delbtn','fa' ,'fa-trash-o', 'delete')
       newi.addEventListener('click',function(event){
       event.target.parentElement.remove()
       })
       newLi.append(newspan,newi)
      itags.push(newi)
       todo.append(newLi)
       input.value=''
      
       
    }
    


})














function p(name){
    console.log(name)
}