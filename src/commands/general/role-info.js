module.exports = {
    name: "role-info",
    
    aliases: ["roleinfo", "r-info"] ,
    
    code: `
    
    $title[$roleName[$findRole[$message]] Info]
    $description[
    **Nombre:**
    <@&$findRole[$message]>
    
    **Color:**
    \`$getRoleColor[$findRole[$message]]\`
    
    **Fecha de creacion:**
    \`$creationDate[$findRole[$message];date]\`
    
    **Tienes este rol?**
    \`$toLocaleUpperCase[$hasRole[$authorID;$findRole[$message];$guildID]]\`
    
    **Usuarios con el rol**
    \`$djsEval[message.guild.roles.cache.get('role id').members.map(m=>m.id).length;yes]\`
    
    **Permisos**
    \`$rolePerms[$findRole[$message];,]\`]
    
    $color[$getRoleColor[$findRole[$message]]]
    $onlyIf[!=$message[1];:x:| Debes mencionar o introducir la *ID* del rol]
    $suppressErrors[{description:please mention or give a valid ID of the role}]`
    
    }