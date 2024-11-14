import React from 'react'

function calculateProbabilities(n, m) {
    // Initialize a 2D array to store the probabilities
    let dp = Array.from({ length: m + 1 }, () => Array(m * n + 1).fill(0));
    // Base case: there's one way to get a sum of 0 with 0 dice
    dp[0][0] = 1;
    // Fill the dp table
    for (let dice = 1; dice <= m; dice++) {
        for (let sum = dice; sum <= dice * n; sum++) {
            for (let face = 1; face <= n; face++) {
                if (sum - face >= 0) {
                    dp[dice][sum] += dp[dice - 1][sum - face];
                }
            }
        }
    }
    // Calculate the total number of possible outcomes
    let totalOutcomes = Math.pow(n, m);
    // Calculate the probabilities
    let probabilities = {};
    for (let sum = m; sum <= m * n; sum++) {
        probabilities[sum] = dp[m][sum] / totalOutcomes;
    }

    return (
        probabilities
    );
}

// Example usage:
let n = 6; // Number of sides on the dice
let m = 2; // Number of dice
let probabilities = calculateProbabilities(n, m);
console.log(probabilities);

export default calculateProbabilities