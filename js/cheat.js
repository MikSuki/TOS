var cheatArr = []

for(var i = 0; i < 6; ++i)
    cheatArr[i] = []

function cheat(){
    beads.forEach(e => {
        cheatArr[e.type].push(e.index)
    });

    console.log(cheatArr)
}

function cheatSetting(){
}