import React from 'react'

export const Portfolio = () => {

  const projects = [
    {
      name: 'HAM',
      youtube: 'https://www.youtube.com/embed/UA1FnsuSpDs',
      github: 'https://github.com/jamesdorr3/frontend-ham',
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
      youtube: 'https://www.youtube.com/embed/Fs88M2W-uJE',
      github: 'https://github.com/jamesdorr3/gravity-maze',
      description: 'A functional concept JavaScript game with shifting gravity',
      bullets: [
        "JavaScript to respond intuitively to input",
        "P5 to quicken the coding of visualizations and movement",
        "Ruby on Rails and PostgreSQL to simplify backend relationships",     
      ]
    },
    {
      name: 'Tournament App',
      youtube: null,
      github: 'https://github.com/jamesdorr3/dorrnament_app',
      description: 'A Ruby on Rails site for simplifying beach volleyball tournament planning',
      bullets: [
        "SQLite Database for persisting data",
        "Ruby on Rails frontend and backend to display data and handle the database"         
      ]
    },
  ]
  return(
    <div className='portfolio'>
      <h1>Portfolio</h1>
      {projects.map(project => (
        <div className='portfolioItem'>
          <h3>{project.name}<a href={project.github} target="_blank"><img src='GitHub-Mark-120px-plus.png' className='logo'/></a></h3>
          {project.youtube ?
            <iframe src={project.youtube} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            : null
          }
          <p>{project.description}</p>
          <ul>
            {project.bullets.map(bullet => (
              <li>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}