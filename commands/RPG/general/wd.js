module.exports = ({
name: "wd",
aliases: ["withdraw", "with"],
code: `
$addTimestamp
$description[Se retiraron \`$message<:akenocoin:842884874729816114>\` coins de tu banco.]
$author[$userTag[$authorID];$userAvatar[$authorID]]
$color[RANDOM]
$setUserVar[bank;$sub[$getUserVar[bank];$message]]
$setUserVar[Money;$sum[$getUserVar[Money];$message]]

$onlyIf[$getUserVar[bank;$authorID]>=$message;{description::x:| No tienes el dinero que quieres retirar del banco!}{author:$userTag[$authorID]:$authorAvatar}]
$onlyIf[$isValidNumber[$message]==true;{description::x:| Ingrese un número valido}{author:$userTag[$authorID]:$authorAvatar}]
$onlyIf[$getUserVar[bank;$authorID]!=0;{description::x:| No tienes el dinero en el banco!}{author:$userTag[$authorID]:$authorAvatar}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})