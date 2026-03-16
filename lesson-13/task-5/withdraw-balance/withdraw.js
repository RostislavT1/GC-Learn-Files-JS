export const withdraw = (clients, balances, client, amount) => {
    const clientIndex = clients.indexOf(client);
    if (balances[clientIndex] - amount >= 0 && typeof amount === "number") {
        balances[clientIndex] -= amount;
        return balances[clientIndex];
    }
    return -1;
};

// examples
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])
