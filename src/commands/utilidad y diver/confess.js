module.export = [{
    name:`confess`,
    use:`ak.confess <Anonimato: Yes/No> <Confesion: String>`,
    code:`
    $title[Nueva confesion]
    $thumbnail[$client[avatar]]
    $description[$messageSlice[2]]
    $footer[$get[r]]
    $color[#FFFFFF]
    $useChannel[$getServerVar[confesschanel]]
    $onlyIf[$message[2]!=;:x: | Mal uso del parametro 2: ak.confess $message[1] <Confesion: String>]
    $if[$toLowercase[$message[1]]==yes]
    $let[r;Autor: Anonimo]
    $elseif[$toLowercase[$message[1]]==no]
    $let[r;Autor: $userTag]
    $endelseif
    $else
    :x: | Mal uso del parametro 1: ak.confess <Anonimato: Yes/No> $messageSlice[2]
    $endif
    $deletecommand
    $onlyBotPerms[embedlinks;:x: | Bot >> PErmisos necesarios: \`EMBEDLINKS\`]
    $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description::x: | Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
    `
    }]