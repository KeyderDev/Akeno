module.exports = ({
    name: "use-moneyspell",
    code: `$title[Haz usado tu pocion de dinero]$description[
Usaste tu pocion de dinero y ganaste $random[1000;2000]
$color[D1BBBB]
  $setUserVar[Money;$sum[$getUserVar[Money;$authorID];1];$authorID]
$onlyIf[1<=$getUserVar[moneyspell];:x: | Necesitas (Pocion de dinero x1)]`
})