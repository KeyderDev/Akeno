module.exports = ({
    name: "generate",
    code: `
    
    $if[$message==1]
    \`\`\`
    Codigo 1: ./Akeno Classic Premium | $randomString[20]\`\`\`
$setVar[premiumcode1;$randomString[20]]

$elseIf[$message==2]
\`\`\`
Codigo 1: ./Akeno Classic Premium | $randomString[20]
Codigo 2: ./Akeno Classic Premium | $randomString[21]\`\`\`
$setVar[premiumcode1;./Akeno Premium | $randomString[20]]
$setVar[premiumcode2;$randomString[21]]
$endelseif

$elseIf[$message==3]
\`\`\`
Codigo 1: ./Akeno Classic Premium | $randomString[20]
Codigo 2: ./Akeno Classic Premium | $randomString[21]
Codigo 3: ./Akeno Classic Premium | $randomString[22]\`\`\`
$setVar[premiumcode1;$randomString[20]]
$setVar[premiumcode2;$randomString[21]]
$setVar[premiumcode3;$randomString[22]]
$endelseif

$elseIf[$message==4]
\`\`\`
Codigo 1: ./Akeno Classic Premium | $randomString[20]
Codigo 2: ./Akeno Classic Premium | $randomString[21]
Codigo 3: ./Akeno Classic Premium | $randomString[22]
Codigo 4: ./Akeno Classic Premium | $randomString[23]\`\`\`
$setVar[premiumcode1;$randomString[20]]
$setVar[premiumcode2;$randomString[21]]
$setVar[premiumcode3;$randomString[22]]
$setVar[premiumcode4;$randomString[23]]
$endelseif

$elseIf[$message==5]
\`\`\`
Codigo 1: ./Akeno Classic Premium | $randomString[20]
Codigo 2: ./Akeno Classic Premium | $randomString[21]
Codigo 3: ./Akeno Classic Premium | $randomString[22]
Codigo 4: ./Akeno Classic Premium | $randomString[23]
Codigo 5: ./Akeno Classic Premium | $randomString[24]\`\`\`
$setVar[premiumcode1;$randomString[20]]
$setVar[premiumcode2;$randomString[21]]
$setVar[premiumcode3;$randomString[22]]
$setVar[premiumcode4;$randomString[23]]
$setVar[premiumcode5;$randomString[24]]
$endelseif

$elseIf[$message==6]
\`\`\`
Codigo 1: ./Akeno Classic Premium | $randomString[20]
Codigo 2: ./Akeno Classic Premium | $randomString[21]
Codigo 3: ./Akeno Classic Premium | $randomString[22]
Codigo 4: ./Akeno Classic Premium | $randomString[23]
Codigo 5: ./Akeno Classic Premium | $randomString[24]
Codigo 6: ./Akeno Classic Premium | $randomString[25]\`\`\`
$setVar[premiumcode1;$randomString[20]]
$setVar[premiumcode2;$randomString[21]]
$setVar[premiumcode3;$randomString[22]]
$setVar[premiumcode4;$randomString[23]]
$setVar[premiumcode5;$randomString[24]]
$setVar[premiumcode6;$randomString[25]]
$endelseif

$elseIf[$message==7]
\`\`\`
Codigo 1: ./Akeno Classic Premium | $randomString[20]
Codigo 2: ./Akeno Classic Premium | $randomString[21]
Codigo 3: ./Akeno Classic Premium | $randomString[22]
Codigo 4: ./Akeno Classic Premium | $randomString[23]
Codigo 5: ./Akeno Classic Premium | $randomString[24]
Codigo 6: ./Akeno Classic Premium | $randomString[25]
Codigo 7: ./Akeno Classic Premium | $randomString[26]\`\`\`
$setVar[premiumcode1;$randomString[20]]
$setVar[premiumcode2;$randomString[21]]
$setVar[premiumcode3;$randomString[22]]
$setVar[premiumcode4;$randomString[23]]
$setVar[premiumcode5;$randomString[24]]
$setVar[premiumcode6;$randomString[25]]
$setVar[premiumcode7;$randomString[26]]
$endelseif

$else
Formato inválido
$endif
$onlyForIDs[798250899041681428;788869971073040454;:x:| Solo los desarrolladores del bot puede generar codigos Premium.]


    `
})