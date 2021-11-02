import React, { useState, useRef } from 'react'
import validator from 'validator'

import Http from '../../utils/http.util'

const Home = () => {
    const [url, setUrl] = useState('')
    const [link, setLink] = useState('')
    const [isCopied, setIsCopied] = useState('')
    const spanResultURL = useRef(null)
    // const [error, setError] = useState(false)

    const handleUrlInputChange = e => {
        e.preventDefault()
        const inputUrl = e.target.value
        setUrl(inputUrl)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const validatorOptions = {
                protocols: ['http', 'https'],
                require_protocol: true
            }
            const validURL = validator.isURL(url, validatorOptions)

            if (!validURL) {
                throw new Error('Please ensure this url is correct and includes the http(s) protocol.')
            }

            await Http().post('/shorten', {
                url: url
            })
                .then(res => {
                    console.log(res)
                    const retrievedLink = res.data.hash
                    const newUrl = `${window.location.origin}/${retrievedLink}`
                    setLink(newUrl)
                    // setError(false)
                })
                .catch(err => {
                    // setError(true)
                    throw new Error(`${err.status} - ${err.statusText}\n ${err.errorMsg}`)
                })

        } catch (err) {
            // setError(true)
            alert(`There was a problem. ${err}`)
        }
    }

    const copyToClipboard = e => {
        spanResultURL.current.select()
        document.execCommand('copy')
        e.target.focus()
        setIsCopied('Copied!')
        e.preventDefault()
    }

    return (
        <div className="ShortyApp body-wrap">
            <header className="ShortyApp-header">
                <h1><span className="highlight">URL</span>shorty</h1>
                <small>...free and always will be</small>
            </header>
            <main className="ShortyApp-main">
                <form
                    onSubmit={handleSubmit}
                >
                    <fieldset>
                        <input
                            type="text"
                            name="url"
                            placeholder="Enter URL Including http(s) protocol"
                            onChange={handleUrlInputChange}
                        />
                        <input type="submit" value="shorten" />
                    </fieldset>
                    <fieldset className={link !== '' ? 'display-result' : 'hide-result'}>
                        <span id="result">{link}</span>
                        <button id="copy" onClick={copyToClipboard}></button>
                    </fieldset>
                </form>
            </main>
            <footer className="ShortyApp-footer">

            </footer>
        </div>
    )
}

export default Home
