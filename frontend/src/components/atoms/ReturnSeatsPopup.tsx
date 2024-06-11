// ReturnSeatsPopup.tsx
import React, { useState } from 'react';
import { fetchData } from '../../utils/fetchData';  // Asegúrate de importar la función fetchData correctamente
import '../Popup.css';  // Importa el módulo CSS

interface Ticket {
  id: string;
  userId: string;
  cinemaName: string;
  screenName: string;
  movieName: string;
  seatsIds: string[];
  functionDate: string;
  value: number;
  active: boolean;
}

interface ReturnSeatsPopupProps {
  ticket: Ticket;
  onClose: () => void;
}

const ReturnSeatsPopup: React.FC<ReturnSeatsPopupProps> = ({ ticket, onClose }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatSelection = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleReturnSeats = async () => {
    const response = await fetchData('path/to/return', 'POST', {
      ticketId: ticket.id,
      seatIds: selectedSeats
    });
    if (!response.error) {
      console.log('Asientos devueltos:', response);
      onClose();
    } else {
      console.error(response.message);
    }
  };

  return (
    <div className="popup">
      <h3>Devolver Asientos para {ticket.movieName}</h3>
      <ul>
        {ticket.seatsIds.map(seat => (
          <li key={seat}>
            <label>
              <input 
                type="checkbox" 
                value={seat}
                onChange={() => handleSeatSelection(seat)}
              />
              {seat}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleReturnSeats}>Devolver</button>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default ReturnSeatsPopup;
