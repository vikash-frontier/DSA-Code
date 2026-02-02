function countDegits(num) {

    if(num === 0) {
        return 1;
    }
    let count = 0;
    num = Math.abs(num)
    console.log(num);
    while(num > 0) {
     num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(countDegits(1-23-45));