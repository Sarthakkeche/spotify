class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposit of $${amount} successful. New balance: $${this.balance}`;
        } else {
            return 'Deposit amount must be positive.';
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                return `Withdrawal of $${amount} successful. New balance: $${this.balance}`;
            } else {
                return 'Insufficient funds for withdrawal.';
            }
        } else {
            return 'Withdrawal amount must be positive.';
        }
    }

    checkBalance() {
        return `Account balance for ${this.accountHolder}: $${this.balance}`;
    }
}

// Example usage:
const account = new BankAccount('John Doe', 1000);
console.log(account.checkBalance()); // Output: "Account balance for John Doe: $1000"
console.log(account.deposit(500)); // Output: "Deposit of $500 successful. New balance: $1500"
console.log(account.withdraw(200)); // Output: "Withdrawal of $200 successful. New balance: $1300"
console.log(account.withdraw(1500)); // Output: "Insufficient funds for withdrawal."
console.log(account.deposit(-100)); // Output: "Deposit amount must be positive."
console.log(account.withdraw(0)); // Output: "Withdrawal amount must be positive."
