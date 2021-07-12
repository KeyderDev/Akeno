module.exports = ({
name: "confirm",
code: `
$resetUserVar[moneyspell]
$resetUserVar[polvo]
$resetUserVar[polvodesuerte]
$resetUserVar[ojo]
$resetUserVar[lobo]
$resetUserVar[loboegg]
$resetUserVar[elixirmagico]
$resetUserVar[incubadora]
$resetUserVar[caña]
$resetUserVar[zanahoria]
$resetUserVar[botella]
$resetUserVar[tarta]
$resetUserVar[lppan]
$resetUserVar[cobre]
$resetUserVar[plata]
$resetUserVar[cuarzo]
$resetUserVar[lapizlazuli]
$resetUserVar[esmeralda]
$resetUserVar[diamante]
$resetUserVar[oro]
$resetUserVar[pico]
$resetUserVar[bank]
$resetUserVar[subsyttw]
$resetUserVar[Money]
$resetUserVar[cookies]
$cooldown[10s;:x:| Espera $%time% para volver a resetear tu inventario]
Reseteando...$editIn[4s;En los ultimos pasos...;Inventario reseteado correctamente]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})