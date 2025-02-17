/*import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], //currency Options mein chahta hun ki user mujhe array mein pass kare , in case aap nhi karo to ek empty array to mein le hii loonga 
  selectCurrency  = "usd",
  amountDisable = false, // amountdisable isliye kyonkki ho sakta hai , ki kuch user amount dena chate ho ya nhi , by default hum false rakh rhe 
  currencyDisable = false,
  className = "",
}) {
 
  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label  className="text-black/40 mb-2 inline-block">
                {label}
              </label>
              <input
                  
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}  //&& ke baad hum onCurrencyChange isliye likh rhe hai  so that kya pata onCurrencyChange mein koi value ho na ho 
                  disabled={currencyDisable}
              >
                  
                      {currencyOptions.map((currency) => 
                      ((<option key={currency} 
                      value={currency}>
                        {currency} 
                      </option>)))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox; */

/// A liitle bit optimised

import React , {useId} from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], //currency Options mein chahta hun ki user mujhe array mein pass kare , in case aap nhi karo to ek empty array to mein le hii loonga 
  selectCurrency  = "usd",
  amountDisable = false, // amountdisable isliye kyonkki ho sakta hai , ki kuch user amount dena chate ho ya nhi , by default hum false rakh rhe 
  currencyDisable = false,
  className = "",
}) {
 
    const amountInputId = useId() // isse use karne se ek unique value aayegi ek random string , number ko use karte hue ek unique value aapko mil jaaeygi
    return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                    <label htmlFor={amountInputId} 
                    className="text-black/40 mb-2 inline-block">
                        {label}
                    </label>
                    <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}  //&& ke baad hum onCurrencyChange isliye likh rhe hai  so that kya pata onCurrencyChange mein koi value ho na ho 
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => 
                        (<option key={currency} 
                        value={currency}>
                            {currency} 
                        </option>))}
                
                </select>
            </div>
      </div>
  );
}

export default InputBox;