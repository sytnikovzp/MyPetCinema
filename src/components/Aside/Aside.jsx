import './Aside.css';

function Aside() {
  return (
    <div id='aside'>
      <h3>Service</h3>
      <label htmlFor='input1'>Label</label> <input type='text' id='input1' />
      <label htmlFor='input2'>Label</label> <input type='text' id='input2' />
      <label htmlFor='input3'>Label</label> <input type='text' id='input3' />
      <label htmlFor='input4'>Label</label> <input type='text' id='input4' />
      <div id='buttons'>
        <button>Save</button>
        <button>Reset</button>
        <button>Return</button>
      </div>
    </div>
  );
}

export default Aside;
