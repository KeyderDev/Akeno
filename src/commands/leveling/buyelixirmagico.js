module.exports = ({
    name: 'buy-elixirmagico',
    code: `
    
    $title[Haz comprado un elixir magico!]
    $description[Haz comprado un elixir magico! Con el elixir podras hacer diferentes cosas]
    $color[A714B6]
    $cooldown[10s; Espera %time% para volver a comprar un elixir]
    $setUserVar[Money;$sub[$getUserVar[Money];700]]
    $setUserVar[elixirmagico;$sum[$getUserVar[elixirmagico;$authorID];1];$authorID]
    $onlyIf[900<=$getUserVar[Money];:x: | No tienes suficiente dinero!]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]





`

})