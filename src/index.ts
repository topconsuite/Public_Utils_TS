/**
 *Returns true if searchString appears as a substring
 *of the result of converting this object to a String,
 *ignoring case and accents; otherwise, it returns false.
 * @param text text for search
 * @param searchString search string
 */
function matchesSubstringIgnoreCaseAndAccents(
  text: string,
  searchString: string,
): boolean {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .includes(
      searchString
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''),
    );
}

export default matchesSubstringIgnoreCaseAndAccents;
