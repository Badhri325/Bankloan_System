function Button(props) {
  const { title, handleClick } = props;

  return (
    <>
      <button
        className="btn btn-dark ms-2"
        type="button"
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
}
export default Button;
