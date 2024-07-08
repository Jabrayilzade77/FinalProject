import { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <h2>Popüler Sorular</h2>
      {questions.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div 
            className="accordion-header" 
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <span className="accordion-toggle">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
