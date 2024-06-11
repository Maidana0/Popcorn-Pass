"use client";
import React from 'react';
import { Seat, SeatStatus } from '../../utils/types';
import '../Seat.css'; // Define estilos en este archivo

interface SeatProps {
  seat: Seat;
  onClick: (id: number) => void;
  isSelected: boolean;
}

const SeatComponent: React.FC<SeatProps> = ({ seat, onClick, isSelected }) => {
  const getColor = () => {
    switch (seat.occupied) {
      case SeatStatus.Available:
        return 'green';
      case SeatStatus.Occupied:
        return 'red';
    }
  };

  return (
    <div
      className={`seat ${isSelected ? 'selected' : ''}`}
      style={{ backgroundColor: getColor() }}
      onClick={() => onClick(seat.id)}
    >
      <span className="seat-number">{seat.seatNumber}</span>
    </div>
  );
};

export default SeatComponent;
