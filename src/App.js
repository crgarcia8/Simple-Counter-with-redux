import './App.css';
import { connect } from 'react-redux';
import { add } from './Redux/Actions/actions';

function App(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.add(1)
  }
  return (
    <>
      <div>Count value:  {props.counter}</div>
      <a href="/#" onClick={handleClick}>Adicionar valor</a>
      <div>New Value_</div>
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
