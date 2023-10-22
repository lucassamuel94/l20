import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'


const buttonVariants = cva('rounded-full px-6 py-3 font-medium text-black', {
  variants: {
    variant: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      white: 'bg-white'
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
