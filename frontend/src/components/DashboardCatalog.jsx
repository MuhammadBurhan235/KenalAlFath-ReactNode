import React, { useState } from "react";

const NavbarDC = () => {
  return (
    <nav
      style={{
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        position: "fixed",
      }}
    >
      <h2>Navbar</h2>
    </nav>
  );
};

const FIT = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        className="card"
        style={{
          height: "475px",
          width: "475px",
          backgroundColor: "#6DF05F",
          padding: "30px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      ></div>
      <div
        className="card"
        style={{
          height: "475px",
          width: "755px",
          backgroundColor: "#6DF05F",
          padding: "30px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          marginLeft: "10px",
        }}
      ></div>
    </div>
  );
};

const FKB = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        backgroundColor: "#8C52FE",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    ></div>
  );
};
const FEB = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        backgroundColor: "#21A7AC",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    ></div>
  );
};
const FIK = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        backgroundColor: "#F48357",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    ></div>
  );
};
const FRI = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        padding: "20px",
        backgroundColor: "#028446",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    ></div>
  );
};

const FTE = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        backgroundColor: "#3B7097",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    ></div>
  );
};
const FIF = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        backgroundColor: "#F0CC12",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    ></div>
  );
};

const Footer = ({ onComponentClick }) => {
  const components = [
    {
      name: "FIT",
      color: "#6DF05F",
      pol: "polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)",
      marLeft: "0px",
    },
    {
      name: "FKB",
      color: "#8C52FE",
      pol: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
      marLeft: "-4%",
    },
    {
      name: "FEB",
      color: "#21A7AC",
      pol: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
      marLeft: "-4%",
    },
    {
      name: "FIK",
      color: "#F48357",
      pol: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
      marLeft: "-4%",
    },
    {
      name: "FRI",
      color: "#028446",
      pol: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
      marLeft: "-4%",
    },
    {
      name: "FTE",
      color: "#3B7097",
      pol: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
      marLeft: "-4%",
    },
    {
      name: "FIF",
      color: "#F0CC12",
      pol: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
      marLeft: "-4%",
    },
  ];
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        {components.map((component) => (
          <div
            key={component.name}
            onClick={() => onComponentClick(component.name)}
            style={{
              height: 30,
              width: 230,
              backgroundColor: component.color,
              clipPath: component.pol,
              marginLeft: component.marLeft,
            }}
          >
            {component.name}
          </div>
        ))}
      </div>
    </footer>
  );
};

const DashboardCatalog = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "FIT":
        return <FIT />;
      case "FKB":
        return <FKB />;
      case "FEB":
        return <FEB />;
      case "FIK":
        return <FIK />;
      case "FRI":
        return <FRI />;
      case "FTE":
        return <FTE />;
      case "FIF":
        return <FIF />;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavbarDC />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          padding: "10px",
        }}
      >
        {renderSelectedComponent()}
      </div>
      <Footer onComponentClick={handleComponentClick} />
    </div>
  );
};

export default DashboardCatalog;
