var reverse = function(x) {
    let result = [];
    let negative = 1;

    if (x < 0) {
        x = x * -1;
        negative = -1;
    }

    let strung = String(x).split('');
    strung.reverse();
    let reversedNum = parseInt(strung.join(''));

    if (reversedNum > Math.pow(2, 31)) {
        return 0;
    } else {
        return reversedNum * negative;
    }
};

// we can do better 
