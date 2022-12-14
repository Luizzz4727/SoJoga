const getGameGroupImage = (gameName)=>{
    const allGameNames = {
        "League of Legends": require(`../assets/images/game/league-of-legends.jpeg`),
        "Valorant": require(`../assets/images/game/valorant.jpg`),
        "Fortinite": require(`../assets/images/game/fortinite.jpeg`),
        "Minecraft": require(`../assets/images/game/mine.jpeg`),
        "Fall Guys": require(`../assets/images/game/fall-guys.jpeg`)
    }


    console.log('gameName',gameName,allGameNames[gameName] && require(`../assets/images/game/Grey_full.png`));

    return allGameNames[gameName] || require(`../assets/images/game/Grey_full.png`)
}

export default getGameGroupImage