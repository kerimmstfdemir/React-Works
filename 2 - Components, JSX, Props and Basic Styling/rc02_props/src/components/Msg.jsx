const Msg = (props) => {
  // console.log(props)

  //! Destruction
  const { name } = props;
  return (
    <div>
      <h3>Hello {name} !!!</h3>
    </div>
  );
};

export default Msg;