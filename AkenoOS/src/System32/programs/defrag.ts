module.exports = {
  name: "defrag",
  code: `
  Executed: <:defrag:874743370482843698> Defraggment
  \`\`\`
  AkenoOS | $getVar[akenoOS_version]

  $getGlobalUserVar[directory] Estas seguro?
  Esta accion es inrreversible, al hacer esta accion, optimizaras la cache,
  pero, el puerto de la consola, tu ip, y demas cosas seran reseteadas, estas seguro?
 Para confirmar, usa $getServerVar[prefix]defrag yes
 \`\`\`
 $onlyIf[$getGlobalUserVar[osinstalled]!=false;:x:| Necesitas tener el sistema operativo AkenoOS instalado.]
 $onlyBotPerms[embedlinks;:x:| Necesito el permiso de **EMBED LINKS** para ejecutar este comando]
 $onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
 :x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]
 $elseIf[$message==defrag yes]
 $editIn[1s;
Executed: <:defrag:874743370482843698> Defraggment
\`\`\`
AkenoOS | $getVar[akenoOS_version]

$getGlobalUserVar[directory] Defragment Finished]
\`\`\`

$elseIf[$message==defrag no]
$editIn[1s;
Executed: <:defrag:874743370482843698> Defraggment
\`\`\`
AkenoOS | $getVar[akenoOS_version]

$getGlobalUserVar[directory] Process Canceled
\`\`\`]
$endelseif
$else
$endif

  `
}
