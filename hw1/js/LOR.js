let url = "http://45.55.136.114/~dlash/CSC3700/lotrV4.php";
function fetchData() {
    fetch(url)
        .then(response => response.json())
        .then(characterInfo => {
            let res = document.getElementById('character');
            let oStr = "";
            for (let i = 0; i < characterInfo.length; i++) {
                let name = characterInfo[i].name
                oStr += `<option value=${characterInfo[i].id}> ${name} </option>`;
            }
            res.innerHTML = oStr;

        })
}
function populateData() {
    fetch(url)
        .then(response => response.json())
        .then(characterInfo => {
            let userChoice = document.getElementById("character")
            let value = userChoice.value[1] - 1
            updateImg(characterInfo[value])
            let oStr = characterInfo[value]["description"]
            let tableHeader = `<tr>`;
            let tableRows = `<tr>`;
            for (let property in characterInfo[value]) {
                if (property === "strengths" || property === "weakness") {
                    if (characterInfo[value][property] != "") {
                        tableHeader += ` <th> ${property} </th>  `;
                        tableRows += `<td> <ol>`
                        for (let i in characterInfo[value][property]) {
                            tableRows += ` <li> ${characterInfo[value][property][i]} </li>`
                        }
                        tableRows += `</ol> </td>`
                    }
                } else if (property !== "img" && property !== "description" && characterInfo[value][property] != "") {
                    // let trait = property;
                    tableHeader += ` <th> ${property} </th>  `;
                    tableRows += `<td> ${characterInfo[value][property]} </td>`;
                }
            }
            tableHeader += `</tr>`;
            tableRows += `</tr>`;
            document.getElementById('results').innerHTML = oStr;
            document.getElementById('tHead').innerHTML = tableHeader;
            document.getElementById('tMain').innerHTML = tableRows;
            function updateImg(i) {
                let res = document.getElementById('cardImg')
                res.innerHTML = `<h2 class="titles"> ${i.name} </h2><img src=imgs/${i.img} alt='LORCharacterCard' id="card">`;
            }
        })
}
