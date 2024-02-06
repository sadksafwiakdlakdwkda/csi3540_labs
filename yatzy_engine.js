function sametime(n){
    let result = 0;
    let time = 0;
    for(let i = 6; i>0 ; i--){
        for(let j = 0; j<5 ; j++){
            if(dice[j]==i){
                result = result + i
                time +=1 
            }
        }
        if(time == n){
            return result
        }
    }
    return null
}
