interface IButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  className,
  children,
  ...rest
}: IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-text text-white py-2 px-4 rounded-md ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
