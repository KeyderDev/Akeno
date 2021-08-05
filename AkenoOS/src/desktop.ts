module.exports = {
    name: "desktop",
    code: `
    \`\`\`
    Escritorio de $userTag[$authorID]

    $getGlobalUserVar[folder_1]  $getGlobalUserVar[folder_2]      $getGlobalUserVar[folder_3]
$getGlobalUserVar[folder_name_1] $getGlobalUserVar[folder_name_2] $getGlobalUserVar[folder_name_3]

 **Comandos de escritorio disponibles**
 $getServerVar[prefix]console
    



          

                                              $addTimeStamp
\`\`\`
    `
}