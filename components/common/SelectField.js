import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import CssBaseline from 'material-ui/CssBaseline';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SelectField extends React.Component {
    state = {
        value: "",
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    renderItems() {
        return this.props.items.map((item, i) => (
            <MenuItem value={i}>{item}</MenuItem>
        ));
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <CssBaseline />
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="value-simple">{this.props.name}</InputLabel>
                        <Select
                            value={this.state.value}
                            onChange={this.handleChange}
                            inputProps={{
                                name: [this.props.name],
                                id: [this.props.id],
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {this.renderItems()}
                        </Select>
                    </FormControl>
                </form>
            </div>
        );
    }
}

SelectField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectField);

