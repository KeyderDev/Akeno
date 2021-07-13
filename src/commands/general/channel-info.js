module.exports = ({
        name: "channel-info",
        aliases: ["ci"],
        code: `
$reply[$messageID;
{title:Informacion del canal}
{field:Nombre:<#$channel[$findChannel[$message];id]> **\`$channel[$findChannel[$message];name]\`**}
{field:ID:$channel[$findChannel[$message];id]}
{field:Topico:$replaceText[$channel[$findChannel[$message];topic];null;No hay topico]}
{field:Tipo de canal:$replaceText[$replaceText[$replaceText[$replaceText[$channel[$findChannel[$message];type];text;Canal de texto];voice;Canal de voz];category;Categoria del canal];news;Canal de noticias]}
{field:Categoria:<#$channel[$findChannel[$message];parentid]>}
{field:Posicion:$channel[$findChannel[$message];position]}
{field:Creado el:$channel[$findChannel[$message];created]}

{color:RANDOM}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
});