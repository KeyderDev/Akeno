bot.joinCommand({
 channel: "$getServerVar[wchannel]",
 code: `<@$authorID>
 $title[Nuevo miembro]
 $description [$getServerVar[wmessage]]
 $thumbnail[$authorAvatar]
 $addTimestamp 
 $footer[Disfruta de tu estadia!]
 $color[$getUSerVar[wcolor]]` 
})
bot.onJoined()
