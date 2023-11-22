import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "white-pink" | "pink-white" | "white-orange" | "white-green";
  className?: string;
}

const Button = ({ children, theme = "white-pink", className, ...rest }: ButtonProps) => {
  return (
    <button className={`button ${theme} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
