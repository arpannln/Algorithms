// Brothers will drink 3 drinks of the same type in a row
// remove those drinks and then check again from where you removed them

const brothersBond = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) {
        count++;
        arr.splice(i, 3);
        i -= 3;
        if ( i < 0 ){
          i = -1;
        }
      }
  }
};
