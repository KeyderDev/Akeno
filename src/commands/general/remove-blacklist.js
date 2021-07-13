module.exports = ({
name: "remove-blacklist",
code: `$color[5865F2]$title[Usuario sacado de la lista negra]$description[
El usuario \`$userTag[$findUser[$message[1]]]\` fue sacado de la lista negra
Desarrollador: <@$authorID>
Usuario: $userTag[$findUser[$message[1]]]
Razon: $messageSlice[1]
$onlyForIDs[798250899041681428;:x:| Solo mi desarrollador puede usar este comando]
$setGlobalUserVar[bl;false;$findUser[$message[1]]]`
})