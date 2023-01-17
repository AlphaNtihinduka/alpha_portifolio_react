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
                  Hi, I am ambitious full-stack developer, a self-led learner and team player
                  with five years of working experience in IT field, 2 of software developement
                  in both solo and collaborative environments.
                </p>
                <p className="slide-in-bottom">
                  I am currently looking for new opportunities in industry and willing
                  to work on challenging and diverse projects with the latest technologies,
                  frameworks and languages.
                </p>
                <p className="slide-in-bottom">
                  Reach out to me if you need a project built. Check out some of my technologies,
                  frameworks, and languages i use to build projects below.
                </p>
                <div className="slide-in-bottom">
                  The technology I have worked on
                  <div className="text-red ls-2">
                    <span className="text-success">Languages: </span>
                    JavaScript, React js, Ruby, Rails, MySQL, Postgresql.
                    {' '}
                    <br />
                    <span className="text-success">Tools & Methods: </span>
                    Git, GitHub, Rspec, TDD, Jest, Heroku, Render, Netflify, GitHub pages.
                    <br />
                    <span className="text-success">Professional: </span>
                    Remote Pair programming, Team work, Mentoring.
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
