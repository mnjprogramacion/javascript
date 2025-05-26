const house = {type:"flat", size:"40 m2", region:"uptown"};

const house2 = {};
house2.type = "house"; house2.size="320 m2"; house2.region="suburbs";

function objeto1() {
    let obj1 = "type = " + house.type + ", size = " + house.size + ", region = " + house.region;
    return alert(obj1);
};

function objeto2() {
    let obj2 = "type = " + house2.type + ", size = " + house2.size + ", region = " + house2.region;
    return alert(obj2);
};