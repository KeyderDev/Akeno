module.exports = ({
    name: "remove-p.premiumuser",
    code: `
   
   :white_check_mark:| [<@!$findUser[$message[1]]> ya no es un usuario premium.
   $setGlobalUserVar[pleft;0]
   $setGlobalUserVar[PREMIUMgeneral;false;$findUser[$message[1]]]
   $setGlobalUserVar[PREMIUMpro;false;$findUser[$message[1]]]
   $if[$guildID==830472834286878730]
   $takeRoles[$findUser[$message[1]];870028687448363059]
   $endif
   $setGlobalUserVar[premiumbadge;;$findUser[$message[1]]]
   $onlyIf[$message[1]!=;:x:| Necesitas mencionar al usuario al cual le quieres quitar premium!]
   $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
   $onlyIf[$authorID==$botOwnerId;:x:| Solo el desarrollador del bot puede quitarle premium a los usuarios.]
   $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
   :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
   `
   })