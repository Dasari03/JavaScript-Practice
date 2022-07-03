const itemContainer = document.querySelector('ul');
const itemInput = document.querySelector('#itemInput');

itemInput.addEventListener('keypress', function(e){
    
    if(!itemInput.value){return}
        
    if(e.key ==='Enter'){
    
        const itemLi = document.createElement('li')
        const itemName = itemInput.value
        itemLi.innerText = itemName;
        itemContainer.append(itemLi)
        itemInput.value = ''
    }
    

})