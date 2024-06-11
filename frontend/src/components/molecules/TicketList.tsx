// TicketList.tsx
import React, { useEffect, useState } from 'react';
import ReturnSeatsPopup from '../atoms/ReturnSeatsPopup';
import { fetchData } from '../../utils/fetchData';  // Asegúrate de importar la función fetchData correctamente

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

const TicketList: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetchData('path/to/tickets', 'GET');
      if (!response.error) {
        setTickets(response);
      } else {
        console.error(response.message);
      }
    };

    fetchTickets();
  }, []);

  const handleSelectTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedTicket(null);
  };

  return (
    <div>
      <h2>Lista de Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <p><strong>Película:</strong> {ticket.movieName}</p>
            <p><strong>Fecha y Hora:</strong> {ticket.functionDate}</p>
            <p><strong>Cine:</strong> {ticket.cinemaName}</p>
            <p><strong>Sala:</strong> {ticket.screenName}</p>
            <p><strong>Asientos:</strong> {ticket.seatsIds.join(', ')}</p>
            <button onClick={() => handleSelectTicket(ticket)}>Seleccionar</button>
          </li>
        ))}
      </ul>

      {showPopup && selectedTicket && (
        <ReturnSeatsPopup 
          ticket={selectedTicket} 
          onClose={handleClosePopup} 
        />
      )}
    </div>
  );
};

export default TicketList;
