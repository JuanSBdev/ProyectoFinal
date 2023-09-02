import { useState } from 'react'
import styles from './CreateUser.module.css'

const CreateUser = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Implementa aquí tu lógica de inicio de sesión
    // Después del inicio de sesión exitoso, llama a onClose() para cerrar el modal
  }

  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.modal}>
        <div className={styles.divCloseBtn}>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        <h2>CreateUser</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            className={styles.inputForm}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contraseña:</label>
          <input
            className={styles.inputForm}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.buttonContainer}>
            <button className={styles.submitButton} type="submit">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
