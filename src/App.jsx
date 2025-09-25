import Todoappname from "./component/Todoappname";
import Addtodo from "./component/Addtodo";
import Additem1 from "./component/Additem1";
import Additem2 from "./component/Additem2";
import './Apps.css';

function App() {

  return  <center class = "Todo-container">
   <Todoappname></Todoappname>
   <Addtodo></Addtodo>
   <div class ="items-container">
    <Additem1></Additem1>
   <Additem2></Additem2>
   </div>
  </center>
 
  
}

export default App;

