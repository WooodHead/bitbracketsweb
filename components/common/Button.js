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
      variant="raised"
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

// import Button from "material-ui/Button";
// import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

// export default props => {
//   const { backgroundColor } = props;
//   const { colorText } = props;
//   const { buttonBorder } = props;
//   const { buttonHeight } = props;
//   const primary = props.backgroundColor ? props.backgroundColor : "#0fe3ab";

//   const theme = createMuiTheme({
//     palette: {
//       primary: { main: primary, contrastText: colorText }
//     },
//     overrides: {
//       MuiButton: {
//         root: {
//           borderRadius: buttonBorder,

//           height: buttonHeight
//         }
//       }
//     }
//   });
//   const name = props.name ? props.name : "pick a name";
//   return (
//     <MuiThemeProvider theme={theme}>
//       <span>
//         <Button variant="raised" size={props.size} color="primary">
//           {name}
//         </Button>
//       </span>
//     </MuiThemeProvider>
//   );
// };

// size : 'small' |'medium' |'large'

//
