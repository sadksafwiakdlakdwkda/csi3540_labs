function createGame(n){
    let list = ["C","^","@"];
    for(let i = 0; i<n-3;i++){
        list.push(".")
    }
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}