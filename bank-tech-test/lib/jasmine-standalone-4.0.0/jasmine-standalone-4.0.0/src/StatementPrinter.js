
class StatementPrinter {

    constructor (transactionPrinter) {
        this.transactionPrinter = transactionPrinter;
    };

    transactionPrinter() {
        return this.transactionPrinter;
    };

    print(transactions) {
        if (transactions.length == 0) {
        console.log("No transactions on this account!");
        return;
        };
        this.logHeaders();
        this.logTransactions(transactions);
    };

    logHeaders() {
        console.log("date || credit || debit || balance");
    };

    logTransactions(transactions) {
        transactions.forEach(function(transaction) {
        this.transactionPrinter.print(transaction);
        }.bind(this));
    };

    

}