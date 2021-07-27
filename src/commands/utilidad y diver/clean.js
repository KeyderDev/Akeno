module.exports = {
    name: "clear",
    aliases: ["purge"],
    code: `$author[Limpieza...;https://thumbs.gfycat.com/AltruisticDistinctAoudad-size_restricted.gif]
   $description[**Limpieza Hecha** \`$noMentionMessage $replaceText[$replaceText[&$mentioned[1]&;&&;mensajes\` **fueron eliminados**;1];&$mentioned[1]&;**de los ultimos mensajes**;1] $replaceText[$replaceText[&$mentioned[1]&;&&;;1];&$mentioned[1]&;<@$mentioned[1]>;1]]
   $clear[$message]
   $color[RANDOM]
   $cooldown[5s;<@$authorID> Un poco rapido no?**]
   $footer[Limpiado por: $username[$authorID]#$discriminator[$authorID]]
   $suppressErrors[**Intenta** \`$getServerVar[prefix]clear <numero>\`]
   $onlyIf[$noMentionMessage<=500; **Puedes eliminar de 2 a 500 mensajes por comando**]
   
   $onlyIf[$message[1]!=;** Añade el numero de mensajes a eliminar**, **Intenta:** \`$getServerVar[prefix]clear <numero>\`]
   $onlyBotPerms[managemessages;**Necesito el permiso de  \`Manejar Mensajes\` para usar este comando**]
   $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
   $onlyPerms[managemessages;:x:| Neceitas el permiso de \`Manejar Mensajes\` para usar este comando]
   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
   }