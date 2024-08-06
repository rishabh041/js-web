document.addEventListener('DOMContentLoaded', function() {

  const peopleList = [
    {
      name: 'Rishabh',
      designation: 'Senior Software Engineer',
      company: 'Tekion',
      url: 'https://placehold.co/50'
    },
    {
      name: 'Rishabh',
      designation: 'Senior Software Engineer',
      company: 'Tekion',
      url: 'https://placehold.co/50'
    },
    {
      name: 'Rishabh',
      designation: 'Senior Software Engineer',
      company: 'Tekion',
      url: 'https://placehold.co/50'
    }
  ];

  const testPeopleMap = {
    name: 'Agrawal',
    designation: 'Senior Software Engineer',
    company: 'Tekion',
    url: 'https://placehold.co/50'
  }

  const peopleListSelector = document.getElementById('people-list');

  const fetchPeople = async() => {
    return peopleList;
  };

  const fetchAndPopulateNewPerson = async() => {
    renderIndividualPeople(testPeopleMap);
  };

  const renderIndividualPeople = (peopleMap) => {
    const { name, designation, company, url } = peopleMap;

    const li = document.createElement('li');
    li.className = 'people-item'

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'profile-pic';

    // details start
    const details = document.createElement('div');
    details.className = 'details';

    const roleAndName = document.createElement('span');
    roleAndName.innerHTML = `
     <strong>${name}</strong>, ${designation} at ${company}
    `;

    const connectBtn = document.createElement('button');
    connectBtn.className = 'connect-button';
    connectBtn.textContent = 'Connect';

    details.appendChild(roleAndName);
    details.appendChild(connectBtn);
    // details end

    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.className = 'remove-button';

    // using event delegation instead of this
    // removeButton.addEventListener('click', () => {
    //   li.remove();
    //   fetchAndPopulateNewPerson();
    // })

    li.appendChild(img);
    li.appendChild(details);
    li.appendChild(removeButton);

    peopleListSelector.appendChild(li);
  };

  const initialize = async() => {
    const res = await fetchPeople();

    res.forEach(renderIndividualPeople);

  };

  // event delegation
  peopleListSelector.addEventListener('click', (e) => {
    if(e.target.matches('.remove-button')){
      e.target.closest('li').remove();
      fetchAndPopulateNewPerson();
    }
  })

  initialize();
});