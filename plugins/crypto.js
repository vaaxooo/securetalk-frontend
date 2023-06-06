import crypto from 'crypto';
export default ({ app }, inject) => {
    const encryptHash = (text) => {
        text = JSON.stringify(text);
        const cipher = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    };

    const decryptHash = (text) => {
        const decipher = crypto.createDecipher('aes-256-cbc', process.env.ENCRYPTION_KEY);
        let decrypted = decipher.update(text, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return JSON.parse(decrypted);
    }

    inject('encryptHash', encryptHash);
    inject('decryptHash', decryptHash);
}