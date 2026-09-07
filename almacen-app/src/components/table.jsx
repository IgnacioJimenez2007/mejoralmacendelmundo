export const Table = ({ info, editarInfo, borrarInfo }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Producto</th><th>Precio</th><th>Stock</th><th></th>
                </tr>
            </thead>
            <tbody>
                {info.length === 0 && (
                    <tr><td colSpan={4}>No hay productos registrados</td></tr>
                )}
                {info.map((producto) => (
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td>
                            <button onClick={() => editarInfo(producto)}>Editar</button>
                            <button onClick={() => borrarInfo(producto.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
