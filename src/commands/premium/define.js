module.exports = ({
    name: "define",
    aliases: "meaning",
    code: `
    $title[Definicion de "$message"]
    $color[$getVar[pembedcolor]]
    $description[
    **Foneticas:** $jsonRequest[https://api.dictionaryapi.dev/api/v2/entries/en_US/$message;[0].phonetics[0].text;:x:| No se encontró ninguna coincidencia, intenta poner la palabra en ingles
    ]
    
    **Parte del discurso** $jsonrequest[https://api.dictionaryapi.dev/api/v2/entries/en_US/$replaceText[$message; ;%20];#RIGHT#0#LEFT#.meanings#RIGHT#0#LEFT#.partOfSpeech;:x:| No se encontró ninguna coincidencia
    ]
    
    **Definicion:** $jsonrequest[https://api.dictionaryapi.dev/api/v2/entries/en_US/$replaceText[$message; ;%20];#RIGHT#0#LEFT#.meanings#RIGHT#0#LEFT#.definitions#RIGHT#0#LEFT#.definition;:x:|]
    
    **Ejemplo:** $jsonrequest[https://api.dictionaryapi.dev/api/v2/entries/en_US/$replaceText[$message; ;%20];#RIGHT#0#LEFT#.meanings#RIGHT#0#LEFT#.definitions#RIGHT#0#LEFT#.example;:x:| No se encontró ninguna coincidencia
    ]
    
    ]
    $footer[Solicitado por $userTag]
    $addTimestamp
    $onlyIf[$getGlobalUserVar[PREMIUM;$authorID]!=false;{description:Lo sentimos, este comando es premium, cambie a premium para acceder a comandos exclusivos!}{color:RED}]    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
    :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    `
    })