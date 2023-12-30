const getResources = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    console.log("test2");
    throw new Error(`Could not fetch test`);
  }

  const body = await res.json();
  return body;
};

getResources("https://swapi.dev/api/people/199999999")
  .then((body) => {
    console.log(body);
  })
  .catch(() => {
    console.error(`Could not fetch`);
  });
