import React, { useEffect, useRef, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import LoginForm from "./LoginForm";
import PostList from "./PostList";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
        console.log(user, 'from the app')
        });
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      {/* <Switch>
        <Route exact path="/">
          <LoginForm></LoginForm>
        </Route>
       
      </Switch> */}
    <PostList user={user}/>
    </>
  );
}

export default App;