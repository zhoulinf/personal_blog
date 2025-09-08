import {defineComponent} from 'vue';
import type {InputProps} from './input.type';

export default defineComponent<InputProps>({
  name: 'BaseInput',
  props: {
    name: {
        type: String,
        default: '',
    },
  },
  render() {
    return (
      <div>
        <input></input>
      </div>
    );
  },
});