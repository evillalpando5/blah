let characterInfo = [
    {
        "id": "01",
        "name": "Aragon",
        "race": "Human",
        "age": "120",
        "img": "aragon.png",
        "strengths": [
            "strength",
            "hand-to-hand combat",
            "horses",
            "character"
        ],
        "weakness": [],
        "description": "Aragorn is a protagonist in J. R. R. Tolkien's The Lord of the Rings. Aragorn is a Ranger of the North, first introduced with the name Strider and later revealed to be the heir of Isildur, an ancient King of Arnor and Gondor. Aragorn is a confidant of the wizard Gandalf and plays a part in the quest to destroy the One Ring and defeat the Dark Lord Sauron. As a young man, Aragorn falls in love with the immortal elf Arwen, as told in 'The Tale of Aragorn and Arwen'. Arwen's father, Elrond Half-elven, forbids them to marry unless Aragorn becomes King of both Arnor and Gondor."
    },
    {
        "id": "02",
        "name": "Gimli",
        "race": "Dwarf",
        "age": "138",
        "img": "gimili.png",
        "strengths": [
            "strength",
            "hand-to-hand combat",
            "caves"
        ],
        "weakness": [
            "horses",
            "running"
        ],
        "description": "Gimli is s dwarf warrior, he is the son of Glóin, a member of Thorin's company in Tolkien's earlier book The Hobbit. He represents the race of Dwarves as a member of the Fellowship of the Ring. As such, he is one of the primary characters in the story."
    },
    {
        "id": "03",
        "name": "Legolas",
        "race": "elf",
        "age": "unknown",
        "img": "legolas.png",
        "strengths": [
            "eye-sight",
            "archery",
            "hand-to-hand combat",
            "running"
        ],
        "weakness": [
            "caves"
        ],
        "description": "Legolas is a Sindar Elf of the Woodland Realm and son of its king, Thranduil, becoming one of the nine members of the Fellowship who set out to destroy the One Ring. "
    },
    {
        "id": "04",
        "name": "Gandalf",
        "race": "maia",
        "age": "2019",
        "img": "gandalf.png",
        "strengths": [
            "magic",
            "hand-to-hand combat",
            "fast horse riding",
            "dragon slayer"
        ],
        "weakness": [],
        "description": "Gandalf is a protagonist in J. R. R. Tolkien's novels The Hobbit and The Lord of the Rings. He is a wizard, one of the Istari order, and the leader of the Fellowship of the Ring."
    },
    {
        "id": "05",
        "name": "Frodo",
        "race": "Hobbit",
        "age": "51",
        "img": "frodo.png",
        "strengths": [
            "stealth",
            "character"
        ],
        "weakness": [
            "hand-to-hand combat",
            " horse riding",
            "caves",
            "swords"
        ],
        "description": "Frodo Baggins is one of the protagonists in The Lord of the Rings. Frodo is a hobbit of the Shire who inherits the One Ring from his cousin Bilbo Baggins, described familiarly as 'uncle', and undertakes the quest to destroy it in the fires of Mount Doom in Mordor."
    },
    {
        "id": "06",
        "name": "Sam",
        "race": "Hobbit",
        "age": "39",
        "img": "sam.png",
        "strengths": [
            "stealth",
            "character"
        ],
        "weakness": [
            "hand-to-hand combat",
            " horse riding",
            "caves",
            "swords"
        ],
        "description": "Samwise Gamgee is a hobbit. He is the chief supporting character of The Lord of the Rings, serving as the loyal companion (in effect, the manservant) of the protagonist Frodo Baggins. Sam is a member of the Fellowship of the Ring, the group of nine charged with destroying the One Ring to prevent the Dark Lord Sauron from taking over the world."
    },
    {
        "id": "07",
        "name": "Boromir",
        "race": "Man",
        "age": "41",
        "img": "boromir.png",
        "strengths": [
            "stength",
            "hand-to-hand combat",
            "horse riding",
            "sword"
        ],
        "weakness": [
            "temptation",
            "character"
        ],
        "description": "Boromir is portrayed as a noble character who believed passionately in the greatness of his kingdom and fought indomitably for it. His great stamina and physical strength, together with a forceful and commanding personality, made him a widely admired commander in Gondor's army and the favourite of his father Denethor. As a member of the Fellowship, his desperation to save his country ultimately drove him to betray his companions and attempt to seize the Ring, but he was redeemed by his repentance and brave last stand."
    }
]
function updateImg(i){
    let res = document.getElementById('cardImg')
    console.log(`${i.img}`)
    res.innerHTML = `<p> ${i.name} </p><img src=imgs/${i.img} alt='LORCharacterCard' id="card">`;
}
function populateInfo(){
    let userChoice = document.getElementById("character")
    let value = userChoice.value[1] - 1
    // let name = characterInfo[value].name
    updateImg(characterInfo[value])
    let oStr = characterInfo[value]["description"]
    let tableHeader = `<tr>`;
    let tableRows = `<tr>`;
    for(let property in characterInfo[value]) {
        if(property === "strengths" || property === "weakness"){
            console.log(`'is empty?  ${characterInfo[value][property]}`)
            if(characterInfo[value][property] != "") {
                tableHeader += ` <th> ${property} </th>  `;
                tableRows += `<td> <ol>`
                for(let i in characterInfo[value][property]) {
                    tableRows += ` <li> ${characterInfo[value][property][i]} </li>`
                }
                tableRows += `</ol> </td>`
            }
            console.log(`${characterInfo[value][property]}`)
        }
        else if(property !== "img" && property !== "description" && characterInfo[value][property] != "") {
            // let trait = property;
            tableHeader += ` <th> ${property} </th>  `;
            tableRows += `<td> ${characterInfo[value][property]} </td>`;
            console.log(`'property:' ${property} 'value': ${characterInfo[value][property]}`);
        }
    }
    console.log("outside inner for loop")
    console.log(`'length'${characterInfo[value]}`)
    tableHeader += `</tr>`;
    tableRows += `</tr>`;
    document.getElementById('results').innerHTML = oStr;
    document.getElementById('tHead').innerHTML = tableHeader;
    document.getElementById('tMain').innerHTML = tableRows;

}
function characterList() {
    let res = document.getElementById('character');
    let oStr = "";
    for (let i = 0; i < characterInfo.length; i++) {
        let name = characterInfo[i].name
        oStr += `<option value=${characterInfo[i].id}> ${name} </option>`;
    }
    res.innerHTML = oStr;
}
