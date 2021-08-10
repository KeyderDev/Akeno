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
    \`\`\``
}