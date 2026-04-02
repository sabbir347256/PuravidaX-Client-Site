const CustomButton = ({
  text,
  bg,
  textColor,
  padding,
  margin,
  rounded,
  onClick,
  className,
  hover,
  border,
  children,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bg} ${textColor} ${padding} ${margin} ${rounded} ${className} hover:${hover} ${border} transition flex items-center gap-2 ${width} justify-center`}
    >
      {children}{text}
    </button>
  );
};

export default CustomButton;
