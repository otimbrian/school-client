
import { createStore } from "vuex"
import students from "./module/students"


const store = createStore({
    modules: {
        students
    }
})


export default store