const crypto = require("crypto");

/** Default token length */
const DEFAULT_LENGTH = 256;

/** Minimum token length */
const MINIMUM_LENGTH = 32;

/** Short token */
const SHORT = 32;

/** Long token */
const LONG = 512;

/**
 * Generates a random token using crypto.randomBytes
 *
 * @param {number} length
 * @return {number}
 */
function token(length = DEFAULT_LENGTH) {
  if (length < MINIMUM_LENGTH) {
    throw new TypeError("Invalid length");
  }

  const hexLength = Math.ceil(length * 0.5);
  return new Promise((resolve, reject) => {
    crypto.randomBytes(hexLength, (err, buffer) => {
      if (err) {
        return reject(err);
      }
      return resolve(buffer.toString("hex"));
    });
  });
}

module.exports = {
  DEFAULT_LENGTH,
  MINIMUM_LENGTH,

  SHORT,
  LONG,

  create: token
};
