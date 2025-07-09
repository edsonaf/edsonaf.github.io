import { CalendarToday, Home, Save } from "@mui/icons-material";
import BookIcon from '@mui/icons-material/Book';
import Dashboard from "./Components/Dashboard/Dashboard";
// import Datatable from "./Components/datatable/Datatable";
import SaveTheDate from "./Components/SaveTheDate/SaveTheDate";
import Calendar from "./Projects/WeHome/Calendar/Calendar";
import Blog from "./Projects/Blogs/Blog";
export const PAGES = [
    {
      groupName: "Main",
      groupComponents: [
        {
          key: "blog",
          icon: <BookIcon />,
          name: "Blog",
          component: Blog
        },
        {
          key: "dashboard",
          icon: <Home />,
          name: "Dashboard",
          component: Dashboard,
        },
      ],
    },
    {
      groupName: "WeHome",
      groupComponents: [
        {
          key: "calendar",
          icon: <CalendarToday />,
          name: "Calendar",
          component: Calendar,
        },
      ],
    },
    {
      groupName: "The Big Day",
      groupComponents: [
        {
          key: "save",
          icon: <Save />,
          name: "Save the date",
          component: SaveTheDate,
        },
      ],
    },
  ];