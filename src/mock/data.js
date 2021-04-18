import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dipesh Jaiswal', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hello my gorgeous friend on the Internet', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey 👋, my name is',
  name: 'Dipesh Jaiswal',
  subtitle: 'I am a Student and a Web Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a student and a Web Developer. I am always ready to have new experiences and learn new things. I am an open-source enthusiast, a learner & I am deeply passionate about software development & innovations. ',
  paragraphTwo: ' I believe in the power of community & have also coordinated a technical event at my college fest and around 200 students attended it.',
  paragraphThree: 'Skills - Javascript, React, ExpressJs, NodeJs, Databases, Python, Django, Java, C++ ',
  resume: 'https://drive.google.com/file/d/1_Oa9cVdQXcW6ExBC5yXHtvWyhIfNMWEZ/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'spotify.png',
    title: 'Spotify Clone',
    info: 'A Song Playing Application just like Spotify.',
    info2: 'You choose different categories, Shuffle upto 10 playlists in each category, Search for songs,Lyrics generators and Can store any song in the Liked Song category.',
    info3: 'Technologies used: React, Context-API, Material UI, Express, NodeJs and Spotify-API.',
   
    url: 'https://spotify-clone-client.netlify.app/',
    repo: 'https://github.com/dipscoder/spotify-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'whatsapp.png',
    title: 'WhatsApp Clone',
    info: 'A chat application similar to WhatsApp.',
    info2: 'One has to authenticate themselves with Google Authentication first and then they can send real-time messages and can create different groups.All the messages are stored in the encrypted formate in the database using AES encryption.',
    info3: 'Technologies used: React, MongoDb, NodeJS, Express, Firebase and Pusher(To make the chats real-time).',
    
    url: 'https://whatsapp-mern-857d8.web.app/',
    repo: 'https://github.com/dipscoder/whatsapp-mern', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'games.png',
    title: 'IMDB for Games',
    info: 'This is a game IMDB, where you can search and read about different Games.',
    info2: 'This app is made with the help of RAWG API.',
    info3: 'Technologies used: React, Material UI, Style Component, Framer Motion and Redux.',
    url: 'https://gameimdb.netlify.app/',
    repo: 'https://github.com/dipscoder/imdb-for-games', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'poll.png',
    title: 'Polling Website',
    info: 'A Polling Application, where admin can create a poll and other users can vote to that poll.',
    info2: 'The result gets displayed in the real-time with the help of a chart.',
    info3: 'Technologies used: HTML,CSS, Bootstrap, and Django.',
    url: 'https://dips-poll.herokuapp.com/',
    repo: 'https://github.com/dipscoder/Polling-', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'dipeshjaiswal140@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dipesh-jaiswal',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dipscoder',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/dips_jaiswal',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
