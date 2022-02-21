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
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes(
      searchString
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
    );
}

/** Check if mobile or desktop */
function isMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem));
}

const supplyGroupColors = {
  additions: "#FF9F0A",
  additive: "#30B0C7",
  binder: "#595959",
  coarseAggregate: "#7B7B7B",
  fineAggregate: "#989898",
  water: "#3D9AFF",
};

export { matchesSubstringIgnoreCaseAndAccents, isMobile, supplyGroupColors };
