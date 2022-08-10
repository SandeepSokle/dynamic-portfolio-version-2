import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BookIcon from "@mui/icons-material/Book";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const NavbarListLeft = (props) => {
  const { setSelectedTab } = props;

  const itemList = [
    {
      icon: <DashboardIcon />,
      label: "Dashboard",
    },
    {
      icon: <LoginIcon />,
      label: "Login",
    },
    {
      icon: <HowToRegIcon />,
      label: "Register",
    },
    {
      icon: <BookIcon />,
      label: "Blogs",
    },
    {
      icon: <ArticleIcon />,
      label: "Documentation",
    },
    {
      icon: <ContactMailIcon />,
      label: "Contact Us",
    },
  ];

  return (
    <div>
      {itemList.map((ele) => {
        return (
          <ListItem
            button
            onClick={(e) => {
              // console.log(e.currentTarget.innerText);
              setSelectedTab(e.currentTarget.innerText);
            }}
          >
            <ListItemIcon>{ele.icon}</ListItemIcon>
            <ListItemText primary={ele.label} />
          </ListItem>
        );
      })}
    </div>
  );
};

export default NavbarListLeft;
