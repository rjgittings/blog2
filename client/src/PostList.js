import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, Error, FormField, Input, Label, Textarea } from "./styles";
import Post from "./Post"


function PostList({user}) {

    const [posts, setPosts] = useState([]);
    const [change, setChange] = useState(false);
    const [userId, setUserId] = useState("");

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");



    useEffect(() => {
        fetch("/posts")
            .then((r) => r.json())
            .then((data) => setPosts(data));
    }, [change]);
    console.log(posts)


 

    const handlePostSubmit = (e) =>{
        e.preventDefault();
        console.log(title, body)
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                body: body,
                user_id: user.id

            }),
        })
            .then((data) => data.json())
            .then(data => setPosts([...posts, data]));

        setTitle("");
        setBody("");
    }


    return (
        
        <Wrapper>
       
            <h1>    Latest Posts</h1>
            <div>
            {posts.map((post) =>( <Post 
    
            post={post}
            title={post.title}
            setPosts={setPosts}
            posts={posts}
            body={post.body}
            user = {user}
            change = {change}
            setChange = {setChange}
            comments = {post.comments}
            />))}
            </div>

            <div>
                <form>
                    <WrapperChild>
                        <h2>Create Post</h2>
                        <form id="create-new-form">
                            <FormField>
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </FormField>
                            <FormField>
                                <Label htmlFor="Post">Post</Label>
                                <Textarea
                                    id="body"
                                    rows="10"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </FormField>
                            <Button color="primary" type="submit" onClick={handlePostSubmit}>
                                {"Make it Known to Everyone"}
                            </Button>
                         
                        </form>
                    </WrapperChild>

                </form>
            </div>
        
        </Wrapper>
        
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default PostList;