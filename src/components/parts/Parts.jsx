import React, { useState } from 'react';
import Modal from 'react-modal';

import './Parts.scss';
import './Modal.scss';
import { useEffect } from 'react';

Modal.setAppElement('#root');

function Parts() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const json = await response.json();
      setData(json.slice(0, 3))
    }
    fetchData()
  }, [])

  const toggleModal = (event) => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="projects-section">
      <div className="wrapper">
        <h2>Parts</h2>
        <div className="projects-wrapper">
          <div
            className="project engine"
            onClick={(event) => {
              setN(0)
              toggleModal(event)
            }}
          >
            <img
              src="https://www.jdmdistro.com/wp-content/uploads/2020/12/db185319-chevy-ls1-5-7l-v8-complete-engine-swap-complete-engine-swap-for-sale-uk-ireland-europe.jpg"
              alt=""
            />
          </div>
          <div
            className="project wheel"
            onClick={(event) => {
              setN(1)
              toggleModal(event)
            }}
          >
            <img
              src="https://www.jdmdistro.com/wp-content/uploads/2017/07/genuine-s15-silvia-rear-spat-valance-for-sale-uk-europe-ireland.jpg"
              alt=""
            />
          </div>
          <div
            className="project part"
            onClick={(event) => {
              setN(2)
              toggleModal(event)
            }}
          >
            <img
              src="https://www.jdmdistro.com/wp-content/uploads/2020/10/yjd4616701-nissan-180sx-s13-genuine-oem-kouki-rear-spoiler-wing-for-sale-uk-ireland-europe.jpg"
              alt=""
            />
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="Project"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
        { data && (
          <>
          <h2>JSON Data</h2>
          <button onClick={() => setIsOpen(false)}>x</button>
          <div className="row">
            <div className="info-wrapper">
              <h4>Name:</h4>
              <p>{data[n].name}</p>
              <ul>
                <li>
                  <span>Text:</span>
                  {data[n].text}
                </li>
                <li>
                  <span>Body:</span>
                  {data[n].body}
                </li>
                <li>
                  <span>Id:</span>
                  {data[n].id}
                </li>
              </ul>
            </div>
          </div>
          </>
        )}
        </Modal>
      </div>
    </div>
  );
}

export default Parts;
