import { React } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import Popup from 'reactjs-popup';
import ProjectsDescription from './projects/ProjectDescription';
import './mywork.css';

function MyWork() {
  return (
    <>
      <div className="col p-4">
        <div className="p-4 slide-in-top">

          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">The projects I have Built</h2>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4 text-center my-2">

              <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../portfolio-images/budget-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/budget-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/budget-3.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/budget-4.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/budget-5.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Budget App</h5>
              <Popup trigger={<button type="button" className="description-btn"> Description</button>} position="right center">
                <div className="popup">{ProjectsDescription[0]}</div>
              </Popup>
              <div className="row d-flex justify-content-center">
                <a href="https://budget-app-a3.onrender.com/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                  <BsLaptop />
                  {' '}
                  Watch Live
                </a>
                <a href="https://github.com/AlphaNtihinduka/budget_app" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                  {' '}
                  Source Code
                </a>
              </div>

            </div>
            <div className="col-md-4 text-center my-2">

              <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../portfolio-images/covid-1.png" className="d-block w-100 h-50" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/covid-2.png" className="d-block w-100 h-50" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/covid-3.png" className="d-block w-100 h-50" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div>
                <h5 className="ff-jose my-1">Covid Tracker</h5>
                <Popup trigger={<button type="button" className="description-btn"> Description</button>} position="right center">
                  <div className="popup">{ProjectsDescription[1]}</div>
                </Popup>
                <div className="row d-flex justify-content-center">
                  <a href="https://amazing-starship-cbd105.netlify.app/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                    <BsLaptop />
                    {' '}
                    Watch Live
                  </a>
                  <a href="https://github.com/AlphaNtihinduka/covid-tracker" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                    <AiFillGithub />
                    {' '}
                    Source Code
                  </a>
                </div>
              </div>

            </div>
            <div className="col-md-4 text-center my-2">

              <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../portfolio-images/movie-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/movie-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/movie-3.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/movie-4.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Movie Browser App</h5>
              <Popup trigger={<button type="button" className="description-btn"> Description</button>} position="right center">
                <div className="popup">{ProjectsDescription[2]}</div>
              </Popup>
              <div className="row d-flex justify-content-center">
                <a href="https://alphantihinduka.github.io/Browse-movie-app/#" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                  <BsLaptop />
                  {' '}
                  Watch Live
                </a>
                <a href="https://github.com/AlphaNtihinduka/Browse-movie-app" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                  {' '}
                  Source Code
                </a>
              </div>

            </div>
            <div className="col-md-4 text-center my-2">

              <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../portfolio-images/conference-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/conference-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/conference-3.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/conference-4.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Conference</h5>
              <Popup trigger={<button type="button" className="description-btn"> Description</button>} position="right center">
                <div className="popup">{ProjectsDescription[3]}</div>
              </Popup>
              <div className="row d-flex justify-content-center">
                <a href="https://spontaneous-chaja-39a421.netlify.app/about.html#" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                  <BsLaptop />
                  {' '}
                  Watch Live
                </a>
                <a href="https://github.com/AlphaNtihinduka/Conference-capstone1" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                  {' '}
                  Source Code
                </a>
              </div>

            </div>
            <div className="col-md-4 text-center my-2">

              <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../portfolio-images/food-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/food-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/food-3.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/food-4.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">YUFAT organisation</h5>
              <Popup trigger={<button type="button" className="description-btn"> Description</button>} position="right center">
                <div className="popup">{ProjectsDescription[4]}</div>
              </Popup>
              <div className="row d-flex justify-content-center">
                <a href="https://github.com/AlphaNtihinduka/food_reciepe" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                  {' '}
                  Source Code
                </a>
              </div>

            </div>
            <div className="col-md-4 text-center my-2">

              <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="../portfolio-images/wifi-1.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/wifi-2.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/wifi-3.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="../portfolio-images/wifi-4.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                  <GrPrevious />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                  <GrNext />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h5 className="ff-jose my-1">Wifi company website</h5>
              <Popup trigger={<button type="button" className="description-btn"> Description</button>} position="right center">
                <div className="popup">{ProjectsDescription[5]}</div>
              </Popup>
              <div className="row d-flex justify-content-center">
                <a href="https://www.brittnconnect.com" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                  <BsLaptop />
                  {' '}
                  Watch Live
                </a>
                <a href="https://github.com/AlphaNtihinduka/Brittnconnect" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                  {' '}
                  Source Code
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default MyWork;
