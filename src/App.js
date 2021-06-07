import React, {Profiler} from "react";
import Header from "./components/Header";
import Books from "./components/Books";
import "./App.css";
function mycallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
){
  console.log("actualDuration:" + actualDuration);
  console.log("Interactions:" + interactions);
  console.log("Start Time: " + startTime)
  console.log("Phase: " + phase)
}
function App() {
  return (
    <div className="App">
    <Profiler id="header" onRender={mycallback}>
      <Header  />
    </Profiler>
    
    <Profiler id="Books" onRender={mycallback}>
      <Books />
    </Profiler>
      
    </div>
  );
}

export default App;
