import axios from "axios";

const client = axios.create();

/*

// api 주소를 다른 곳으로 사용함
client.defaults.baseURL = "https://external-api-server.com/"

// 인터셉터 설정
client.intercepter.response.use(
    response => {
        // 요청 성공 시 특정 작업 수행
        return response;
    },
    error => {
        // 요청 실패 시 특정 작업 수행
        return Promise.reject(error);
    }
)

*/

export default client;