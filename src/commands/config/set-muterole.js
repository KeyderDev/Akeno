module.exports = [{
    name:"set-muterole",
    code:`
    $forEachGuildChannel[mutedrole]
    $setServerVar[mutedrole;$findRole[$message]]
    `,
    type:"command"},{
    name:"muterole",
    code:`
    $modifyChannelPerms[$channelID;-sendmessage;$getServerVar[mutedrole]]
    $suppressAll
    `,
    type:"awaitedCommand"
    }];