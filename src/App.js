import './App.css';
import { connect } from 'react-redux';
import Button from './components/Button';
import Tree from './components/Tree';
import Basket from './components/Basket';
import {
  changeButtonText,
  changeTreeClass,
  changeApple1Class,
  changeApple2Class,
  changeApple3Class
} from './actions';


const App = (props) => {
  var start = () => {
    props.changeButtonText("Shaking")
    props.changeTreeClass({ class: ["tree", "shaking"] });
    props.changeApple1Class({ class: ["apple","a1","shaking"] });
    props.changeApple2Class({ class: ["apple","a2","shaking"] });
    props.changeApple3Class({ class: ["apple","a3","shaking"] });

    setTimeout(() => {
        props.changeTreeClass({ class: ["tree"] });
        props.changeApple1Class({ class: ["apple","a1"] });
        props.changeApple2Class({ class: ["apple","a2"] });
        props.changeApple3Class({ class: ["apple","a3"] });

    }, 3000);
}

  return (
    <div>
      <Tree></Tree>
      <Button start={start}></Button>
      <Basket></Basket>
    </div>
  );
}
const mapStateToProps = state => {
  return state;
}
const mapActionsToProps = {
  changeButtonText,
  changeTreeClass,
  changeApple1Class,
  changeApple2Class,
  changeApple3Class
};


export default connect(mapStateToProps,mapActionsToProps)(App);
