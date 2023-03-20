// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//Main work of this file will be tracking changes user doing and based on those changes toggleBlurness.
'use strict';

initializaCheckBox();
let allCategoriesShowHide = document.getElementsByClassName("btn1");
for(let p =0;p<allCategoriesShowHide.length;p++) {
    allCategoriesShowHide[p].onclick = function toggleOptions() {
        let x = this.parentNode.querySelector('ul');
        if (x.style.display === "none") {
            x.style.display = "block";
            this.querySelector('i').classList.remove("down");
            this.querySelector('i').classList.add("up");
        } else {
            x.style.display = "none";
            this.querySelector('i').classList.remove("up");
            this.querySelector('i').classList.add("down");
        }
    };

}





function blurElements() {
    // let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file:'logic.js'},
            function(response){alert("Executed suceesfully");});
    });
};

var checkboxes = document.querySelectorAll('input.subOption');

for(var i=0; i<checkboxes.length; i++) {
    checkboxes[i].onclick = function() {
        var allOptions= document.querySelectorAll('[parent="'+this.getAttribute("parent")+'"]');
        var checked= document.querySelectorAll('[parent="'+this.getAttribute("parent")+'"]:checked');
        var checkedCount = checked.length;
        let checkall = document.getElementById(this.getAttribute("parent"));
        checkall.checked = checkedCount > 0;
        checkall.indeterminate = checkedCount > 0 && checkedCount < allOptions.length;
        let currentOptionSelected = this;
        const categoriesChecked = document.querySelectorAll('input.subOption:checked');
        const mainCategories  = document.getElementById('all_categories');
        mainCategories.checked = categoriesChecked.length > 0;
        mainCategories.indeterminate =categoriesChecked.length > 0 && categoriesChecked.length  < checkboxes.length;
        updateCategories();
        //Update storage with ID's are selected.
        //if checked add to the list




        //if unchecked remove from the list.
    }
}
function updateCategories(){
    chrome.storage.sync.get("selected_category", function(data){
        let currentOptionsSelected = document.getElementsByClassName("subOption");
        data = data.selected_category;
        // console.log("Old Categories", data);
        for(let k =0;k<currentOptionsSelected.length;k++) {
            let currentOptionSelected = currentOptionsSelected[k];
            const isChecked = currentOptionSelected.checked;

            let id = currentOptionSelected.getAttribute('id');

            const index = data.indexOf(id);
            if (!isChecked) {
                if (index > -1) {
                    data.splice(index, 1);
                }
            } else {
                if (index <= -1) {
                    data.push(id);
                }
            }

        }
        chrome.storage.sync.set({"selected_category": data}, function () {
            console.log("New categories set");
        });
    });


}
function initializaCheckBox(){
    chrome.storage.sync.get("selected_category", function(data){
        data = data.selected_category;
        data.map(function (item){try{document.getElementById(item).checked = true} catch(e){console.log(item)}});
        const allCategories = document.querySelectorAll(".categories");

        for(let l=0;l<allCategories.length;l++){
            let item = allCategories[l];
            var allOptions= document.querySelectorAll('[parent="'+item.getAttribute("id")+'"]');
            var checked= document.querySelectorAll('[parent="'+item.getAttribute("id")+'"]:checked');
            var checkedCount = checked.length;
            item.checked = checkedCount > 0;
            item.indeterminate = checkedCount > 0 && checkedCount < allOptions.length;
            item.parentNode.querySelector('.btn1').click();
        };
        const categoriesChecked = document.querySelectorAll(".categories:checked");
        const mainCategories  = document.getElementById('all_categories');
        mainCategories.checked = categoriesChecked.length > 0;
        mainCategories.indeterminate =categoriesChecked.length > 0 && categoriesChecked.length  < allCategories.length;


    });




}
let categories = document.getElementsByClassName("categories");
for (let j =0;j<categories.length;j++) {
    categories[j].onclick = function () {
        let checkboxessubCategories = this.parentNode.getElementsByClassName("subOption");
        for (var i = 0; i < checkboxessubCategories.length; i++) {
            checkboxessubCategories[i].checked = this.checked;
        };
        const categoriesChecked = document.querySelectorAll(".categories:checked");
        const mainCategories  = document.getElementById('all_categories');
        mainCategories.checked = categoriesChecked.length > 0;
        const allCategories = document.querySelectorAll(".categories");
        mainCategories.indeterminate =categoriesChecked.length > 0 && categoriesChecked.length  < allCategories.length;
        updateCategories();
    };
}
//page refresh funcion for done button
document.getElementById("reload").addEventListener("click", function() {
    chrome.tabs.reload();
    window.close();
});

document.getElementById('all_categories').onclick = function () {
    let categories = document.getElementsByClassName("categories");
    const currentValue = this.checked;
    new Promise((reject, resolve) => {
        for (let j = 0; j < categories.length; j++) {
            categories[j].checked = !currentValue;
            categories[j].click();
        }
    },() => {resolve("Done")});

};



// changeColor.onclick = blurElements;

