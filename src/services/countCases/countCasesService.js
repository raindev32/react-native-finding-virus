import request from 'utils/request'

const apiGetCountCases = async (data) => {
  return request({
    url: `/countries/${data.country}/confirmed`,
    data,
    method: 'get'
  })
}

export {
  apiGetCountCases
}
