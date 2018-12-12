import React, {Fragment} from 'react';
import CommentForm from './commentform';
import {deleteComment, getCommentsByID} from './script.js';

export default class DetailComment extends React.Component {
    constructor(props){
        super(props)
        this.state={
            _id: this.props._id,
            name: '',
            comment: '',
            edit: false
        }
    }
    //should delete comment *ask nicole*
    removeComment=(event)=>{
        // event.preventDefault();
        console.log(this.state._id)
        const id= this.state._id
        
        const remove = deleteComment(id)
        console.log(remove)
    }

    async componentDidMount(){
        const myId = this.props._id
        const comment = await getCommentsByID(myId)
        this.setState({
            _id: this.props._id,
            name: comment.name,
            comment: comment.comment
        })
    }
    editClick=(e)=>{
        e.preventDefault();
        this.setState({edit: !this.state.edit})
    }

    render() {
        console.log(this.state.name)
        return (
            <div class="comments">
                <span>
                <label>ID:</label>
                <br/>
                {this.props._id}
                <br/>
                <label>Name:</label>
                <br/>
                {this.state.name}
                <br/>
                <label>Comment:</label>
                <br/>
                {this.state.comment} 
                {/* change commenttext to comment */}
                <br/>
                <br/>
                        <button class="button-edit" onClick={this.editClick}>Edit</button>
                        {this.state.edit ?
                            <CommentForm 
                            my_id={this.state._id} 
                            myName={this.state.name}
                            myComment={this.state.comment}
                        ></CommentForm> : 
                        <Fragment></Fragment>
                        }
                <hr/>
                </span>
            </div>
        )
    }
}