module.exports = ({
    name: "djseval",
    code: `$title[Codigo djs Evaluado]$description[
        :inbox_tray:Input:
        \`\`\`$message\`\`\`
        :outbox_tray:Output:
        \`\`\`$djsEval[$message;yes]\`\`\`
    ]$color[GREEN]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyForIds[798250899041681428;:x:| Solo los desarrolladores del bot puede usar este comando]`


    })
