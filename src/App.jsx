import { useState } from 'react'
import Inputbox from './components/Inputbox'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)
  const currencyInfo =  useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

// functionality for swap button

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   
  }

// functionality for the convert button

 const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
 }
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/019/523/909/non_2x/abstract-currency-digital-finance-technology-modern-currency-exchange-transfer-profit-on-modern-background-futuristic-wave-flowing-blue-vector.jpg')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
             onSubmit={(e) => {
                e.preventDefault();
                convert()
             }}
            >
                <div className="w-full mb-1">
                    <Inputbox
                        label="From"
                        amount = {amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => 
                            setFrom(currency)
                        }
                        onAmountChange={(amount) => setAmount(amount)}
                        selectCurrency= {from}
                        
                    />
                    
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                <Inputbox
                        label="To"
                        amount = {convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setTo(currency)
                        }
                        onAmountChange={(amount) => setAmount(amount)}
                        selectCurrency= {to}
                        amountDisable
                    />
                    
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    convert {swap ? from.toUpperCase() : to.toUpperCase} to { swap ? to.toUpperCase() : from.toUpperCase }
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App;

