module.exports = {
    name: "function",
    code: `$title[$get[name]]
    $description[$get[desc]
    
 
    
    \`\`\`$get[usage]\`\`\`
    ]
    
    $color[#36FDFF]
    
    $onlyIf[$get[r]!=400;:x:| Error
    __La funcion no se pudo encontrar__]
    
    $let[usage;$jsonRequest[https://api.leref.ga/functions/$message[1]?limit=1;data[0].usage]]
    $let[desc;$jsonRequest[https://api.leref.ga/functions/$message[1]?limit=1;data[0].desc]]
    $let[name;$jsonRequest[https://api.leref.ga/functions/$message[1]?limit=1;data[0].name]]
    $let[r;$jsonRequest[https://api.leref.ga/functions/$message[1]?limit=1;status]]
    
    $onlyIf[$message!=;:x:| Que funcion quieres buscar?]`
}