import './App.css';
import Kitchen from './Kitchen';
// CodeSandbox.js

function FloorPlan(props) {
  return (
    <div>
      <div>Bedroom 1</div>
      <Kitchen/>
    </div>
  );
}

// Must export the component's function (or class)
export default FloorPlan;