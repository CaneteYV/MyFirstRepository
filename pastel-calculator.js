(function(){
  const display = document.getElementById('display');
  let first = null;
  let operator = null;
  let waitingForSecond = false;
  let current = '0';

  function updateDisplay(){
    display.textContent = current;
  }

  function inputDigit(d){
    if(waitingForSecond){
      current = d;
      waitingForSecond = false;
    } else {
      current = current === '0' ? d : current + d;
    }
  }

  function inputDecimal(){
    if(waitingForSecond) return;
    if(!current.includes('.')) current += '.';
  }

  function clearAll(){ first = null; operator = null; waitingForSecond=false; current='0'; }

  function handleOperator(nextOp){
    const inputValue = parseFloat(current);
    if(operator && waitingForSecond){ operator = nextOp; return; }
    if(first == null){ first = inputValue; }
    else if(operator){
      const result = performCalculation[operator](first, inputValue);
      first = Number.isFinite(result) ? result : 0;
      current = String(first);
    }
    waitingForSecond = true;
    operator = nextOp;
  }

  const performCalculation = {
    '+': (a,b)=> a+b,
    '-': (a,b)=> a-b,
    '*': (a,b)=> a*b,
    '/': (a,b)=> b===0 ? Infinity : a/b,
    '=': (a,b)=> b,
  };

  document.querySelector('.keys').addEventListener('click', e=>{
    const target = e.target;
    if(!target.matches('button')) return;
    if(target.dataset.number){
      if(target.dataset.number === '.') inputDecimal();
      else inputDigit(target.dataset.number);
      updateDisplay();
      return;
    }
    if(target.dataset.action){
      const action = target.dataset.action;
      if(action === 'clear') { clearAll(); updateDisplay(); return; }
      if(action === 'neg'){ current = String(parseFloat(current) * -1); updateDisplay(); return }
      if(action === 'percent'){ current = String(parseFloat(current) / 100); updateDisplay(); return }
      if(action === '='){ handleOperator('='); operator = null; waitingForSecond=false; updateDisplay(); return }
      // else it's an operator symbol like + - * /
      handleOperator(action);
      updateDisplay();
    }
  });

  updateDisplay();
})();
