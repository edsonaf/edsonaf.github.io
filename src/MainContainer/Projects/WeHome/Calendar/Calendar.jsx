import { /*useEffect,*/ useState } from "react";
// import { useSession } from "@clerk/clerk-react";
import "./Calendar.scss";
import Button from "@mui/material/Button";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// const mockTodayList = [
//   {
//     beginTimestamp: new Date().getTime().toLocaleString(),
//     endTimeStamp: (new Date().getTime() + 40_000).toLocaleString(),
//     title: "Learn React",
//     description:
//       "Learn about route usage, reusable components and fetching data from backend",
//     isComplete: true,
//   },
//   {
//     beginTimestamp: "",
//     endTimeStamp: "",
//     title: "Learn GraphQl",
//     description: "Investigate: What is it and how can we use it?",
//     isComplete: false,
//   },
// ];

const DefaultMonthStrings = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DefaultDayStrings = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

// const getDate = function fetchConfigApi(date, setList) {
  // call api function here
  // get list for the selected day

  // convert Date to TimeStamp? better for backend?
  // Maybe the service should do this
  // adam.getUserTasks(id: user.id, date: e)
  // setList()

//   try {
//     // simulate api call
//     setTimeout(() => {
//       console.log(
//         "simulation",
//         `fetching list for ${date.toLocaleDateString()}`
//       );

//       if (date.getDay() % 2 === 0) {
//         setList(mockTodayList);
//       } else {
//         setList([
//           {
//             beginTimestamp: new Date().getTime().toLocaleString(),
//             endTimeStamp: (new Date().getTime() + 40_000).toLocaleString(),
//             title: "Learn React",
//             description:
//               "Learn about route usage, reusable components and fetching data from backend",
//             isComplete: true,
//           },
//           {
//             beginTimestamp: new Date().getTime().toLocaleString(),
//             endTimeStamp: (new Date().getTime() + 40_000).toLocaleString(),
//             title: "Send mail",
//             description:
//               "Start with an introduction and then the topic. Do not forget to end the mail with a summary and follow up and thank you",
//             isComplete: false,
//           },
//           {
//             beginTimestamp: new Date().getTime().toLocaleString(),
//             endTimeStamp: (new Date().getTime() + 40_000).toLocaleString(),
//             title: "Learn React 2",
//             description:
//               "Learn about route usage, reusable components and fetching data from backend",
//             isComplete: true,
//           },
//         ]);
//       }
//     }, 500);
//   } catch (e) {
//     console.log("error response", e.response);
//   }
// };

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [list, setList] = useState(mockTodayList);
  // const [userToken, setToken] = useState("");
  // const [selectedView, setView] = useState("day");

  // const handleView = (event, newView) => {
  //   setView(newView);
  // };
  // const session = useSession();
  
  // const { user } = session;

  // const onSelectedDateChange = (e) => {
  //   setSelectedDate(e);
  //   getDate(e, setList);
  // };

  // useEffect(() => {
  //   const fetchSessionToken = async () => {
  //     const token = await session.getToken();
  //     setToken(token);
  //   };

  //   if (selectedDate !== undefined) {
  //     getDate(selectedDate, setList);
  //   }

  //   fetchSessionToken();
  // }, [selectedDate]);

  const getPreviousDate = () => {
    let date = new Date();
    let oneDayAgo = selectedDate.getDate() - 1;
    date.setDate(oneDayAgo);
    setSelectedDate(date);
  };

  const getNextDate = () => {
    let date = new Date();
    let theNextDay = selectedDate.getDate() + 1;
    date.setDate(theNextDay);
    setSelectedDate(date);
  };

  const getToday = () => {
    let date = new Date();
    setSelectedDate(date);
  };

  return (
    <div>
      <div className="calendar-container">
        <div className="selected-day-list">
          <div className="toolbar">
            <div className="button-box-left">
              <Button
                div="left"
                variant="text"
                onClick={() => getPreviousDate()}
              >
                &#129144;
              </Button>
              <Button div="right" variant="text" onClick={() => getNextDate()}>
                &#129146;
              </Button>
              <Button div="today" variant="text" onClick={() => getToday()}>
                Today
              </Button>
            </div>

            <div className="center">
              <span>
                {DefaultDayStrings[selectedDate.getDay()]},{" "}
                {DefaultMonthStrings[selectedDate.getMonth()]}{" "}
                {selectedDate.getDate()}, {selectedDate.getFullYear()}
              </span>
            </div>

            {/* <div className="button-box-right">
              <ToggleButtonGroup
                value={selectedView}
                exclusive
                onChange={handleView}
                aria-label="text alignment"
              >
                <ToggleButton value="month">
                  <span>month</span>
                </ToggleButton>
                <ToggleButton value="week">
                  <span>week</span>
                </ToggleButton>
                <ToggleButton value="day">
                  <span>day</span>
                </ToggleButton>
              </ToggleButtonGroup>
            </div> */}
          </div>

          {/* <ul>
            {list.map((item) => (
              <li key={item.title}>
                <span
                  style={{
                    textDecoration: item.isComplete ? "line-through" : "none",
                  }}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
