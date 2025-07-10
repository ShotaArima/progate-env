import {determineGeneration} from "@/determine_generation";

describe("determineGeneration", () => {
  describe("equivalence class test", () => {
    test("Invalid age: age = -5", () => {
      expect(determineGeneration(-5)).toBe("Invalid age");
    });
    test("Child: age = 10", () => {
      expect(determineGeneration(10)).toBe("Child");
    });
    test("Young: age = 15", () => {
      expect(determineGeneration(15)).toBe("Young");
    });
    test("Adult: age = 40", () => {
      expect(determineGeneration(40)).toBe("Adult");
    });
  });

  describe("boundary value test", () => {
    test(" boundary: age = -1, age = 0", () => {
      expect(determineGeneration(-1)).toBe("Invalid age");
      expect(determineGeneration(0)).toBe("Child");
    });
    test("Child and Young boundary: age = 12, age = 13", () => {
      expect(determineGeneration(12)).toBe("Child");
      expect(determineGeneration(13)).toBe("Young");
    });
    test("Young and Adult boundary: age = 29, age = 30", () => {
      expect(determineGeneration(29)).toBe("Young");
      expect(determineGeneration(30)).toBe("Adult");
    });
  });
});
