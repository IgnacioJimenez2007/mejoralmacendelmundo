import { Table } from "./table"

export const Inventario = ({ info, editarInfo, borrarInfo }) => {
    const totalProductos = info.length
    const totalUnidades = info.reduce((acc, p) => acc + Number(p.cantidad || 0), 0)
    const valorTotal = info.reduce(
        (acc, p) => acc + Number(p.precio || 0) * Number(p.cantidad || 0),
        0
    )

    return (
        <section>
            <h2>Resumen del Inventario</h2>
            <div>
                <p>Productos distintos: {totalProductos}</p>
                <p>Unidades totales en stock: {totalUnidades}</p>
                <p>Valor total del inventario: ${valorTotal.toFixed(2)}</p>
            </div>
            <Table info={info} editarInfo={editarInfo} borrarInfo={borrarInfo} />
        </section>
    )
}