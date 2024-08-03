
interface IButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button = ({className, children}:IButtonProps) => {
  return (
    <button className={`bg-text text-white py-2 px-4 rounded-md ${className}`}>{children}</button>
  )
}

export default Button