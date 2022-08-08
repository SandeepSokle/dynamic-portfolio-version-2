import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";
import MessageIcon from "@mui/icons-material/Message";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

const NavbarListLeft = (props) => {
  const { setSelectedTab } = props;

  const itemList = [
    {
      icon: <InfoIcon />,
      label: "About",
    },
    {
      icon: <DocumentScannerIcon />,
      label: "Resume",
    },
    {
      icon: <ImportContactsIcon />,
      label: "Projects",
    },
    {
      icon: <WorkIcon />,
      label: "Experience",
    },
    {
      icon: <BookIcon />,
      label: "Blog",
    },
    {
      icon: <MessageIcon />,
      label: "Communication",
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
