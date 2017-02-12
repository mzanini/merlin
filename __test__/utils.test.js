import { rollFourSixSidedDie, rollDie, rollPercentile, extractRace } from "../app/js/utils.js";

test('rollDie returns random value between 1 and argument', () => {
  var roll = rollDie(5);
  expect(roll).toBeGreaterThanOrEqual(1);
  expect(roll).toBeLessThanOrEqual(5);
});

test('rollFourSixSidedDie returns random value between 4 and 24', () => {
  var roll = rollFourSixSidedDie();
  expect(roll).toBeGreaterThanOrEqual(4);
  expect(roll).toBeLessThanOrEqual(24);
});

test('rollPercentile gives random number between 1 and 100', () => {
  var roll = rollPercentile();
  expect(roll).toBeGreaterThanOrEqual(1);
  expect(roll).toBeLessThanOrEqual(100);
});

test('Extract race gives real name of race without pluses', () => {
  expect(extractRace("Hobbit +3 +1 +1")).toBe("Hobbit");
  expect(extractRace("Elf +1 +1")).toBe("Elf");
});
