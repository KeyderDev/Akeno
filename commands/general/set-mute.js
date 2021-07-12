module.exports=({
name: "set-muterole",
code:`
Se seteo el rol de muteado a <@&$mentionedRoles[1]>
$modifyRolePerms[$mentionedRoles[1];-sendmessages]
$setServerVar[roleid;$getServerVar[mutedrole]]
$setServerVar[mutedrole;$mentionedRoles[1]]
$onlyIf[$findRole[$mentionedRoles[1]]=;:x:| ]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})