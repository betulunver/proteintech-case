import './App.css';
import { connect } from 'react-redux';
import Button from './components/Button';
import Tree from './components/Tree';

const App = (props) => {
  console.log(props)
  return (
    <div className="App">
      <Button></Button>
      <Tree></Tree>
    </div>
  );
}
const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(App);
