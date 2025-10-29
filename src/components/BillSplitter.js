import React, { useState } from 'react';
import './BillSplitter.css';

function BillSplitter() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('15');
  const [people, setPeople] = useState([{ id: 1, name: 'Person 1' }]);
  const [nextId, setNextId] = useState(2);

  const addPerson = () => {
    setPeople([...people, { id: nextId, name: `Person ${nextId}` }]);
    setNextId(nextId + 1);
  };

  const removePerson = (id) => {
    if (people.length > 1) {
      setPeople(people.filter(person => person.id !== id));
    }
  };

  const updatePersonName = (id, name) => {
    setPeople(people.map(person => 
      person.id === id ? { ...person, name } : person
    ));
  };

  const calculateTotal = () => {
    const bill = parseFloat(billAmount) || 0;
    const tip = bill * (parseFloat(tipPercent) / 100);
    return bill + tip;
  };

  const calculatePerPerson = () => {
    const total = calculateTotal();
    return people.length > 0 ? total / people.length : 0;
  };

  const total = calculateTotal();
  const perPerson = calculatePerPerson();
  const tipAmount = (parseFloat(billAmount) || 0) * (parseFloat(tipPercent) / 100);

  return (
    <div className="bill-splitter">
      <div className="card">
        <h1 className="title">💰 Bill Splitter</h1>
        
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="billAmount">Bill Amount ($)</label>
            <input
              id="billAmount"
              type="number"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              placeholder="0.00"
              step="0.01"
              min="0"
            />
          </div>

          <div className="input-group">
            <label htmlFor="tipPercent">Tip (%)</label>
            <input
              id="tipPercent"
              type="number"
              value={tipPercent}
              onChange={(e) => setTipPercent(e.target.value)}
              placeholder="15"
              step="1"
              min="0"
            />
          </div>
        </div>

        <div className="people-section">
          <div className="people-header">
            <h2>People</h2>
            <button className="btn-add" onClick={addPerson}>
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
                  className="person-name-input"
                />
                {people.length > 1 && (
                  <button
                    className="btn-remove"
                    onClick={() => removePerson(person.id)}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="summary-section">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span className="amount">${parseFloat(billAmount || 0).toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tip ({tipPercent}%):</span>
            <span className="amount">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span className="amount">${total.toFixed(2)}</span>
          </div>
          <div className="summary-row per-person">
            <span>Per Person:</span>
            <span className="amount">${perPerson.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillSplitter;
