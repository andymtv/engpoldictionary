window.addEventListener('DOMContentLoaded', function() {
    

    let inputEnglish = document.querySelector('.word-english'),
        inputPolish = document.querySelector('.word-polish'),
        listEnglish = document.querySelector('.list-english'),
        listPolish = document.querySelector('.list-polish'),
        addWord = document.querySelector('.add-word');

    let textEnglish, textPolish, listItemEnglish, listItemPolish, deleteBtn;

        let ls = window.localStorage;
        
        gettingKeysOfLS(ls);

        if(deleteBtn != undefined){
            canDelete();
        }

        addWord.addEventListener('click', () => {
            if(inputEnglish.value != "" && inputPolish.value != ""){
            textEnglish = inputEnglish.value,
            textPolish = inputPolish.value;
            listItemEnglish = document.createElement('li'),
            listItemPolish = document.createElement('li');

            listEnglish.prepend(listItemEnglish);
            listItemEnglish.textContent = textEnglish;
            
            listPolish.prepend(listItemPolish);
            listItemPolish.textContent = textPolish;

            words = localStorage.setItem(textEnglish, textPolish);

            inputEnglish.value = '';
            inputPolish.value = '';

            listItemEnglish.insertAdjacentHTML('afterbegin', 
                    '<img src="img/delete.png" class="delete-btn">'
                );
                deleteBtn = document.querySelectorAll('.delete-btn');
            canDelete();
            }
        });

        window.addEventListener('keydown', e => {
            if(e.key === 'Enter'){
            if(inputEnglish.value != "" && inputPolish.value != ""){
                textEnglish = inputEnglish.value,
                textPolish = inputPolish.value;
                listItemEnglish = document.createElement('li'),
                listItemPolish = document.createElement('li');
    
                listEnglish.prepend(listItemEnglish);
                listItemEnglish.textContent = textEnglish;
                
                listPolish.prepend(listItemPolish);
                listItemPolish.textContent = textPolish;
    
                words = localStorage.setItem(textEnglish, textPolish);
    
                inputEnglish.value = '';
                inputPolish.value = '';
    
                listItemEnglish.insertAdjacentHTML('afterbegin', 
                        '<img src="img/delete.png" class="delete-btn">'
                    );
                    deleteBtn = document.querySelectorAll('.delete-btn');
                canDelete();
                }
            }
        });

        function gettingKeysOfLS(localStorage) {
            let arr = [];
            for(let i = 0; i < localStorage.length; i++){
                let keyName = localStorage.key(i);               
                arr.push(keyName);
                arr.sort();
            } 
            for(let k = 0; k < arr.length; k++){
                let value = localStorage.getItem(arr[k]);          
                listItemEnglish = document.createElement('li'),
                listItemPolish = document.createElement('li');
                listEnglish.append(listItemEnglish);
                listPolish.append(listItemPolish);
                listItemEnglish.textContent = arr[k];
                listItemPolish.textContent = value;

                listItemEnglish.insertAdjacentHTML('afterbegin', 
                    '<img src="img/delete.png" class="delete-btn">'
                );
                deleteBtn = document.querySelectorAll('.delete-btn');
                }
        }

    function canDelete() {
        deleteBtn.forEach(item => {
            item.addEventListener('click', e => {
                let elem = item.parentNode;
                let keyName = localStorage.getItem(elem.textContent)
                
                for(let i = 0, k = 0; i < localStorage.length, k < localStorage.length; i++, k++){
                    try {
                        if(listEnglish.children[i].textContent == elem.textContent){
                        deleteWord(listPolish.children[i]);
                        deleteWord(elem);
                        localStorage.removeItem(elem.textContent);
                    }
                    } catch (error) {
                    }
                    
                }
            })
        })
    }
        function deleteWord(elem){
            elem.remove();
        }
});