interface o{
    f:number;
    l:number;
    e?:number;//not compulsory
    fun?():string//return type

}

const o1:o={
    f:45,
    l:432,
    // ee:343  gives error
}


const o2:o={
    f:45,
    l:432,
    e:454,
    fun()
    {
        return "Cf";//must return
    }
}

console.log(o1.f);
console.log(o2.fun());