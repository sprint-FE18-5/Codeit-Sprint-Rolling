const FormLayout = ({ children, onSubmit }) => (
  <form
    onSubmit={onSubmit}
    className="form-container mt-[65px] max-w-[760px] p-[50px_20px_60px] md:pt-[47px] m-auto grid gap-[50px_0]"
  >
    {children}
  </form>
);

export default FormLayout;
