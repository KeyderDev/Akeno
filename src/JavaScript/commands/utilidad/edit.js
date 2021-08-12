module.exports = ({
code: `
$editMessage[875090654592651294;{description:
\`\`\`Bot Status-
▪︎ Ping: $ping ms
▪︎ Uso de RAM: $ram MB/$replaceText[$abbreviate[$maxRam];K; GB;-1]
▪︎ Uso de memoria: $djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB
▪︎ Comandos: $commandsCount
▪︎ Uptime: $client[readytimestamp]
▪︎ Usuarios: $allMembersCount
▪︎ Servidores: $serverCount

Informacion CPU-
▪︎ Uso de CPU: $cpu%
▪︎ Modelo de CPU: $djsEval[require ('os').cpus()[0].model;yes]
▪︎ Plataforma de CPU: $djsEval[require ('os').platform();yes]

Informacion de paquete-
▪︎ Aoi.js: v$packageVersion
▪︎ Node.js: $nodeVersion\`\`\`
}
{footer:Fue actualizado}{timestamp}{color:#5865F2};875089191095119933]
`,
channel: "875089191095119933",
executeOnStartup: true,
every: 10000,
type: 'loopCommand'
})
