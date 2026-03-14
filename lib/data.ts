// Mock data for Discord clone

export interface Server {
  id: string;
  name: string;
  icon: string | null;
  hasNotification?: boolean;
  notificationCount?: number;
  isSelected?: boolean;
}

export interface Channel {
  id: string;
  name: string;
  type: "text" | "voice" | "announcement";
  category?: string;
  isActive?: boolean;
  hasUnread?: boolean;
}

export interface Message {
  id: string;
  author: {
    id: string;
    username: string;
    avatar: string;
    color?: string;
  };
  content: string;
  timestamp: string;
  attachments?: {
    type: "image" | "video" | "file";
    url: string;
    name?: string;
    width?: number;
    height?: number;
  }[];
  reactions?: {
    emoji: string;
    count: number;
    reacted?: boolean;
  }[];
}

export interface Member {
  id: string;
  username: string;
  avatar: string;
  status: "online" | "idle" | "dnd" | "offline";
  activity?: string;
  role?: string;
  roleColor?: string;
}

export interface Category {
  id: string;
  name: string;
  channels: Channel[];
  isExpanded?: boolean;
}

// Server list data
export const servers: Server[] = [
  { id: "dm", name: "Direct Messages", icon: null },
  { id: "1", name: "la cueva 2", icon: "/discord-assets/server1.jpg", isSelected: true },
  { id: "2", name: "AnderCrack09", icon: "/discord-assets/server2.jpg", hasNotification: true, notificationCount: 2 },
  { id: "3", name: "Luva Network", icon: "/discord-assets/server3.jpg" },
  { id: "4", name: "Gaming Hub", icon: "/discord-assets/server4.jpg" },
  { id: "5", name: "Dev Community", icon: "/discord-assets/server5.jpg", hasNotification: true, notificationCount: 5 },
  { id: "6", name: "Music Lounge", icon: "/discord-assets/server6.jpg" },
];

// Current server info
export const currentServer = {
  id: "1",
  name: "la cueva 2",
  icon: "/discord-assets/server1.jpg",
};

// Channel categories and channels
export const categories: Category[] = [
  {
    id: "events",
    name: "Events",
    channels: [
      { id: "events-1", name: "Eventos", type: "text" },
    ],
    isExpanded: true,
  },
  {
    id: "text-channels",
    name: "Canales de Texto",
    channels: [
      { id: "1", name: "general", type: "text", isActive: true },
      { id: "2", name: "memes", type: "text" },
      { id: "3", name: "gaming", type: "text", hasUnread: true },
      { id: "4", name: "music", type: "text" },
      { id: "5", name: "announcements", type: "announcement" },
    ],
    isExpanded: true,
  },
  {
    id: "voice-channels",
    name: "Canales de Voz",
    channels: [
      { id: "v1", name: "General", type: "voice" },
      { id: "v2", name: "Gaming", type: "voice" },
      { id: "v3", name: "Music", type: "voice" },
    ],
    isExpanded: true,
  },
];

// Messages for the current channel
export const messages: Message[] = [
  {
    id: "1",
    author: {
      id: "u1",
      username: "Carlos_Dev",
      avatar: "/discord-assets/avatar1.jpg",
      color: "#f47fff",
    },
    content: "Hey everyone! Just finished setting up the new server features.",
    timestamp: "Today at 2:30 PM",
  },
  {
    id: "2",
    author: {
      id: "u2",
      username: "Maria_Gaming",
      avatar: "/discord-assets/avatar2.jpg",
      color: "#00d4aa",
    },
    content: "Nice! What features did you add?",
    timestamp: "Today at 2:32 PM",
  },
  {
    id: "3",
    author: {
      id: "u1",
      username: "Carlos_Dev",
      avatar: "/discord-assets/avatar1.jpg",
      color: "#f47fff",
    },
    content: "Added some cool bots for music and moderation. Also set up verification for new members!",
    timestamp: "Today at 2:33 PM",
  },
  {
    id: "4",
    author: {
      id: "u3",
      username: "Pedro_Music",
      avatar: "/discord-assets/avatar3.jpg",
      color: "#ffaa00",
    },
    content: "Awesome! Can we test the music bot?",
    timestamp: "Today at 2:35 PM",
    reactions: [
      { emoji: "👍", count: 3 },
      { emoji: "🎵", count: 2 },
    ],
  },
  {
    id: "5",
    author: {
      id: "u4",
      username: "Ana_Art",
      avatar: "/discord-assets/avatar4.jpg",
      color: "#5dadec",
    },
    content: "Just joined! This server looks great!",
    timestamp: "Today at 3:00 PM",
  },
  {
    id: "6",
    author: {
      id: "u2",
      username: "Maria_Gaming",
      avatar: "/discord-assets/avatar2.jpg",
      color: "#00d4aa",
    },
    content: "Welcome Ana! Feel free to explore the channels.",
    timestamp: "Today at 3:02 PM",
  },
  {
    id: "7",
    author: {
      id: "u5",
      username: "Diego_Code",
      avatar: "/discord-assets/avatar5.jpg",
      color: "#e74c3c",
    },
    content: "Anyone want to play some games later tonight?",
    timestamp: "Today at 4:15 PM",
    reactions: [
      { emoji: "🎮", count: 5 },
      { emoji: "✅", count: 3 },
    ],
  },
  {
    id: "8",
    author: {
      id: "u1",
      username: "Carlos_Dev",
      avatar: "/discord-assets/avatar1.jpg",
      color: "#f47fff",
    },
    content: "Count me in! What are we playing?",
    timestamp: "Today at 4:18 PM",
  },
  {
    id: "9",
    author: {
      id: "u5",
      username: "Diego_Code",
      avatar: "/discord-assets/avatar5.jpg",
      color: "#e74c3c",
    },
    content: "I was thinking Valorant or maybe some Minecraft. Open to suggestions!",
    timestamp: "Today at 4:20 PM",
  },
];

