import { defineComponent, ref } from "vue"

export const App = defineComponent({
    setup(){
        //声明函数和变量
        const count = ref(0)
        const onClick = () =>{
            count.value +=1
        }
        //返回标签
        return () => (<>
        <div>{count.value}</div>
        <button onClick={onClick}>+1</button>
        
        </>
        )
    }
})