import { useState, useEffect, FC } from "react";
import { Auth } from "aws-amplify";

const Header: FC = () => {
  const [user, setUser] = useState({
    username: "",
  });

  useEffect(() => {
    // Accessing the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) =>
        setUser({
          username: "",
        })
      );
  }, []);
  return (
    <header>
      {user && user.username}{" "}
      <button
        onClick={() => {
          Auth.signOut();
        }}
      >
        Sign out
      </button>
    </header>
  );
};

export default Header;
