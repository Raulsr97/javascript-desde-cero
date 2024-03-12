// Exercise: Transaction analysis

const transactions = [
    {id: 1, description: 'Grocery Shopping', amount: -500 },
    {id: 2, description: 'Salary Deposit', amount: 3000 },
    {id: 3, description: 'Utility bill Payment', amount: -100 },
    {id: 4, description: 'Online Purchase', amount: -50 }
]

// 1. Calculate total balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance: ', totalBalance);

// 2. Find the largest transaction(income or expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])

console.log('Largest Transaction: ', largestTransaction);

// 3. Filter purchase transactions

const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log('Purchase Transactions: ', purchaseTransactions);

// 4. Find a transaction by Description

const transactionByDescription = transactions.find(transaction => transaction.description === 'Online Purchase')

console.log('Specific Transaction: ', transactionByDescription);

//  5.find the index of a transaction by Amount

const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -100)
console.log('Index Transaction With Amount -100: ', indexTransactionWithAmount);

// 6. update transaction descriptions

transactions.forEach(transaction => {
    if (transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
})

console.log('Updated transactions: ', transactions );