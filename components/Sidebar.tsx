'use client';

import Image from 'next/image';

interface Chat {
  id: number;
  name: string;
  message: string;
  time: string;
  unread: number;
  avatar: string;
}

interface SidebarProps {
  chats: Chat[];
  selectedChat: Chat | null;
  onSelectChat: (chat: Chat) => void;
}

export default function Sidebar({ chats, selectedChat, onSelectChat }: SidebarProps) {
  return (
    <div className="w-96 border-r border-[#202c33] flex flex-col">
      {/* Header */}
      <div className="h-14 bg-[#202c33] flex items-center px-4 justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          <span className="font-semibold">WhatsApp</span>
        </div>
      </div>

      {/* Search */}
      <div className="p-3 bg-[#202c33]">
        <div className="bg-[#2a3942] rounded-lg flex items-center px-4 py-2">
          🔍 <input type="text" placeholder="Buscar o empezar nuevo chat" className="bg-transparent ml-3 outline-none flex-1 text-sm" />
        </div>
      </div>

      {/* Chats List */}
      <div className="flex-1 overflow-y-auto bg-[#111b21]">
        {chats.map(chat => (
          <div 
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`flex items-center gap-4 p-4 hover:bg-[#202c33] cursor-pointer border-b border-[#202c33] ${selectedChat?.id === chat.id ? 'bg-[#202c33]' : ''}`}
          >
            <img src={chat.avatar} className="w-12 h-12 rounded-full" />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <p className="font-medium truncate">{chat.name}</p>
                <p className="text-xs text-[#8696a0]">{chat.time}</p>
              </div>
              <p className="text-sm text-[#8696a0] truncate">{chat.message}</p>
            </div>
            {chat.unread > 0 && (
              <div className="bg-[#00a884] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {chat.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
