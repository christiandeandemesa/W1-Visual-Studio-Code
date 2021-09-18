function reverse(arr) {
    var newarr = [];
    for(var i = arr.length - 1; i >= 0; i--) {
        newarr.push(arr[i]);
    }
    arr = newarr;
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);