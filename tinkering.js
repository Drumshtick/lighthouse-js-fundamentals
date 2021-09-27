var num = 99;

while (num > 0) {
    if (num > 1) {
        console.log(num + " bottles of juice on the wall! "+ num +" bottles of juice! Take one down, pass it around... "+ (num -1) +" bottles of juice on the wall!");
    } else {
        console.log("1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!");
    }
    num -= 1;
}