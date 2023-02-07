const programItems = document.querySelector('.program-items-list');
const staffItems = document.querySelector('.featured-instructors-list');
const toggleBtn = document.querySelector('.instructors-button');

// Programs Data
const programItemsList = [
  {
    img: './assets/png5.png',
    title: 'Tent Camping',
    desc: 'The dream of hiking and camping, in the most beautiful location on earth.',
  },
  {
    img: './assets/png4.png',
    title: 'Rv Parks',
    desc: 'RV parks are about a lifestyle full of adventures, good food, and restful nights.',
  },
  {
    img: './assets/png6.png',
    title: 'Cabins',
    desc: 'Relax with a trip to its cabins, where you can enjoy the beauty of the forest or water.',
  },
  {
    img: './assets/png2.png',
    title: 'Treehouses',
    desc: 'The best place to camp in the world.',
  },
  {
    img: './assets/png3.png',
    title: 'Glamping',
    desc: 'This is the ultimate combination of beautiful natural surroundings.',
  },
  {
    img: './assets/png1.png',
    title: 'Camping sites',
    desc: 'Find the most popular camping sites across the world.',
  },
];

// Staff Data
const instructursItemsList = [
  {
    img: './assets/face1_crop.jpg',
    name: 'Eliana Brady',
    occupation: 'Camping Instructor',
    desc: 'Experienced world class camping instructor.',
  },
  {
    img: './assets/face2_crop.jpg',
    name: 'Howard Beard',
    occupation: 'Camping Consulor',
    desc: 'A passionate, experienced outdoor enthusiast, who has been working in the outdoor industry since 2009.',
  },
  {
    img: './assets/face3_crop.jpg',
    name: 'Jemma Luna',
    occupation: 'Camping Instructor',
    desc: 'A certified camping instructor, I have been teaching for over 10 years.',
  },
  {
    img: './assets/face4_crop.jpg',
    name: 'Talha Prince',
    occupation: 'Camping Consulor',
    desc: 'A camping consulor who helps you find the right camping site.',
  },
  {
    img: './assets/face5_crop.jpg',
    name: 'Matilda Hanson',
    occupation: 'Photographer',
    desc: 'Photographer who loves to spend time behind the camera as well as in front of it.',
  },
  {
    img: './assets/face6_crop.jpg',
    name: 'Clyde Duffy',
    occupation: 'Photographer',
    desc: 'Professional photographer who specifically specializes in camping and outdoor activities.',
  },
];

// Display program section
programItemsList.forEach((obj) => {
  programItems.innerHTML += `
    <li>
         <img src="${obj.img}" alt="">
         <h4>${obj.title}</h4>
         <p>${obj.desc} </p>
    </li>
    `;
});

// Display staff section
let addClass = '';
let classCount = 1;
instructursItemsList.forEach((obj) => {
  if (classCount < 3) addClass = ''; else addClass = 'toggle';
  staffItems.innerHTML += `
    <li class="${addClass}">
    <img src="${obj.img}" alt="Avatar">
    <div class="instructor">
        <h3>${obj.name}</h3>
        <h4>${obj.occupation}</h4>
        <span>___</span>
        <p>${obj.desc}</p>
    </div>
</li>
      `;
  classCount += 1;
});

// More button
toggleBtn.addEventListener('click', () => {
  document.querySelectorAll('.instructors-button img').forEach((elem) => {
    elem.classList.toggle('none');
    elem.classList.toggle('inline');
  });
  document.querySelectorAll('.instructors-button span').forEach((elem) => {
    elem.classList.toggle('inline');
    elem.classList.toggle('none');
  });
  document.querySelectorAll('.toggle').forEach((elem) => {
    elem.classList.toggle('flex');
  });
});
