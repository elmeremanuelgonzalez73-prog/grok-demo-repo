'use client';

import { useState } from 'react';

interface ChatWindowProps {
  selectedChat: any;
}

export default function ChatWindow({ selectedChat }: ChatWindowProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola, ¿cómo estás?', isMine: false, time: '14:20' },
    { id: 2, text: 'Todo bien por acá, ¿y tú?', isMine: true, time: '14:21' },
  ]);

  const sendMessage = () => {
    if (!message.trim() || !selectedChat) return;
    setMessages([...messages, { id: Date.now(), text: message, isMine: true, time: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) }]);
    setMessage('');
  };

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0a1620] flex-col">
        <div className="text-6xl mb-6 opacity-30">💬</div>
        <h2 className="text-2xl text-[#8696a0]">Selecciona un chat para empezar</h2>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="h-14 bg-[#202c33] flex items-center px-4 border-b border-[#202c33]">
        <img src={selectedChat.avatar} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="font-medium">{selectedChat.name}</p>
          <p className="text-xs text-[#8696a0]">en línea</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 bg-[url('https://i.ibb.co/0jZ3X7K/whatsapp-bg.png')] bg-repeat">
        {messages.map(msg => (
          <div key={msg.id} className={`flex mb-2 ${msg.isMine ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[65%] px-4 py-2 rounded-2xl ${msg.isMine ? 'bg-[#005c4b] rounded-tr-none' : 'bg-[#202c33] rounded-tl-none'}`}>
              <p>{msg.text}</p>
              <p className="text-[10px] text-right opacity-70 mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="h-20 bg-[#202c33] flex items-center px-4 gap-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Escribe un mensaje"
          className="flex-1 bg-[#2a3942] rounded-full px-6 py-3 outline-none text-sm"
        />
        <button onClick={sendMessage} className="w-12 h-12 bg-[#00a884] rounded-full flex items-center justify-center hover:bg-[#00c49a] transition-colors">
          ➤
        </button>
      </div>
    </div>
  );
}
