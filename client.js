console.log("Client side script running");

function createDB(){
    console.log('button was clicked');

    fetch('/createdb')
        .then(function(response) {
            if(response.ok) {
                console.log('Database and table have been created.');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
}



function formData(){

let uname = document.getElementById("name").value;
let kill = 0 + document.getElementById("kill").value;
let death = 0 + document.getElementById("death").value;
let assist =0 + document.getElementById("assist").value;
let res = document.getElementById("result").value;
let map = document.getElementById("m").value;
let agent = document.getElementById("agent").value;
console.log(uname);

if (uname == ""){
    alert("Enter a valid name");
}
else {
    const data = {uname, kill, death, assist, res, map, agent};

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/Data', options);
    console.log("Fetch " + JSON.stringify(data));
    }
}

async function findData() {
    const root = document.getElementById("gamedata");
    let uname = "" + document.getElementById("name").value;
    const response = await fetch(`/Data/"${uname}"`);
    const data = await response.json();
    console.log(data);

    let matchCoutn = 0;
    let kCount = 0;
    let aCount = 0;
    let dCount = 0;
    let wCount = 0;
    let lCount = 0;

    if (uname == "") {
        alert("Input a username!");
    }
    else {
        for (item of data) {
            matchCoutn++;
            let kills = item.kills;
            let deaths = item.deaths;
            let assists = item.assists;
            let res = item.result;
            let m = item.map;

            const column = document.createElement("div");
            column.setAttribute("id", matchCoutn);
            column.innerHTML = "Agent used: " + item.agent + " Kills: " + kills + " Deaths: " + deaths + " Assists: " + assists + " Result: " + res + " Map played: " + m + " ";
            root.append(column);



            kCount = +kills;
            aCount = +assists;
            dCount = +deaths;
            if (res == "Win") {
                wCount++;
            } else {
                lCount++;
            }

        }

        if (lCount != 0) {

            let kda = (kCount + aCount) / dCount;
            let kd = kCount / dCount;
            let wl = wCount / lCount;


            const column = document.createElement("div");
            column.innerHTML = "Kills and assists to deaths ratio is " + kda.toFixed(2) + " Kills to deaths ratio is " + kd.toFixed(2) + " Win/Loss ratio is " + wl.toFixed(2);
            root.append(column);
        } else {
            alert("Input a valid username!");

        }
    }
}





