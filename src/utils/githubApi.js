const api = "https://api.github.com"

const headers = {
    'Accept': 'application/json',
  }

export const searchUsers = (query) =>
  fetch(`${api}/search/users?q=fullname:${query}+user:${query}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ query })
  }).then(res => res.json())

export const getUserData = (loginUser) =>
  fetch(`${api}/users/${loginUser}`, { headers })
    .then(res => res.json())

export const getUserReporStarred = (loginUser) =>
  fetch(`${api}/users/${loginUser}/starred`, { headers })
    .then(res => res.json())