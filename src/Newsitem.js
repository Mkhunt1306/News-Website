import React, { Component } from 'react';
import "./App.css";


export class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsurl,author,date,source} = this.props;
    return (
      <>
            <div className="card px-0 mb-4"  style={{height: 'auto'}}>  
              <div class="d-flex justify-content-end end-0 position-absolute">
            <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
                <img src={imageurl && imageurl.trim() !== "" ? imageurl : "/img8.jpg"} className="card-img-top" alt="..." style={{height: '230px'}}/>

                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <div className="card-text d-flex justify-content-start mb-1 ">
                      <small className="text-muted">Authoer: {!author?"Unknown" : author}</small>
                      </div>
                      <div className="card-text">
                         <small className="text-muted d-flex justify-content-end ">{new Date(date).toUTCString()}</small>
                      </div>
                     
                    <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-primary ">Read More</a>
                </div>
            </div>
          
      </>
    )
  }
}

export default Newsitem
