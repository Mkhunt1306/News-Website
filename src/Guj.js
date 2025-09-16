import React, { Component } from 'react';
import Newsitem2 from "./Newsitem2";
import Spinner from './Spinner';



  
export class Guj extends Component {
  
  constructor(){
    super();
    console.log("Working");
    this.state={
      news: [], 
      loading :false,
      page : 1
    }
  }
  async componentDidMount() {
    let url =`https://api.worldnewsapi.com/search-news?source-country=in&language=gu&api-key=909ae9e1c8ea41169965a536ef5a4539&page=1&pageSize=${this.props.pageSize}&q=ગુજરાત`;
     this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({news: parseData.news, 
      available:parseData.available,
      loading :false
    })
  }

   handlepreclick = async()=>{
      let url =`https://api.worldnewsapi.com/search-news?source-country=in&language=gu&api-key=909ae9e1c8ea41169965a536ef5a4539&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&q=ગુજરાત`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      news: parseData.news,
       loading :false
    })
  }
  

 
  handlenextclick = async ()=>{
     if(this.state.page +1 > Math.ceil(this.state.available/this.props.pageSize)){

    }
    else{
       let url =`https://api.worldnewsapi.com/search-news?source-country=in&language=gu&api-key=909ae9e1c8ea41169965a536ef5a4539&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&q=ગુજરાત`;
       this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      news: parseData.news,
      loading :false
    })
    
  }
  }

  render() {
    return (
        <>
      <div className='container my-4 '>
            <h2 className='fw-bold text-center my-5 '>ઝટપટ સમાચાર - Top Headlines</h2>
            {this.state.loading && <Spinner/>}
            <div className="row  justify-content-center"> 
                  {!this.state.loading && this.state.news.map((element) =>{
                  return <div className="col-12 col-sm-6 col-md-4" key={element.url}>
                    <Newsitem2 title={element.title? element.title.slice(0 , 100):""} description={element.text?element.text.slice(0 , 88):""} imageurl= {element.image} newsurl={element.url} author={element.author} date={element.publish_date} />
                  </div>
                  })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <=1} type='button' className='btn btn-danger'  onClick={this.handlepreclick}><i className="fa-solid fa-backward"></i> Pervious</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.available/this.props.pageSize)} type='button' className='btn btn-danger' onClick={this.handlenextclick}>Next <i className="fa-solid fa-forward"></i></button>
            </div>
      </div>

      </>
    )
  }
}

export default Guj
