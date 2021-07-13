module.exports = ({
    name: 'buy-elixiroscuro',
    code: `
    
    $title[Haz comprado Elixir Oscuro]
    $description[:warning:| Cuidado, es muy poderoso, usalo con precaucion]
    $color[33F3FF]
    $cooldown[1d; Espera %time% para volver a comprar elixir oscuro!]
    $setUserVar[fhimato;$sub[$getUserVar[fhimato];2000]]
    $setUserVar[ElixirOscuro;$sum[$getUserVar[ElixirOscuro;$authorID];1];$authorID]
    $onlyIf[2000<=$getUserVar[fhimato];:x: | No tienes suficientes fragmentos de Himato!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})