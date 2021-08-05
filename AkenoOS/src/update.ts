module.exports = {
    name: "update",
    code: `
    \`\`\`
    AkenoOS | 1.0.0

    C:/Akeno: Checking available updates... Please Wait
    \`\`\`

    $writeFile[./AkenoOS/cacheL1.txt;Update System: Command Used, $authorID]

    $if[$getGlobalUserVar[update_available]==true]
    $editIn[1s;
    \`\`\`
    Akeno's Update System | 1.0.0

    C:/Akeno: Finded an update, updating... | Update v$getVar[update_version]
    \`\`\`]
    $setGlobalUserVar[uptodate_version;true]
    $setGlobalUserVar[update_available;false]

    $elseIf[$getGlobalUserVar[update_available]==false]
    $editIn[1s;
    \`\`\`
    Akeno's Update System | 1.0.0

    C:/Akeno: You have the latest verion.
    ]
    $endelseif

    $else
    $endif
    
    
    
    `
}