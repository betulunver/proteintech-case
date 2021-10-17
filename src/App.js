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
  changeApple3Class,
  changeAnimationStatus
} from './actions';
import { STATUS_TYPE } from './actions/type';

const App = (props) => {

  // Generate a random number
  const generateRandomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var start = () => {
    props.changeAnimationStatus(STATUS_TYPE.PLAYING);
    props.changeButtonText("Shaking!!");
    /*Shaking*/
    props.changeTreeClass({ class: "tree shaking" });
    props.changeApple1Class({ class: "apple a1 shaking" });
    props.changeApple2Class({ class: "apple a2 shaking" });
    props.changeApple3Class({ class: "apple a3 shaking" });
    // After 3 seconds do the scope
    setTimeout(() => {
      props.changeButtonText("The dropping begin!!");
      props.changeTreeClass({ class: "tree" });
      props.changeApple1Class({ class: "apple a1" });
      props.changeApple2Class({ class: "apple a2" });
      props.changeApple3Class({ class: "apple a3" });

      //After shaking effect, more than one apple will be dropped in different time
      for (let i = 1; i <= 3; i++) {
        var time = generateRandomIntegerInRange(1000, 3000);
        setTimeout(() => {
          props.changeButtonText(`The ${i}.apple is falling!!`);
          props[`changeApple${i}Class`]({ class: [`apple a${i} a${i}-dropped`] });
          //Appear on the basket
          setTimeout(() => {
            props.changeButtonText(`The ${i}.apple on the basket!!`);
            props[`changeApple${i}Class`]({ class: [`apple a${i} a${i}-into-basket`] });
          }, 1000);
        }, time);
      }
    }, 3000)
  }
  if (props.animations === STATUS_TYPE.DONE) {
    props.changeButtonText("All apples picked!!");
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
  changeApple3Class,
  changeAnimationStatus
};


export default connect(mapStateToProps, mapActionsToProps)(App);
