module.exports = {
    name: "adminaffect",
    code: `
    $if[$message==yes]
    <a:checkanimado:831161301282979911> Hecho!
    $setServerVar[adminaffect;yes]
    $else
    $if[$message==no]
    <a:checkanimado:831161301282979911> Hecho!
    $setServerVar[adminaffect;no]
    $endif
    $endif
    
    
    `
}