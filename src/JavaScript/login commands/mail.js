module.exports = {
    name: "mail",
    code: `
    $title[Buzon de correos]
    $if[$getUserVar[mail]!=false]
    $description[No tienes correos!]
    $else
    {description:Tienes un correo!, usa $getServerVar[prefix]watch-mail para verlo}
    $endif
    $color[GREEN]

    
    
    
    `
}