 
  const Clubs = [
    {
        "name": "Arsenal FC",
        "code": "ARS",
        "country": "England",
        "logo": "https://resources.premierleague.com/premierleague/badges/t3.svg",
        "stadium": "Emirates Stadium"
    },
    {
        "name": "Aston Villa FC",
        "code": "AVL",
        "country": "England",
        "logo": "https://resources.premierleague.com/premierleague/badges/t7.svg",
        "stadium": "Villa Park"
    },
    {
      "name": "Bournemouth FC",
      "code": "BOU",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t91.svg",
      "stadium": "Vitality Stadium"
    },
    {
      "name": "Manchester United FC",
      "code": "MUN",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t1.svg",
      "stadium": "Old Trafford"
    },
    {
      "name": "Manchester City FC",
      "code": "MCI",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t43.svg",
      "stadium": "Etihad Stadium"
    },
    
    {
      "name": "Fulham FC",
      "code": "FUL",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t54.svg",
      "stadium": "Craven Cottage"
    },
    
    {
      "name": "Crystal Palace FC",
      "code": "CRY",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t31.svg",
      "stadium": "Selhurst Park"
    },
    {
      "name": "Southampton FC",
      "code": "SOU",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t20.svg",
      "stadium": "St Mary's Stadium"
    },
    {
      "name": "Liverpool FC",
      "code": "LIV",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t14.svg",
      "stadium": "Anfield"
    },
    {
      "name": "Leeds United FC",
      "code": "LEE",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t2.svg",
      "stadium": "Elland Road"
    },
    {
      "name": "West Ham United FC",
      "code": "WHU",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t21.svg",
      "stadium": "London Stadium"
    },
    {
      "name": "Newcastle United FC",
      "code": "NEW",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t4.svg",
      "stadium": "St James' Park"
    },
    {
      "name": "Nottingham Forest FC",
      "code": "NFC",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t17.svg",
      "stadium": "The City Ground"
    },
    {
      "name": "Leicester City FC",
      "code": "LEI",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t13.svg",
      "stadium": "King Power Stadium"
    },
    {
      "name": "Tottenham Hotspur FC",
      "code": "TOT",
      "country": "England",
      "logo": "data:image/png;base64,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",
      "stadium": "Tottenham Hotspur Stadium"
    },
    {
      "name": "Everton FC",
      "code": "EVE",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t11.svg",
      "stadium": "Goodison Park"
    },
    {
      "name": "Brentford FC",
      "code": "BRE",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t94.svg",
      "stadium": "Gtech Community Stadium"
    },
    {
      "name": "Wolverhampton Wanderers FC",
      "code": "WOL",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t39.svg",
      "stadium": "Molineux Stadium"
    },
    {
      "name": "Brighton & Hove Albion FC",
      "code": "BHA",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t36.svg",
      "stadium": "Amex Stadium"
    },
    {
      "name": "Chelsea FC",
      "code": "CHE",
      "country": "England",
      "logo": "https://resources.premierleague.com/premierleague/badges/t8.svg",
      "stadium": "Stamford Bridge"
    }
  ]

  export default Clubs