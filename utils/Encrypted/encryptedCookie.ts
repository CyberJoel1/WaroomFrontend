import * as crypto from "crypto-js";


export class EncryptedToken{

     public static encryptedToken(token: string): string{
        let secret: string = process.env.SECRET_COOKIE || '';
        let firma= crypto.RC4.encrypt(token,secret).toString();
        return firma;
        
    }

    public static desencryptedToken(cookie: string): string{
            let secret: string = process.env.SECRET_COOKIE || '';
            let firma = crypto.RC4.decrypt(cookie, secret);
            return firma.toString(crypto.enc.Utf8);
    }
}


