module.exports = {
    name: "slot",
    code: `
    $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$replaceText[$replaceText[$checkCondition[ganas==$randomText[ganas;pierdes]];true;$message[1]];false;-$message[1]]]]
    
    $thumbnail[$authorAvatar]
    $color[$replaceText[$replaceText[$checkCondition[$randomText[ganas;pierdes]==ganas];true;07ff00;1];false;E64338;1]]
    $title[$username's Slot Game] 
    $description[>>> **$randomText[🍋;🍊;🍏;🍒;🍇] | $randomText[🍊;🍒;🍇;🍏;🍋] | $randomText[🍒;🍋;🍊;🍇;🍏]
    $replaceText[$replaceText[$checkCondition[$randomText[won;lost]==won];true;$randomText[🍊 | 🍊 | 🍊 ;🍇 | 🍇 | 🍇;🍒 | 🍒 | 🍒;🍏 | 🍏 | 🍏;🍋 | 🍋 | 🍋];1];false;$randomText[🍒 | 🍊 | 🍊;🍇 | 🍏 | 🍒;🍇 | 🍒 | 🍊;🍏 | 🍊 | 🍒;🍏 | 🍇 | 🍊;🍋 | 🍊 | 🍒;🍒 | 🍋 | 🍊;🍏| 🍋 | 🍇;🍇 | 🍋 | 🍒;🍏 | 🍊 | 🍋];1] ⬅
    $randomText[🍇;🍊;🍋;🍏;🍒] | $randomText[🍒;🍏;🍇;🍋;🍊] | $randomText[🍒;🍇;🍋;🍏;🍊]**]
    $footer[Tu $randomText[ganas;pierdes] $message[1] 💰]
    
    $argsCheck[1;:x:| Porfavor escribe una cantidad]
    
    $onlyIf[$isNumber[$message[>]]==true;:x:| Sintaxis Incorrecta, eso no es un numero]
    
    $onlyIf[$message[>]>=10;:x:| La cantidad minima son <:akenocoin:842884874729816114>10]
    
    $onlyIf[$message[>]<=100000;:x:| La cantidad maxima son <:akenocoin:842884874729816114>100000]
    
    $onlyIf[$getGlobalUserVar[Money]>=$message[>];:x:| No tienes dinero suficiente]
    `}