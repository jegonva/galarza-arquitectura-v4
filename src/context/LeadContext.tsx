"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import LeadModal from "@/components/LeadModal";

interface LeadContextType {
  openLeadModal: (customMessage?: string) => void;
  closeLeadModal: () => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hola Grupo Galarza, me gustaría agendar una asesoría.");

  const openLeadModal = (customMessage?: string) => {
    if (customMessage) setMessage(customMessage);
    setIsOpen(true);
  };

  const closeLeadModal = () => setIsOpen(false);

  return (
    <LeadContext.Provider value={{ openLeadModal, closeLeadModal }}>
      {children}
      <LeadModal isOpen={isOpen} onClose={closeLeadModal} prefilledMessage={message} />
    </LeadContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadContext);
  if (context === undefined) {
    throw new Error("useLeadModal must be used within a LeadProvider");
  }
  return context;
}
