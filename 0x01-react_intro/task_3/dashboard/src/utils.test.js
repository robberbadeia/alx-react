import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("return current year", () => {
  expect(getFullYear()).toBe(2024);
});

test("return footer", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("return notifications", () => {
  expect(getFooterCopy()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
