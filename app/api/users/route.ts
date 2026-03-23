import { NextRequest, NextResponse } from 'next/server';

const initialTeam = [
  { id: 1, name: 'John Doe', role: 'CEO', avatar: '/next.svg', status: 'Online' },
  { id: 2, name: 'Jane Smith', role: 'Developer', avatar: '/file.svg', status: 'Busy' },
  { id: 3, name: 'Bob Wilson', role: 'Designer', avatar: '/globe.svg', status: 'Available' },
];

let teamData = initialTeam;

export async function GET() {
  return NextResponse.json(teamData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newMember = {
    id: Date.now(),
    name: body.name,
    role: body.role || 'Member',
    avatar: '/file.svg',
    status: 'Available',
  };
  teamData.push(newMember);
  return NextResponse.json(newMember, { status: 201 });
}

