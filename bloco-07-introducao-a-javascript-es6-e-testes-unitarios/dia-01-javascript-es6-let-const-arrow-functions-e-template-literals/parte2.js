const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = (newArray) => {
    for (let index=0; index < newArray.lenght; index += 1) {
        for (let secondIndex=0; secondIndex < index; secondIndex += 1) {
            if (newArray[index] < newArray[secondIndex]) {
                let position = newArray[index];
                newArray[index] = newArray[secondIndex];
                newArray[secondIndex] = position;
            };
        };
    };
    return newArray;
};
console.log(sortOddsAndEvens(newArray));