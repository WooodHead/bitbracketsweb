import Button from "material-ui/Button";

export default props => {
  const name = props.name ? props.name : "pick a name";
  return (
    <Button variant="raised" color={props.style}>
      {name}
    </Button>
  );
};

// Ejemplo de como se usa <Button colorName="red" name="Subscribe" />
