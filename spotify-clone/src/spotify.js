// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "9982d5b3cd4a432ca3062dd804e192eb";

const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

/**

http://localhost:3000/#access_token=BQDqItvNmNcdl9wOYT5PpwCq5G8IPUs8cvsx88RW6WFRT0ITPPeDDJ_SWX6blkBrS7TieJwUXbWsFE1q9dO4meOIlgUUAZXJGDgDLzK1IUC8zTVAEtvbTUvRl10axrHQMWiLMOr7VS_UyF7uT_bp2RigPrVM1Bd7fj9ZtnZ9I9yy4gGM&token_type=Bearer&expires_in=3600

 */
