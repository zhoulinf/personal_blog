import { defineComponent } from "vue";
import type {InputProps} from './input.type'

export default defineComponent<InputProps>({
    name: 'Input',
    props:{
        name:String,
    },
    render(){
        return (
            <div>
                <input></input>
            </div>
        )
    }
})