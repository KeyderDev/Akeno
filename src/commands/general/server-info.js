module.exports = {
    name: "serverinfo",
    aliases: ["si"],
    code: `$addfield[👥 Miembros ($membersCount);ㅤ] 
   $color[#FFFFFF]
   $addfield[📆 Servidor Creado;$guild[$guildID;created] ( \`$guild[$guildID;timestamp]\` )]
   $addfield[💬 Canales ($channelCount[text;voice]);
    Canales de Texto $channelCount[text]
    Canales de Voz $channelCount[voice]]
   $addfield[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;🇧🇷];europe;🇪🇺];hong kong;🇨🇳];eua;🇺🇸];india;🇮🇳];japan;🇯🇵] Server Region; $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;Brazil];europe;Europe];hong kong;Hong Kong];eua;Eua];india;India];japan;Japan]]
   $addfield[Propietario;\`$userTag[$ownerID]\` ($ownerID)]
   $addfield[ID;$guildID]
   $title[$serverName]
   $thumbnail[$serverIcon]`
   };