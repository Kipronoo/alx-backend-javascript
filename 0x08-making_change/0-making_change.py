#!/usr/bin/python3
"""
Program to determine the fewest number of coins
"""


def makeChange(coins, total):
    """
    function to determine the fewest number of coins
    needed to meet a given amount total
    """
    if total <= 0:
        return 0
    dp = [float('inf')] * (total + 1)
    dp[0] = 0
    for number in range(1, total + 1):
        for coin in coins:
            if number >= coin:
                dp[number] = min(dp[number], dp[number - coin] + 1)
    return dp[total] if dp[total] != float('inf') else -1
