import { PAGES } from "../../Pages";
import { useState } from "react";

import "./Sidebar.scss";

const Sidebar = ({ rootName, defaultPage, parentCallback }) => {
  const [selectedGroup, setSelectedGroup] = useState(0);
  const [selectedPage, setSelectedPage] = useState(defaultPage);

  const updateCurrentScreen = (key, component) => {
    setSelectedGroup(key);
    setSelectedPage(component.key);
    parentCallback(component.key);
  };

  const SimpleList = ({ title, list, groupIndex }) => (
    <ul className={AppendSelectedGroupWithText(groupIndex, "selectedGroup")}>
      <p className="title">{title}</p>
      {list.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => updateCurrentScreen(groupIndex, item)}
            className={AppendSelectedItemWithText(
              groupIndex,
              item.name,
              "selectedItem"
            )}
          >
            <div className="logo">{item.icon}</div>
            <span>{item.name}</span>
          </li>
        );
      })}
    </ul>
  );

  const AppendSelectedGroupWithText = (index, text) => {
    let classes = "simpleList ";
    if (selectedGroup === index) classes += text;
    return classes;
  };

  const AppendSelectedItemWithText = (groupIndex, selectedPageName, text) => {
    let classes = "simpleList ";
    if (selectedGroup === groupIndex && selectedPage === selectedPageName)
      classes += text;
    return classes;
  };

  const getPagesList = () => {
    return PAGES.map((group, i) => (
      <SimpleList
        key={i}
        title={group.groupName}
        list={group.groupComponents}
        groupIndex={i}
      />
    ));
  };

  const pageList = getPagesList();

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">{rootName} v0.1</span>
      </div>
      <div className="center">{pageList}</div>
      {/* <div className="bottom">
        <div className="colorOption" />
        <div className="colorOption" />
        <div className="colorOption" />
      </div> */}
    </div>
  );
};

export default Sidebar;
