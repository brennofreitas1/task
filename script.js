const getTasks = () => {
  fetch("https://parseapi.back4app.com/classes/task", {
    headers: {
      "X-Parse-Application-Id": "Yp0BBVZWxrFkJn5pUQ3NKNVmPq8wf1Da6YIli5eH",
      "X-Parse-REST-API-Key": "vlHdzj031ddepIhy7tT30nqL9dYSPXo9uhtFktTA",
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
    });
};

getTasks();