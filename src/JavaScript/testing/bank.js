module.exports = {
    name: "bank",
    aliases: ["banco", "balance", "bal", "bag", "account", "acc"],
    code: `$title[Balance]
    $description[Balance de **$username**
    Banco: $getUserVar[bank]
    Efectivo: $getUserVar[Money]
    Total: $sum[$getUserVar[Money];$getUserVar[bank]]]
    $color[5865F2]
    $thumbnail[$authorAvatar]
    $footer[Consejo: Usa $getServerVar[prefix]daily para ganar dinero diariamente!]`
}