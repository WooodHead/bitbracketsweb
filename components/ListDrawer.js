import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";
import Icon from "./common/Icon";

export default props => {
  const name = props.name ? props.name : "pick a name";
  return (
    <div className="root">
      <List component="nav">
        <ListItem>
          <span className="brand">BitBrackets</span>
        </ListItem>
        <Divider />
        <ListItem button>
          <span className="ListColor">Home</span>
        </ListItem>
        <Divider />
        <ListItem button>
          <span className="ListColor">Contest</span>
        </ListItem>
        <Divider />
        <ListItem button>
          <span className="ListColor">FAQ</span>
        </ListItem>
        <Divider />
        <ListItem button>
          <span className="ListColor">Rules</span>
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <Icon
              style={{ color: "#3ffeca", marginRight: "20%" }}
              icon={<i className="fas fa-user-plus" />}
            />
          </ListItemIcon>
          <span className="ListColor">SignUp</span>
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemIcon>
            <Icon
              style={{ color: "#3ffeca", marginRight: "20%" }}
              icon={<i className="fas fa-sign-in-alt" />}
            />
          </ListItemIcon>
          <span className="ListColor">LogIn</span>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon
              style={{ color: "#3ffeca", marginRight: "20%" }}
              icon={<i className="fas fa-language" />}
            />
          </ListItemIcon>
          <span className="ListColor">Language</span>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon
              style={{ color: "#3ffeca", marginRight: "20%" }}
              icon={<i className="fas fa-envelope" />}
            />
          </ListItemIcon>
          <span className="ListColor">Contact</span>
        </ListItem>
      </List>
      <style jsx>{`
        .root {
          width: 100%;
          max-width: 360px;
        }
        .ListColor {
          color: #fff;
          font-size: 12px;
        }
        .ListColor:hover {
          color: #3ffeca;
        }
        .brand {
          color: #3ffeca;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};
