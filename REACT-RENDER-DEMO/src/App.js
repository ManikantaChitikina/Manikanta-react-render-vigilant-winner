import UseState from "./Components/UseState/UseState";
import UseReducer from "./Components/UseReducer/UseReducer";
import ObjectUseState from "./Components/ImmutableState/ObjectUseState";
import ArrayUseState from "./Components/ImmutableState/ArrayUseState";
import Parent from "./Components/Parent Child/Parent";
import ParentOne from "./Components/Optimization/ParentOne";
import ChildOne from "./Components/Optimization/ChildOne";
import GrandParent from "./Components/Optimization/GrandParent";
import ParentTwo from "./Components/Optimization/ParentTwo";
import ParentThree from "./Components/IncorrectOptimizations/ParentThree";
import ParentFour from "./Components/IncorrectOptimizations/ParentFour";
import ContextParent from "./Components/Context/ContextParent";
import { ChildA } from "./Components/Context/ContextChildren";
function App() {
  return (
    <div className="App">
      {/* <UseState></UseState> */}
      {/* <UseReducer></UseReducer> */}
      {/* <ObjectUseState></ObjectUseState> */}
      {/* <ArrayUseState></ArrayUseState> */}
     {/* <Parent></Parent> */}
     {/* <ParentOne>
      <ChildOne></ChildOne>
     </ParentOne> */}
     {/* <GrandParent></GrandParent> */}
     {/* <ParentTwo></ParentTwo> */}
     {/* <ParentThree></ParentThree> */}
     {/* <ParentFour></ParentFour> */}
     <ContextParent>
      <ChildA></ChildA>
     </ContextParent>
    </div>
  );
}

export default App;
