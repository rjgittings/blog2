import { Box, Button, Label, Input, FormField } from "./styles";
import styled from "styled-components";
import { useEffect, useState } from "react";

function Post({title, body, setPosts, posts, post, user, change, setChange, comments}){

const [userComments, setUserComments] = useState("")
const [text, setText] = useState("")

    const { id } = post;
    const [color, setColor] = useState()

    function handleDelete(){
        fetch(`/posts/${id}`, {
            method: "DELETE",
        }) 
        .then(() => setChange(!change)) 

        } 


    useEffect(()=>{
        if (post.user_id === user.id) {
            setColor({ backgroundColor: 'lightgrey' })
        } else {
            setColor()
        }
    },[])

    const postComment = (e) => {
        e.preventDefault();
        console.log(e.target.value, "from here")


        // fetch("/comments", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         text: text
        //     }),
        // })
        //     .then((data) => data.json())
        //     .then(data => setComments([...comments, comment]));

        setText("");
    }
    

    return (
        <div >

            <Box style={ color }>
            <h1>{title}</h1>
            <p>by: {post.user.username}</p>
            <div>{body}</div>
            <br/>
                <form onSubmit={postComment}>
                    <FormField>
                        <Label htmlFor="title">Comment</Label>
                        <Input
                            type="text"
                            id="title"
                            key="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {"  Comment  "}
                        </Button>
                    </FormField>
                </form>
            <br/>
                {post.user_id === user.id ? <Button onClick ={handleDelete}>
                    Delete Post
                </Button> : ""}
    
            </Box>
            
            <br/>
        </div>

     
)

}
const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default Post