module.exports = [{
code: `
$sendDM[$authorID;❌| Fuiste baneado de **$serverName** por falta de tiempo en discord]
$kick[$authorID]

$onlyIf[$get[tempo]<=$getServerVar[dias]]
$let[tempo;$truncate[$math[$math[$dateStamp-$creationDate[$authorID;ms]]/86400000]]]
`,
type:'joinCommand'}]