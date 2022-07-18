// pop()
// push()
// getMin()

const Stack = {
    st: [],
    minSt: [],
    push: function (value) {
        if (this.st.length == 0) this.minSt.push(value);

        this.st.push(value);
        const levelMin = this.minSt[this.minSt.length - 1];
        if (levelMin && levelMin > value) {
            this.minSt.push(value);
        }
    },
    pop: function () {
        const last = this.st.pop();
        const levelMin = this.minSt[this.minSt.length - 1]
        if (levelMin == last) {
            this.minSt.pop();
        }
        return last;
    },
    getMin: function () {
        return this.minSt[this.minSt.length - 1]
    }
}

Stack.push(2);
Stack.push(32);
Stack.push(12);
Stack.push(1);
Stack.push(3);

console.log("Min : ", Stack.getMin())
console.log("Pop : ", Stack.pop())
console.log("Min : ", Stack.getMin())
console.log("Pop : ", Stack.pop())
console.log("Min : ", Stack.getMin())

