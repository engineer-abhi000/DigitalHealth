import MainLayout from "../layouts/MainLayout";

function Profile() {
  return (
    <MainLayout>
      <h1>Profile</h1>

      <div className="form-card">
        <p>Name: Patient Name</p>
        <p>Email: patient@email.com</p>
        <p>Phone: 9876543210</p>
      </div>
    </MainLayout>
  );
}

export default Profile;