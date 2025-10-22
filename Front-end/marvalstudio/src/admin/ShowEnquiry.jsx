import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ShowEnquiry() {
  const [apidata, setApidata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // fetch and sort by createdAt desc
  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/allenq");
      // ensure createdAt exists and sort newest first
      const sorted = res.data.slice().sort((a, b) => {
        const ta = new Date(a.createdAt).getTime() || 0;
        const tb = new Date(b.createdAt).getTime() || 0;
        return tb - ta; // descending
      });
      setApidata(sorted);
    } catch (err) {
      console.error("Error fetching enquiries:", err);
      setApidata([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    const ok = window.confirm("Are you sure you want to delete this enquiry?");
    if (!ok) return;

    // optimistic UI: remove from list immediately, but keep a copy in case of failure
    const before = apidata;
    setApidata(prev => prev.filter(item => item._id !== id));
    setDeletingId(id);

    try {
      await axios.delete(`http://localhost:5000/api/enquiries/${id}`);
      // success -> do nothing (already removed)
    } catch (err) {
      // restore on error
      console.error("Failed to delete enquiry:", err);
      alert("Failed to delete enquiry. Try again.");
      setApidata(before);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container my-4">
      <h3 className="bg-primary text-light text-center p-3 rounded">Enquiry List</h3>

      {loading ? (
        <p className="text-center mt-4">Loading enquiries...</p>
      ) : apidata.length > 0 ? (
        <table className="table table-bordered table-striped mt-3">
          <thead className="table-dark text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {apidata.map((e) => (
              <tr key={e._id}>
                <td>{e.name || "N/A"}</td>
                <td>{e.email || "N/A"}</td>
                <td>{e.phone || "N/A"}</td>
                <td>{e.subject || "N/A"}</td>
                <td>{e.message || "N/A"}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  {e.createdAt ? new Date(e.createdAt).toLocaleString() : "N/A"}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(e._id)}
                    disabled={deletingId === e._id}
                  >
                    {deletingId === e._id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-4">No enquiries found.</p>
      )}
    </div>
  );
}
