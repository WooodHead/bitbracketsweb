import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class SelectField extends React.Component {

    handleChange = event => {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
    };

    renderItems() {
        return this.props.items.map((item, i) => (
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
        ));
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel>{this.props.name}</InputLabel>
                    <Select
                        value={this.props.value}
                        onChange={this.handleChange}
                    >
                        {this.renderItems()}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

SelectField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectField);
