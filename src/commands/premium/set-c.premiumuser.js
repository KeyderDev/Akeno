module.exports = ({
 name: "set-c.premiumuser",
 code: `
 $setTimeout[20d;
autor: $authorID]
 **A el usuario [<@!$findUser[$message[1]]>] se le añadio premium correctamente**
$if[$guildID==830472834286878730]
$giveRoles[$findUser[$message[1]];843920390522929202]
$endif
$setGlobalUserVar[premiumbefore;true]
$setGlobalUserVar[PREMIUMgeneral;true;$findUser[$message[1]]]
$setGlobalUserVar[PREMIUMclassic;true;$findUser[$message[1]]]
$setGlobalUserVar[premiumbadge;<:premium:848928734254071808>;$findUser[$message[1]]]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$message[1]!=;:x:| Necesitas mencionar al usuario al que le quieres dar premium!]
$onlyIf[$authorID==$botOwnerId;:x:| Solo el desarrollador del bot puede dar premium.]`
})