const calculator = {
    add: function(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
            return 'Input must be numeric values only';
        return a + b;
    },

    subtract: function(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
            return 'Input must be numeric values only';
        return a - b;
    },

    divide: function(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
            return 'Input must be numeric values only';

        if (b === 0)
            return 'Division by 0 not allowed';
        return a / b;
    },

    multiply: function(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number')
            return 'Input must be numeric values only';
        return a * b;
    }
}

export default calculator;