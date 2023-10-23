import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'


const buttonVariants = cva('rounded-full px-6 py-3 font-medium text-black transition-all duration-300', {
  variants: {
    variant: {
      primary: 'bg-primary hover:bg-primary-hover',
      secondary: 'bg-secondary hover:bg-secondary-hover',
      white: 'bg-white hover:bg-white/95'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  children: ReactNode
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
