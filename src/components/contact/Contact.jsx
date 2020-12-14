import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './Contact.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const json = await response.json();
      setData(json.slice(0, 3));
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    if (name.length < 3) {
      alert('Name is too small!');
    } else if (comment.length > 300) {
      alert('Your meassage is longer than 300 words!');
    }
    alert('Thanks for contacting us!');
    e.preventDefault();
  };
  return (
    <div className="contact-section">
      <div className="wrapper">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            rows="5"
            required
            placeholder="Tell me more about your needs..."
            style={{ height: '160px' }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className="button-wrapper">
            <button type="submit">Send Message</button>
          </div>
        </form>
        <h3 style={{ textAlign: 'center', fontSize: '3.2rem' }}>Our Clients</h3>
        {data &&
          data.map((user) => (
            <div style={{
              padding: '20px',
              margin: '15px',
              background: '#000',
              display: 'flex',
              flexDirection: 'column',
              fontSize: '1.6rem'
            }}>
              <p>ID - {user.id}</p>
              <p>Name - {user.name}</p>
              <p>Username - {user.username}</p>
              <p>email - {user.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Contact;
