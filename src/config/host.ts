/**
 * @description host 配置
 * @author 双越
 */

import { isDevNoMock, isPrd, isPrdDev } from '../utils/env'

// API host
let APIHost = '' // 默认为本地运行 mock
if (isDevNoMock) APIHost = 'http://localhost:3003' // 本地，不用 mock
if (isPrdDev) APIHost = 'http://82.157.160.85:8090' // 测试机
if (isPrd) APIHost = '' // 线上环境，用当前域名即可

// h5 host
let H5Host = 'http://82.157.160.85:8082'
if (isPrd) H5Host = 'http://82.157.160.85:8090'

// 统计接口的 host
let StatHost = 'http://82.157.160.85:8090'
if (isPrd) StatHost = 'http://82.157.160.85:8090' // 线上环境

export { APIHost, H5Host, StatHost }
