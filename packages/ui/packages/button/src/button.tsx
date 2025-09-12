import {cva} from 'class-variance-authority';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';
import {defineComponent, type ExtractPropTypes, type PropType} from 'vue';

const buttonVariants = cva(
  'inline-flex rounded-lg items-center justify-center text-sm font-medium disabled:opacity-50',
  {
    variants: {
      type: {
        primary: 'bg-orange-300 text-primary border-primary',
        success: 'bg-success text-success border-success',
        danger: 'bg-danger text-danger border-danger',
      },
      size: {
        middle: 'h-10 px-4 py-2',
        small: 'h-8  px-2 py-2',
        large: 'h-12 px-6 py-2',
      },
    },
    defaultVariants: {
      type: 'primary',
      size: 'middle',
    },
  },
);

type Type = 'primary' | 'success' | 'danger'
type Size = 'middle' | 'small' | 'large'

export const buttonProps = {
    type: {
        type: String as PropType<Type>,
        default: () => 'primary',
    },
    size: {
        type: String as PropType<Size>,
        default: () => 'middle',
    },
};


export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export const BaseButton = defineComponent((props:ButtonProps) => {
    const {type, size} = props;

    return () => {
        return (
            <button class={twMerge(clsx(buttonVariants({
                type,
                size,
            })))}>内容</button>
        );
    };
}, {
    props: buttonProps,
});
