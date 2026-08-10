import { useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './ContactChoice.module.css'

const phoneNumber = '18137675229'

function ContactChoice({ children, className, message, onClick }) {
  const dialogRef = useRef(null)
  const encodedMessage = encodeURIComponent(message)
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  const smsUrl = `sms:+${phoneNumber}?body=${encodedMessage}`

  const openDialog = (event) => {
    event.preventDefault()
    onClick?.()
    dialogRef.current?.showModal()
  }

  const closeDialog = () => dialogRef.current?.close()

  return (
    <>
      <a className={className} href="#contact-options" onClick={openDialog}>
        {children}
      </a>

      {createPortal(
        <dialog
          className={styles.dialog}
          ref={dialogRef}
          onClick={(event) => {
            if (event.target === dialogRef.current) closeDialog()
          }}
        >
          <div className={styles.content}>
            <div className={styles.heading}>
              <p>Place your order</p>
              <h2>Choose how to message us.</h2>
            </div>

            <div className={styles.choices}>
              <a href={whatsAppUrl} target="_blank" rel="noreferrer" onClick={closeDialog}>
                <span>WhatsApp</span>
              </a>
              <a href={smsUrl} onClick={closeDialog}>
                <span>SMS</span>
              </a>
            </div>

            <button type="button" onClick={closeDialog}>Cancel</button>
          </div>
        </dialog>,
        document.body,
      )}
    </>
  )
}

export default ContactChoice
