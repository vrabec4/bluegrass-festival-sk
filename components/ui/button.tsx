import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111b] focus-visible:ring-[#f3b026]',
  {
    variants: {
      variant: {
        default: 'bg-[#f3b026] text-[#07111b] hover:bg-[#ffbf47]',
        secondary: 'bg-[#164859] text-[#fcefdd] hover:bg-[#1f6277]',
        outline: 'border border-[#f3b026] text-[#f3b026] hover:bg-[#f3b026] hover:text-[#07111b]',
        ghost: 'text-[#fcefdd] hover:bg-white/10',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-12 px-7 text-base',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
