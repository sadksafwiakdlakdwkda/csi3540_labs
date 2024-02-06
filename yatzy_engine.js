function twosame(){
    for(let i = 6; i>0 ; i--){
        let result = 0;
        let time = 0;
        let n = 2
        for(let j = 0; j<5 ; j++){
            if(dice[j]==i){
                result = result + i
                time +=1
                if(time == n){
                    document.getElementById('same2').innerHTML = result;            
                    return result
                } 
            }
        }

    }
    return null
}
function threesame(){
    for(let i = 6; i>0 ; i--){
        let result = 0;
        let time = 0;
        let n = 3
        for(let j = 0; j<5 ; j++){
            if(dice[j]==i){
                result = result + i
                time +=1 
            }
            if(time == n){
                document.getElementById('same3').innerHTML = result;            
                return result
            }
        }
    }
    return null
}
function foursame(){
    for(let i = 6; i>0 ; i--){
        let result = 0;
        let time = 0;
        let n = 4
        for(let j = 0; j<5 ; j++){
            if(dice[j]==i){
                result = result + i
                time +=1 
                if(time == n){
                    document.getElementById('same4').innerHTML = result;            
                    return result
                }
            }
        }
    }
    return null
}


