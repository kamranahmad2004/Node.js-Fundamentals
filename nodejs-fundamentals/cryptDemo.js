import crypto from "crypto";

// Hashing a password using createHash()
// const hash = crypto.createHash("sha256"); // SHA-256 - algorithm-> produces 256-bit output.. widely used for hashing passwords,msgs
// hash.update("password1234");
// console.log(hash.digest("hex"));

// Generate random Bytes from using randomBytes()
// crypto.randomBytes(16, (err, buff) => {
//   if (err) throw err;
//   console.log(buff.toString("hex"));
// });

// Data encrypting and decrypting
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encryptedData = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const decryptedData = (encryptingData) => {
  try {
    // const wrongKey = crypto.randomBytes(32);     // wrong key - can't decrypt just for testing purpose
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptingData, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (error) {
    console.error("Decryption failed: Incorrect key!");
  }
};

const message = "Hey! this is a secret message";
const encryptedMessage = encryptedData(message);
console.log(`Encrypted message: ${encryptedMessage}`);

const decryptedMessage = decryptedData(encryptedMessage);
console.log(`Decrypted message: ${decryptedMessage}`);
