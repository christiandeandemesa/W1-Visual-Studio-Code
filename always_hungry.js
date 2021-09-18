function alwaysHungry(arr) {
    var hunger = 0;
    for(var i = 0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
        }
        else {
            hunger += 1;
            if(hunger == arr.length) {
                console.log("I'm hungry")
            }
        }
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);