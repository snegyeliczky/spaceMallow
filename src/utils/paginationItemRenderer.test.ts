import { itemRender } from "./paginationItemRenderer";

describe("itemRender test", () => {
  it('should return an empty string for "prev" type', () => {
    const result = itemRender(1, "prev", "<div>Original Prev</div>");
    expect(result).toBe("");
  });

  it('should return an empty string for "next" type', () => {
    const result = itemRender(2, "next", "<div>Original Next</div>");
    expect(result).toBe("");
  });

  it("should return the original element for other types", () => {
    const originalElement = "<div>Original Element</div>";
    const result = itemRender(3, "page", originalElement);
    expect(result).toBe(originalElement);
  });
});
