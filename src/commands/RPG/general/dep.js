module.exports = ({
    name: "deposit",
    aliases: ['dep'],
    code: `
    $setUserVar[bank;$sum[$getUserVar[bank;$authorID];$get[q]];$authorID]
    $setUserVar[Money;$sub[$getUserVar[Money;$authorID];$get[q]];$authorID]
    $description[Haz depositado $get[q]$ en tu banco correctamente!]
    $author[$username;$authorAvatar]
    
    $onlyIf[$get[q]<=$getUserVar[Money;$authorID];❌ | La cantidad introducida es mayor de la que tienes!]
    $onlyIf[$get[q]>0;❌ | No puedes depositar un valor menos de \`0\`. Si quieres depositar todo el dinero, usa  \`*dep all\`]
    $onlyBotPerms[embedlinks;❌ | Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $if[$message[1]!=all]
    $let[q;$message]
    $else
    $let[q;$getUserVar[Money]]
    $endif
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    ❌ | Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    })