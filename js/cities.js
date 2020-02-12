function request(url) {
    return fetch(url).then(res => {
        return res.json();
    });
}
function getCities() {
    let url = "https://api.hh.ru/areas/113";
    return request(url).then(country => {
        let cities = [];
        country.areas.forEach(region => {
            region.areas.forEach(city =>
                cities.push({ id: city.id, city: city.name })
            );
        });
        let chooseCities = "";
        cities.forEach(choose => {
            chooseCities += "<option>" + choose.city + "</option>";
        });

        document.querySelector(".js-cities-select").innerHTML = chooseCities;
    });
}
getCities();