// Members list
export const members: Member[] = [
  {
    id: "u1",
    username: "Carlos_Dev",
    avatar: "/discord-assets/avatar1.jpg",
    status: "online",
    activity: "Playing Visual Studio Code",
    role: "Admin",
    roleColor: "#f47fff",
  },
  {
    id: "u2",
    username: "Maria_Gaming",
    avatar: "/discord-assets/avatar2.jpg",
    status: "online",
    activity: "Playing Valorant",
    role: "Moderator",
    roleColor: "#00d4aa",
  },
  {
    id: "u3",
    username: "Pedro_Music",
    avatar: "/discord-assets/avatar3.jpg",
    status: "idle",
    activity: "Listening to Spotify",
    role: "Member",
  },
  {
    id: "u4",
    username: "Ana_Art",
    avatar: "/discord-assets/avatar4.jpg",
    status: "online",
    role: "Member",
  },
  {
    id: "u5",
    username: "Diego_Code",
    avatar: "/discord-assets/avatar5.jpg",
    status: "dnd",
    activity: "Streaming",
    role: "Member",
    roleColor: "#e74c3c",
  },
  {
    id: "u6",
    username: "Sofia_Design",
    avatar: "/discord-assets/avatar6.jpg",
    status: "offline",
    role: "Member",
  },
  {
    id: "u7",
    username: "Lucas_Stream",
    avatar: "/discord-assets/avatar7.jpg",
    status: "online",
    activity: "Streaming on Twitch",
    role: "Member",
  },
  {
    id: "u8",
    username: "Elena_Bot",
    avatar: "/discord-assets/avatar8.jpg",
    status: "online",
    role: "Bot",
    roleColor: "#5865f2",
  },
];

// Current user
export const currentUser = {
  id: "u1",
  username: "Carlos_Dev",
  discriminator: "0001",
  avatar: "/discord-assets/avatar1.jpg",
  status: "online" as const,
};

// Friends list for Home page
export interface Friend {
  id: string;
  username: string;
  avatar: string;
  status: "online" | "idle" | "dnd" | "offline";
  activity?: string;
}

// Group chat interface
export interface GroupChat {
  id: string;
  name: string;
  members: {
    id: string;
    username: string;
    avatar: string;
    status: "online" | "idle" | "dnd" | "offline";
  }[];
}

// DM Messages interface
export interface DMMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}

export const friends: Friend[] = [
  {
    id: "f1",
    username: "MarcoGames",
    avatar: "/discord-assets/friend1.webp",
    status: "online",
    activity: "Jugando Valorant",
  },
  {
    id: "f2",
    username: "SofiaStream",
    avatar: "/discord-assets/friend2.webp",
    status: "online",
    activity: "Streaming en Twitch",
  },
  {
    id: "f3",
    username: "DiegoMusic",
    avatar: "/discord-assets/friend3.webp",
    status: "idle",
    activity: "Escuchando Spotify",
  },
  {
    id: "f4",
    username: "LunaArt",
    avatar: "/discord-assets/friend4.webp",
    status: "online",
  },
  {
    id: "f5",
    username: "AndresCode",
    avatar: "/discord-assets/friend5.webp",
    status: "dnd",
    activity: "Visual Studio Code",
  },
  {
    id: "f6",
    username: "ValentinaPlay",
    avatar: "/discord-assets/friend6.webp",
    status: "online",
    activity: "Jugando Minecraft",
  },
  {
    id: "f7",
    username: "NicolasRender",
    avatar: "/discord-assets/friend7.webp",
    status: "idle",
  },
  {
    id: "f8",
    username: "CamilaDesign",
    avatar: "/discord-assets/friend8.webp",
    status: "online",
    activity: "Adobe Photoshop",
  },
  {
    id: "f9",
    username: "SebastianDev",
    avatar: "/discord-assets/friend9.webp",
    status: "offline",
  },
  {
    id: "f10",
    username: "IsabellaChat",
    avatar: "/discord-assets/friend10.webp",
    status: "online",
  },
  {
    id: "f11",
    username: "MateoStream",
    avatar: "/discord-assets/friend11.webp",
    status: "online",
    activity: "Streaming Fortnite",
  },
  {
    id: "f12",
    username: "EmmaGamer",
    avatar: "/discord-assets/friend12.webp",
    status: "idle",
    activity: "Jugando League of Legends",
  },
  {
    id: "f13",
    username: "LucasEdit",
    avatar: "/discord-assets/friend13.webp",
    status: "dnd",
    activity: "Premiere Pro",
  },
  {
    id: "f14",
    username: "MiaMusic",
    avatar: "/discord-assets/friend14.webp",
    status: "online",
    activity: "FL Studio",
  },
  {
    id: "f15",
    username: "ThomasNet",
    avatar: "/discord-assets/friend15.webp",
    status: "offline",
  },
  {
    id: "f16",
    username: "OliviaWrite",
    avatar: "/discord-assets/friend16.webp",
    status: "online",
  },
];

