import {defineComponent, type ExtractPropTypes} from 'vue';

const inputProps = {
  name: {
    type: String,
    default: '',
  },
};


export type InputProps = ExtractPropTypes<typeof inputProps>

export default defineComponent({
  name: 'BaseInput',
  props: inputProps,
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