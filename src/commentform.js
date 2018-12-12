import React from 'react';
import { updateComment, newComment, deleteComment} from './script';


export default class CommentForm extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props._id)
        if(this.props._id === undefined){
        this.state={
            _id: this.props.my_id,
            name: this.props.myName,
            comment: this.props.myComment
        }
        }else {
            this.state={
                _id: '',
                name: '',
                comment: ''
            }
        }
    }
    //lets you write in new name and shows on the side of the bar
    updateName=(event)=>{
        this.setState({name: event.target.value});
    }
    //displays updated comment text on side of bar
    updateComment1=(event)=>{
        this.setState({comment: event.target.value});
        console.log(this.state.comment)
    }
    //should submit updated comment *ask nicole*
    handleSubmit=(event)=>{   
        console.log(this.props._id)
        event.preventDefault();
        if(this.props.my_id){
            this.updateComment2(this.state)
        }else{
            this.submitNew(this.state)
        }
    }
    //submits a new comment and name *needs its own button*
    submitNew=()=>{
        const newCommentinfo = newComment(this.state)
        console.log(newCommentinfo)
        return newCommentinfo 
    }
    //shows promise is rendering but does not fulfill promise or post the updated comment
    updateComment2=()=>{
        const newCommentinfo = updateComment(this.state)
        console.log(newCommentinfo)
        return newCommentinfo
    }
    deleteComment=()=>{
        // event.preventDefault();
        const id= this.state._id;
        const remove = deleteComment(id)
        return remove
    }


    render(){
        console.log (this.state.name)
        return(
            <form class="form" onSubmit={this.handleSubmit}>
                {this.state._id}
                <label>Name</label>
                <input 
                    class="input"
                    defaultValue={this.state.name} 
                    onChange={this.updateName}
                    />
                {this.state.name}
                <br/>
                <label>Comment</label>
                <input 
                    class="input"
                    defaultValue={this.state.comment} 
                    onChange={this.updateComment1}
                    />
                {this.state.comment}
                <br/>
                <button class="button-2" type="submit">Update</button> 
                <button class="button-delete" onClick={this.deleteComment}>Delete</button>
                {/* <hr/> */}
                
            </form>
        )
    }
}