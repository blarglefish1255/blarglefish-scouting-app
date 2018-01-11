import request from 'superagent'

export default query => {
  return theBlueAllianceApiGet({
    endpoint: query.endpoint,
    params: query.params
  }).then(response => response.body)
}

function theBlueAllianceApiGet ({ endpoint, params }) {
  const accessToken =
    'XhWYq5QxZ5f5SiLQpyoturaSdAYlZup3OjvjVSYpfAjHuEXnXSTB5St0wfoOzX76'
  return request
    .get(`https://www.thebluealliance.com/api/v3/${endpoint}`)
    .query(params)
    .set({
      'X-TBA-Auth-Key': accessToken
    })
    .then(response => {
      return response
    })
}
