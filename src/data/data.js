import ReactImg from '../images/react.png'
import JsImg from '../images/js.png'
import CImg from '../images/c.png'
import CssImg from '../images/css.png'
import HtmlImg from '../images/html.png'
import MysqlImg from '../images/mysql.png'
import NodeImg from '../images/node.png'
import PhpImg from '../images/php.png'
import PostgresImg from '../images/postgresql.png'
import TailwindImg from '../images/tailwind.png'
import Bulma from '../images/bulma.png'
import Redux from '../images/redux.png'
import Shell from '../images/shell.png'
import login from '../images/Camagru/login.png'
import photos from '../images/Camagru/photos.png'
import upload from '../images/Camagru/upload.png'
import profile from '../images/Camagru/profile.png'
import settings from '../images/Camagru/settings.png'
import search from '../images/Camagru/search.png'
import loginM from '../images/Matcha/loginM.png'
import homeM from '../images/Matcha/homeM.png'
import profileM from '../images/Matcha/profileM.png'
import otherProfileM from '../images/Matcha/otherProfileM.png'
import uploadM from '../images/Matcha/uploadM.png'
import chatM from '../images/Matcha/chatM.png'
import notifM from '../images/Matcha/notifM.png'
import searchM from '../images/Matcha/searchM.png'

export const intro = [
  {
    emoji: '🔥',
    text: "Matcha is a Tinder-like dating website I created from scratch with two schoolmates of mine. \
		It allows user to create an account, \
		which is verified via an email with unique link. After that, user can log in, \
		complete their profile by adding their gender, sexual preferences, bio, list of their interests, \
		profile picture and optionally four other pictures. User gets \
		a list of match suggestions based on their preferences. They can run an advanced search \
		selecting one or a few criteria, such as age, location or interests. The user can \
		check other users' profiles and see if they're online, or the date and time when \
		they were online the last time. They can also report users as “fake accounts” \
		and block them. A blocked user won’t appear anymore in the research results. \
		When two users like each other, they can start chatting in real time. ",
    subsection:
      'Users receive real-time notifications \
			when they were liked by another user, their profile was checked by another user, \
			they received a message and when a user they liked liked them back.',
    subjectLink:
      'https://github.com/Katarina-Slotova/matcha-hive/blob/main/matcha.en.pdf',
    type: 'Team school project',
    repoLink: 'https://github.com/Katarina-Slotova/matcha-hive',
  },
  {
    emoji: '📸',
    text: "Camagru is the first website I created from scratch all by myself. \
		It allows user to create an account, \
		which is verified via an email with unique link. User can log in, \
		upload pictures with none, one or more predefined images (stickers), take a \
		picture using their webcam and jazz it up with one or more stickers, like \
		pictures and comment on them, edit their profile, and search for other users\
		 and follow them. Every time someone comments on user's picture, user will \
		 receive a notification email. User can turn off the notifications in the \
		 profile settings. The gallery with all the pictures \
		 is public, so people can see them without creating an account or logging in.",
    subsection:
      'XSS and SQL injction attacks are rather difficult to achieve, since I prevent \
		all kinds of shenanigans 😁',
    subjectLink:
      'https://github.com/Katarina-Slotova/Camagru-hive/blob/main/subject.pdf',
    type: 'Solo school project',
    repoLink: 'https://github.com/Katarina-Slotova/Camagru-hive',
  },
  {
    emoji: '🖨️',
    text: "Regardless of the programming language, printf is one of the most useful functions out there. \
		But what if you are not allowed to use printf? That is one of the main rules at Hive Helsinki - \
		except a few standard C library functions, students cannot use the standard C library \
		to complete their projects. It's easy to code one's own putstr and putnbr functions \
		to print strings and numbers to the standard output, but they're uncomparably less convenient than printf.",
    subsection:
      "That's why it was so important to add \
			my own printf to the already extensive C library I previously coded as part\
			of my very first school project.",
    subjectLink:
      'https://github.com/Katarina-Slotova/ft_printf-hive/blob/main/ft_printf.en.pdf',
    type: 'Solo school project',
    repoLink: 'https://github.com/Katarina-Slotova/ft_printf-hive',
  },
  {
    emoji: '🔒',
    text: "Camagru is the first website I created from scratch all by myself. \
		It allows user to create an account, \
		which is verified via an email with unique link. User can log in, \
		upload pictures with none, one or more predefined images (stickers), take a \
		picture using their webcam and jazz it up with one or more stickers, like \
		pictures and comment on them, edit their profile, and search for other users\
		 and follow them. Every time someone comments on user's picture, user will \
		 receive a notification email. User can turn off the notifications in the \
		 profile settings. The gallery with all the pictures \
		 is public, so people can see them without creating an account or logging in.",
    subsection:
      'XSS and SQL injction attacks are rather difficult to achieve, since I prevent \
		all kinds of shenanigans 😁',
    subjectLink:
      'https://github.com/Katarina-Slotova/roger-skyline/blob/main/Roger-skyline-1%20Subject.pdf',
    type: 'Solo school project',
    repoLink: 'https://github.com/Katarina-Slotova/roger-skyline',
  },
]

