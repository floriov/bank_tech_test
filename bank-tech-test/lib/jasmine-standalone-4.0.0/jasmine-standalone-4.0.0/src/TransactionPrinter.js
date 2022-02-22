class TransactionPrinter {

    print(transaction) {
        console.log(`${this.date(transaction)} || ${this.amount(transaction)} || ${this.balance(transaction)}`);
    }

    date(transaction) {
    day = String(transaction.date().getDate()).padStart(2, '0');
    month = String(transaction.date().getMonth() + 1).padStart(2, '0');
    year = transaction.date().getFullYear();
    return `${day}/${month}/${year}`
    }

    amount(transaction) {
        if (transaction.isDeposit()) {
        return `${transaction.amount().toFixed(2)} ||`;
    } else if (transaction.isWithdrawal()) {
        return `|| ${(-transaction.amount()).toFixed(2)}`;
    };
    };

    balance(transaction) {
    return `${transaction.newBalance().toFixed(2)}`
    };
};


