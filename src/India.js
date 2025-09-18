import React, { Component } from 'react';
import Newsitem from "./Newsitem";
import Spinner from './Spinner';


export class India extends Component {
  
  constructor(props){
    super(props);
    console.log("Working");
    this.state={
      articles: [], 
      loading :false,
      page : 1
    }
    
  }
  async componentDidMount() {
    this.props.updateProgress(10);
    let url =`https://newsapi.org/v2/everything?q=india&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
    let data = await fetch(url);
    this.props.updateProgress(60);
    let parseData = await data.json();
     this.props.updateProgress(80);
    this.setState({articles: parseData.articles, 
      totalResults:parseData.totalResults,
      loading :false
    })
    this.props.updateProgress(100);
  }

   handlepreclick = async()=>{
    this.props.updateProgress(10);
      let url =`https://newsapi.org/v2/everything?q=india&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    this.props.updateProgress(60);
    let parseData = await data.json();
     this.props.updateProgress(80);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
       loading :false
    })
    this.props.updateProgress(100);
  }
  

 
  handlenextclick = async ()=>{
     if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
      this.props.updateProgress(10);
       let url =`https://newsapi.org/v2/everything?q=india&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    

       this.setState({loading:true});
    let data = await fetch(url);
    this.props.updateProgress(60);
    let parseData = await data.json();
    this.props.updateProgress(80);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading :false
    })
    this.props.updateProgress(100);
  }
  }

  render() {
    return (
        <>
      <div className='container my-4 '>
            <h2 className='fw-bold text-center my-5 '>ઝટપટ સમાચાર - Top Headlines</h2>
            {this.state.loading && <Spinner/>}
            <div className="row  justify-content-center"> 
                  {!this.state.loading && this.state.articles.map((element) =>{
                  return <div className="col-12 col-sm-6 col-md-4" key={element.url}>
                    <Newsitem title={element.title? element.title.slice(0 , 130):""} description={element.description?element.description.slice(0 , 88):""} imageurl= {element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
                  })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <=1} type='button' className='btn btn-danger'  onClick={this.handlepreclick}><i className="fa-solid fa-backward"></i> Pervious</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-danger' onClick={this.handlenextclick}>Next <i className="fa-solid fa-forward"></i></button>
            </div>
      </div>

      </>
    )
  }
}

export default India
