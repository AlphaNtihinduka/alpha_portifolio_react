import React from 'react';

function About() {
  return (
    <>
      <div className="col py-3 d-flex align-items-center about-image">

        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">About me</h1>
                <hr />
                <p className="slide-in-bottom">
                  HI, I am an ambitious full-stack developer, a self-led learner,
                  and a team player with five years of experience in the IT field,
                  two of which were spent in software development,
                  both in solo and collaborative environments.
                </p>
                <p className="slide-in-bottom">
                  I am currently looking for new opportunities in the industry and
                  am willing to work on challenging and diverse
                  projects using the latest technologies, frameworks, and languages.
                </p>
                <p className="slide-in-bottom">
                  Reach out to me if you need a project built. Check out some of my technologies,
                  frameworks, and languages I use to build projects below.
                </p>
                <div className="slide-in-bottom">
                  The technology I have worked on is listed below.
                  <div className="text-red ls-2">
                    <span className="text-success">Languages: </span>
                    JavaScript, React.js, Ruby, Rails, MySQL, and PostgreSQL.
                    {' '}
                    <br />
                    <span className="text-success">Tools and Methods: </span>
                    Git, GitHub, Rspec, TDD, Jest, Heroku, Render, Netlify, and GitHub Pages.
                    <br />
                    <span className="text-success">Professional: </span>
                    remote pair programming, team work, and mentoring.
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid" src="../images/nomad-amico.png" alt="..." />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
