import React, { useState } from 'react';
import './BillSplitter.css';

function BillSplitter() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState(15);
  const [people, setPeople] = useState([{ id: 1, name: 'Person 1' }]);

  const addPerson = () => {
    const newId = people.length > 0 ? Math.max(...people.map(p => p.id)) + 1 : 1;
    setPeople([...people, { id: newId, name: `Person ${newId}` }]);
  };

  const removePerson = (id) => {
    if (people.length > 1) {
      setPeople(people.filter(person => person.id !== id));
    }
  };

  const updatePersonName = (id, newName) => {
    setPeople(people.map(person => 
      person.id === id ? { ...person, name: newName } : person
    ));
  };

  const calculateTotals = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = bill * (tipPercent / 100);
    const total = bill + tip;
    const perPerson = people.length > 0 ? total / people.length : 0;
    
    return {
      subtotal: bill.toFixed(2),
      tip: tip.toFixed(2),
      total: total.toFixed(2),
      perPerson: perPerson.toFixed(2)
    };
  };

  const totals = calculateTotals();

  return (
    <div className="bill-splitter">
      <h1>💰 Bill Splitter</h1>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="bill-amount">Bill Amount ($)</label>
          <input
            id="bill-amount"
            type="number"
            placeholder="0.00"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="input-group">
          <label htmlFor="tip-percent">Tip Percentage (%)</label>
          <div className="tip-selector">
            {[10, 15, 18, 20].map(percent => (
              <button
                key={percent}
                className={tipPercent === percent ? 'active' : ''}
                onClick={() => setTipPercent(percent)}
              >
                {percent}%
              </button>
            ))}
          </div>
          <input
            id="tip-percent"
            type="number"
            value={tipPercent}
            onChange={(e) => setTipPercent(Number(e.target.value))}
            min="0"
            max="100"
          />
        </div>
      </div>

      <div className="people-section">
        <div className="people-header">
          <h2>People ({people.length})</h2>
          <button className="add-person-btn" onClick={addPerson}>
            + Add Person
          </button>
        </div>
        
        <div className="people-list">
          {people.map(person => (
            <div key={person.id} className="person-item">
              <input
                type="text"
                value={person.name}
                onChange={(e) => updatePersonName(person.id, e.target.value)}
                className="person-name"
              />
              {people.length > 1 && (
                <button 
                  className="remove-btn"
                  onClick={() => removePerson(person.id)}
                  aria-label="Remove person"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="summary-section">
        <h2>Summary</h2>
        <div className="summary-grid">
          <div className="summary-item">
            <span className="label">Subtotal:</span>
            <span className="value">${totals.subtotal}</span>
          </div>
          <div className="summary-item">
            <span className="label">Tip ({tipPercent}%):</span>
            <span className="value">${totals.tip}</span>
          </div>
          <div className="summary-item total">
            <span className="label">Total:</span>
            <span className="value">${totals.total}</span>
          </div>
          <div className="summary-item per-person">
            <span className="label">Per Person:</span>
            <span className="value">${totals.perPerson}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillSplitter;
