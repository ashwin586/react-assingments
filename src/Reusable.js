import "./App.css";

const data = [
  { id: 1, name: "Leanne Graham", email: "leannegraham@abc.com" },
  { id: 2, name: "Ervin Howell", email: "ervinhowell@abc.com" },
];

// THE REUSABLE COMPONENT
function UserDetails({ users }) {
  const userDetails = users.map((user) => (
    <li key={user.id} className="list-user">
      <h1>{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </li>
  ));

  return <ul className="user-details">{userDetails}</ul>;
}

export default function Reusable() {
  return (
    <div className="app">
      <div>
        <UserDetails users={data} />
      </div>
    </div>
  );
}
