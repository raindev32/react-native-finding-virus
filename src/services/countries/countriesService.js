import request from 'utils/request'

const apiGetCountries = async (data) => {
  return request({
    url: '/countries',
    data,
    method: 'get'
  })
}

export {
  apiGetCountries
}
