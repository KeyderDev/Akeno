module.exports = ({
    name: "botinfo",
    code: `$author[Akeno Stats;$userAvatar[$clientID]]
$description[
$addField[Links;
:link: [Soporte](https://discord.gg/MuGPbtR3DF)
:link: [Invitacion]($getBotInvite[admin])
$addField[Versiones;
:cd: Version de NodeJS: $nodeVersion
:book: Librerias: Aoi.JS, DBD.TS
:floppy_disk: Version de Aoi.js: $packageVersion]
$addField[General;
:computer: Uso de CPU: %$cpu
:computer: Modelo de CPU: $djsEval[require ('os').cpus()[0].model;yes]
:ping_pong: Ping: $pingms
:stopwatch: Uptime: $client[readytimestamp]
:gear: Comandos: $commandsCount
:busts_in_silhouette: Usuarios $allMembersCount
:level_slider: Servidores: $serverCount
:medal: Canales: $allChannelsCount
:dvd: Canales de texto: $allChannelsCount[text]
:sound: Canales de voz: $allChannelsCount[voice]
:vertical_traffic_light: Uso de RAM: $ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]
<:windows:847949329822253146> Plataforma: $replaceText[$djsEval[require ('os').platform();yes];linux; :penguin: Linux;-1]
:crown: Desarrollador: $userTag[$botOwnerID]]

$thumbnail[$userAvatar[$clientid]]
$footer[$userTag[$clientID];$userAvatar[$clientID]]
$color[D1BBBB]
$addTimestamp
$onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})