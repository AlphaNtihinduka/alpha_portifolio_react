import React, { Fragment } from 'react'
import {SiRuby, SiRubyonrails, SiJavascript, SiReact,SiHtml5,SiCss3,SiBootstrap, SiSass, SiPostgresql,SiGit,SiGithub,SiSwagger} from 'react-icons/si'
function Skills() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-medium text-red slide-in-top">Technologies I know</h1>
                            <hr></hr>

                            <div className="row my-2">
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiRuby className='fs-5'/> Ruby</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiRubyonrails className='fs-5'/> Ruby on Rails</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiJavascript className='fs-5'/> JavaScript</span>
                                </div>
        
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiReact className='fs-5'/> React</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiHtml5 className='fs-5'/> Html</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiCss3 className='fs-5'/> Css</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiBootstrap className='fs-5'/> Bootstrap</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiSass className='fs-5'/> Sass</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiPostgresql className='fs-5'/> Postgresql</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiGit className='fs-5'/> Git</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiGithub className='fs-5'/> GitHub</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-1 mw-fc'>
                                    <span><SiSwagger className='fs-5'/> Swagger</span>
                                </div>
                                
                            </div>

                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/Development-pana.png" alt="..."></img>
                    </div>
                </div>
            </div>
            
        </div>
    </Fragment>
  )
}

export default Skills