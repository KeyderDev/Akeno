module.exports = ({
name: "inv-2",
code: `$color[ffff]$title[Inventario de $username - Pagina 2]$description[
Componentes:
Placa madre: $getUserVar[motherboard]
Procesador: $getServerVar[cpu]

Cajas:
Premium Box: $getUserVar[premiumbox]
Diamond Box: $getUserVar[diamondbox]
Gold Box: $getUserVar[goldbox]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
}) 