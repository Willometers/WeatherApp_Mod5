import { useEffect, useState } from 'react';

function SpotifyButton() {

    const CLIENT_ID = "5bb72472bc7343809bce27b3ad7b7da1"
    const REDIRECT_URI = "http://localhost:3000/callback"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
  
    const [token, setToken] = useState("")
  
    useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")
  
      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
  
          window.location.hash = ""
          window.localStorage.setItem("token", token)
          // window.sessionStorage.setItem("hi", "hello")
      }
  
      setToken(token)
  
    }, [])
  
    const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
    }
  
    return (
  
      <div className="App">
        <header className="App-header">
          {!token ?
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a> : <button onClick={logout}>Logout</button>}      </header>
      </div>
  
    );


}

export default SpotifyButton