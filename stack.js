// Nome: Rachel Moreira	    RA: 081180045 	EC8  Linguagem de Programação IV 
// Nome: Renan Castro       RA: 081180029
// Nome: Wellison Sousa 	RA: 081180040
// Nome: Wesley Rogério	    RA: 081180035


// Exercício: Faça uma pilha usando nodejs

function CustomStack() {
    var items = [];
    function push(value) {
        items[items.length] = value;
    }

    function pop() {
        if (items.length === 0) throw Error('There are no items in the stack.');
        var lastItem = null;
        items = items.filter((item, index) => {
            if (index == items.length - 1) {
                lastItem = item;
                return;
            }
            return item;
        });

        return lastItem;
    }

    function lastItem() {
        if (items.length === 0) throw Error('There are no items in the stack.');
        return items[items.length - 1];
    }

    return { push: push, pop: pop, lastItem: lastItem }
}

var stack = new CustomStack();

stack.push(200);
stack.push(100);

console.log(stack.pop());
console.log(stack.pop());