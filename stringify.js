const house = {
    type:"flat",
    size: 40,
    region:"uptown",
    grow(number) {
        this.size = this.size + number;
        }
    };

function stringify() {
    let cadena = JSON.stringify(house);
    return alert(cadena);
};