var o1 = {
    f: 45,
    l: 432
};
var o2 = {
    f: 45,
    l: 432,
    e: 454,
    fun: function () {
        return "Cf"; //must return
    }
};
console.log(o1.f);
console.log(o2.fun());
