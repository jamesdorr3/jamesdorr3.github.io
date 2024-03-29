import React from 'react'

export const Portfolio = () => {

  const projects = [
    {
      name: 'HAM',
      video: 'https://www.youtube.com/embed/UA1FnsuSpDs',
      frontend: 'https://github.com/jamesdorr3/ham',
      backend: 'https://github.com/jamesdorr3/backend-ham',
      demo: 'https://jamesdorr3.github.io/ham/',
      description: 'A macronutrient tracker to be edited easily and show in-depth information on one page',
      bullets: [
        "React","Ruby","Rails","RESTful Routes", "PostgreSQL","Redux",
        "JavaScript","USDA API","React-Beautiful-DND",
      ]
    },
    {
      name: 'Gravity Maze',
      video: 'https://www.youtube.com/embed/Fs88M2W-uJE',
      frontend: 'https://github.com/jamesdorr3/gravity-maze',
      backend: 'https://github.com/jamesdorr3/gravity-maze/tree/master/app',
      description: 'A functional concept JavaScript game with shifting gravity',
      bullets: [
        "JavaScript","P5 Game","Ruby","Rails","PostgresQL","CSS","HTML","RESTful Routes"
      ]
    },
    {
      name: 'Bowling Score',
      demo: "https://jamesdorr3.github.io/bowling",
      video: 'https://www.youtube.com/embed/UkCWdIX5ArI',
      frontend: 'https://github.com/jamesdorr3/bowling',
      backend: null,
      description: 'A frontend app that scores bowling and guides the player by adjusting focus dynamically',
      bullets: [
        "JavaScript","React","CSS","HTML"
      ]
    },
    {
      name: 'tIPA',
      video: "https://www.youtube.com/embed/2gDHJHum9W0",
      frontend: 'https://github.com/jamesdorr3/tIPA',
      backend: null,
      demo: 'https://jamesdorr3.github.io/tIPA',
      description: 'A frontend app made to more easily type the International Phonetic Alphabet, currently supporting English, Spanish, and Mandarin Chinese',
      bullets: [
        "JavaScript","React","CSS","HTML" 
      ]
    },
    {
      name: 'Tournament App',
      video: null,
      demo: null,
      frontend: 'https://github.com/jamesdorr3/dorrnament_app',
      backend: 'https://github.com/jamesdorr3/dorrnament_app',
      description: 'A Ruby on Rails site for simplifying beach volleyball tournament planning',
      bullets: [
        "Ruby","Rails","SQL","SQLite","RESTful Routes","MVC","CSS","HTML",
      ]
    },
  ]
  
  return(
    <div className='portfolio' id='portfolio'>
      <h1 className='title'>Portfolio</h1>
      <div className='portfolioItemContainer'>
        {projects.map(project => (
          <div className='portfolioItem' key={project.name}>
            <div className='portfolioTopRow'>
              <h2>{project.name}</h2>
              <div className='links'>
                {project.backend ? 
                <div className='linkCard'>
                    <a href={project.backend} target="_blank" rel="noopener noreferrer" >
                      <div>
                        <div>
                          <img src='backend-icon.png' className='logo' alt="database icon to show users they can click to read my backend code"/>
                        </div>
                        <p>Backend</p>
                      </div>
                    </a> 
                </div>
                : null}
                {project.frontend ? 
                <div className='linkCard'>
                    <a href={project.frontend} target="_blank" rel="noopener noreferrer" >
                      <div>
                        <div>
                          <p className='logo'>{`</>`}</p>
                        </div>
                        <p>Frontend</p>
                      </div>
                    </a> 
                </div>
                : null}
                {project.demo ? 
                <div className='linkCard'>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <div>
                        <div>
                          <img src='game-icon2.png' className='logo' alt="game icon to show users they can try my app" />
                        </div>
                        <p>Try it!</p>
                        <p>(slow host)</p>
                      </div>
                    </a> 
                </div>
                : null}
              </div>
            </div>
            <div className='portfolioItemLower'>
              {project.video ?
                <div className='iframe-container'>
                <iframe src={project.video} title={project.name} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen className='video'></iframe>
                </div>
                : null
              }
              <div className='portfolioItemDescription'>
                <p>{project.description}</p>
                <ul>
                  {project.bullets.map(bullet => (
                    <li key={bullet} className={bullet.toLowerCase()}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}