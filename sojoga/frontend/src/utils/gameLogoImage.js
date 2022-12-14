const getGameLogoImage = (gameName)=>{
    const allGameNames = {
        "League of Legends": require(`../assets/images/game/logo/League_of_Legends_logo.jpg`),
        "Valorant": require(`../assets/images/game/logo/valorant-logo-2.png`),
        "Fortnite": require(`../assets/images/game/logo/logo-fortnite.png`),
        "Minecraft": require(`../assets/images/game/logo/minecraft-logo.png`),
        "Fall Guys": require(`../assets/images/game/logo/fallguys-logo.jpg`)
    }


    console.log('gameName',gameName,allGameNames[gameName] && require(`../assets/images/game/logo/default.png`));

    return allGameNames[gameName] || require(`../assets/images/game/logo/default.png`)
}

export default getGameLogoImage