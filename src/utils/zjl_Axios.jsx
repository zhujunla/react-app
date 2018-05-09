import React, { Component } from 'react';
import { message } from 'antd';

// import {isloadingStore} from "@/utils/isLoading"
import axios from 'axios'

message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
});


export default function httpPromise(options,loading) {
    message.loading(loading||'处理中...', 0);
    var promise = new Promise((resolve, reject) => {
        var httpRequest = axios(options).then(function (response) {
            // isloadingStore.dispatch({type: 'SHOW_HIDEING'})
            message.destroy();
            var _Data = response.data;
            var code = _Data.code;
            var msg = _Data.msg;
            if (code === 1 || code === -8) {
                resolve(_Data);
                if(code === -8){
                    message.error(msg, 1)
                }
            } else if (code === -1) {
                message.error(msg, 1, function () {
                    window.location.href = '#/login'
                })
            } else {
                reject(_Data);
                message.error(msg, 1)
            }

        }).catch(function (error) {
            message.destroy();
            reject(error);
            message.error('网络错误！', 1)
        })
    })

    return promise;
}
