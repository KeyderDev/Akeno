module.expooininirts = [{
    name:"$alwaysExecute", 
    code:`
    $if[$getGlobalUserVar[afkt]==1]
        
    $setGlobalUserVar[afkt;2]
        
    $elseif[$getUserVar[afkt]==1]
        
    $setUserVar[afkt;2]
        
    $endelseif
    
    $elseif[$getUserVar[afkt]==2]
    
    <@$authorID>, You are no longer afk!
    
    $setUserVar[afk;no]
    $setUserVar[afkr;]
    $setUserVar[afkt;]
    $setUserVar[afkh;]
    $setGlobalUserVar[afkt;]
    $setGlobalUserVar[afk;no]
    $setGlobalUserVar[afkr;]
    $setGlobalUserVar[afkh;]
        
    $onlyIf[$checkContains[$getUserVar[afk]$getGlobalUserVar[afk];yes]==true;]
        
    $endelseif
        
    $elseif[$getGlobalUserVar[afkt]==2]
        
    <@$authorID>, Ya no te encuentras **AFK**
        
    $setUserVar[afk;no]
    $setUserVar[afkr;]
    $setUserVar[afkt;]
    $setUserVar[afkh;]
    $setGlobalUserVar[afkt;]
    $setGlobalUserVar[afk;no]
    $setGlobalUserVar[afkr;]
    $setGlobalUserVar[afkh;]
    $changeNickname[$authorID;]
        
    $onlyIf[$checkContains[$getUserVar[afk]$getGlobalUserVar[afk];yes]==true;]
        
    $endelseif
        
    $endif
    $deleteIn[3s]
    $onlyIf[$stringStartsWith[$message;//]!=true;]
    $suppressErrors
    `}, {//mention
    name: "$alwaysExecute",
    code: `
    $if[$getUserVar[afk;$mentioned[1]]==yes]
    
    <@$authorID>
    $title[$userTag[$mentioned[1]] esta afk!]
    $description[Razon:
    $getUserVar[afkr;$mentioned[1]]
    
    Desde:
    $getUserVar[afkh;$mentioned[1]]]
    $footer[$hour:$minute
    $timezone[America/Buenos_Aires];$authorAvatar]
    $color[#36FDFF]
    
    $elseif[$getGlobalUserVar[afk;$mentioned[1]]==yes]
    
    <@$authorID>
    $title[$userTag[$mentioned[1]] esta afk!]
    $description[Razon:
    $getGlobalUserVar[afkr;$mentioned[1]]
    
    Desde:
    $getGlobalUserVar[afkh;$mentioned[1]]
    
    Hace:
    $getGlobalUserVar[afks;$mentioned[1]]]
    $footer[$hour:$minute
    $timezone[America/Buenos_Aires];$authorAvatar]
    $color[#36FDFF]
    
    $endelseif
    $endif
    $deletein[5s]
    
    $suppressErrors
    $onlyIf[$checkContains[$getUserVar[afk;$mentioned[1]]$getGlobalUserVar[afk;$mentioned[1]];yes]==true;]
    
    $onlyIf[$findUser[$message;no]==$mentioned[1];]
    $suppressErrors
    `}]