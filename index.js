const input = document.querySelector("input");

const unordered_list =  document.querySelector("#unordered-List")







input.addEventListener("keypress", function (e) {

    let  keypress = e.key;
    if(keypress=="Enter")
    {
        if(input.value=='')alert('enter item name')
        else{
                let list = document.createElement('li');
                list.innerHTML = input.value
                unordered_list.appendChild(list);
                input.value=""
        }
    }


}, false);
