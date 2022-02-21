describe('Transaction', function() {
 it('adds new object to transactions', function() {
     account.balance = 1000
     account.deposit(500)
     expect(account.transactions).toEqual([{
         date: '',
         type: '',
         balance: ''
     }])
 })
})