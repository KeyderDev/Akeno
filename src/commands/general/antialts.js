module.exports = [{
code:`
$sendDM[$authorID;❌ Fuiste kickeado de **$serverName** por falta de tiempo en discord]
$kick[$authorID]

$onlyIf[$get[tempo]<=$getServerVar[...]]
$let[tempo;$truncate[$math[$math[$dateStamp-$creationDate[$authorID;ms]]/86400000]]]
$onlyIf[$getServerVar[antialt]==true;]
`,
type:'joinCommand'}]