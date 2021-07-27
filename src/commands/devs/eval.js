module.exports = ({
    name: "eval",
    code: `$title[Codigo Evaluado]$description[
        :inbox_tray:Input:
        \`\`\`$message\`\`\`
        :outbox_tray:Output:
        \`\`\`$eval[$message;yes]\`\`\`
    ]$color[GREEN]
    $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
    $onlyForIds[798250899041681428;788869971073040454;:x:| Solo los desarrolladores del bot puede usar este comando]`
    
    
    })