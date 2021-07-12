module.exports = ({
name: "shop",
aliases: "tienda",
code: `$color[D1BBBB]$title[Akeno's Shop!]$description[
Tiendita de Akeno! Aqui podras comprar todo lo que necesites!
:cookie:Galleta: $900! - $getServerVar[prefix]buy-cookie
Galleta con chispas de chocolate

<:pickaxe:841284596028538880>Pico: <:akenocoin:842884874729816114>800 - $getServerVar[prefix]buy-pico
Pico para minar distintos minerales

<:botella:841286657671561216>Botella de agua: <:akenocoin:842884874729816114>100 - $getServerVar[prefix]buy-waterbottle
Botella de agua

:fish:Caña de pescar: <:akenocoin:842884874729816114>300 - $getServerVar[prefix]buy-caña
Una caña para pescar peces

:bread:Libra de pan: <:akenocoin:842884874729816114>600 - $getServerVar[prefix]buy-lppan
Libra de pan para comerciar y cocinar

<:incubadora:842052678263111740>Incubadora: <:akenocoin:842884874729816114>2000 - $getServerVar[prefix]buy-incubadora
Una incubadora para incubar huevos de animales

<:Huevo:859827806094229504>Huevo de lobo: <:akenocoin:842884874729816114>1000 - $getServerVar[prefix]buy-legg
Huevo de lobo que lo podras incubar con una incubadora

<:elixir_magico:859429049880805387>Elixir Magico: <:akenocoin:842884874729816114>700 - $getServerVar[prefix]buy-elixirmagico
Elixir que puedes usar para hacer hechizos

:carrot:Zanahoria: <:akenocoin:842884874729816114>400 - $getServerVar[prefix]buy-zanahoria
Zanahoria para hacer hechizos y cocinar

<:Polvo:859887580790259753>Polvo: <:akenocoin:842884874729816114>400 - $getServerVar[prefix]buy-polvo
Polvo para hacer hechizos]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
$footer[Pagina 1/2]`

})