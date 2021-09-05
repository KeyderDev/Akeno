module.exports = {
  name: "update",
  code: `
  $if[$getVar[update_available]!=true]
  AkenoOS has been updated correctly
  $setGlobalUserVar[user_uptodate;true;$authorID]
  $elseIf[$getVar[update_available]!=false]
  There is no update available
  $endelseif
  $elseIf[$getGlobalUserVar[user_uptodate]!=true]
  You have the latest version of AkenoOS
  $endelseif
  $else
  $endif
  $onlyIf[$getGlobalUserVar[osinstalled]!=false;:x:| Necesitas tener el sistema operativo AkenoOS instalado.]
`
}
