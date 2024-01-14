import { describe, expect, test } from "vitest";
import { dateParser } from "../dateParser";

describe("util tests", () => {
  test("should return an empty string for undefined input", () => {
    expect(dateParser(undefined)).toEqual("");
  });

  test("should parse and format a valid date string", () => {
    const inputDateString = "2022-01-12T15:30:00";
    const expectedFormattedDate = "2022-01-12 15:30";
    expect(dateParser(inputDateString)).toEqual(expectedFormattedDate);
  });
});
