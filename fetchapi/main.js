function getData() {
  let name = document.querySelector("#name").value;
  let status = document.querySelector("#status").value;
  console.log(name, status)
fetch(`https://rickandmortyapi.com/api/character/?name=${name} &status=${status}`)
  .then(response => response.json())
  .then(data => {
      console.log(data)
      for(let i = 0; i < 7; i++) {
        // name Data
          let name = data['results'][i]['name'];
          document.querySelector(`#name-${i}`).innerHTML = name;
        // Gender Data
          let gender = data['results'][i]['gender'];
          document.querySelector(`#gender-${i}`).innerHTML = gender;
        // Species Data
          let species = data['results'][i]['species'];
          document.querySelector(`#species-${i}`).innerHTML = species;
        // origin Data
          let origin = data['results'][i]['origin']['name'];
          document.querySelector(`#origin-${i}`).innerHTML = origin;
        // image data
          let image = data['results'][i]['image'];
          document.querySelector(`#image-${i}`).innerHTML = `<img src="${image}">`;
      }
  })
}