// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    const enteredEmail = event.target.email.value;
    setEmail(enteredEmail);
    setIsModalOpen(true);
    event.target.reset();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubscribe} className="newsletter-form">
        <label htmlFor="email">Tilmelding til nyhedsbrev:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Indtast din email..."
        />
        <button type="submit">Tilmeld</button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Bekræftelse</h2>
        <p>Du er nu tilmeldt med mailen: {email}</p>
        <button onClick={closeModal}>Luk</button>
      </Modal>
    </div>
  );
};

export default Newsletter;
