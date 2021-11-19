import React, {createContext,useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [transaction, setTransaction] = useState([  ])
    const [transactionn, setTransactionn] = useState([])
    const addtrans = (data,catt) =>{
        if(catt == "Income")
        {
            setTransaction([...transaction, data]);
        }
        else if(catt == "Expense")
        {
            setTransactionn([...transactionn, data]);
        }
    }

    const value = {
        bank: [transaction, setTransaction],
        bankk: [transactionn, setTransactionn],
        addtrans:addtrans,
    }

    
    return (
        <DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>
        
    )
}