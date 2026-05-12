'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';

export default function WhatsAppClone() {
  const [selectedChat, setSelectedChat] = useState<any>(null);

  const chats = [
    { id: 1, name: 'Juan Pérez', message: 'Nos vemos mañana', time: '14:32', unread: 2, avatar: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'María López', message: '✅ Recibido', time: '13:15', unread: 0, avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Equipo Trabajo', message: 'Nueva tarea asignada', time: '11:45', unread: 5, avatar: 'https://i.pravatar.cc/150?u=3' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a1620]">
      <Sidebar chats={chats} selectedChat={selectedChat} onSelectChat={setSelectedChat} />
      <ChatWindow selectedChat={selectedChat} />
    </div>
  );
}
