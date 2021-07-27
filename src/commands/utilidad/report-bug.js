module.exports = {
    name: "report-bug",
    code: `<a:checkanimado:831161301282979911>| Bug enviado
    $deleteCommand
    $channelSendMessage[831726962258346006;{title:Nuevo Error}{description:
    Usuario: $username
    Error: $messageSlice[0;40]
}{color:5865F2}{thumbnail:$authorAvatar}]`
}