import { defineComponent, ref } from "vue"
import { RouterLink, RouterView } from "vue-router"
export const App = defineComponent({
    setup() {

        //返回标签
        return () => (<>
            <header>导航
                <ul>
                    <li>
                        <RouterLink to="/">Go to Foo</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">Go to Bar</RouterLink>
                    </li>
                </ul>
            </header>
            <div>
                <RouterView />
            </div>
            <footer>页脚</footer>
        </>
        )
    }
})