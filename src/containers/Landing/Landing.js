import './Landing.scss';

function Landing(props) {
  return (
    <div className="landing">
      <h1>Type<span style={{ color: "#FE243D" }}>Chat</span></h1>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={props.firstName}
          onChange={props.handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={props.lastName}
          onChange={props.handleChange}
          required
        />
        <input
          placeholder="Image URL"
          type="text"
          name="image"
          value={props.image}
          onChange={props.handleChange}
        />
        <button type="submit" className="button">
            Submit
        </button>
      </form>
    </div>
  );
}

export default Landing;
