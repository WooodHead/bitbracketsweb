import TextField from "material-ui/TextField";

export default props => {
  const name = props.name ? props.name : "pick a name";
  return (
    <TextField
      id="textarea"
      label={name}
      placeholder={name}
      multiline
      margin="normal"
    />
  );
};
