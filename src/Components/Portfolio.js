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
        "Ruby on Rails, RESTful routes, and PostgreSQL to simplify backend relationships and API calls",
        "React-Redux for transferring data among components",
        "USDA API to provide abundant nutritional information and choices",
        "React-Beautiful-DND for responsive drag-and-drop",
      ]
    },
    {
      name: 'Gravity Maze',
      video: 'https://www.youtube.com/embed/Fs88M2W-uJE',
      frontend: 'https://github.com/jamesdorr3/gravity-maze',
      backend: 'https://github.com/jamesdorr3/gravity-maze/tree/master/app',
      description: 'A functional concept JavaScript game with shifting gravity',
      bullets: [
        "JavaScript to respond intuitively to input",
        "P5 to quicken the coding of visualizations and movement",
        "Ruby on Rails and PostgreSQL to simplify backend relationships",     
      ]
    },
    {
      name: 'tIPA',
      video: null,
      frontend: 'https://github.com/jamesdorr3/tIPA',
      backend: null,
      demo: 'https://jamesdorr3.github.io/tIPA',
      description: 'A frontend app made to more easily type the International Phonetic Alphabet',
      bullets: [
        "Created with React.js to manage 78 possible keys",
        "Vanilla CSS to accurately reflect my current abilities and help me continue to learn"         
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
        "SQLite Database for persisting data",
        "Ruby on Rails frontend and backend to display data and handle the database"         
      ]
    },
  ]
  
  return(
    <div className='portfolio' id='portfolio'>
      <h1 className='title'>Portfolio</h1>
      <div className='sideScroll'>
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
                        <p>Demo</p>
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
                    <li key={bullet}>{bullet}</li>
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