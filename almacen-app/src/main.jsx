import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AlmacenApp } from './formApp'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AlmacenApp />
    </StrictMode>,
)
