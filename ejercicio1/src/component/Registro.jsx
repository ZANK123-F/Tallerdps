import React, { useState, useEffect } from "react";

function Registro({ movimientos }) { // Cambio de nombre del componente
  // Estado para almacenar el saldo total
  const [saldoTotal, setSaldoTotal] = useState(0);

  // Función para calcular el saldo total
  useEffect(() => {
    const total = movimientos.reduce((acc, movimiento) => {
      if (movimiento.tipo === "Gasto") {
        return acc - movimiento.cantidad;
      } else {
        return acc + movimiento.cantidad;
      }
    }, 0); // Valor inicial del acumulador
    setSaldoTotal(total);
  }, [movimientos]);

  return (
    <div>
      <h2>Resumen Mensual</h2>
      <h3>Ingresos</h3>
      <ul>
        {movimientos
          .filter((movimiento) => movimiento.tipo === "Ingreso")
          .map((movimiento, index) => (
            <li key={index}>
              <strong>Cantidad:</strong> {movimiento.cantidad},{" "}
              <strong>Categoría:</strong> {movimiento.categoria},{" "}
              <strong>Fecha:</strong> {movimiento.fecha},{" "}
              <strong>Descripción:</strong> {movimiento.descripcion}
            </li>
          ))}
      </ul>
      <h3>Gastos</h3>
      <ul>
        {movimientos
          .filter((movimiento) => movimiento.tipo === "Gasto")
          .map((movimiento, index) => (
            <li key={index}>
              <strong>Cantidad:</strong> {movimiento.cantidad},{" "}
              <strong>Categoría:</strong> {movimiento.categoria},{" "}
              <strong>Fecha:</strong> {movimiento.fecha},{" "}
              <strong>Descripción:</strong> {movimiento.descripcion}
            </li>
          ))}
      </ul>
      <h3>Saldo Total: {saldoTotal}</h3>
    </div>
  );
}

export default Registro; // Cambio de nombre del componente en la exportación
