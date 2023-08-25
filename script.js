// Sample data structure to store user information and expenses
const users = [
    { id: 1, name: "Alice", balance: 0 },
    { id: 2, name: "Bob", balance: 0 },
    { id: 3, name: "Charlie", balance: 0 }
  ];
  
  const expenses = [];
  
  // Function to add an expense
  function addExpense(payerId, amount, beneficiaries) {
    const totalBeneficiaries = beneficiaries.length;
    const individualShare = amount / (totalBeneficiaries + 1); // Including payer
  
    // Update payer's balance
    users.find(user => user.id === payerId).balance -= amount;
  
    // Update beneficiaries' balances
    beneficiaries.forEach(beneficiaryId => {
      users.find(user => user.id === beneficiaryId).balance += individualShare;
    });
  
    expenses.push({ payerId, amount, beneficiaries });
  }
  
  // Function to print users' balances
  function printBalances() {
    users.forEach(user => {
      console.log(`${user.name}: ${user.balance.toFixed(2)}`);
    });
  }
  
  // Example usage
  addExpense(1, 100, [2, 3]); // Alice pays $100, split between Bob and Charlie
  addExpense(2, 50, [1]);     // Bob pays $50, only Alice benefits
  
  console.log("Balances after expenses:");
  printBalances();
  