const crypto = require("crypto");

function hashIssue(issueData) {
  return crypto.createHash("sha256").update(JSON.stringify(issueData)).digest("hex");
}

module.exports = { hashIssue };
