const api = "https://api.github.com"

const headers = {
    'Accept': 'application/json',
  }

export const searchUsersByFullname = (query) =>
  fetch(`${api}/search/users?q=fullname:${query}`)
    .then(res => res.json())

export const searchUsersByLogin = (query) =>
  fetch(`${api}/search/users?q=user:${query}`)
    .then(res => res.json())

export const getUserData = (loginUser) =>
  fetch(`${api}/users/${loginUser}`, { headers })
    .then(res => res.json())

export const getUserReporStarred = (loginUser) =>
  fetch(`${api}/users/${loginUser}/starred`, { headers })
    .then(res => res.json())