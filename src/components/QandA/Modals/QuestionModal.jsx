import React, {useState, useEffect} from 'react';
import "./QuestionModal.css";
import server from '../../../serverRequests.js';
import swal from 'sweetalert';


export default function QuestionModal ({productID, productName, onClose, showQModel}) {
  if (!showQModel) {
    return null
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  let data = {
    body: body,
    name: username,
    email: email,
    product_id: productID
  };

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])

  if (showQModel) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    server.post('/qa/questions', data)
      .then(response => {
        swal("🏆 Success! 🏆", "Thank you for your question!");
        onClose();
      })
      .catch(err => {
        swal('Uh oh...', 'We just caught an error.', 'error');
      })
  }

  const Username = (
    <label>
      <div className="inputs">Username:</div>
      <input
        className="user-input"
        type="text"
        name="username"
        maxLength={60}
        size={36}
        placeholder="Example: jackson11!"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <p className="static">For privacy reasons, do not use your full name or email address.</p>
    </label>
  )

  const Email = (
    <label>
      <div className="inputs">Email:</div>
      <input
        className="user-input"
        type="email"
        name="email"
        maxLength={60}
        size={40}
        placeholder="Why did you like the product or not?"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <p className="static">For authentication reasons, you will not be emailed</p>
    </label>
  )

  const Question = (
    <label>
      <div className="inputs">Question:</div>
      <textarea
        className="text-area"
        type="text"
        name="body"
        rows="10"
        cols="65"
        maxLength={1000}
        placeholder="Enter your question here..."
        value={body}
        onChange={e => setBody(e.target.value)}
        required
      />
    </label>
  )

  return (
    <div className={`modal ${showQModel ? 'show' : ''}`} >
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-header">
            <h3 className="modal-title">Ask Your Question</h3>
            <h4 className="modal-subtitle">about the {productName}</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {Username}
              {Email}
              {Question}
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
          <div className="modal-footer">
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}