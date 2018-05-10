import httpPromise from 'utils/zjl_Axios'

export const getListUserinfo = (obj) => httpPromise({
    url: "/zjl_test/com/had-login/userInfo/getListUserinfo",
    method: 'post',
    headers: { 'session_id': 'session_id', access_token: '06332fff92be4fae9765923877a86f91', },
    data: {
        pageSize: obj.pageSize,
        pageNumber: obj.pageNumber
    }
}, obj.msg);