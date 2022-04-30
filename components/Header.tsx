import { useState, useEffect, FC } from "react";
import { Auth } from "aws-amplify";
import Link from "next/link";

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
    <div>
      <header className="bg-slate-900 p-4 text-white flex justify-between mb-4">
        Welcome {user && user.username}{" "}
        <button
          onClick={() => {
            Auth.signOut();
          }}
        >
          Sign out
        </button>
      </header>
    </div>
  );
};

export default Header;
