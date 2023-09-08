import { useState, useEffect } from "react";
import "./App.css";

function UserProfile({ current }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setError(null);
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${current}`)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("No user Data Found");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [current]);
  return (
    <div>
      {loading && <h1>LOADING.......</h1>}

      {error ? (
        <div>
          <h2>{error.message}</h2>
        </div>
      ) : (
        userData && (
          <div className="user-details">
            <h2>User Information</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </div>
        )
      )}
    </div>
  );
}

export default function UserDetails() {
  const [current, setCurrent] = useState(1);

  function incr() {
    setCurrent(current + 1);
  }

  function decr() {
    setCurrent(current - 1);
  }
  return (
    <div className="user-app">
      <div className="section">
        <h1 className="current">{current}</h1>
        <div className="user-profile">
          <UserProfile current={current} />
        </div>
        <div className="user-btn">
          <button onClick={incr}>Next User</button>
          <button onClick={decr}>Previous User</button>
        </div>
      </div>
    </div>
  );
}
