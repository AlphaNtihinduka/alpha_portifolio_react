import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Ambitious full-stack developer, a self-led learner and team player  <br></br>
                                with two years of experience in web developement.
                            </p>
                            <p className='slide-in-bottom'>
                                Currently looking for new opportunities in industry and willing<br></br>
                                to work on challenging and diverse projects with the latest technologies.
                            </p>
                            <p className='slide-in-bottom'>
                            In love with pair-programming, JavaScript, 
                            #React Js and Redux, Ruby, Ruby on rails, 
                            and remote work | Entrepreneur | Founder.
                            </p>
                            <p className='slide-in-bottom'>
                            I have got opportunity
                             to collaborate with other developers accross the globe and also learn soft skills
                             (communication, job interview, job application, and cross-culture).<br></br>

                                I have a passion for working collaboratively. I have contributed to different projects of software developers around the globe remotely. This has enhanced my skills in solving coding challenges, professional 
                                communication skills, and establishing a good working environment.
                                </p>
                            <div className='slide-in-bottom'>
                            The technology I've worked on :
                            <div className="text-red ls-2"><span className='text-success'>Languages: </span>JavaScript, React js, Ruby, Rails, MySQL, Postgresql. <br></br>
                            <span className='text-success'>Tools & Methods: </span>Git, GitHub, Rspec, TDD, Jest, Heroku, Render, Netflify, GitHub pages. <br></br>
                            <span className='text-success'>Professional: </span>Remote Pair programming, Team work, Mentoring. <br></br> </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About