const crypto = require('crypto');
export const emailToken = () => crypto.randomBytes(2).toString('hex');



