## Bank Tech Test

## Installation and setup
 Clone the repo, install the dependenices:
 * git clone https://github.com/floriov/Bank-Tech-Test.git 
 * cd bank-tech-test
 * npm install

 ## Running tests
 run SpecRunner.html in the browser with Live Server

 ## Usage example
 > node 

 > .load ./lib/jasmine-standalone-4.0.0/jasmine-standalone-4.0.0/src/Account.js
 > .load ./lib/jasmine-standalone-4.0.0/jasmine-standalone-4.0.0/src/StatementPrinter.js
 > .load ./lib/jasmine-standalone-4.0.0/jasmine-standalone-4.0.0/src/Transaction.js
 > .load ./lib/jasmine-standalone-4.0.0/jasmine-standalone-4.0.0/src/TransactionPrinter.js

 > myAccount.deposit(100);
 > myAccount.withdraw(50);
 > myAccount.deposit(210);
 > myAccount.withdraw(10);
 
date || credit || debit || balance
etc...

 
## Design

 ### Account
 **Understands its balance and initializes and stores its transactions**
#### Public functions:
* deposit
* withdraw
* summary

### TransactionPrinter
Stores data from a specific transaction, knows the account balance, date it was created, amount and whether it was a deposit or withdrawal.
#### Attributes:
* data
* amount
* balance

### Printer
Understands how to format and print output to the client. Responsible for formatting and logging the transaction data into statements and converting amounts into money format.
* public methods:
printStatement 

## User Stories
As a client,
I want to be able to make a deposit, 
So that I can increase the balance on my account.

As a client, 
I want to be able to make a withdrawal,
So that I can take out money when I need to.

As a client,
I want to be able to see my bank statements,
So that I can keep track of my personal finances

As a client,
I want statements to show the transaction amount, type (deposit or withdrawal), date, and updated balance
So that I have a good overview of my financial history.

As a client, 
I want transactions listed with the most recent transaction first,
So that I can see what type of transactions I did last

## Testing 
<img width="1421" alt="Screenshot 2022-02-22 at 15 58 00" src="https://user-images.githubusercontent.com/97796341/155181534-bcd340b4-8c83-4512-83fa-b854fe460e44.png">

