import * as React from "react";
import styles from "./Tab.module.css";

export const TabContext = React.createContext(null);

function Tab(props) {
  const [current, setCurrent] = React.useState(0);

  const navigate = React.useCallback((index) => {
    setCurrent(index);
  }, []);

  const value = React.useMemo(
    () => ({
      current,
      navigate,
    }),
    [current, navigate]
  );

  return (
    <TabContext.Provider value={value}>{props.children}</TabContext.Provider>
  );
}

function useTabContext() {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error(
      "Tab Compound couldn't be rendered outside the Tab Component"
    );
  }
  return context;
}

function Body({ children, body }) {
  const { current } = useTabContext();
  return (
    <div
      className={`${styles.body} ${
        body === current ? styles.selectedBody : ""
      }`}
    >
      {children}
    </div>
  );
}

function Header({ children }) {
  return <ul className={styles.header}>{children}</ul>;
}

function Item({ children, id }) {
  const { current, navigate } = useTabContext();

  return (
    <li
      className={`${styles.item} ${current === id ? styles.selected : ""}`}
      onClick={() => navigate(id)}
    >
      {children}
    </li>
  );
}

Tab.Body = Body;
Tab.Header = Header;
Tab.Item = Item;

export default Tab;
