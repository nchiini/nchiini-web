const NormalButton = ({
  text,
  icon,
  disabled = false,
  className,
  onClick,
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} bg-primary-main flex items-center justify-center gap-3 p-3 rounded-full ${
        disabled
          ? "bg-primary-main/10 text-white/20 hover:cursor-not-allowed"
          : ""
      }`}
    >
      {icon ? icon : undefined}
      {text ? text : undefined}
    </button>
  );
};

export default NormalButton;
