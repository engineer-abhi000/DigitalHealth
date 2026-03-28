import MainLayout from "../layouts/MainLayout";

function Payments() {
  return (
    <MainLayout>
      <h1>Payments</h1>

      <div className="form-card">
        <p>No payment history found.</p>
      </div>
    </MainLayout>
  );
}

export default Payments;