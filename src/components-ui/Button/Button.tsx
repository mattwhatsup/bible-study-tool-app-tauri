import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  ReactElement,
} from 'react'

type size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'

interface _ButtonProps {
  rounded?: size | 'full' | 'none'
  purpose?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'custom'
  size?: size
  isBlock?: boolean
  shadowless?: boolean
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
}

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  _ButtonProps

const Button: FunctionComponent<ButtonProps> = ({
  purpose = 'custom',
  size = 'base',
  rounded = 'none',
  isBlock = false,
  shadowless = false,
  className,
  children,
  icon,
  iconPosition = 'left',
  ...props
}) => {
  let purposeClassName = {
    primary:
      'bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 text-white',
    secondary:
      'bg-secondary hover:bg-secondary-600 focus:bg-secondary-600 active:bg-secondary-700 text-white',
    success:
      'bg-success hover:bg-success-600 focus:bg-success-600 active:bg-success-700 text-white',
    danger:
      'bg-danger hover:bg-danger-600 focus:bg-danger-600 active:bg-danger-700 text-white',
    warning:
      'bg-warning hover:bg-warning-600 focus:bg-warning-600 active:bg-warning-700 text-black',
    info: 'bg-info hover:bg-info-600 focus:bg-info-600 active:bg-info-700 text-black',
    light:
      'bg-light hover:bg-light-600 focus:bg-light-600 active:bg-light-700 text-black',
    dark: 'bg-dark hover:bg-dark-600 focus:bg-dark-600 active:bg-dark-700 text-white',
    link: 'bg-transparent text-black',
    custom: '',
  }[purpose]

  let sizeClassName = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  }[size]

  let roundedClassName = {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    base: 'rounded-base',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    '4xl': 'rounded-4xl',
    '5xl': 'rounded-5xl',
    '6xl': 'rounded-6xl',
    '7xl': 'rounded-7xl',
    '8xl': 'rounded-8xl',
    '9xl': 'rounded-9xl',
    full: 'rounded-full',
    none: '',
  }[rounded]

  return (
    <>
      <button
        type="button"
        className={`
        inline-flex items-center justify-center
        ${isBlock ? 'w-full' : 'inline-block'}
        ${
          purpose === 'link'
            ? `
                text-blue-600 background-transparent
                ${sizeClassName} uppercase
                px-3 py-1 outline-none focus:outline-none mr-1 mb-1  hover:underline
              `
            : `
                ${roundedClassName}
                ${purposeClassName}
                px-6 pb-2 pt-2.5
                ${sizeClassName} font-medium uppercase leading-normal
                transition duration-150 ease-in-out

                ${
                  shadowless
                    ? ``
                    : `
                      shadow-[0_4px_9px_-4px_#3b71ca]
                      hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                      focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
                      focus:outline-none focus:ring-0
                      active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]

                      dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
                      dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                      dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                      dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                    `
                }

                ${className || ''}
              `
        }`}
        {...props}
      >
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </button>
    </>
  )
}

export default Button
