window.onload = function(){
    let c = document.getElementById("celsius");
    let f = document.getElementById("fahr");
    let k = document.getElementById("kelvin");
    c.oninput = function(){
        f.value = (c.value * 9 / 5) + 32;
        k.value = (c.value * 1) + 273;
    };
    f.oninput = function(){
        c.value = (f.value - 32) * 5 / 9;
        k.value = (f.value - 32) * (5 / 9) + 273;
    };
    k.oninput = function(){
        c.value = k.value - 273;
        f.value = (k.value - 273) * (9 / 5) + 32;
    };
};