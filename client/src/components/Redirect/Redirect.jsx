import React, { useState, useEffect } from 'react'

import Http from '../../utils/http.util'

const Redirect = (props) => {
    const [hasRedirectURL, setHasRedirectURL] = useState('')

    const getRedirectURL = async (hash) => {
        const headersOptions = {
            headers: {
                hash: hash
            }
        }

        await Http().get('/redirect', headersOptions)
            .then(res => {
                const url = res.data.url
                if (url) {
                    window.location.replace(url)
                }
            })
            .catch(err => {
                setHasRedirectURL(`${err.status} - URL ${err.statusText} - ${err.errorMsg}`)
            })
    }

    useEffect(() => {
        try {
            const hash = props.match.params.hash
            getRedirectURL(hash)
        } catch (err) {
            alert(`Something went wrong - ${err}`)
        }
    })

    return (
        <div>
            <p>{hasRedirectURL}</p>
        </div>
    )
}

export default Redirect
