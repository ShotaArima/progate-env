import {countWord} from "@/count_word";

describe("determineGeneration", () => {
  describe("on target test", () => {
    test("text: Tokyo City, targetWord: Tokyo, count: 1", () => {
      expect(countWord("Tokyo City", "Tokyo")).toBe(1);
    });
    test("text: Tokyo City in Tokyo, targetWord: Tokyo, count: 2", () => {
      expect(countWord("Tokyo City in Tokyo", "Tokyo")).toBe(2);
    });
  });
  describe("non target test", () => {
    test("text: Tokyo City, targetWord: Yokohama, count: 0", () => {
      expect(countWord("Tokyo City", "Yokohama")).toBe(0);
    });
  });
  describe("empty string", () => {
    test("text: , targetWord: Tokyo, count: -1", () => {
      expect(countWord("", "Tokyo")).toBe(-1);
    });
  });
});
