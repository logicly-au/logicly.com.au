export function getCompanyAge() {
  const startYear = 1996;
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}