const house = {
    type:"flat",
    size:"40 m2",
    region:"uptown",
    rooms: {
        room1: "kitchen",
        room2: "bathroom",
        room3: "master bedroom",
        room4: "spare bedroom",
        room5: "living room"
        }
    };

function objetoM() {
    let objM = "type = " + house.type + ", size = " + house.size + ", region = " + house.region;
    return alert(objM);
}

function objetoS() {
    let objS = "room 1 = " + house.rooms.room1 + ", room 2 = " + house.rooms.room2 + ", room 3 = " + house.rooms.room3 + ", room 4 = " + house.rooms.room4 + ", room 5 = " + house.rooms.room5;
    return alert(objS);
}