export const purpose = [
  {
    purpose:
      "Matcha was the second web development project in my school's curriculum \
			and the first team project I worked on. \
			This project was an intorduction to a more advanced tool for creating web applications:\
			the micro-framework. The purpose was to create a Tinder-like dating website,\
			where interactions between the users will be at the very heart of the project.",
    goal: 'Our goal was to create a robust and user-friendly online dating platform \
		that facilitates connections between users through comprehensive profile customization,\
		real-time interactions and advanced search functionalities, \
		while ensuring user safety and privacy through features like account verification,\
		reporting and blocking.',
  },
  {
    purpose:
      "Camagru was the first full-stack web development project in my school's curriculum. \
The challenge was to create a small Instagram-like web application that allows user \
to edit their photos using their webcam and predifined images.\
 ",
    goal: "My goal was to create a comprehensive and user-friendly \
photo-sharing website focused on user's creativity, interaction, and security.\
It allows users to connect, \
express themselves visually, and easily manage their profiles, \
all while being protected against security vulnerabilities like XSS and SQL injection attacks.",
  },
  {
    purpose:
      'Ft_printf was the fourth and the last school project I coded in C, before I moved to web development branch.\
		It was a more advanced one, introducing the concept of variadic functions and ellipsis.',
    goal: 'My goal was to create a function that replicates the functionality of the standard printf function. \
		It had to handle multiple format conversions (single characters, strings, pointers, \
		signed and unsigned decimal numbers, octal numbers, hexadecimal numbers, floating point numbers),\
		as well as flags that control how the argument is displayed.',
  },
  {
    purpose:
      "Camagru was the first full-stack web development project in my school's curriculum. \
The challenge was to create a small Instagram-like web application that allows user \
to edit their photos using their webcam and predifined images.\
 ",
    goal: "My goal was to create a comprehensive and user-friendly \
photo-sharing website focused on user's creativity, interaction, and security.\
It allows users to connect, \
express themselves visually, and easily manage their profiles, \
all while being protected against security vulnerabilities like XSS and SQL injection attacks.",
  },
]

