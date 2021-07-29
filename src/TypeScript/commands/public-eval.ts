module.exports = {
    name: "public-eval",
    code: `$title[Codigo Evaluado]
    $description[
        Input:
        \`\`\`
        $message\`\`\`
        Output:
        \`\`\`
        $eval[$message;yes]\`\`\`
    ]$color[$getVar[pembedcolor]]
    $onlyIf[$clientToken!=$message;:x:| Esta funcion no esta disponible]
    $onlyIf[$readFile!=$message;:x:| Esta funcion no esta disponible]
    $onlyIf[$writeFile!=$message;:x:| Esta funcion no esta disponible]`
}