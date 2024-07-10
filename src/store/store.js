
import { createStore } from "vuex"
import students from "./module/students"
import user from "./module/user"


const store = createStore({
    modules: {
        students,
        user
    }
})


export default store