export const stack = [
  {
    constraints:
      'We were free to choose any technologies for this project. \
			The only constraint was that we were not allowed to use non-relational databases.',
    stack:
      "We chose JavaScript, ReactJS, Redux, NodeJS, ExpressJS, PostgreSQL and TailwindCSS aas the main technologies.\
			We didn't have any previous experience with this stack and we learned everything by doing.\
		  ReactJS offered the benefits of reusable components and hooks, which we found very useful for building the UI.\
			We chose Redux for state handling to avoid the need to pass props down through multiple layers of components.\
			We had previous experience with MySQL, and we thought this project would be the perfect opportunity \
			to learn PostgreSQL. We chose NodeJS to handle the backend because of its reliability and efficiency. \
			The microframework of our choice was ExpressJS as it is the most standard one for NodeJS. \
			Although Tailwind proved to be a bit challenging at first, \
			once we got a hang of it, it turned out to be a fantastic tool for creating unique and responsive design.",
    stackImgs: [
      { src: JsImg, alt: 'JavaScript logo.', name: 'JavaScript' },
      { src: ReactImg, alt: 'React logo.', name: 'ReactJS' },
      { src: Redux, alt: 'Redux logo.', name: 'Redux' },
      { src: NodeImg, alt: 'Node logo.', name: 'NodeJS' },
      { src: TailwindImg, alt: 'Tailwind logo.', name: 'TailwindCSS' },
      { src: PostgresImg, alt: 'PosgreSQL logo.', name: 'PostgreSQL' },
    ],
  },
  {
    constraints:
      'The choice of technologies used for this project was limited due to mandatory constraints.',
    stack:
      "Exclusively PHP was used to handle server-side logic. \
			Client-side interactivity was implemented solely using HTML, CSS, and JavaScript. \
			No frameworks and no libraries were authorized on the server side. \
			Since JavaScript-free client-side frameworks were allowed, I decided to use Bulma. \
			I chose MySQL as the database management system. I had no previous hands-on experience with database systems. \
			MySQL's user-friendly interface and good documentation made it an ideal choice for a beginner, \
			allowing me to effectively learn and implement database functionalities necessary for the project.",
    stackImgs: [
      { src: PhpImg, alt: 'PHP logo.', name: 'PHP' },
      { src: HtmlImg, alt: 'Html logo.', name: 'HTML' },
      { src: CssImg, alt: 'CSS logo.', name: 'CSS' },
      { src: JsImg, alt: 'JavaScript logo.', name: 'JavaScript' },
      { src: MysqlImg, alt: 'MySQL logo.', name: 'MySQL' },
      { src: Bulma, alt: 'Bulma logo.', name: 'Bulma' },
    ],
  },
  {
    constraints:
      'The only language allowed for this project was C. I was not allowed to use the \
			official C library, except of four functions: write, malloc free and exit. If I needed \
			any other function, I had to code it myself.',
    stack:
      'To recreate the original printf function, I used my own C library of almost 80 functions, \
			which I coded previously as part of my very first school project.',
    stackImgs: [{ src: CImg, alt: 'C logo.', name: 'C' }],
  },
  {
    constraints:
      'The choice of technologies used for this project was limited due to mandatory constraints.',
    stack:
      "Exclusively PHP was used to handle server-side logic. \
			Client-side interactivity was implemented solely using HTML, CSS, and JavaScript. \
			No frameworks and no libraries were authorized on the server side. \
			Since JavaScript-free client-side frameworks were allowed, I decided to use Bulma. \
			I chose MySQL as the database management system. I had no previous hands-on experience with database systems. \
			MySQL's user-friendly interface and good documentation made it an ideal choice for a beginner, \
			allowing me to effectively learn and implement database functionalities necessary for the project.",
    stackImgs: [
      { src: Shell, alt: 'Shell logo.', name: 'Shell' },
    ],
  },
]

