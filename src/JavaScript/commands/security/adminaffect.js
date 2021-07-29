module.exports = {
    name: "adminaffect",
    code: `
    $if[$message==yes]
    <a:checkanimado:831161301282979911> Hecho!
    $setServerVar[adminaffect;yes]
    $elseif[$message==no]
    <a:checkanimado:831161301282979911> Hecho!
    $setServerVar[adminaffect;no]
    $endelseif
    <a:wrong:869274854157848687>| Tienes que poner \`yes\` o \`no\`
    $endif
    `
    }; 