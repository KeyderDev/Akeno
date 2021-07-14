module.exports = ({
 name: "set-premiumuser",
 code: `
 $setTimeout[5s;
 userID: $findUser[$message[1]]]
 **A el usuario [<@$findUser[$message[1]]>] se le añadio premium correctamente**
$giveRoles[$findUser[$message[1]];843920390522929202]
$setGlobalUserVar[PREMIUM;true;$findUser[$message[1]]]
$setGlobalUserVar[premiumbadge;<:premium:848928734254071808>;$findUser[$message[1]]]
$onlyIf[$message[1]!=;:x:| Necesitas mencionar al usuario al que le quieres dar premium!]
$onlyIf[$authorID==$botOwnerId;:x:| Solo el desarrollador del bot puede dar premium.]`
})