export const problems = [
  {
    problems:
      'The main issues we encountered during this project were due to lack of frequent \
			updates and communication among us as team members. This led to problems when merging \
			our individual contrubitions of the project we each worked on separately, \
			causing integration challenges and conflicts. This helped us realize the \
			importance of regular updates and close collaboration, as well as improved \
			our teamwork and other soft skills.',
    thoughts:
      'Just as with other school assignments, I approached Matcha as I would a real-life team \
			 project and employed practices aligned with industry standards. The first step was to \
			 summarize the workload and equally divide the tasks. We used Trello app in order to \
			 keep each other updated, and Github for version control. \
			 We prepared a basic layout and design of the website together, then worked \
			on our respective tasks, while keeping each other updated about the progress and problems we encountered.',
  },
  {
    problems:
      'The feature that turned out to be particularly problematic was \
			taking photos using webcam and placing stickers correctly on top of them. I used one HTML canvas tag for this task. \
			We can think of this canvas tag as an actual canvas in real life - it is a blank space that allows us to draw on it.\
			 After a few hours of trial-and-error, I solved my problem by using two separate HTML canvases instead of just one - \
			 one for the photo and the other one for the stickers. Then I was able to place the canvas with the stickers on top of the canvas with the picture.',
    thoughts:
      'Although this was a school assignment, I approached it as I would a real-life \
			 project and employed practices aligned with industry standards. The first step was to \
			 sketch the layout and design of the website. Key UI elements included \
			 forms for creating new posts and feed to display posts. I aimed for a clean \
			 and intuitive design inspired by Instagram. \
			 My development process started with setting up a version control system. \
			 Then I worked on user authentication and developed key features such as feed, image uploads, likes and comments.\
			 I implemented validation and error handling to ensure secure file uploads.',
  },
  {
    problems:
      'The most difficult part of this project was replicating the exact behaviour of printf \
			when printing floating point numbers, specifically the accuracy of decimal numbers beyond five decimal places. \
			I also came across several bugs that were difficult to trace at first, because \
			they originated from my own C library I used in this project. I realized how important \
			it is to test as many edge cases as possible and make sure the smaller parts of a larger projects work \
			as intended. This experience helped me to improve the library itself, and also \
			my testing and debugging skills.',
    thoughts:
      "While scheduling out the project workload, I realized that \
			ft_printf will be an invaluable addition to my C library and I would continue \
			extending its functionality for the purpose of future projects. That's why I wanted to keep the \
			code well-structured and easily maintainable. I decided to code the \
			conversions that seemed easier first, such as single characters and strings, and work my way \
			towards the more complex ones.",
  },
  {
    problems:
      'The feature that turned out to be particularly problematic was \
			taking photos using webcam and placing stickers correctly on top of them. I used one HTML canvas tag for this task. \
			We can think of this canvas tag as an actual canvas in real life - it is a blank space that allows us to draw on it.\
			 After a few hours of trial-and-error, I solved my problem by using two separate HTML canvases instead of just one - \
			 one for the photo and the other one for the stickers. Then I was able to place the canvas with the stickers on top of the canvas with the picture.',
    thoughts:
      'Although this was a school assignment, I approached it as I would a real-life \
			 project and employed practices aligned with industry standards. The first step was to \
			 sketch the layout and design of the website. Key UI elements included \
			 forms for creating new posts and feed to display posts. I aimed for a clean \
			 and intuitive design inspired by Instagram. \
			 My development process started with setting up a version control system. \
			 Then I worked on user authentication and developed key features such as feed, image uploads, likes and comments.\
			 I implemented validation and error handling to ensure secure file uploads.',
  },
]

export const images = [
  {
    images: [
      { src: loginM, alt: 'Matcha login page.', description: 'Login page.' },
      {
        src: homeM,
        alt: 'Matcha suggestions feed page.',
        description: 'Match suggestions feed.',
      },
      {
        src: profileM,
        alt: 'Matcha user profile page.',
        description: 'Profile page of logged in user.',
      },
      {
        src: otherProfileM,
        alt: 'Matcha other user profile page.',
        description: 'Profile page of another user.',
      },
      {
        src: uploadM,
        alt: 'Matcha upload images page.',
        description: 'Upload four more images in addition to profile picture.',
      },
      {
        src: chatM,
        alt: 'Matcha chat.',
        description: 'Chat with connected users.',
      },
      {
        src: notifM,
        alt: 'Matcha notifications.',
        description: 'View notifications.',
      },
      {
        src: searchM,
        alt: 'Matcha search for other users feature.',
        description: 'Search for users.',
      },
    ],
  },
  {
    images: [
      { src: login, alt: 'Camagru login page.', description: 'Login page.' },
      {
        src: photos,
        alt: 'Camagru photos page.',
        description: 'Take photos with filters (stickers).',
      },
      {
        src: upload,
        alt: 'Camagru upload pictures page.',
        description: 'Upload pictures and optionally add filters (stickers).',
      },
      {
        src: profile,
        alt: 'Camagru user profile page.',
        description:
          "User's profile with their own photos, where they can see who follows them and who they follow.",
      },
      {
        src: settings,
        alt: 'Camagru user settings page.',
        description: 'Edit information and email notification preferences.',
      },
      {
        src: search,
        alt: 'Camagru search for users feature.',
        description: 'Search for other users.',
      },
    ],
  },
  {
    images: [],
  },
  {
    images: [],
  },
]

/* export const stackCamagru = [
  { src: PhpImg, alt: 'PHP logo.', name: 'PHP' },
  { src: HtmlImg, alt: 'Html logo.', name: 'HTML' },
  { src: CssImg, alt: 'CSS logo.', name: 'CSS' },
  { src: JsImg, alt: 'JavaScript logo.', name: 'JavaScript' },
  { src: MysqlImg, alt: 'MySQL logo.', name: 'MySQL' },
  { src: Bulma, alt: 'Bulma logo.', name: 'Bulma' },
] */
