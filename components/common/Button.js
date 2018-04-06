import Button from "material-ui/Button";

export default props => {
  const { backgroundColor } = props;
  const { colorText } = props;
  const { buttonBorder } = props;
  const { buttonHeight } = props;
  const { buttonWidth } = props;

  const name = props.name ? props.name : "pick a name";
  return (
    <Button
      // variant="raised"
      size={props.size}
      style={{
        backgroundColor: backgroundColor,
        color: colorText,
        borderRadius: buttonBorder,
        width: buttonWidth
      }}
    >
      {name}
    </Button>
  );
};
