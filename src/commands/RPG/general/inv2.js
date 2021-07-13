module.exports = [{
name: "inv",
aliases: ['inventario'],
code: `
$reactionCollector[$splitText[1];$authorID;3m;1️⃣,2️⃣,3️⃣,4️⃣;pag1,pag2,pag3,pag4]

$textSplit[$channelSendMessage[$channelID][{title:Inventario de $username}{description:
 :cookie:Galletas: $getUserVar[cookies]
    <:twitch:838113649808900157>Suscripciones de Twitch: $getUserVar[subs]
    <:twitch:838113649808900157>Dinero en donaciones de twitch: $getUserVar[donaciones]
    <:coin:842884874729816114>Dinero en efectivo: $getUserVar[Money]
    :bank:Dinero en el banco: $getUserVar[bank]
    <:Bitcoin:846390571458363432>Bitcoins: $getUserVar[bitcoin]
    
}]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
},{//categoría de configuración
name: "pag1",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Pagina 2}{description:
  Mineria:
    :pick:Picos: $getUserVar[pico]
    <:oro:841831314491703337>Oro: $getUserVar[oro]
    <:diamante:841831314578735124>Diamantes: $getUserVar[diamante]
    <:esmeralda:841831315216662558>Esmeraldas: $getUserVar[esmeralda]
    <:lapislazuli:841831315102892032>Lapizlazuli: $getUserVar[lapizlazuli]
    <:Cuarzo:841831315112591370>Cuarzo: $getUserVar[cuarzo]
    <:iron:841831314994626580>Plata: $getUserVar[plata]
    <:cobre:841831314877448232>Cobre: $getUserVar[cobre]
    <:Lingote_de_himato:859586304823263262>Lingotes de Himato: $getUserVar[himato]
    <:Fragmento_de_himato:859590708704837642>Fragmentos de himato: $getUserVar[fhimato]}]`,
type:'awaitedCommand'
},{//categoria de interacción
name: "pag2",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Pagina 2}{description:
   Productos:
   :bread:Libras de pan: $getUserVar[lppan]
   :cake:Tartas: $getUserVar[tarta]
   <:botella:841286657671561216>Botellas de agua: $getUserVar[botella]
   :carrot:Zanahorias: $getUserVar[zanahoria]
   <:Botella_de_miel:859823266193473566>Botella de miel: $getUserVar[botellademiel]

   Objetos:
   :fish:Cañas: $getUserVar[caña]
   <:incubadora:842052678263111740>Incubadoras: $getUserVar[incubadora]
   <:elixir_magico:859429049880805387>Elixir's Magicos: $getUserVar[elixirmagico]

}]`,
type:'awaitedCommand'
},{//caregoria de ranking
name: "pag3",
code: `$editMessage[$message[1];{title:Pagina 3}{description:
 Huevos: *Para incubar un huevo use $getServerVar[prefix]incubate-(huevo de animal)*
   <:Huevo:859827806094229504>Huevos de lobo: $getUserVar[loboegg]
   
   Mascotas:
   Lobos: $getUserVar[lobo]
   Conejos: $getUserVar[conejo]
}{color:D1BBBB}`,
type:'awaitedCommand'
},{//categoria de musica
name: "pag4",
code: `$editMessage[$message[1];{color:D1BBBB}{title:Pagina 4}{description:
  Hechizos: *Para mas informacion use $getServerVar[prefix]libro-hechizos*
   <:ojo:842878912286818354>Ojos de araña: $getUserVar[ojo]
   <:elixir_magico:859429049880805387>Elixir magico: $getUserVar[elixirmagico]
   <:Polvo_de_suerte:859448350183915520>Polvo de suerte: $getUserVar[polvodesuerte]
   :carrot:Zanahorias: $getUserVar[zanahoria]
   Lechugas:
   <:Polvo:859887580790259753>Polvo: $getUserVar[polvo]
   --------------- (*Para hacer un hechizo use $getServerVar[prefix]craft-(hechizo)*)
   :dollar:Hechizo de dinero: $getUserVar[moneyspell]
   $footer[Pagina 1/2 - $getServerVar[prefix]inv-2]}]`,
type:'awaitedCommand'
}]

