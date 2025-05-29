import React from 'react'

export default function Hero() {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 mb-5'>
        <h1 className='fs-2 text-muted  ' style={{ textAlign: "center" }}>We pioneered the discount broking model in India.<br />
          Now, we are breaking ground with our technology.</h1>
      </div>
      <div className='row p-5 mt-5 border-top'>
        <h1 className='fs-4' style={{ textAlign: "center", color:"#0D6EFD" }}>About Me</h1>
      </div>
      <div className='row mt-5'>
        <div className='col-6 p-5 text-center about'>
          <img src="media/rajan.jpg" alt="" className='aboutImg' />
          <h5 className=' mt-4'>Rajan Kumar</h5>
          <h5>Software Developer</h5>
          <button className='btn btn-primary '>Contact Me</button>
        </div>
        <div className='col-6 mt-5'>
          <h2 style={{color:"#0D6EFD"}}>Profile Summary</h2>
          <p>Passionate Frontend Developer with skills in C++, JavaScript, React.js, TailwindCss, Git, and GitHub. Enjoys
            building simple and user- friendly web applications. Completed projects like full stack bloging site and TaskTimer.
            Quick learner, eager to improve and grow in a development field.</p>
            <h3 className='mb-3' style={{color:"#0D6EFD"}}>Technical Skills</h3>
            <div>
              <p className='fs-6 mb-1' style={{fontWeight:700}}>Languages : <span> C, C++, JavaScript</span></p>
              <p className='fs-6 mb-1' style={{fontWeight:700}}>Frontend :<span> JavaScript, TailwindCss, React.js, Html, Css, Bootstrap </span></p>
              <p className='fs-6 mb-1' style={{fontWeight:700}}>Backend: <span>Node.js, Express.js</span></p>
              <p className='fs-6 mb-1' style={{fontWeight:700}}>Database: <span>SQL, MonogoDB</span></p>
              <p className='fs-6 mb-1' style={{fontWeight:700}}>Developer Tools: <span>VS Code, Android Studio, DataGrip, Goland, Intellij Idea Ultimate</span></p>
              <p className='fs-6 mb-1' style={{fontWeight:700}}>Technologies/Frameworks: <span>Git, GitHub, ReactJS, Redux</span></p>

            </div>
        </div>
      </div>
    </div>
  )
}
