import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import { BeatLoader } from 'react-spinners';
import api from '../axiosInterceptor';

export default function DoctorAppointments() {
	const { doctorId } = useParams();
	const [appointments, setAppointments] = useState([]);
	const [slots, setSlots] = useState([]);
	const [doctorName, setDoctorName] = useState(''); // State for doctor's name
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchDoctorDetails = async () => {
			try {
				const response = await api.get(`/doctors/${doctorId}`); // Fetch doctor details
				setDoctorName(response.data.name); // Set the doctor's name
			} catch (error) {
				console.error('Error fetching doctor details:', error);
			}
		};

		const fetchAppointments = async () => {
			setLoading(true);
			try {
				const response = await api.get(`/appointments/doctor/${doctorId}`);
				const updatedAppointments = response.data.map((appointment) => {
					const appointmentDateTime = new Date(
						`${appointment.appointmentDate}T${appointment.timeSlot}`,
					);
					if (appointmentDateTime < new Date()) {
						appointment.status = 'Completed';
					}
					return appointment;
				});
				setAppointments(updatedAppointments);
			} catch (error) {
				console.error('Error fetching appointments:', error);
			} finally {
				setLoading(false);
			}
		};

		const fetchSlots = async () => {
			setLoading(true);
			try {
				const response = await api.get(`/slots/doctor/${doctorId}`);
				const updatedSlots = response.data.map((slot) => {
					const slotDateTime = new Date(
						`${slot.appointmentDate}T${slot.timeSlot}`,
					);
					if (slotDateTime < new Date()) {
						slot.status = 'Completed';
					}
					return slot;
				});
				setSlots(updatedSlots);
			} catch (error) {
				console.error('Error fetching slots:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchDoctorDetails(); // Fetch doctor's name
		fetchAppointments();
		fetchSlots();
	}, [doctorId]);

	const mergedData = [...appointments, ...slots].sort((a, b) => {
		const now = new Date(); // Get the current date and time

		const dateA = new Date(`${a.appointmentDate}T${a.timeSlot}`);
		const dateB = new Date(`${b.appointmentDate}T${b.timeSlot}`);

		const isCompletedA = dateA < now; // Check if appointment is completed
		const isCompletedB = dateB < now;

		// Sort by completed status (Completed last)
		if (isCompletedA !== isCompletedB) {
			return isCompletedA ? 1 : -1; // Move completed to the bottom
		}

		// If both are upcoming or both completed, sort by date
		if (dateA - dateB !== 0) {
			return dateA - dateB; // Sort by nearest date first
		}

		// If same date, sort by time
		return a.timeSlot.localeCompare(b.timeSlot);
	});

	return (
		<>
			{loading ? (
				<div
					className='d-flex justify-content-center  align-items-center'
					style={{ height: '80vh' }}
				>
					<BeatLoader color='#6c63ff' />
				</div>
			) : (
				<Container className='mt-5'>
					<Row>
						<Col>
							<h2>Appointments and Slots for {doctorName}</h2>{' '}
							{/* Updated heading */}
							<Table
								striped
								bordered
								hover
								responsive
								className='mt-3'
							>
								<thead>
									<tr>
										<th>Date</th>
										<th>Time Slot</th>
										<th>Name</th>
										<th>Mobile</th>
										<th>Age</th>
										<th>Gender</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									{mergedData.map((item) => (
										<tr key={item._id}>
											<td>{item.appointmentDate}</td>
											<td>{item.timeSlot}</td>
											<td>{item.name}</td>
											<td>{item.phone}</td>
											<td>{item.age}</td>
											<td>{item.gender}</td>
											<td
												className={
													item.status === 'Completed'
														? 'text-success'
														: 'text-danger'
												}
											>
												{item.status}
											</td>
										</tr>
									))}
								</tbody>
							</Table>
							<Button
								variant='secondary'
								onClick={() => window.history.back()}
							>
								Back
							</Button>
						</Col>
					</Row>
				</Container>
			)}
		</>
	);
}
