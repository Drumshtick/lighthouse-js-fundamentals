function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", const funny = function(num) {
    let string = "";
    for(let i = 0; i <= num; i += 1) {
        string += "haha";
    }
    return string += "!";
});