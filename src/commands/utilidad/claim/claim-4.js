module.exports = {
    name: "claim-4",
    code: `
    $setTimeout[20d;
        autor: $authorID]
    <a:checkanimado:831161301282979911>| Felicidades! Haz claimeado un code de Premium classic! Ahora disfruta de sus beneficios
    $giveRoles[$findUser[$authorID;843920390522929202]
    $setGlobalUserVar[PREMIUMgeneral;true;$authorID]

    $setGlobalUserVar[premiumbefore;true]
$setGlobalUserVar[PREMIUMclassic;true;$authorID]
$setGlobalUserVar[premiumbadge;<:premium:848928734254071808>;$authorID]
    $setVar[claim;$getVar[premiumcode4], $getVar[claim]]
    $onlyIf[$checkContains[$getVar[claim];$getVar[premiumcode4]]!=true;:x:| El code no existe o ya fue claimeado]
    $onlyForServers[830472834286878730;:x:| Este comando solo puede ser ejecutado en el soporte de Akeno]
    $onlyIf[$getGlobalUserVar[PREMIUMgeneral]!=true;:x:| Ya tienes Premium!]

    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
        :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
    }