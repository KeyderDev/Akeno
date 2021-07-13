module.exports = ({
    name: "hack",
    code: `*__Iniciando un ataque a $username[$mentioned[1]]__**
    $editIn[3s;**Sacado el token del usuario:**
    $randomString[18];**Email del usuario:**
    $replaceText[$username; ;_;-1]@gmail.com;Contraseña:
    $randomString[7];**Contactos recientes:**
    $username[$randomUserID];**Palabra mas usada:**
    $randomText[meme;lol;nah;lmao;dude;bruh;wut;nou];**Mensaje directo mas reciente:**
    $randomText[xd;Chau;Porque me bloqueaste?;Si weee soy mod];**Hackeando archivos hospitalarios**;**Email hackeado(Pasada la autenticacion A2f)**;**Injectando ultima version de Token Grabber**;**Hackeando cuenta de Microsoft**;**Contraseña de Microsoft: $randomText[ZapIsZap@Zap.com;IAmNoob@gmail.com;ByeBye@ok.co.in;$replaceText[$username; ;_;-1]IsSmart@yahoo.com]**;**Mirando usuario de juegos**;**Juega $randomText[Fortnite(....);subway surfers;temple run;clash of clans]**;**Hackeando cuenta de Epic Games**;**Cuenta de Epic games hackeada y eliminada**;**IP de Discord:
    $numberSeparator[$random[100000000;900000000];.]**;__El peligroso ataque ha sido completado para el usuario $username[$mentioned[1]], y ganaste $random[200;500]<:akenocoin:842884874729816114>
    $setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[200;500]];$authorID]
    
    Pero mantente seguro, la policia puede venir en cualquier momento]
    $onlyIf[$mentioned[1]!=;:x:| A que persona vas a hackear?]
    $onlyIf[$authorID!=831280478190436423;:x:| Te voy a demandar por intentar hackearme :/]
    $onlyIf[$authorID!=$mentioned[1];:x:| Te vas a hackear a ti mismo? No es recomendable...]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
$cooldown[5m;:x:| Deja de hackear un poco no? Saldras con los dedos chuecos]`
})