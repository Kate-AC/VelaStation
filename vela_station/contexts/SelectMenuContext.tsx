import { useState, useContext, createContext } from 'react';

const initSelectMenu = {
  clickedMenu: 1,
  setClickedMenu: (key: number) => {},
}

const SelectMenuContext = createContext(initSelectMenu);

const SelectMenuContextProvider = (props: { children: React.ReactElement }) => {
  const [clickedMenu, setClickedMenu] = useState(1);

  const clickedMenuState = {
    clickedMenu: clickedMenu,
    setClickedMenu: setClickedMenu
  }

  return (
    <SelectMenuContext.Provider value={clickedMenuState}>
      {props.children}
    </SelectMenuContext.Provider>
  );
}

const getSelectMenuState = () => useContext(SelectMenuContext);

export default SelectMenuContext;

export { SelectMenuContextProvider, getSelectMenuState }