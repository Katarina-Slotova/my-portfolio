import ReactImg from '../images/react.png'
import JsImg from '../images/js.png'
import CImg from '../images/c.png'
import CssImg from '../images/css.png'
import FramerImg from '../images/framer-motion.png'
import GitImg from '../images/git.png'
import HtmlImg from '../images/html.png'
import MysqlImg from '../images/mysql.png'
import NodeImg from '../images/node.png'
import PhpImg from '../images/php.png'
import PostgresImg from '../images/postgresql.png'
import StyledImg from '../images/styled-components.png'
import TailwindImg from '../images/tailwind.png'
import GatsbyImg from '../images/icon.png'
import Bulma from '../images/bulma.png'
import login from '../images/Camagru/login.png'
import photos from '../images/Camagru/photos.png'
import upload from '../images/Camagru/upload.png'
import profile from '../images/Camagru/profile.png'
import settings from '../images/Camagru/settings.png'
import search from '../images/Camagru/search.png'

export const intro = [
  {
    emoji: '🔥',
    text: "Camagru is the first project in the Web Development branch at Hive Helsinki, \
		which I created from scratch all by myself. It allows user to create an account, \
		which is verified via an email with unique link. After that, user can log in, \
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
    subject: 'For more information about the project, check out the ',
    subjectLink:
      'https://github.com/Katarina-Slotova/Camagru-hive/blob/main/subject.pdf',
    type: 'Team school project',
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
    subject: 'For more information about the project, check out the ',
    subjectLink:
      'https://github.com/Katarina-Slotova/Camagru-hive/blob/main/subject.pdf',
    type: 'Solo school project',
  },
]

export const purpose = [
  { purpose: '', goal: '' },
  {
    purpose:
      "Camagru was the first web development project in my school's curriculum. \
The challenge was to create a small web application that allows user \
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
  { stack: '' },
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
]

export const problems = [
  { problems: '', thoughts: '' },
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
  {},
  {
    images: [
      { src: login, alt: 'Camagru login page.', description: 'Login page.' },
      { src: photos, alt: 'Camagru photos page.', description: 'Take photos with filters (stickers).' },
      { src: upload, alt: 'Camagru upload pictures page.', description: 'Upload pictures and optionally add filters (stickers).' },
      { src: profile, alt: 'Camagru user profile page.', description: "User's profile with their own photos, where they can see who follows them and who they follow." },
      { src: settings, alt: 'Camagru user settings page.', description: 'Edit information and email notification preferences.' },
      { src: search, alt: 'Camagru search for users feature.', description: 'Search for other users.' },
    ],
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
