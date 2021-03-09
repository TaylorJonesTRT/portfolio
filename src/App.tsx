/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import LongMenu from './components/Menu';
import './styles/App.css';
import memoryGameImg from './images/projects/memory-game.png';
import cvAppImg from './images/projects/cv-application.png';
import weatherAppImg from './images/projects/weather-app.png';
import toDOImg from './images/projects/toDO.png';

const App = () => {
  const projects: any[] = [
    {
      projectName: 'Memory Game',
      projectLink: 'https://github.com/TaylorJonesTRT/memory-game',
      projectDemo: 'https://taylorjonestrt.github.io/memory-game/',
      projectImage: memoryGameImg,
      languages: 'ReactJS, Vanilla JavaScript, OOP, HTML/CSS',
      bullet1: 'The goal of the game is to continously click on a card that you have not already previously chosen in that current game/round.',
      bullet2:
        'The project was written using functional components rather than class based to further my knowledge of the ReactJS library so that I am ready to deal with both in the future.',
      bullet3:
        'I take use of the useEffect hook to reset the game state when it sees that the best score has changed (best score will only change if the current score of the game/round is higher than the best and triggered only when a card is chosen that already has been.',
    },
    {
      projectName: 'CV Application',
      projectLink: 'https://github.com/TaylorJonesTRT/cv-application-react',
      projectDemo: 'https://taylorjonestrt.github.io/cv-application-react/',
      projectImage: cvAppImg,
      languages: 'ReactJS, Vanilla JavaScript, OOP, HTML/CSS',
      bullet1:
        'My first project using ReactJS that I built is a CV Application. It has the basic functions needed and when done filling out the form the information can be viewed in an HTML format. It is also possible to change back from the HTML view to the editing view to be able to update or change any fields that the user would like to.',
      bullet2:
        'The project was first written using class based components and after completion refactored into functional components so I could learn how they both differed from the other.',
      bullet3: 'Creating this helped me understand user inputs using state to a greater degree.',
    },
    {
      projectName: 'Weather App',
      projectLink: 'https://github.com/TaylorJonesTRT/weather-app',
      projectDemo: 'https://taylorjonestrt.github.io/weather-app/',
      projectImage: weatherAppImg,
      languages: 'Vanilla JavaScript, Async/Await, OOP, HTML/CSS',
      bullet1: 'This weather app will grab any location that you type into the search areas current weather. It relys on the OpenWeatherMap API.',
      bullet2: 'My first project using an API and also using Async and Await. The data is not loaded from the search query until api call is returned.',
      bullet3: 'I created this project to further my learning in promises and asynchrounous calls.',
    },
    {
      projectName: 'ToDO',
      projectLink: 'https://github.com/TaylorJonesTRT/todo-list',
      projectDemo: 'https://taylorjonestrt.github.io/todo-list/',
      projectImage: toDOImg,
      languages: 'Vanilla JavaScript, OOP, HTML/CSS',
      bullet1: 'Using ToDO you can create multiple projects and multiple todo items inside of those to keep track of your day/week/month/year/years.',
      bullet2: 'ToDO was my first time programming in an Object Oriented style. I found the style to be very pleasent to work in.',
      bullet3: 'I found OOP to be a very strong style to have learned. It helped me structure my code in a way that was more readable and easier to use.',
    },
  ];
  document.title = 'Taylor Jones';
  return (
    <div className="App">
      <LongMenu />
      <div className="hero">
        <div className="logo-area">
          <div className="name">
            <p>Taylor Jones</p>
          </div>
          <div className="title">Fullstack Developer</div>
        </div>
      </div>
      <div className="first-section">
        <div className="about-area">
          <p className="description">I am a self taught Fullstack Developer that is currently available for hire.</p>
          <br />
          <p className="contact">
            If you would like to contact me my email is <a href="mailto: taylor@taylorwjones.com">taylor@taylorwjones.com</a>
          </p>
          <h4>What I know</h4>
          <div className="languages">
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <path
                  id="plain"
                  fill="#007acc"
                  d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"
                ></path>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#E44D26"
                  d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"
                ></path>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#1572B6"
                  d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"
                ></path>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#FFD845"
                  d="M49.33 62h29.159c8.117 0 14.511-6.868 14.511-15.019v-27.798c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191-12.355 2.181-14.453 6.751-14.453 15.176v10.817h29v4h-40.224000000000004c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53 2.075 8.642 7.03 14.659 15.515 14.659h9.946v-13.048c0-9.637 8.428-17.952 18.33-17.952zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zM122.281 48.811c-2.098-8.448-6.103-14.811-14.599-14.811h-10.682v12.981c0 10.05-8.794 18.019-18.511 18.019h-29.159c-7.988 0-14.33 7.326-14.33 15.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0 7.349-2.129 14.487-6.411 14.487-14.834v-11.126h-29v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
                ></path>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <g fill="#003A2B">
                  <path d="M90.9 61.6l.1-2v-.6h-.8c-1.2 0-2.5.3-3.4.9-1.4.8-2.2 2.3-2.2 4.4 0 3 1.5 4.7 4.1 4.7.8 0 1.3-.1 2.3-.4v-4.3l-.1-2.7zM16.3 64.2c0 3.2 1.6 4.9 4.7 4.9.7 0 1 0 2-.2v-9.5c-1-.2-1.2-.3-2-.3-3 0-4.7 1.9-4.7 5.1zM45.9 68.1c0 1.2.7 1.7 2.3 1.7.9 0 1.8-.1 2.8-.3v-4c-4 .4-5.1 1-5.1 2.6zM108.9 59c-2.3 0-3.7 1.9-3.7 5.2 0 3.3 1.3 5.2 3.7 5.2 2.3 0 3.6-1.9 3.6-5.2 0-3.2-1.3-5.2-3.6-5.2zM126 43.9c0-3.8-3.1-6.9-6.9-6.9h-111.2c-3.8 0-6.9 3.1-6.9 6.9v40.1c0 3.9 3.1 7 6.9 7h111.1c3.8 0 6.9-3.1 6.9-6.9v-40.2zm-115.7 20.4c0-6 4-10 10.2-10 1 0 1.6.1 2.6.3v-8.6h6v27c-3 .6-5.3.8-7.7.8-7.3 0-11.1-3.2-11.1-9.5zm27.7 4.2c0 4.7-.2 7-1.2 9-1 1.9-2.1 3.1-4.7 4.4l-5.5-2.6c2.6-1.2 3.7-2.3 4.5-4 .8-1.7.9-3.7.9-8.8v-11.5h6v13.5zm0-16.5h-6v-6h6v6zm18 21.3c-2 .4-5.8.7-8.3.7-5 0-7.1-1.7-7.1-5.6 0-4.2 3.3-6.1 10.3-6.7v-1.3c0-1.1-.5-1.5-2-1.5-2.2 0-5 .6-7 1.8v-4.6c3-1.2 5.1-1.8 7.8-1.8 3 0 4.8.8 5.7 2.4.5.9.5 2 .5 4.5v12.1zm21 .7h-6v-11.8c0-2.3-1-3.1-3.1-3.1-.8 0-1.9.1-2.9.4v14.5h-6v-18.3c4-.9 6.5-1.3 9.4-1.3 3 0 5.4.7 6.7 2 1.3 1.3 1.9 2.6 1.9 5.6v12zm19.3-11.6.7 5.6v1.7c0 5.1-.6 7.5-1.9 9.4-1.8 2.9-5.1 4.3-9.7 4.3-2.3 0-4.5-.3-6.5-1.2v-5.5c2 1.1 4.2 1.6 6.4 1.6 3.9 0 5.6-1.6 5.6-5.3v-.1c-1 .6-2.4.8-3.9.8-5.2 0-8.5-3.4-8.5-8.8 0-6.7 4.9-10.5 13.5-10.5 2.5 0 4.9.3 7.7.8l-2.3 4.3c-1.6-.3 1.3 0-.7-.2m12.1 14.8c-5.9 0-9.6-3.7-9.6-9.7 0-6.2 3.8-10.1 9.8-10.1 5.9 0 9.5 3.7 9.5 9.8.1 6.1-3.7 10-9.7 10z"></path>
                </g>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#F34F29"
                  d="M124.742 58.378l-55.117-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.443 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993l13.992 13.994c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.049-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11v-34.659c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576l-14.233-14.313-37.754 37.79c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z"
                ></path>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#83CD29"
                  d="M112.678 30.334l-44.143-25.605c-2.781-1.584-6.424-1.584-9.227 0l-44.488 25.605c-2.869 1.651-4.82 4.754-4.82 8.073v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49c.001-.713.446-1.774-.255-1.774h-5.622c-.712 0-2.122 1.061-2.122 1.773v50.49c0 3.896-3.616 7.773-10.202 4.48l-12.122-7.013c-.422-.23-.676-.693-.676-1.181v-51.142c0-.482.463-.966.891-1.213l44.378-25.561c.415-.235 1.002-.235 1.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754c1.416.82 3.027 1.246 4.647 1.246 1.642 0 3.249-.426 4.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083v-51.142c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"
                ></path>
              </svg>
            </div>
          </div>
          <h4>What I will soon learn</h4>
          <div className="languages">
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#D91404"
                  d="M35.971 111.33c27.466 3.75 54.444 7.433 81.958 11.188-9.374-15.606-18.507-30.813-27.713-46.144l-54.245 34.956zM125.681 24.947c-2.421 3.636-4.847 7.269-7.265 10.907-8.304 12.493-16.607 24.986-24.903 37.485-.462.696-1.061 1.248-.41 2.321 8.016 13.237 15.969 26.513 23.942 39.777 1.258 2.095 2.53 4.182 4.157 6.192 1.612-32.193 3.223-64.387 4.834-96.58l-.355-.102zM16.252 66.22c.375.355 1.311.562 1.747.347 7.689-3.779 15.427-7.474 22.948-11.564 2.453-1.333 4.339-3.723 6.452-5.661 6.997-6.417 13.983-12.847 20.966-19.278.427-.395.933-.777 1.188-1.275 2.508-4.902 4.973-9.829 7.525-14.898-3.043-1.144-5.928-2.263-8.849-3.281-.396-.138-1.02.136-1.449.375-6.761 3.777-13.649 7.353-20.195 11.472-3.275 2.061-5.943 5.098-8.843 7.743-4.674 4.266-9.342 8.542-13.948 12.882-1.222 1.152-2.336 2.468-3.288 3.854-3.15 4.587-6.206 9.24-9.402 14.025 1.786 1.847 3.41 3.613 5.148 5.259zM44.354 59.949c-3.825 16.159-7.627 32.227-11.556 48.823 18.423-11.871 36.421-23.468 54.3-34.987-14.228-4.605-28.41-9.196-42.744-13.836zM120.985 25.103c-15.566 2.601-30.76 5.139-46.15 7.71 5.242 12.751 10.379 25.246 15.662 38.096 10.221-15.359 20.24-30.41 30.488-45.806zM44.996 56.644c14.017 4.55 27.755 9.01 41.892 13.6-5.25-12.79-10.32-25.133-15.495-37.737-8.815 8.059-17.498 15.999-26.397 24.137zM16.831 75.643c-4.971 11.883-9.773 23.362-14.662 35.048 9.396-.278 18.504-.547 27.925-.825-4.423-11.412-8.759-22.6-13.263-34.223zM30.424 101.739l.346-.076c3.353-13.941 6.754-27.786 10.177-42.272-7.636 3.969-14.92 7.754-22.403 11.644 3.819 9.926 7.891 20.397 11.88 30.704zM115.351 22.842c-4.459-1.181-8.918-2.366-13.379-3.539-6.412-1.686-12.829-3.351-19.237-5.052-.801-.213-1.38-.352-1.851.613-2.265 4.64-4.6 9.245-6.901 13.868-.071.143-.056.328-.111.687 13.886-2.104 27.679-4.195 41.47-6.285l.009-.292zM89.482 12.288l36.343 10.054c-2.084-5.939-4.017-11.446-6.005-17.11l-30.285 6.715-.053.341zM33.505 114.007c-4.501-.519-9.122-.042-13.687.037-3.75.063-7.5.206-11.25.323-.386.012-.771.09-1.156.506 31.003 2.866 62.005 5.732 93.007 8.6l.063-.414c-9.938-1.357-19.877-2.714-29.815-4.07-12.384-1.691-24.747-3.551-37.162-4.982zM2.782 99.994c3.995-9.27 7.973-18.546 11.984-27.809.401-.929.37-1.56-.415-2.308-1.678-1.597-3.237-3.318-5.071-5.226-2.479 12.24-4.897 24.177-7.317 36.113l.271.127c.185-.297.411-.578.548-.897zM81.522 9.841c6.737-1.738 13.572-3.097 20.367-4.613.44-.099.87-.244 1.303-.368l-.067-.332c-9.571 1.287-19.141 2.575-29.194 3.928 2.741 1.197 4.853 2.091 7.591 1.385z"
                ></path>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#6181B6"
                  d="M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z"
                ></path>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <path
                  d="M62.271 10.880 C 62.082 10.990,61.289 12.128,60.508 13.409 C 58.548 16.626,58.526 16.628,55.893 13.857 C 54.180 12.055,53.766 11.725,53.214 11.729 C 52.855 11.731,52.402 11.853,52.206 12.000 C 52.011 12.147,51.458 13.317,50.978 14.600 C 49.879 17.539,49.826 17.634,49.217 17.751 C 48.842 17.822,48.120 17.420,46.389 16.177 C 45.111 15.258,43.857 14.507,43.603 14.507 C 42.549 14.507,42.252 15.083,41.750 18.100 C 41.112 21.936,41.134 21.923,37.676 20.352 C 36.280 19.719,34.956 19.200,34.733 19.200 C 34.510 19.200,34.087 19.440,33.794 19.733 C 33.262 20.266,33.261 20.268,33.406 23.201 L 33.552 26.137 32.997 26.434 C 32.505 26.697,32.166 26.665,29.988 26.150 C 27.145 25.479,26.545 25.497,25.969 26.272 L 25.548 26.838 26.113 29.259 C 26.423 30.590,26.722 31.872,26.778 32.107 C 26.833 32.341,26.738 32.716,26.566 32.939 C 26.282 33.306,25.980 33.339,23.349 33.299 C 18.896 33.229,18.643 33.611,20.483 37.627 C 21.068 38.902,21.547 40.060,21.547 40.199 C 21.547 40.933,20.962 41.200,18.449 41.610 C 17.043 41.839,15.821 42.027,15.733 42.027 C 15.645 42.027,15.381 42.219,15.147 42.453 C 14.382 43.218,14.599 43.936,16.334 46.385 C 18.495 49.435,18.491 49.446,14.921 50.812 C 10.861 52.365,10.779 52.748,13.870 55.680 C 16.749 58.410,16.752 58.370,13.493 60.419 C 11.024 61.970,10.986 62.007,10.923 62.848 C 10.847 63.871,10.865 63.889,13.813 65.690 C 16.728 67.470,16.728 67.524,13.867 70.231 C 10.790 73.141,10.885 73.566,14.948 75.099 C 18.498 76.438,18.503 76.454,16.338 79.504 C 15.111 81.233,14.720 81.953,14.720 82.487 C 14.720 83.486,15.240 83.741,18.347 84.263 C 20.964 84.704,21.547 84.963,21.547 85.685 C 21.547 85.833,21.067 87.001,20.480 88.279 C 18.654 92.256,18.862 92.587,23.184 92.587 C 27.209 92.587,27.102 92.464,26.235 96.094 C 25.581 98.830,25.571 99.354,26.163 99.945 C 26.616 100.399,27.470 100.348,30.141 99.709 C 32.181 99.222,32.539 99.188,33.012 99.441 L 33.552 99.730 33.406 102.665 C 33.261 105.599,33.262 105.601,33.794 106.134 C 34.087 106.427,34.516 106.667,34.746 106.667 C 34.976 106.667,36.300 106.151,37.689 105.520 C 41.136 103.955,41.114 103.942,41.750 107.766 C 42.254 110.797,42.548 111.360,43.624 111.360 C 43.891 111.360,45.118 110.640,46.352 109.760 C 48.519 108.214,49.081 107.972,49.658 108.339 C 49.807 108.433,50.385 109.703,50.942 111.161 C 51.761 113.305,52.061 113.863,52.517 114.081 C 53.385 114.497,53.922 114.163,55.962 111.941 C 58.425 109.258,58.526 109.271,60.537 112.530 C 62.758 116.128,63.333 116.120,65.610 112.457 C 67.572 109.301,67.549 109.303,70.201 112.073 C 71.962 113.911,72.337 114.204,72.931 114.204 C 73.310 114.204,73.763 114.062,73.936 113.888 C 74.110 113.714,74.686 112.429,75.216 111.033 C 75.746 109.636,76.295 108.420,76.437 108.330 C 76.998 107.973,77.579 108.224,79.743 109.760 C 81.017 110.665,82.216 111.360,82.501 111.360 C 83.559 111.360,83.941 110.609,84.381 107.657 C 84.757 105.140,84.833 104.899,85.328 104.648 C 85.815 104.401,86.107 104.484,88.391 105.521 C 89.780 106.151,91.104 106.667,91.334 106.667 C 91.564 106.667,92.000 106.420,92.301 106.118 L 92.850 105.570 92.699 102.755 C 92.555 100.067,92.568 99.923,92.997 99.535 C 93.438 99.136,93.483 99.138,95.949 99.701 C 98.935 100.383,99.492 100.401,100.053 99.840 C 100.601 99.292,100.595 99.172,99.845 96.009 C 99.004 92.461,98.891 92.587,102.933 92.587 C 105.688 92.587,105.995 92.548,106.346 92.161 C 106.932 91.513,106.793 90.771,105.614 88.258 C 105.019 86.992,104.536 85.840,104.540 85.698 C 104.560 84.951,105.147 84.696,107.860 84.255 C 109.520 83.986,110.762 83.674,110.987 83.471 C 111.741 82.790,111.464 81.904,109.743 79.491 C 107.586 76.467,107.595 76.438,111.049 75.165 C 115.185 73.641,115.303 73.133,112.208 70.192 C 109.341 67.468,109.340 67.483,112.480 65.555 C 116.276 63.225,116.282 62.700,112.547 60.382 C 109.335 58.389,109.337 58.417,112.216 55.683 C 115.304 52.749,115.220 52.365,111.159 50.812 C 107.575 49.441,107.564 49.407,109.742 46.418 C 111.039 44.638,111.360 44.047,111.360 43.437 C 111.360 42.371,110.882 42.132,107.738 41.624 C 105.111 41.200,104.533 40.942,104.533 40.195 C 104.533 40.053,105.013 38.910,105.600 37.653 C 106.749 35.192,106.910 34.207,106.260 33.618 C 105.911 33.302,105.443 33.257,102.939 33.298 C 100.319 33.342,99.984 33.305,99.621 32.940 C 99.224 32.541,99.228 32.485,99.848 29.898 C 100.608 26.728,100.611 26.651,99.986 26.064 C 99.352 25.468,98.956 25.478,96.045 26.163 C 93.924 26.663,93.573 26.696,93.091 26.438 L 92.544 26.145 92.695 23.219 L 92.847 20.294 92.300 19.747 C 91.999 19.446,91.572 19.200,91.350 19.200 C 91.129 19.200,89.812 19.723,88.424 20.361 C 86.106 21.428,85.857 21.499,85.356 21.237 C 84.856 20.975,84.773 20.717,84.346 18.110 C 83.853 15.094,83.548 14.507,82.477 14.507 C 82.223 14.507,80.964 15.262,79.679 16.185 C 77.569 17.701,77.286 17.844,76.760 17.661 C 76.325 17.509,76.072 17.178,75.763 16.355 C 75.534 15.749,75.096 14.581,74.788 13.760 C 74.166 12.104,73.819 11.733,72.887 11.733 C 72.367 11.733,71.896 12.107,70.208 13.860 C 67.555 16.616,67.545 16.615,65.594 13.415 C 64.814 12.136,63.999 10.994,63.782 10.878 C 63.294 10.616,62.720 10.617,62.271 10.880 M64.689 20.515 C 67.000 22.160,65.771 26.027,62.937 26.027 C 60.187 26.027,58.802 22.714,60.766 20.833 C 61.874 19.771,63.463 19.642,64.689 20.515 M61.783 30.729 C 63.298 31.305,63.920 30.959,67.379 27.625 L 69.978 25.119 71.078 25.265 C 74.528 25.723,81.390 28.737,85.333 31.526 C 88.956 34.090,93.771 39.312,95.823 42.903 L 96.262 43.672 94.318 48.052 C 93.248 50.461,92.373 52.685,92.373 52.996 C 92.373 53.713,92.843 54.847,93.296 55.222 C 93.487 55.381,95.302 56.255,97.329 57.164 L 101.013 58.818 101.158 59.755 C 101.345 60.976,101.370 63.975,101.200 64.827 L 101.067 65.493 98.964 65.493 C 96.525 65.493,96.713 65.275,96.581 68.267 C 96.485 70.436,95.961 71.635,94.769 72.411 C 92.827 73.678,89.620 73.448,88.260 71.945 C 88.051 71.714,87.645 70.553,87.357 69.364 C 86.516 65.891,85.386 63.941,83.116 62.044 C 82.399 61.445,81.813 60.886,81.813 60.801 C 81.813 60.717,82.601 60.053,83.565 59.328 C 87.075 56.682,89.093 53.602,89.315 50.551 C 89.738 44.732,85.102 39.308,78.206 37.550 C 76.571 37.133,75.873 37.120,55.646 37.120 C 44.166 37.120,34.773 37.045,34.773 36.954 C 34.773 36.739,37.324 34.263,38.827 33.021 C 42.954 29.609,48.315 26.924,53.867 25.490 L 55.787 24.993 58.515 27.759 C 60.016 29.280,61.487 30.616,61.783 30.729 M27.432 48.526 C 28.689 49.349,29.204 51.417,28.462 52.660 C 27.314 54.584,24.406 54.665,23.257 52.805 C 21.586 50.103,24.804 46.804,27.432 48.526 M101.482 48.631 C 104.770 50.636,102.222 55.568,98.702 54.011 C 96.352 52.971,96.277 49.759,98.575 48.587 C 99.534 48.098,100.636 48.115,101.482 48.631 M37.120 60.907 L 37.120 73.173 31.698 73.173 L 26.276 73.173 25.846 71.307 C 25.000 67.632,24.644 63.830,24.857 60.716 L 25.006 58.528 28.734 56.856 C 31.073 55.808,32.577 55.009,32.771 54.712 C 33.619 53.419,33.538 52.495,32.348 49.867 L 31.792 48.640 34.456 48.640 L 37.120 48.640 37.120 60.907 M68.340 49.174 C 70.662 49.778,71.889 51.007,71.892 52.730 C 71.894 53.995,71.267 54.789,69.712 55.491 C 68.611 55.989,68.436 56.001,61.493 56.069 L 54.400 56.137 54.400 52.495 L 54.400 48.853 60.755 48.853 C 65.719 48.853,67.380 48.923,68.340 49.174 M65.944 66.776 C 67.095 67.096,68.456 68.096,69.154 69.135 C 69.887 70.227,70.316 71.647,71.332 76.351 C 72.190 80.327,72.742 81.627,74.288 83.319 C 76.203 85.414,75.759 85.333,85.325 85.333 C 89.906 85.333,93.653 85.406,93.653 85.496 C 93.653 85.657,90.498 89.387,90.362 89.387 C 90.323 89.387,88.675 89.042,86.700 88.620 C 81.123 87.429,80.922 87.569,79.642 93.546 L 78.819 97.386 78.076 97.752 C 76.836 98.364,72.806 99.624,70.717 100.054 C 67.265 100.764,63.508 101.004,60.206 100.725 C 54.577 100.248,47.123 98.064,46.832 96.805 C 46.770 96.538,46.395 94.810,46.000 92.964 C 45.604 91.118,45.123 89.367,44.931 89.073 C 44.008 87.665,43.037 87.578,38.767 88.523 C 37.150 88.881,35.739 89.173,35.631 89.173 C 35.428 89.173,32.427 85.703,32.427 85.469 C 32.427 85.396,39.555 85.311,48.267 85.281 L 64.107 85.227 64.164 79.600 C 64.204 75.627,64.149 73.886,63.977 73.680 C 63.785 73.448,62.763 73.387,59.067 73.387 L 54.400 73.387 54.400 69.973 L 54.400 66.560 59.787 66.561 C 62.749 66.562,65.520 66.659,65.944 66.776 M41.536 92.365 C 44.055 93.900,42.847 97.922,39.868 97.919 C 36.813 97.917,35.681 93.932,38.284 92.344 C 39.145 91.819,40.658 91.829,41.536 92.365 M87.662 92.533 C 88.897 93.438,89.308 95.321,88.543 96.575 C 86.534 99.870,81.510 97.251,83.188 93.784 C 84.013 92.081,86.206 91.467,87.662 92.533 "
                  stroke="none"
                  fill="black"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="lang">
              <svg viewBox="0 0 128 128">
                <g fill="#019BC6">
                  <path d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2h-6.7v-14.1h-13v-25h-15v12h-25v13h-13v14h-11.2l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zm-96.8-13.1h10v11h-10v-11zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zm-13.1-31.2h10v11h-10v-11zm-13 0h11v11h-11v-11zm27.7 50.2c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.2 5.9.2 1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8h-3.4zm8.3-39.2h-11v-11h11v11zm0-13h-11v-11h11v11zm13 13h-11v-11h11v11zm0-13h-11v-11h11v11zm0-13h-11v-11h11v11zm13 26h-11v-11h11v11zM38.8 81.2c-.2-.1-.5-.2-.8-.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9.1-.4.3-.7.5-.8z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-section">
        <h4>My Work</h4>
        <div className="projects">
          {projects.map((proj) => (
            <div className="project" key={proj.projectName}>
              <h1 className="project-title">{proj.projectName}</h1>
              <a className="project-link" href={proj.projectLink}>
                Code
              </a>
              <a className="demo-link" href={proj.projectDemo}>
                Demo
              </a>
              <br />
              <img src={proj.projectImage} alt={proj.projectName} />
              <br />
              <span className="project-languages">{proj.languages}</span>
              <p className="project-desc">{proj.bullet1}</p>
              <p className="project-desc">{proj.bullet2}</p>
              <p className="project-desc">{proj.bullet3}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
