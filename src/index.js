class SwapiService {
  _baseURL = "https://swapi.dev/api";

  async getResources(url) {
    const res = await fetch(`${this._baseURL}${url}`);

    if (!res.ok) {
      console.log("test2");
      throw new Error("Could not fetch TEST"); // TODO не отображается в консоли
    }

    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResources("/people/");
    return res.results;
  }

  getPerson(id) {
    return this.getResources(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResources("/planets/");
    return res.results;
  }
  getPlanet(id) {
    return this.getResources(`/planets/${id}`);
  }
  async getAllStarships() {
    const res = await this.getResources("/starships/");
    return res.results;
  }
  getStarship(id) {
    return this.getResources(`/starships/${id}`);
  }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((res) => {
  res.forEach((el) => {
    console.log(el.name);
  });
});
swapi.getPerson(3).then((res) => {
  console.log(`The person is ${res.name}`);
});

swapi.getAllPlanets().then((res) => {
  res.forEach((el) => {
    console.log(el.name);
  });
});
swapi.getPlanet(3).then((res) => {
  console.log(`The planet is ${res.name}`);
});

swapi.getAllStarships().then((res) => {
  res.forEach((el) => {
    console.log(el.name);
  });
});
swapi.getStarship(3).then((res) => {
  console.log(`The starship is ${res.name}`);
});
