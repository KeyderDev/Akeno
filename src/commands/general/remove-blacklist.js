module.exports = ({
name: "remove-blacklist",
code: `$color[5865F2]$title[Usuario sacado de la lista negra]$description[
El usuario \`$userTag[$findUser[$message[1]]]\` fue sacado de la lista negra
Desarrollador: <@$authorID>
Usuario: $userTag[$findUser[$message[1]]]
Razon: $messageSlice[1;40]]
$setGlobalUserVar[sbl;:x:;$findUser[$message[1]]]
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyForIDs[798250899041681428;:x:| Solo mis desarrolladores pueden usar este comando]
$setGlobalUserVar[bl;false;$findUser[$message[1]]]`
})