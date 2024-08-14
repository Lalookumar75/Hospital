import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await api.get('/appointments/first20');
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments', error);
            }
        };
        fetchAppointments();
    }, []);

    return (
        <div>
            <h2>Upcoming Appointments</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        {appointment.patient.name} - {new Date(appointment.appointmentDate).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
