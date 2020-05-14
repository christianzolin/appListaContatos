import React from 'react'

const capturaPrimeiraLetra = palavra => {
    return palavra[0].toUpperCase() + palavra.slice(1)
}

export default capturaPrimeiraLetra;