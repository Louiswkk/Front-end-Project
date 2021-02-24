# Project-1 的 read me

![project-1](./project-1.png)

Project-1 其實是做了一個 animation,用了 5 個 div 開闢出 5 個區塊,每個區塊都有上圖片,只要點擊其中一個區塊,那個區塊就會展開,
而其他區塊則會收縮起來,展開和收縮的動畫是用 javascript 配合 css 做出來的,通過 JavaScript 的 document 的 querySelectorAll function 讀取所有 class name 是 panel 的元素,然後再建立 click 事件,當點擊某一個 panel 時就會加入 active 這個 class name 進去,並且刪除其他 panel 里面的 active,而在 css 里面也做好了 active 的相關設定以及 animation 的設置,所以就做出了 project 呈現的內容.
