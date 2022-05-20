import bcrypt from 'bcryptjs'; 

const data = {

  users: [
    {
      name: 'Oussama',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ali',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    projects: [
      {
        //_id:'2',
        ref:'dig1',
        title: 'Projet site web Wamia',
        description: 'site e-commerce',
        image: '/images/wamia.png',
      },

      {
        //_id:'2',
        ref:'dig2',
        title: 'Applcation mobile Jumia',
        description: 'site e-commerce',
        image: '/images/jumia.png',
      },

      {
        //_id:'3',
        ref:'dig3',
        title: 'Projet site web lastprice',
        description: 'site e-commerce',
        image: '/images/last.jpg',
      },
     
    ],
  };
  export default data;