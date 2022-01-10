import * as React from "react";
import { useState, useEffect } from "react";
import { encrypt, decrypt } from "crypto-js/aes";
import { enc } from "crypto-js";

interface EncryptContextType {
    readonly key: string;
    readonly setKey: (key: string) => void;
    readonly encrypt: (msg: string) => string;
    readonly decrypt: (msg: string) => string;
}

const defaultContext: EncryptContextType = {
    key: "",
    setKey: (key: string) => { return; },
    encrypt: (msg: string) => { return ""; },
    decrypt: (msg: string) => { return ""; },
}

const EncryptContext = React.createContext<EncryptContextType>(defaultContext);
export const useEncrypt = (): EncryptContextType => React.useContext(EncryptContext);

export function EncryptProvider({ children }: React.HTMLAttributes<HTMLOrSVGElement>): JSX.Element {
    const [key, setKey] = useState("");

    const contextWithInit = { ...defaultContext, setKey: setKey };
    const [value, setValue] = useState<EncryptContextType>(contextWithInit);

    useEffect(() => {
        if (!key) return;
        
        function encryptMsg(msg: string) {
            return encrypt(msg, key).toString()
        }

        function decryptMsg(msg: string) {
            return decrypt(msg, key).toString(enc.Utf8)
        }

        const context: EncryptContextType = {
            key: key,
            setKey: setKey,
            encrypt: encryptMsg,
            decrypt: decryptMsg,
        };

        setValue(context);
    }, [key]);

    return <EncryptContext.Provider value={value}>{children}</EncryptContext.Provider>
}