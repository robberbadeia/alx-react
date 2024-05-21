// Function to get the current year
export function getFullYear() {
  const year = new Date().getFullYear();
  return year;
}

// Function to return specific copy based on the isIndex flag
export function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}
