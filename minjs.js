const vewe_all = document.querySelectorAll(".viwe_all");
const watch_box = document.querySelector(".add_watchBox");
const vewe_button = document.querySelector("#viwe_all");
const vewe_button_2 = document.querySelector("#viwe_all_2");
const new_add_box = document.querySelector(".add_watchBox2");



    vewe_button.addEventListener('click',function(){
        
        watch_box.classList.toggle('add_watchBox_2')
        new_add_box.classList.remove('add_watchBox_2')
        
    });

    vewe_button_2.addEventListener('click',function(){
        
        new_add_box.classList.toggle('add_watchBox_2');
        watch_box.classList.remove('add_watchBox_2');

        
    });







