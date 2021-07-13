module.exports =[({
name: "crime",
code: `$awaitMessages[$authorID;1m;asalto,mafia;asalto,mafia;se acabó el tiempo]
Que crimen quieres cometer?
\`Asalto\` \`Mafia\`
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
},{
name: "asalto",
code: `**Crimen elegido:** \`asalto\`
Asaltaste a <@$randomUserID> y ganaste $random[100;200]:akenocoin:
$setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[100;200]];$authorID]
$awaitmessages[$authorid;10s;everything;category;Time out, debes ser un poco mas rapido!]`,
type: 'awaitedcommand'
},{
name: "mafia",
code: `**Crimen elegido:** \`asalto\`
Abriste la caja fuerte del gobernador de estados unidos y ganaste $random[200;300]:akenocoin:
$setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[200;300]];$authorID]
$awaitmessages[$authorid;10s;everything;category;Time out, debes ser un poco mas rapido!]`,
type: 'awaitedcommand'
})] 