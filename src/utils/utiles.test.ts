import { describe, expect, test } from "vitest";

const example = {
  name: "Iam",
};
describe("util tests", () => {
  test("is exist", () => {
    expect(example).toBeDefined();
  });
});
