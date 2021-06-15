import { useEffect, useState } from 'react';
import { getExpenseApi } from './api';
import  DataTable  from './components/DataTable';
import Input from './components/Input';
import './App.css';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [expenseData, setExpenseData] = useState([]);
  const [copyOfExpenseData, setCopyOfExpenseData] = useState([]);
  useEffect(() => {
    getExpenseApi().then(response => {
      console.log(response)
      let appState = response.map(data => {
        return Object.assign({}, data, {toggleStatus : false});
      })
      setExpenseData(appState);
      setCopyOfExpenseData(appState);
    });
  },[]);

  const handleDetailsButtonClick = (id) => {
    let newExpenseData = expenseData.map((data, index) => {
      if (index == id) {
        if (data.toggleStatus) data.toggleStatus = false;
        else data.toggleStatus = true;
      }
      return data;
    })
    setExpenseData(newExpenseData);
  }

  const handleInputChange = (value) => {
    console.log(value);
    let newExpenseData = copyOfExpenseData.filter((data) => data.exp_name.includes(value));
    setExpenseData(newExpenseData);
  }

  const aggregatedResult = () => {
    return (
      expenseData &&
      expenseData.reduce((acc, cur) => {
        let sum = acc[cur.type] || 0;
        sum += cur.amount;
        return {
          ...acc,
          [cur.type]: sum
        };
      }, {})
    );
  };

  const aggregatedResultObj = aggregatedResult();
  console.log(aggregatedResultObj)

  return (
    <div className="App">
      <div>
        
      </div>
      <div className = "resultBox">
      <h2>Aggregated Expenses</h2>
      <ResultDisplay result = {aggregatedResultObj}></ResultDisplay>
      </div>
      <div className = "filterTab">
      <h2>Filter Expense List</h2>
      <Input onChange = {handleInputChange}></Input>
      </div>
      <div>
      <DataTable tableData = {expenseData} tableColumns = {["exp_name", "amount"]} onDetailsClick = {handleDetailsButtonClick}></DataTable>
      </div>
    </div>
  );
}

export default App;
