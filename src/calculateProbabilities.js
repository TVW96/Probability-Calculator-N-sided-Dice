import React from 'react';

function calculateProbabilities(n, m) {
    let dp = Array.from({ length: m + 1 }, () => Array(m * n + 1).fill(0));
    dp[0][0] = 1;

    for (let dice = 1; dice <= m; dice++) {
        for (let sum = dice; sum <= dice * n; sum++) {
            for (let face = 1; face <= n; face++) {
                if (sum - face >= 0) {
                    dp[dice][sum] += dp[dice - 1][sum - face];
                }
            }
        }
    }

    let totalOutcomes = Math.pow(n, m);
    let probabilities = [];

    for (let sum = m; sum <= m * n; sum++) {
        probabilities.push({ sum, probability: (dp[m][sum] / totalOutcomes).toFixed(4) });
    }

    return probabilities;
}

export default calculateProbabilities;