import { PAGES } from "../Pages";

export const GET_GROUP_INDEX = (name) => {
  if (!name) return -1;

  for (let i = 0; i < PAGES.length; i++) {
    if (PAGES[i].groupName === name) return i;
  }

  return -1;
};

export const GET_PAGE_COMPONENT = (key) => {
  if (!key) return null;

  for (let i = 0; i < PAGES.length; i++) {
    for (let j = 0; j < PAGES[i].groupComponents.length; j++) {
      console.log(PAGES[i].groupComponents[j].key);
      if (PAGES[i].groupComponents[j].key === key) {
        return PAGES[i].groupComponents[j];
      }
    }
  }

  return <div>NOT FOUND</div>;
};
