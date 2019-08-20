import React from 'react'

export const Resume = () => {
  return(
    <div className='resume' id='resume'>
      <div className='transition'></div>
      <h1>Resume</h1>
      <a href="https://docs.google.com/document/d/1RewthW1E0GDMyI-s2LZtrcwM_YZ52mFUoaVn2okxfrk/export?format=pdf">Download as PDF</a>
      {/* <div className='iframe-holder'> */}
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vQa7qX9DEBuRUwGJUEtETr0-3_AUGpdQZvz6-igUzlLOWmXTIIaykSPIcxKIxaYhWjGF_9s8xRxG1gk/pub?embedded=true" title="resume" ></iframe>
      {/* </div> */}
      <div className='transition'></div>
    </div>
  )
}