"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Calculo from "@/component/Registro";

export default function Home() {
  // Estado para almacenar los movimientos
  const [movimientos, setMovimientos] = useState([]);
  const [tipo, setTipo] = useState("Ingreso");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Función para registrar un nuevo movimiento
  const registrarMovimiento = () => {
    const nuevoMovimiento = {
      tipo,
      cantidad: parseFloat(cantidad),
      categoria,
      fecha,
      descripcion,
    };
    setMovimientos([...movimientos, nuevoMovimiento]);
    // Limpiar los campos después de registrar el movimiento
    setTipo("Ingreso");
    setCantidad("");
    setCategoria("");
    setFecha("");
    setDescripcion("");
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Presupuesto Mensual</h1>
      <div className={styles.formulario}>
        <div className={styles.campos}>
          <label className={styles.text}>Tipo:</label>
          <select
            className={styles.inputField}
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="Ingreso">Ingreso</option>
            <option value="Gasto">Gasto</option>
          </select>
        </div>
        </div>
        <div className={styles.campos}>
          <label className={styles.text}>Cantidad:</label>
          <input
            className={styles.inputField}
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        
          <div className={styles.campos}>
            <label className={styles.text}>Categoría:</label>
            <select
              className={styles.inputField}
              type=""
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}>

            <option value="alimentación">Ingreso</option>
            <option value="transporte">Gasto</option>
            <option value="entretenimiento">Gasto</option>
            <option value="calzado">Gasto</option>
            <option value="ver  a messi">Gasto</option>
            
              </select>
              
            
          </div>
        
        <div className={styles.campos}>
          <label className={styles.text}>Fecha:</label>
          <div
            className={styles.inputField}
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}> 
            

        </div>
        <div className={styles.campos}>
          <label className={styles.text}>Descripción:</label>
          <input
            className={styles.inputField}
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={registrarMovimiento}>
          Registrar
        </button>
      </div>
      <Calculo movimientos={movimientos} />
    </main>
  );
}