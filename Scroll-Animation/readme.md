# Project-6

Project-6 是在做類似 scroll animation,先在 HTML file 創建多個 boxes,然後讓這些 boxes 在視窗外待命,等到我 scroll down 的時候就把這些 boxes 移動到瀏覽器中間.animation 的製作依舊和之前一樣,在 css 預先寫好,再通過 JavaScript 加入,這次用了一個新的 function

## getBoundingClientRect

這是一個可以返回元素大小以及相對視窗的位置的 function,這個 function 有八個屬性的 DOMRect object
分別是 left, top, bottom, right, x, y, width, height
