# countdown-timer

這次做了一個 2022 新年的 countdown timer,比較多的功夫花在了 JavaScript,要準確計算月日時分秒,需要思考一下計算的邏輯,但是并不複雜

## Date()

利用 new Date() function 創建一個具有指定日期和時間的新日期 object,然後計算剩餘時間,再利用 setInterval function 來 countdown
