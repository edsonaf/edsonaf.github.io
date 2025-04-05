import "./Home.scss";
import { useCallback, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { GET_PAGE_COMPONENT } from "../Utilities/CommonUtils";
import { COMPANY_NAME } from "../GlobalConstants";

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard"); // default

  const callback = useCallback((component) => {
    setSelectedComponent(component);
  }, []);

  const mapSelectedComponent = () => {
    let comp = GET_PAGE_COMPONENT(selectedComponent);
    return <comp.component key={comp.name} />;
  };

  return (
    <div className="home">
      <Sidebar
        rootName={COMPANY_NAME}
        defaultPage={selectedComponent}
        parentCallback={callback}
      />
      <div className="homeContainer">
        <Navbar user={null} />
        <div id="container">{mapSelectedComponent()}</div>
      </div>
    </div>
  );
};

export default Home;
