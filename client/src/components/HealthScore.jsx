function HealthScore({ score }) {
  return (
    <div className="health-card">
      <h3>Health Score</h3>

      <div
        className="circle"
        style={{
          background: `conic-gradient(#0d6efd ${score * 3.6}deg, #e6e6e6 0deg)`
        }}
      >
        <div className="inner-circle">
          {score}%
        </div>
      </div>
    </div>
  );
}

export default HealthScore;