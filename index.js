const reCommonPrefixes = /^(account|accounts|app|auth|dashboard|id|login|secure|signin|sso|www)\./

module.exports = function stripCommonPrefixes (hostname) {
  return hostname.replace(reCommonPrefixes, '')
}
