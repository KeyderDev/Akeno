module.exports = ({
 name: "remove-premiumuser",
 code: `

:white_check_mark:| [$message[1]] ya no es un usuario premium.
$setGlobalUserVar[PREMIUM;false;$findUser[$message[1]]]
$takeRoles[$findUser[$message[1]];843920390522929202]
$setGlobalUserVar[premiumbadge;;$findUser[$message[1]]]
$onlyIf[$message[1]!=;:x:| Necesitas mencionar al usuario al cual le quieres quitar premium!]
$onlyIf[$authorID==$botOwnerId;:x:| Solo el desarrollador del bot puede quitarle premium a los usuarios.]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
})