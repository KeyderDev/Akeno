module.exports = ({
    name: "reset-invites",
    code: `$color[D1BBBB]$title[Invites Reseteadas]
    $description[Las invites de <@$mentioned[1]> han sido reseteadas correctamente]
   $resetUserVar[invites;$findMember[$message[1]]]
$supressErrors[Ha ocurrido un error mientras se procesaba el comando, enviando error a la consola... $djsEval[console.log('Ha ocurrido un error mientras se procesaba el comando ak.reset-invites')]]
 $onlyIf[$getServerVar[invitetracker]==false;:x:| El sistema de invite tracker no esta habilitado en este servidor]
 $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
 $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})