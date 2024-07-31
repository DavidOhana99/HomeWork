
(function () {
    'use strict'
    function bankCreator() {
        return {
            balance: 0,
            performTransaction: function (type, amount) {
                if (type == 'deposit') {
                    this.balance += amount;
                }
                else if (type == 'withdraw') { this.balance -= amount; }

                console.log(`your balance is ${this.balance}`);
            }




        };
    }

    function transaction(type, amount) {
        if (type == 'deposit') {
            this.balance += amount;
        }
        else if (type == 'withdraw') { this.balance -= amount; }

        console.log(`your balance is ${this.balance}`);
    }



    const checking = bankCreator();
    checking.performTransaction('deposit', 100);
    const checking2 = bankCreator();
    checking2.performTransaction('deposit', 500);
    const checkingdeposit50 = transaction.bind(checking, 'deposit', 50);
    checkingdeposit50();
    transaction.call(checking, 'deposit', 20);
    transaction.apply(checking, ['deposit', 50]);

}());