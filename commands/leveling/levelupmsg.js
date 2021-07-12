module.exports = ({
    name: "$alwaysExecute",
    code: `
   $description[Buen trabajo <@$authorID>! subiste al nivel **$getUserVar[level]**!]
   $color[ffff]
   $setUserVar[req;$multi[$getUserVar[req];2]]
   $setUserVar[xp;$sum[$getUserVar[xp];1]]
   $setUserVar[level;$sum[$getUserVar[level];1]]
   $onlyIf[$getUserVar[req]<$getUserVar[xp];]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;]

   `
   })