class StringBuilder {
    #value;

    constructor(value) {
        this.#value = value;
    };

    getValue() {
        return this.#value;
    };

    padEnd(str){
        this.#value += str;
    };

    padStart(str){
        str + this.#value;
    };

    padBoth(str){
        this.padStart + this.padEnd;
    }
};

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="