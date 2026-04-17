"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2 } from "lucide-react";
import styles from "./LeadModal.module.css";
import { createLead } from "@/app/actions/leads";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMessage: string;
}

export default function LeadModal({ isOpen, onClose, prefilledMessage }: LeadModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await createLead(formData);

    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
      return;
    }

    // Success! Redirect directly to WhatsApp
    const encodedMessage = encodeURIComponent(prefilledMessage);
    window.location.href = `https://wa.me/529991725555?text=${encodedMessage}`;
    
    // Cleanup in case user comes back
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className={styles.modal}
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
              <X size={24} />
            </button>

            <span className={styles.title}>Estás a un paso</span>
            <h2 className={styles.headline}>Hablemos de tu proyecto.</h2>
            <p className={styles.desc}>Déjanos tus datos básicos y te conectaremos instantáneamente con un asesor a través de WhatsApp.</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre Completo</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  className={styles.input} 
                  required 
                  placeholder="Ej. Carlos Galarza"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="telefono">WhatsApp / Teléfono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  className={styles.input} 
                  required 
                  placeholder="A donde te podemos contactar"
                />
              </div>

              {error && <div className={styles.errorMsg}>{error}</div>}

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Preparando conexión... <Loader2 className="spinner" size={18} /></>
                ) : (
                  <>Ir a WhatsApp <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
