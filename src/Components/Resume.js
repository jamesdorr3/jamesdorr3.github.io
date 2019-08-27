import React from 'react'

export const Resume = () => {
  return(
    <div className='resume' id='resume'>
      <div className='transition'></div>
      <h1>Resume</h1>
      <a className='downloadResumeLink' href="https://docs.google.com/document/d/1RewthW1E0GDMyI-s2LZtrcwM_YZ52mFUoaVn2okxfrk/export?format=pdf">Download as PDF</a>
      <div className='resume-holder'>
        <h1>James Dorr</h1>
        <div className='contactInfo'>
          <span>509-951-3291</span>
          <span><a href='mailto:jamesdorr3@gmail.com'>jamesdorr3@gmail.com</a></span>
          <span><a href='https://github.com/jamesdorr3'>GitHub</a></span>
          <span><a href='https://linkedin.com/in/jamesdorr3'>LinkedIn</a></span>
          <span><a href='https://medium.com/@jamesdorr3'>Medium</a></span>
        </div>
        <p className='personalStatement'>Full stack web developer with a passion for learning, self-actualization, and making the world a better place. With experience in Ruby on Rails, JavaScript, and React, and a background in psychology and teaching English, I discovered web development through learning human languages. I bring strong skills in problem-solving and planning that help socially responsible companies set clear goals, maximize productivity, and achieve those goals. “Whether you think you can or think you cannot, you’re right.”</p>
        <h2>Technical Skills</h2>
        <hr/>
        <div className='technicalSkillsGrid'>
        <div className='showHide'>
            <span></span>
            <span></span>
            <input type='checkbox'/>
          </div>
          <div>
          <p>Front End</p>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
          </div>
          <div>
          <p>Back End</p>
          <ul>
            <li>Ruby on Rails</li>
            <li>SQL</li>
            <li>Sinatra</li>
          </ul>
          </div>
          <div>
          <p>Libraries</p>
          <ul>
            <li>ActionCable WebSocket</li>
            <li>React-Beautilful-DND</li>
            <li>P5 Game</li>
          </ul>
          </div>
        </div>
        <h2>Employment History</h2>
        <hr/>
        <p className='employmentCompany'><strong>VIPKID</strong>, remote</p>
        <p className='employmentTitle'><i>English Teacher, May 2017 - February 2019</i></p>
        <ul>
          <li>Taught 1-on-1 English lessons to over 1,000 Chinese students, ages 4 to 14</li>
          <li>Rated 5/5 ‘Excellent’ by 2,021 of 2,036 parent reviews</li>
          <li>Over 50 curriculum improvement suggestions implemented</li>
        </ul>
        <p className='employmentCompany'><strong>Washington State University Athletics</strong>, Pullman, Washington</p>
        <p className='employmentTitle'><i>Volunteer Volleyball Coach, August 2015 - December 2018</i></p>
        <ul>
          <li>Studied opponents’ habits, created charts to display these habits and likelihoods</li>
          <li>Coached individual players on specific skills, mimicked opponents on the court for realistic practice</li>
        </ul>

        <p className='employmentCompany'><strong>Washington State University Athletics</strong>, Pullman, Washington</p>
        <p className='employmentTitle'><i>Volunteer Volleyball Coach, August 2015 - December 2018</i></p>
        <ul>
          <li>Studied opponents’ habits, created charts to display these habits and likelihoods</li>
          <li>Coached individual players on specific skills, mimicked opponents on the court for realistic practice</li>
        </ul>

        <p className='employmentCompany'><strong>China West Normal University (西华师范大学)</strong>, Sichuan, China</p>
        <p className='employmentTitle'><i>English Teacher, August 2016 - June 2017</i></p>
        <ul>
          <li>Planned and taught English lessons to over 200 Chinese college freshman</li>
          <li>Editor, 英语写作教程(第二册) “English Writing Education​”​ 2017</li>
        </ul>

        <p className='employmentCompany'><strong>Washington State University, University Recreation</strong>, Pullman, Washington</p>
        <p className='employmentTitle'><i>Coordinator of Group Fitness, September 2015 - July 2016</i></p>
        <ul>
          <li>Managed over 100 employees who taught over 150 classes per week</li>
          <li>Responsible for scheduling new classes 6 times a year, problem solving, and customer service</li>
        </ul>

        <h2>Education</h2>
        <hr/>

        <p className='school'><strong>Flatiron School</strong> - Brooklyn, New York - 2019</p>
        <ul className='degree'><li>Full Stack Web Development</li></ul>

        <p className='school'><strong>Washington State University</strong> - Pullman, Washington - 2015</p>
        <ul className='degree'><li>MA in Education, Education: Psychology, 3.81 GPA</li></ul>

        <p className='school'><strong>Limestone College</strong> - Gaffney, South Carolina - 2013</p>
        <ul className='degree'><li>BA in Psychology, 3.84 GPA, Magna Cum Laude with Honors</li></ul>

      </div>
      <div className='transition'></div>
    </div>
  )
}