function Button({ children }) {
  return (
    <button>
      {children || "Button"}
    </button>
  );
}

export default Button;