// Group Chats
export const groupChats: GroupChat[] = [
  {
    id: "g1",
    name: "Gaming Squad",
    members: [
      { id: "f1", username: "MarcoGames", avatar: "/discord-assets/friend1.webp", status: "online" },
      { id: "f2", username: "SofiaStream", avatar: "/discord-assets/friend2.webp", status: "online" },
      { id: "f6", username: "ValentinaPlay", avatar: "/discord-assets/friend6.webp", status: "online" },
      { id: "u1", username: "Carlos_Dev", avatar: "/discord-assets/avatar1.jpg", status: "online" },
    ],
  },
  {
    id: "g2",
    name: "Devs Unidos",
    members: [
      { id: "f5", username: "AndresCode", avatar: "/discord-assets/friend5.webp", status: "dnd" },
      { id: "f8", username: "CamilaDesign", avatar: "/discord-assets/friend8.webp", status: "online" },
      { id: "u1", username: "Carlos_Dev", avatar: "/discord-assets/avatar1.jpg", status: "online" },
    ],
  },
];

// DM Messages for conversations
export const dmMessages: Record<string, DMMessage[]> = {
  f1: [
    { id: "dm1-1", senderId: "f1", content: "Hey! Quieres jugar Valorant?", timestamp: "Today at 2:30 PM" },
    { id: "dm1-2", senderId: "u1", content: "Claro! Dame 5 minutos", timestamp: "Today at 2:32 PM" },
    { id: "dm1-3", senderId: "f1", content: "Perfecto, te espero en el lobby", timestamp: "Today at 2:33 PM" },
    { id: "dm1-4", senderId: "u1", content: "Ya estoy listo!", timestamp: "Today at 2:37 PM" },
  ],
  f2: [
    { id: "dm2-1", senderId: "f2", content: "Viste mi ultimo stream?", timestamp: "Today at 1:00 PM" },
    { id: "dm2-2", senderId: "u1", content: "Si! Estuvo genial!", timestamp: "Today at 1:05 PM" },
    { id: "dm2-3", senderId: "f2", content: "Gracias! El proximo es manana a las 8", timestamp: "Today at 1:06 PM" },
  ],
  f3: [
    { id: "dm3-1", senderId: "u1", content: "Que cancion estas escuchando?", timestamp: "Yesterday at 8:00 PM" },
    { id: "dm3-2", senderId: "f3", content: "Una playlist de lo-fi, te la comparto!", timestamp: "Yesterday at 8:05 PM" },
  ],
};

// Group Messages
export const groupMessages: Record<string, DMMessage[]> = {
  g1: [
    { id: "gm1-1", senderId: "f1", content: "Quien se conecta esta noche?", timestamp: "Today at 3:00 PM" },
    { id: "gm1-2", senderId: "f6", content: "Yo puedo despues de las 9!", timestamp: "Today at 3:05 PM" },
    { id: "gm1-3", senderId: "u1", content: "Yo tambien estoy disponible", timestamp: "Today at 3:10 PM" },
    { id: "gm1-4", senderId: "f2", content: "Cuenten conmigo!", timestamp: "Today at 3:12 PM" },
  ],
  g2: [
    { id: "gm2-1", senderId: "f5", content: "Alguien puede revisar mi PR?", timestamp: "Today at 10:00 AM" },
    { id: "gm2-2", senderId: "u1", content: "Lo reviso ahora mismo", timestamp: "Today at 10:05 AM" },
    { id: "gm2-3", senderId: "f8", content: "Yo tambien le doy un vistazo al UI", timestamp: "Today at 10:10 AM" },
  ],
};
