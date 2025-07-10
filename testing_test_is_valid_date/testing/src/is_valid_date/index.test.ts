import {isValidDate} from "@/is_valid_date";

describe("determineGeneration", () => {
  describe("on target test", () => {
    test("year: 2025, month: 7, day: 11, boolean: true", () => {
      expect(isValidDate(2025, 7, 11)).toBe(true);
    });
  });
});
