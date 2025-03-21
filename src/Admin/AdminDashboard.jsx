import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import api from "../axiosInterceptor";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useUser } from "../UserContext";

export default function AdminDashboard() {
  const { logout } = useUser();
  const [message, setMessage] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    img: "",
    name: "",
    title: "",
    hospital: "",
    experience: "",
    fee: "",
    about: "",
    email: "",
    password: "",
  });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  // Fetch Admin Authentication Data
  useEffect(() => {
    setLoading(true);

    const fetchAdminData = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) return navigate("/admin-login");
      toast.success("Successfully Login");

      try {
        const res = await api.get("/admin/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(res.data.message);
      } catch (err) {
        console.error("Error fetching admin data:", err);
        navigate("/admin-login");
      }
    };

    fetchAdminData();
    fetchDoctors();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/admin-login");
  };
  // Fetch Doctors from MongoDB
  const fetchDoctors = async () => {
    try {
      const response = await api.get("/doctors/getDoctors");
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Delete Doctor with Confirmation Modal
  const handleShowDeleteModal = (id) => {
    setDoctorToDelete(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!doctorToDelete) return;
    try {
      await api.delete(`/doctors/deleteDoctor/${doctorToDelete}`);
      toast.success("Doctor deleted!");
      fetchDoctors();
    } catch (error) {
      toast.error("Error deleting doctor");
    }
    setShowDeleteModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("hospital", formData.hospital);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("fee", formData.fee);
    formDataToSend.append("about", formData.about);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);

    if (formData.img instanceof File) {
      formDataToSend.append("img", formData.img);
    }

    try {
      if (editingId) {
        await api.put(`/doctors/updateDoctor/${editingId}`, formDataToSend);
        toast.success("Doctor updated successfully!");
      } else {
        await api.post("/doctors/addDoctor", formDataToSend);
        toast.success("Doctor added successfully!");
      }
      setShow(false);
      setFormData({
        img: "",
        name: "",
        title: "",
        hospital: "",
        experience: "",
        fee: "",
        about: "",
        email: "",
        password: "",
      });
      fetchDoctors();
    } catch (error) {
      toast.error("Error saving doctor");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <ToastContainer position="top-right" autoClose={2000} />
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "60vh" }}
          >
            <BeatLoader color="#2196F3" loading={loading} size={15} />
          </div>
        ) : (
          <>
            <Row>
              <Col>
                <h2>Admin Dashboard</h2>
                <p>{message}</p>
                <Button onClick={handleLogout} className="btn btn-danger mb-3">
                  Logout
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Manage Doctors</h3>
                <Button
                  variant="primary"
                  onClick={() => {
                    setShow(true);
                    setEditingId(null);
                  }}
                >
                  Add Doctor
                </Button>
              </Col>
            </Row>
            <Row>
              <Col style={{ overflowX: "auto" }}>
                <Table striped bordered hover responsive className="mt-3">
                  <thead>
                    <tr>
                      <th>Img</th>
                      <th>Name</th>
                      <th>Title</th>
                      <th>Hospital</th>
                      <th>Experience</th>
                      <th>Fee</th>
                      <th>About</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doc) => (
                      <tr key={doc._id}>
                        <td>
                          <img
                            src={doc.img}
                            alt=""
                            style={{ width: "150px" }}
                          />
                        </td>
                        <td>{doc.name}</td>
                        <td>{doc.title}</td>
                        <td>{doc.hospital}</td>
                        <td>{doc.experience}</td>
                        <td>{doc.fee}</td>
                        <td>{doc.about}</td>
                        <td>
                          <Button
                            className="m-1"
                            variant="secondary"
                            onClick={() =>
                              navigate(`/admin/appointments/${doc._id}`)
                            }
                          >
                            View
                          </Button>
                          <Button
                            className="m-1"
                            variant="warning"
                            onClick={() => {
                              setShow(true);
                              setEditingId(doc._id);
                              setFormData(doc);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            className="m-1"
                            variant="danger"
                            onClick={() => handleShowDeleteModal(doc._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Modal show={show} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {editingId ? "Edit Doctor" : "Add Doctor"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="book-form" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="p-2">Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Hospital</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.hospital}
                      onChange={(e) =>
                        setFormData({ ...formData, hospital: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Experience</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Fee</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.fee}
                      onChange={(e) =>
                        setFormData({ ...formData, fee: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>About</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.about}
                      onChange={(e) =>
                        setFormData({ ...formData, about: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Image
                      <em className="text-muted text-sm ms-2 fs-6 text-body-tertiary">
                        Upload a square image (ratio 1:1)
                      </em>
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setFormData({ ...formData, img: e.target.files[0] })
                      }
                      required={!editingId}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      required={!editingId} // Required only when adding a doctor
                    />
                  </Form.Group>

                  <Button
                    variant="dark"
                    type="submit"
                    className="mt-3 d-flex"
                    style={{ justifySelf: "center" }}
                  >
                    {editingId ? "Update" : "Add"}
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </>
        )}
      </Container>
      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this doctor?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
