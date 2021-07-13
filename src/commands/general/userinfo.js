module.exports = ({
 name: "user-info",
 aliases: "whois",
 code: `
 $color[ffff]$thumbnail[$userAvatar[$findUser[$message]]]
 $title[Informacion de usuario]
  $if[$memberExists[$findUser[$message]]==true]

 $addField[**Permisos**;$userPerms[$findUser[$message]];yes]
 $endif
  $if[$memberExists[$findUser[$message]]==true]
 $addField[**Roles**;$userRoles[$findUser[$message];mentions];yes]
 $endif
 $if[$memberExists[$findUser[$message]]==true]
 $addField[**Rol mayor**;<@&$highestRole[$findUser[$message]]>;yes]
 $endif
 $addField[**Cuenta creada**;$creationDate[$findUser[$message];date] ($creationDate[$findUser[$message];time]);yes]
 $if[$memberExists[$findUser[$message]]==true]
 $addField[**Entro al servidor**;$memberJoinedDate[$findUser[$message];time] ago;yes]
 $endif 
 $addField[**Insignias**;$getUserBadges[$findUser[$message]];yes]
 $addField[**Plataforma**;$platform[$findUser[$message];yes]
 $addField[**Avatar**;[User Avatar\\]($userAvatar[$findUser[$message];2048;yes]);yes]
 $addField[**ID**;$mentioned[1;yes];yes]
 $addField[**Apodo**;$username[$findUser[$message]]#$discriminator[$findUser[$message]];yes]
 $addField[Estado del usuario;$replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message]];offline;<:offline:845015199022448651> | Offline];online;<:online:845015179465195520> | Online];idle;<:idle:845015154592841738> | Ausente];dnd;<:dnd:845015134911856640> | No Molestar;yes]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
 `
})