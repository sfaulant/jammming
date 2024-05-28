 // SEND GET REQUEST

 const clientId = '61e563aea2d342d2a82eb04a05d38caf';
 const redirectUri = 'http://localhost:3000/callback';
 const scopes = 'playlist-modify-public';

let accessToken;
let expiresIn;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return Promise.resolve(accessToken);
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      expiresIn = Number(expiresInMatch[1]);

            // Set token expiration
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            // Clear the parameters from the URL
            window.history.pushState('Access Token', null, '/');
            return Promise.resolve(accessToken);
          }

          const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
          window.location = accessUrl;
          
        }
      };

      export default Spotify;
