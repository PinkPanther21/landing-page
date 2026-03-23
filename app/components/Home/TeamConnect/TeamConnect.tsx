"use client";
import React from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: string;
}

interface Props {
  team: TeamMember[];
}

const TeamConnect = ({ team }: Props) => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [members, setMembers] = React.useState(team);

  const addMember = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, role }),
    });
    if (res.ok) {
      setName("");
      setRole("");
      const newMember = await res.json();
      setMembers((prev) => [...prev, newMember]);
    }
  };

  return (
    <div className="py-16">
      <div className="w-[90%] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Connect with Team Members
        </h2>

        {/* Dynamic Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              data-aos="fade-up"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  member.status === "Online"
                    ? "bg-green-200 text-green-800"
                    : member.status === "Busy"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-gray-200 text-gray-800"
                }`}
              >
                {member.status}
              </span>
            </div>
          ))}
        </div>

        {/* Add Member Form */}
        <form
          onSubmit={addMember}
          className="max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Add New Team Member
          </h3>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 border rounded-lg mb-6"
          />
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-3 rounded-lg font-medium hover:bg-orange-500"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamConnect;
