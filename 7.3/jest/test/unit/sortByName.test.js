const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Should handle equal names", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Властелин Колец",
        "Гарри Поттер",
      ])
    ).toEqual([
      "Властелин Колец",
      "Властелин Колец",
      "Гарри Поттер",
    ]);
  });

  it("Should handle empty array", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it("Should handle single element array", () => {
    expect(sorting.sortByName(["Гарри Поттер"])).toEqual(["Гарри Поттер"]);
  });

  it("Should handle case sensitivity (strings that are equal after toLowerCase)", () => {
  const result = sorting.sortByName([
    "гарри поттер",
    "Гарри Поттер",
    "Властелин Колец",
  ]);
  
  expect(result[0]).toBe("Властелин Колец");
  expect(result).toContain("Гарри Поттер");
  expect(result).toContain("гарри поттер");
  expect(result.length).toBe(3);
  expect(result).toEqual(expect.arrayContaining([
    "Властелин Колец",
    "Гарри Поттер",
    "гарри поттер"
  ]));
});

  it("Should not mutate original array", () => {
    const originalArray = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const originalCopy = [...originalArray];
    
    sorting.sortByName(originalArray);
    
    expect(originalArray).not.toEqual(originalCopy);
    expect(originalArray).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Should handle special characters", () => {
    expect(
      sorting.sortByName([
        "100 лет одиночества",
        "1984",
        "Анна Каренина",
      ])
    ).toEqual([
      "100 лет одиночества",
      "1984",
      "Анна Каренина",
    ]);
  });
});