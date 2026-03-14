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
