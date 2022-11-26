const addToAvailableSmallestIndex = (list: number []) => {
    
    for (let i: number = 0; i < list.length; i++) {
        if(list[i] == 2){
            break;
        }
        list[i] += 1
        return i
    }
    return -1
}