module.exports = ({
    name: "generate",
    code: `
    
    $if[$message==1]
    \`\`\`
    Codigo 1: ./Akeno Premium | $randomString[20]\`\`\`
$setVar[premiumcode1;$randomString[20]]

$elseIf[$message==2]
\`\`\`
Codigo 1: ./Akeno Premium | $randomString[20]
Codigo 2: ./Akeno Premium | $randomString[21]\`\`\`
$setVar[premiumcode1;./Akeno Premium | $randomString[20]]
$setVar[premiumcode2;$randomString[21]]
$endelseif

$elseIf[$message==3]
\`\`\`
Codigo 1: ./Akeno Premium | $randomString[20]
Codigo 2: ./Akeno Premium | $randomString[21]
Codigo 3: ./Akeno Premium | $randomString[22]\`\`\`
$setVar[premiumcode1;$randomString[20]]
$setVar[premiumcode2;$randomString[21]]
$setVar[premiumcode3;$randomString[22]]
$endelseif

$else
Formato inválido
$endif
$onlyIf[$authorID==$botOwnerId;:x:| Solo el desarrollador del bot puede generar codigos Premium.]


    `
})