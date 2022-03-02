import React from "react";
import SimpleComponent from "./SimpleComponent";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import ControlledComponent from "./ControlledComponent"
import CompleteLifecycleCompoenent from "./CompleteLifecycleComponent";

function App() {
  return (
    <>
      <div>
        <SimpleComponent />
      </div>
      <div>
        <FunctionalComponent />
      </div>
      <div>
        <ClassComponent />
      </div>
      <div>
        <ControlledComponent />
      </div>
      <div>
        <CompleteLifecycleCompoenent />
      </div>
    </>
  );
}

export default App;
