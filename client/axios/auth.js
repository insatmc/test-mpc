import Auth from 'j-toker';

const requestGetProfileData = (callback) => {
  // Get data for this user
  axios.get("/profiles/index", {
    headers: Auth.retrieveData('authHeaders')
  }).then((res) =>{
    callback(res)
  })
}
