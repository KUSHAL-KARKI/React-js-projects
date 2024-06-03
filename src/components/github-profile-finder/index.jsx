import React, { useEffect, useState } from "react";
import User from "./user";
import "./github.css";


const GithubProfileFinder = () => {
  const [username, setUsername] = useState("KUSHAL-KARKI");
  const [userData, setUserData] = useState(null);
  const [loading,setLoading] = useState(true);


async function fetchGithubUserData() {
    const res =await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    if(data){
      setUserData(data);
      setLoading(false);

    }
}
  function handleSubmit() {
    fetchGithubUserData()
  };
  useEffect(()=>{
    fetchGithubUserData()
  },[]);
  if(loading){
    return <h1>Loading data please wait...</h1>;
  }

  return (
    <div className="github-container">
      <div className="github-input">
        <input
          type="text"
          name="search-by-username"
          placeholder="Enter username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <User user={userData} /> : null 
      }
    </div>
  );
};

export default GithubProfileFinder;
