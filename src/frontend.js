import React, { Component } from 'react';
import './index.css';
import {getComments} from './script.js';
import DetailComment from './detailcomment';
import CommentForm from './commentform';


class FrontEnd extends React.Component {
constructor(props) {
    super(props)
    this.state={
        commentsId : []
    }
}

async componentDidMount() {
    const items = await fetch('http://localhost:5000/comment')
                        .then((response)=> {return response.json();})
                        .then((myJson)=> {return myJson});
    const ids = this.mapCommentsId(items)
    this.setState({commentsId: ids})
}
mapCommentsId(data){
    const result = data.map((datum)=>{const wanted = datum._id; return wanted})
    return result
}

getAllComments=async()=>{
    const items = await getComments();
    const data = this.mapCommentsId(items);
    this.setState(
        {commentsId: data}
    )
}



  render() {
    return (
        <div class="form">
            <button class="button-1" onClick={this.getAllComments}>Get Comments</button>
            <ul>
                {this.state.commentsId.map((commentId, i)=>{
                    return <li key={i}>
                    <DetailComment 
                    _id={this.state.commentsId[i]}>
                    </DetailComment>
                    </li>
                })}
            </ul>
            <CommentForm></CommentForm>
        </div>
        
    );
  }
}

export default FrontEnd;