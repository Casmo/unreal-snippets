import React, { useState, useEffect} from 'react'

import { ClipboardDocumentCheckIcon, ClipboardDocumentIcon } from '@heroicons/react/20/solid'

export default function Copy ({text}) {

    const [copied, setCopied] = useState(false);

    const copyText = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
    }

    useEffect(() => {
        let timeout;
        if (copied) {
            timeout = setTimeout(() => { setCopied(false); }, 2000);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [copied]);

    return (
        <>
            { copied ? (<ClipboardDocumentCheckIcon title="Copied!" onClick={copyText} className="h-4 w-4 text-green-300" />) : (<ClipboardDocumentIcon title="Copy" onClick={copyText} className="h-4 h-4" />) }
        </>
    );
}