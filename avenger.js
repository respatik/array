let avengers = [
    ["Spiderman", "spiderweb"],
    ["Ironman", "hightech"],
    ["Hulk", "berserker"],
    ["Hawkeye", "Arrow"],
    ["Thor", "Mjolnir"],
    ["Thanos", "Finger Snap"]
]

let result = avengers.filter(hero=>hero[0].includes("a"))

document.table(result);