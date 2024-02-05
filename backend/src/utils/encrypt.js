import bcrypt from "bcrypt"

export const encryptPassword = async (password) => {
    let salt = await bcrypt.genSalt(10);
    let tokenPwd = await bcrypt.hash(password, salt);
    let passwordEncrypted = JSON.stringify(tokenPwd);
    return passwordEncrypted
}

export const comparePassword = async (password, passwordHash) => {
    const validPassword = await bcrypt.compare(password, JSON.parse(passwordHash));
    return validPassword
}