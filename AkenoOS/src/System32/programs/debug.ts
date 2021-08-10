module.exports = {
    name: "debug",
    code: `
    \`\`\`
    AkenoOS | $getVar[akenoOS_version]

    $getGlobalUserVar[directory]
    Architecture: x64
    Cache: $getGlobalUserVar[cache]
    Port: $getGlobalUserVar[console_port]
    IP: $getGlobalUserVar[console_ip]
    Idiom: $getGlobalUserVar[console_lang]
    Disk: $getGlobalUserVar[directory]
    Processes: $getGlobalUserVar[processes]
    \`\`\`
    $writeFile[./AkenoOS/src/System32/cache/debug.txt;ID: $authorID - Debug Command / All Info]
    `
}