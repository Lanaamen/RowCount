import { describe, it, expect } from "vitest";
import { increment, decrement, reset} from "../src/counter.js";

describe("increment", () => {
  it("increases the count by 1", () => {
    expect(increment(3)).toBe(4);
  });
});

describe("decrement", () => {
  it("decreases the count by 1", () => {
    expect(decrement(3)).toBe(2);
  });

  it("does not decrease below 0", () => {
    expect(decrement(0)).toBe(0);
    expect(decrement(-1)).toBe(0);
  });
});

describe("reset", () => {
  it("resets the count to 0", () => {
    expect(reset()).toBe(0);
  });
});