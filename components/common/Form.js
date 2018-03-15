import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export default props => {
  const name = props.name ? props.name : "pick a name";
  const label = props.label ? props.label : "pick a label";
  const color = props.color;

  const placeholder = props.placeholder
    ? props.placeholder
    : "pick placeholder";

  return (
    <div>
      <form>
        <FormGroup
          style={props.styleLabel}
          controlId="formBasicText"
          // validationState={this.getValidationState()}
        >
          <ControlLabel>{label}</ControlLabel>
          <FormControl
            style={props.styleInput}
            type="text"
            // value={this.state.value}
            placeholder={placeholder}
            // onChange={this.handleChange}
          />
        </FormGroup>
      </form>
    </div>
  );
};
