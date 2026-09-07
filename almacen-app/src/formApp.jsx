import { useEffect, useState } from "react"
import { Form } from "./components/form"
import { Inventario } from "./components/inventario"
import {
    actualizarProducto, crearProducto,
    eliminarProducto, suscribirProductos,
} from "./firebase/productosService"

const inicial = { nombre: "", precio: "", cantidad: "" }

export const AlmacenApp = () => {
    const [info, setInfo] = useState([])
    const [cargando, setCargando] = useState(true)
    const [productoEditando, setProductoEditando] = useState(null)

    useEffect(() => {
        const unsubscribe = suscribirProductos((productos) => {
            setInfo(productos)
            setCargando(false)
        })
        return () => unsubscribe()
    }, [])

    const guardarInfo = async (valores) => {
        if (productoEditando) {
            await actualizarProducto(productoEditando.id, valores)
            setProductoEditando(null)
        } else {
            await crearProducto(valores)
        }
    }

    const editarInfo = (producto) => setProductoEditando(producto)
    const cancelarEdicion = () => setProductoEditando(null)
    const borrarInfo = async (id) => {
        await eliminarProducto(id)
        if (productoEditando?.id === id) setProductoEditando(null)
    }

    return (
        <>
            <h1>Almacén de Barrio</h1>
            <Form
                key={productoEditando?.id ?? "nuevo"}
                inicial={productoEditando ?? inicial}
                guardarInfo={guardarInfo}
                enEdicion={Boolean(productoEditando)}
                cancelarEdicion={cancelarEdicion}
            />
            {cargando ? (
                <p>Cargando productos...</p>
            ) : (
                <Inventario info={info} editarInfo={editarInfo} borrarInfo={borrarInfo} />
            )}
        </>
    )
}