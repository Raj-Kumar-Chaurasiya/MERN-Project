import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShowBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allbookings")
      .then((res) => {
        // Sort by latest booking first
        const sorted = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBookings(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-4">
      <h3 className="bg-success text-light text-center p-3 rounded">
        Booking List
      </h3>

      {loading ? (
        <p className="text-center mt-4">Loading bookings...</p>
      ) : bookings.length > 0 ? (
        <table className="table table-bordered table-striped mt-3">
          <thead className="table-dark text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price (₹)</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.service}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>{b.price}</td>
                <td>{new Date(b.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-4">No bookings found.</p>
      )}
    </div>
  );
}
