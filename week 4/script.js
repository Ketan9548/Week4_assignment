var names = [];
names[0] = "John";
names[1] = "Jen";
names[2] = "Jeson";
names[3] = "paul";
names[4] = "Julian";
names[5] = "larry";
names[6] = "lauram";
names[7] = "niky";
names[8] = "neha";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) == 'J' || names[i].charAt(0) == 'j') {
        console.log("Goodbye " + names[i]);
    }
    else {
        console.log("Hello " + names[i])
    }
}
