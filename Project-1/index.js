const panels = document.querySelectorAll('.panel')
/*querySelectorAll('.panel')是讀取HTML檔案裡面所有叫panel的class,存入一個query裡面 */
panels.forEach(panel => {
    panel.addEventListener('click',() => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
/*forEach類似php的foreach 針對panels裡面的panel class,為panel class添加eventlistener,當有click的動作
  的時候就執行下面的function和添加一個class 進去panel class的元素里面
*/
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
/*手寫了一個removeActiveClasses的function,其意義就是刪除classList裡面的active class */