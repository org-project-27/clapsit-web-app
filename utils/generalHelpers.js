//  Creates a random string of a specified length (defaulting to 5) using uppercase letters,
//  lowercase letters, and numbers.
export function generateUniqueId(length = 5) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Converts a string to kebab-case, making all characters lowercase and replacing spaces
// and non-alphanumeric characters with hyphens.
export function toKebabCase(str) {
  return str
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "");
}

// Transforms a snake_case string to camelCase by lowercasing the first segment and capitalizing
// the initial letter of subsequent segments.
export function toCamelCase(str) {
  return str
    .split("_")
    .map((part, index) =>
      index === 0
        ? part.toLowerCase()
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join("");
}

// Converts a snake_case string to PascalCase by capitalizing the first letter of each segment
// and joining them without separators.
export function toPascalCase(str) {
  return str
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

// Similar to toPascalCase, but it maintains the original casing of all characters after
// the first in each segment.
export function modifiedPascalCase(str) {
  return str
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

// convert a string by splitting the string on underscores, capitalizing the first
// letter of each word, and then joining them back together with a space.
export function toTitleCase(str) {
  if (str) {
    return str
      .toLowerCase()
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }
  return str;
}

// Converts an HTML string into a DOM element using DOMParser.
export function stringToElement(str) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html");
  return doc.body.firstChild;
}

// Creates a deep copy of an object or array using JSON serialization and deserialization.
export function deepCopy(model) {
  if(model) {
    return JSON.parse(JSON.stringify(model));
  }
  return model;
}

//  Logs a formatted message to the console, defaulting to an error type, for developer notifications
export function developerAnnounce(message, type = "error") {
  console[type](`🔴[Developer warn]: ${message}`);
}

// Helper function that extracts the initials of a full name
export function extractInitials(fullName = "") {
  if (!fullName || typeof fullName !== "string") {
    return "";
  }

  // Trim the full name and split into an array of words
  const nameParts = fullName.trim().split(/\s+/);

  if (nameParts.length === 0) {
    return ""; // Return an empty string if there are no parts found
  }

  // Get the first letter of the first name
  const firstInitial = nameParts[0][0].toUpperCase();

  // Get the last letter of the last name (only if there's more than one name part)
  const lastInitial =
    nameParts.length > 1
      ? nameParts[nameParts.length - 1][0].toUpperCase()
      : "";

  // Combine the initials
  return firstInitial + lastInitial;
}

export function capitalizeFirstLetter(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}

export function getShortOfFullName(name) {
  const words = name.trim().split(/\s+/); // split by spaces
  let initials = '';

  if (words.length > 0) initials += words[0][0];
  if (words.length > 1) initials += words[1][0];

  return initials.toUpperCase();
}

export function parseFullname(fullname) {
  const parsed = fullname.split(' ');
  return {
    first_name: parsed[0],
    mid_name: parsed.length > 2 ? parsed[1] : null,
    last_name: parsed[parsed.length - 1]
  }
}

export function reverseObject(obj) {
  let reversedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      reversedObj[obj[key]] = key;
    }
  }
  return reversedObj;
}

export function scrollToTarget(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
  } else {
      console.error("Element with ID " + targetId + " not found.");
  }
}

export function generateArrayForEmptyElems(count,arr) {
  const generatedArr = arr.filter(item => item !== "");

  if (generatedArr.length >= count) {
    return generatedArr;
  } else {
    return arr;
  }
}

export const getRandomBetween = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}