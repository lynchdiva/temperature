'use strict';

showCitiesTemperatures();

function showCitiesTemperatures() {
  const cities = ['Ереван', 'Москва', 'Лиссабон', 'Барселона', 'Париж'];
  const temperatures = [];

  for (let city of cities) {
    let temperature = askTemperature(city);

    while (
      temperature !== null &&
      (temperature === '' ||
        !isFinite(temperature) ||
        temperature < -50 ||
        temperature > 50)
    ) {
      alert(`Введены некорректные значения`);
      temperature = askTemperature(city);
    }

    if (temperature === null) return;

    temperatures.push(+temperature);
  }

  const list = createList(cities, temperatures);

  document.querySelector('body').append(list);
}

function askTemperature(city) {
  return prompt(`Введите температуру для города ${city}`, 0);
}

function createList(cities, temperatures) {
  const list = document.createElement('ul');
  const minTemperature = document.createElement('li');
  const maxTemperature = document.createElement('li');

  list.classList.add('list');
  minTemperature.classList.add('min');
  maxTemperature.classList.add('max');

  for (let i = 0; i < cities.length; i++) {
    const cityTemperature = document.createElement('li');
    cityTemperature.textContent = `Температура в ${cities[i]}: ${temperatures[i]}°C`;

    list.append(cityTemperature);
  }

  minTemperature.textContent = `Минимальная температура: ${getMinTemperature(
    temperatures
  )}°C`;
  maxTemperature.textContent = `Максимальная температура: ${getMaxTemperature(
    temperatures
  )}°C`;

  list.append(minTemperature, maxTemperature);

  return list;
}

function getMinTemperature(temperatures) {
  return Math.min(...temperatures);
}

function getMaxTemperature(temperatures) {
  return Math.max(...temperatures);
}
