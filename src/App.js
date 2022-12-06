import logo from "./logo.svg";
import "./App.css";
import Functional_comp from "./lessons/functional_comp";
import ClassComp from "./lessons/classComp";
import No_jsx from "./lessons/no_jsx";
import Props from "./lessons/props";
import State from "./lessons/state";
import Counter from "./lessons/counter";
import GroupCount from "./lessons/groupSet";
import EventClass from "./lessons/eventClass";
import Bind from "./lessons/bind";
import Parent from "./lessons/15_parent";
import Conditional_render from "./lessons/conditional_render";
import List from "./lessons/list";
import Persons from "./lessons/Persons";
import ToDoList from "./lessons/index-as-key";
import Style1 from "./lessons/style1";
import Style2_inline from "./lessons/style2_inline";
import Style3_modules from "./lessons/style3_modules";
import "./testCSS.css";
import Forms from "./lessons/forms";

function App() {
  return (
    <div className="App">
      {/* <Functional_comp name="functional" /> */}
      {/* <ClassComp name="class name" /> */}
      {/* <No_jsx /> */}
      {/* <Props name="props bees" view="300" /> */}
      {/* <State /> */}
      {/* <Counter /> */}
      {/* <GroupCount /> */}
      {/* <EventClass /> */}
      {/* <Bind /> */}
      {/* <Parent /> */}
      {/* <Conditional_render /> */}
      {/* <List /> */}

      {/* <Persons /> */}

      {/* <ToDoList /> */}
      {/* <Style1 /> */}

      <Style2_inline />
      <Style3_modules />
      {/* Advantage style module only can be accessable for local component, which used in same place of importing module css */}
      {/* And it is usefull to know  which component use what exactly style from who*/}
      {/* unlike import "./style.css" which any component can use it, and you don't what exactly css file component use it, when you have more than one css file */}

      <Forms />
    </div>
  );
}

export default App;
