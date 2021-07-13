module.exports = [{
name:"leaderboard.invites",
aliases:["lb.invites","lb.invs"],
code:`
$title[Ranking de invitaciones]
$description[$userLeaderboard[invites;asc;**{top}.** {username}: \`{value}\`;8]]
$color[f0f0f0]
$footer[Tu posición es la N°$get[i];$authorAvatar]
$let[i;$getLeaderboardInfo[invites;$authorID;user;top]]
$onlyIf[$getServerVar[invitetracker]==on;:x:| El sistema de invite tracker no esta habilitado en este servidor]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
`
}]
/*
1 jun: Cambios hechos por Pavez
*/