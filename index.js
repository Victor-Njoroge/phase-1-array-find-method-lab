// code your solution here

const superbowlWin= (games) =>{
    let data=games.find((matches) =>{
        return matches.result === `W`;
    })
    if(data){
        return data.year;
    }else{
        return undefined;
    }
}
