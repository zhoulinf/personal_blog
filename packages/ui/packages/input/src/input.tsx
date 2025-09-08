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
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
        <input />
      </div>
    );
  },
});