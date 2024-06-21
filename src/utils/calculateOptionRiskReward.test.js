import { expect, test } from 'vitest'
import { calculateOptionRiskReward } from './calculateOptionRiskReward'

test('tests long call strike profits/losses', () => {
  const longCallOption = {
    id: 0,
    strike_price: 100,
    type: 'Call',
    bid: 10.05,
    ask: 12.04,
    long_short: 'long',
  }
  expect(calculateOptionRiskReward(longCallOption).labels[1]).toBe(100)
  expect(calculateOptionRiskReward(longCallOption).datasets[0].data).toEqual([-12.04, -12.04, 0, 12.96])
})

test('tests short put profits/losses', () => {
  const shortPutOption = {
    id: 2,
    strike_price: 103,
    type: 'Put',
    bid: 14,
    ask: 15.5,
    long_short: 'short',
  }
  expect(calculateOptionRiskReward(shortPutOption).labels[2]).toBe(103)
  expect(calculateOptionRiskReward(shortPutOption).datasets[0].data).toEqual([-14, 0, 14, 14])
})

test('tests short call profits/losses', () => {
  const shortCallOption = {
    id: 4,
    strike_price: 104.5,
    type: 'Call',
    bid: 12.1,
    ask: 14,
    long_short: 'short',
  }
  expect(calculateOptionRiskReward(shortCallOption).labels[1]).toBe(104.5)
  expect(calculateOptionRiskReward(shortCallOption).datasets[0].data).toEqual([12.1, 12.1, 0, -8.4])
})

test('tests long put profits/losses', () => {
  const longPutOption = {
    id: 3,
    strike_price: 105,
    type: 'Put',
    bid: 16,
    ask: 18,
    long_short: 'long',
  }
  expect(calculateOptionRiskReward(longPutOption).labels[2]).toBe(105)
  expect(calculateOptionRiskReward(longPutOption).datasets[0].data).toEqual([12, 0, -18, -18])
})
