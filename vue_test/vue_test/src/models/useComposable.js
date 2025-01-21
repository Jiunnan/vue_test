// 組合函數 使用測試
import { ref, onMounted, onUnmounted, reactive } from "vue";
import axios from 'axios';

export function useMouse() {

    const x = ref(0)
    const y = ref(0)

    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return {
        x,
        y
    }
}

export function useTestCount(inputValue = 0) {

    const testCount = ref(inputValue)

    const incrementCount = () => {
        testCount.value++;
    };

    const reduceCount = () => {
        testCount.value--;
    };

    const doubleCount = () => {
        testCount.value *= 2;
    };

    const halfCount = () => {
        testCount.value /= 2;
    };

    return {
        testCount,
        incrementCount,
        reduceCount,
        doubleCount,
        halfCount
    }
}

export function useSlotOptionObject() {

    const options = ref([]);

    const optionAdd = (optionIndex, index, value) => {
        switch (optionIndex) {
            case 1: {
                console.log("JN - add new option_1:",value);
                const resOption = reactive({
                    option_1: value,
                    option_2: [],
                    option_3: [],
                });
                options.value.push(resOption);
            }
                break;
            case 2:
                options.value[index].option_2.push(value);
                break;
            case 3:
                options.value[index].option_3.push(value);
                break;
            default:
            break;
        }
        console.log("JN - options:", options);
    };

    const optionReduce = (optionIndex, index, removeIndex) => {
        switch (optionIndex) {
            case 1:
                options.value.splice(removeIndex, 1);
                break;
            case 2:
                options.value[index].option_2.splice(removeIndex, 1);
                break;
            case 3:
                options.value[index].option_3.splice(removeIndex, 1);
                break;
            default:
                break;
        }
    };

    return {
        options,
        optionAdd,
        optionReduce
    }
}

export function useTestAlert() {
    const callAlert = () => {
        window.alert("This is an alert test.")
        console.log('JN - call alert')
    };

    return {
        callAlert
    }
}

function axiosFunc() {
    const axiosClient = axios.create({
        baseURL: "https://test-service-lpak.onrender.com",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
        },
        timeout: 10000
    });

    const apiGET = async (path, params) => {
        try {
            const res = await axiosClient.get(path, {
                params,
            });
            return res.data;
        } catch (error) {
            console.log('JN - API GET error:', error)
            return Promise.reject(error.message);
        }
    }

    const apiPOST = async (path, jsonData) => {
        try {
            const res = await axiosClient.post(path, jsonData)
            return res.data
        } catch(error) {
            console.log('JN - API POST error:', error)
            return Promise.reject(error.message)
        }
    }

    return {
        apiGET,
        apiPOST
    }
}

function axiosFuncByLine() {
    const messageAPIToken = 'E05KiAPpGxIR0E5w2fKYjQy3zkRQHTKJK0+Stq/BgMgBbg/C7XDdhFRgnqas6XDJAnyCP2cE+Amvlv+3qeHiDFkKQa3cUz7nHfvOa7zqKNFPvGqUaHEodoaYGgoz23ul/QyxqgOAzM5sxymJpo91RAdB04t89/1O/w1cDnyilFU='
    const axiosClient = axios.create({
        baseURL: "https://api.line.me/v2/bot",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${messageAPIToken}`,
            'Access-Control-Allow-Origin': '*',
        },
        timeout: 10000
    });

    const apiGET = async (path, params) => {
        try {
            const res = await axiosClient.get(path, {
                params,
            });
            return res.data;
        } catch (error) {
            console.log('JN - API GET error:', error)
            return Promise.reject(error.message);
        }
    }

    const apiPOST = async (path, jsonData) => {
        try {
            const res = await axiosClient.post(path, jsonData)
            return res.data
        } catch(error) {
            console.log('JN - API POST error:', error)
            return Promise.reject(error.message)
        }
    }

    return {
        apiGET,
        apiPOST
    }
}

export function useUserAPI() {
    const {apiGET, apiPOST} = axiosFunc();
    var path = "/users"

    const getTestPOST = async(aaaValue) => {
        const jsonData = {
            "aaa": aaaValue,
        };
        const apiPath = path + "/test_post/"
        const res = await apiPOST(apiPath, jsonData);
        console.log('JN - api response:', res)
        return res;
    };

    return {
        getTestPOST,
    }
}

export function useUploadAPI() {
    const {apiGET, apiPOST} = axiosFunc();
    var path = "/upload"

    const getImageURL = async(baseString) => {
        const jsonData = {
            "base64Image": baseString,
        };
        const apiPath = path + "/base64ToImageURL/";
        const res = await apiPOST(apiPath, jsonData);
        console.log('JN - api response:', res)
        return res;
    }

    return {
        getImageURL,
    }
}

export function useLineSendMessageAPI() {
    const {apiGET, apiPOST} = axiosFunc();
    var path = '/lineMessage'

    const sendMessageAPI_Test_1 = async(userIdString, textString) => {
        const jsonData = {
            'userId': userIdString,
            'messageText': textString
        }
        const apiPath = path + '/send_message/'
        const res = await apiPOST(apiPath, jsonData);
        console.log('JN - Line api response:', res)
        return res;
    };

    return {
        sendMessageAPI_Test_1,
    }
}