module.exports = ({
    name: "rob",
    code: `$botTyping 
    $deletecommand 
    
    $​setUserVar[Money;$​sub[$​getUserVar[Money;$​mentioned[1]];$​random[1;$​getUserVar[Money;$​mentioned[1]]]];$​mentioned[1]] 
    
    $​setUserVar[Money;$​sum[$​getUserVar[Money];$​random[1;$​getUserVar[Money;$​mentioned[1]]]]] 
    
    $title[Robaste] 
    $color[#$random[0;99999]]
    $description[$​username robó $​username[$​mentioned[1]] with $randomText[una arma;un cuchillo;strong words;a pen;una roca] y ganó $$​random[1;$​getUserVar[Money;$​mentioned[1]]]] 
    
    $​onlyIf[$​mentioned[1]!=;> x Menciona a un usuario para robar.] 
    
    $​onlyIf[$​getUserVar[Money;$​mentioned[1]]>99;> El usuario es pobre.] 
    
    $​onlyIf[$​getUserVar[Money]>99;> Necesitas al menos 100 monedas para robar.] 
    $color[#FF0000]
    
    $​cooldown[4h;Necesitar esperar %time% para volver a robar]
$onlyIf[$getGlobalUserVar[bl]==false;{title:Oh vaya! Eres malicioso...}{description:
:x:| Tu acceso al bot Akeno a sido denegado, parece que haz hecho algo :/, si crees que esto es un error, contacta el soporte y te ayudaremos}{color:RED}]`
})