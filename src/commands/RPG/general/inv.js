module.exports = ({
    name: "inventory",
    aliases: "inv",
    code: `$color[D1BBBB]$title[Inventario de $username]
    $description[
    :cookie:Galletas: $getUserVar[cookies]
    <:twitch:838113649808900157>Suscripciones de Twitch: $getUserVar[twsubs]
    <:twitch:838113649808900157>Dinero en donaciones de twitch: $getUserVar[donaciones]
    <:coin:842884874729816114>Dinero en efectivo: $getUserVar[Money]
    :bank:Dinero en el banco: $getUserVar[bank]
    <:Bitcoin:846390571458363432>Bitcoins: $getUserVar[bitcoin]

    Mineria:
    :pick:Picos: $getUserVar[pico]
    <:CascoMinero:864300743908524032>Casco minero: $getUserVar[cascominero]
    <:oro:841831314491703337>Oro: $getUserVar[oro]
    <:diamante:841831314578735124>Diamantes: $getUserVar[diamante]
    <:esmeralda:841831315216662558>Esmeraldas: $getUserVar[esmeralda]
    <:lapislazuli:841831315102892032>Lapizlazuli: $getUserVar[lapizlazuli]
    <:Cuarzo:841831315112591370>Cuarzo: $getUserVar[cuarzo]
    <:iron:841831314994626580>Hierro: $getUserVar[plata]
    <:cobre:841831314877448232>Cobre: $getUserVar[cobre]
    <:Lingote_de_himato:859586304823263262>Lingotes de Himato: $getUserVar[himato]
    <:Fragmento_de_himato:859590708704837642>Fragmentos de himato: $getUserVar[fhimato]

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
   
   Huevos: *Para incubar un huevo use $getServerVar[prefix]incubate-(huevo de animal)*
   <:Huevo:859827806094229504>Huevos de lobo: $getUserVar[loboegg]
   
   Mascotas:
   Lobos: $getUserVar[lobo]
   Conejos: $getUserVar[conejo]

   Hechizos: *Para mas informacion use $getServerVar[prefix]libro-hechizos*
   <:ojo:842878912286818354>Ojos de araña: $getUserVar[ojo]
   <:elixir_magico:859429049880805387>Elixir magico: $getUserVar[elixirmagico]
   <:ElixirOscuro:864256726412427264>Elixir Oscuro: $getServerVar[ElixirOscuro]
   <:Polvo_de_suerte:859448350183915520>Polvo de suerte: $getUserVar[polvodesuerte]
   :carrot:Zanahorias: $getUserVar[zanahoria]
   Lechugas:
   <:Polvo:859887580790259753>Polvo: $getUserVar[polvo]
   --------------- (*Para hacer un hechizo use $getServerVar[prefix]craft-(hechizo)*)
   :dollar:Hechizo de dinero: $getUserVar[moneyspell]
   <:hechizodehimato:864595745206566912>Hechizo de Himato: $getUserVar[himatospell]
   $footer[Pagina 1/2 - $getServerVar[prefix]inv-2]
   $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
   
`})