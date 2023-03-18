import React, { useState } from 'react'
import { FiCopy } from 'react-icons/fi'
import styles from './Email.module.css'

const EMAIL = 'contact@spacedrifter.band'
const EMAIL_FORMATTED = EMAIL.replace('@', '[at]')

function Email() {
    const [copied, setCopied] = useState(false)

    const handleClick = async () => {
        await navigator.clipboard.writeText(EMAIL)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 4000);
    }

    return (
        <div className={styles.container}>
            <span className={styles.email}>{copied ? 'Copied to clipboard!' : EMAIL_FORMATTED}</span>
            { !copied && <button title="Copy e-mail address to clipboard" className={styles.button} onClick={handleClick}><FiCopy /></button> }
        </div>
    )
}

export default Email