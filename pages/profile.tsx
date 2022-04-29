import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function Profile(props: any) {
  const [user, setUser] = useState({
    username: "",
  });

  useEffect(() => {
    // Accessing the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log("User: ", user);
        setUser(user);
      })
      .catch((err) =>
        setUser({
          username: "",
        })
      );
  }, []);

  return (
    <div>
      <div>
        <header>
          {user && user.username} <button onClick={props.signOut}>Sign out</button>
        </header>
        <div>Profile page!</div>
        {/* <Notes /> */}
      </div>
    </div>
  );
}

export default withAuthenticator(Profile);
