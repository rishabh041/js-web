
window.addEventListener("DOMContentLoaded", function () {
  const personContainer = document.getElementById('persons-container');
  const queryInput = document.getElementById("input-query");
  queryInput.addEventListener("input", fetchPersonsList);

  async function fetchPersonsList(e) {
    const query = e.target.value;

    try{
      let res = await fetch(`https://huge-crab-43.deno.dev/api/v2/persons?query=${query}`);
      res = await res.json();
      res = res.paginatedItems;

      personContainer.innerHTML = '';
      const template = document.getElementById('person-template').content;
      const fragment = document.createDocumentFragment();

      res.forEach((data) => {
        const clone = template.cloneNode(true);
        clone.querySelector('.person-image').src = data.imageUrl;
        clone.querySelector('.person-image').alt = data.name
        clone.querySelector('.person-name').textContent = data.name;
        
        fragment.appendChild(clone);

        // without template if we dont have a predefined structure
        //  const parent = document.createElement('li');
        //  parent.classList.add('person-item');

        //  const img = document.createElement('img');
        //  img.classList.add('person-image');
        //  img.src = data.imageUrl;
        //  img.alt = data.name;
        //  parent.appendChild(img);

        //  const span = document.createElement('span');
        //  span.classList.add('person-name')
        //  span.textContent = data.name;
        //  parent.appendChild(span);

        //  fragment.appendChild(parent);
      })
      personContainer.appendChild(fragment);
      
    } catch(error){
      console.log("error====", error);
    }

  }
});
