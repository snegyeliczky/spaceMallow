import { describe, expect, test } from "vitest";
import { createNationList } from "../createNationList";

describe("createNationList tests", () => {
  test("if nations undefinied return empty array", () => {
    expect(createNationList(undefined)).toEqual([]);
  });

  test("it remuve duplication", () => {
    const testArray = [
      {
        nationalities: ["United States"],
        id: "1",
      },
      {
        nationalities: ["United States"],
        id: "2",
      },
      {
        nationalities: ["Malaysia"],
        id: "3",
      },
    ];
    expect(createNationList(testArray)).toEqual(["United States", "Malaysia"]);
  });

  test("if remuves empty string and empty array", () => {
    const testArray = [
      {
        nationalities: [""],
        id: "1",
      },
      {
        nationalities: [],
        id: "2",
      },
      {
        nationalities: ["Malaysia"],
        id: "3",
      },
    ];
    expect(createNationList(testArray)).toEqual(["Malaysia"]);
  });
});
