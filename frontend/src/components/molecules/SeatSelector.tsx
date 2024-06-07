"use client";
import React, { useState } from 'react';
import { Seat, SeatStatus } from '../../utils/types';
import SeatComponent from '../atoms/Seat';

interface SeatSelectorProps {
  seats: Seat[];
}

const SeatSelector: React.FC<SeatSelectorProps> = ({ seats }) => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSeatClick = (id: number) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter(seatId => seatId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSubmit = () => {
    // Envía la lista de asientos seleccionados
    console.log('Selected Seats:', selectedSeats);
  };

  return (
    <div>
      <div className="seat-grid">
        {seats.map(seat => (
          <SeatComponent
            key={seat.id}
            seat={seat}
            onClick={handleSeatClick}
            isSelected={selectedSeats.includes(seat.id)}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Enviar Selección</button>
    </div>
  );
};

export default SeatSelector;
