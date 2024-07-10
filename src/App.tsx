import { defineComponent, ref } from "vue"
import {RouterLink, RouterView} from "vue-router"
export const App = defineComponent({
    setup(){
        
        //返回标签
        return () => (<>
        <RouterView />
        <RouterLink to="/">Go to Foo</RouterLink>
        <RouterLink to="/about">Go to Bar</RouterLink>
        
        </>
        )
    }
})