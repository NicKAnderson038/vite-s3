import { useState } from 'react'
import QRCodeStyling from 'qr-code-styling'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/anderson.png'
import './App.css'

const qrCode = new QRCodeStyling({
    width: 500,
    height: 500,
    type: 'png',
    data: "https://www.andersongaragedoorservices.com/",
    image: logo,
    dotsOptions: {
        color: '#ffffff',
        type: 'rounded',
    },
    backgroundOptions: {
        color: "#000000",
    },
    cornersSquareOptions: {
        color: '#FF5F15',
        // type: "rounded"
    },
    imageOptions: {
        crossOrigin: 'anonymous',
        margin: 5,
    },
})

function App() {
    const [count, setCount] = useState(0)

    function qrcode() {
        qrCode.download({ name: 'qr-code', extension: 'png' })
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + S3 Hosting</h1>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
                <button onClick={qrcode}>
                    Download QR Code
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
