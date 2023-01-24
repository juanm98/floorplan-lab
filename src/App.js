import './App.css';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
// CodeSandbox.js

function FloorPlan(props) {
  return (
    <div>
      <div>Bedroom 1</div>
      <Kitchen/>
      <LivingRoom/>
    </div>
  );
}

// Must export the component's function (or class)
export default FloorPlan;