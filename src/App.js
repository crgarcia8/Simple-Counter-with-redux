import './App.css';
import { connect } from 'react-redux';
import { add } from './Redux/Actions/actions';

function App(props) {
  return (
    <>
      <div>Count value:  {props.counter}</div>
      <a href="#" onClick={() => props.add(1)}>Adicionar valor</a>
    </>
  );
}

const mapStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = {
  add
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
