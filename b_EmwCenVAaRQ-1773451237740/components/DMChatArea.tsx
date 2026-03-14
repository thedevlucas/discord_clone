"use client";

import { Friend, friends } from "@/lib/data";
import styles from "./DMChatArea.module.css";

interface DMChatAreaProps {
  friend: Friend;
}

// Sample DM messages
const dmMessages = [
  {
    id: "dm1",
    content: "Hey! How's it going?",
    timestamp: "Today at 2:30 PM",
    isMe: false,
  },
  {
    id: "dm2",
    content: "Pretty good! Just working on some code. You?",
    timestamp: "Today at 2:31 PM",
    isMe: true,
  },
  {
    id: "dm3",
    content: "Nice! Same here, been grinding on this new project",
    timestamp: "Today at 2:32 PM",
    isMe: false,
  },
  {
    id: "dm4",
    content: "What are you working on?",
    timestamp: "Today at 2:32 PM",
    isMe: true,
  },
  {
    id: "dm5",
    content: "A Discord clone actually! It's turning out pretty cool",
    timestamp: "Today at 2:33 PM",
    isMe: false,
  },
  {
    id: "dm6",
    content: "That sounds awesome! Send me the link when you're done",
    timestamp: "Today at 2:34 PM",
    isMe: true,
  },
  {
    id: "dm7",
    content: "Will do! Should be ready by the end of the week",
    timestamp: "Today at 2:35 PM",
    isMe: false,
  },
];

function StatusIcon({ status }: { status: string }) {
  const colors: Record<string, string> = {
    online: "#23a559",
    idle: "#f0b232",
    dnd: "#f23f43",
    offline: "#80848e",
  };
  
  return (
    <div 
      className={styles.statusIndicator} 
      style={{ backgroundColor: colors[status] || colors.offline }}
    />
  );
}

export default function DMChatArea({ friend }: DMChatAreaProps) {
  return (
    <div className={styles.chatArea}>
      {/* DM Header */}
      <header className={styles.dmHeader}>
        <div className={styles.dmUserInfo}>
          <div className={styles.headerAvatar}>
            <img src={friend.avatar} alt={friend.username} />
            <StatusIcon status={friend.status} />
          </div>
          <h1 className={styles.headerUsername}>{friend.username}</h1>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.headerActionBtn} aria-label="Start Voice Call">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0V5a.5.5 0 0 1 .5-.5h2.25a.75.75 0 0 0 0-1.5H5ZM19 3a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0V5a.5.5 0 0 0-.5-.5h-2.25a.75.75 0 0 1 0-1.5H19ZM5 21a2 2 0 0 1-2-2v-2.25a.75.75 0 0 1 1.5 0V19a.5.5 0 0 0 .5.5h2.25a.75.75 0 0 1 0 1.5H5ZM19 21a2 2 0 0 0 2-2v-2.25a.75.75 0 0 0-1.5 0V19a.5.5 0 0 1-.5.5h-2.25a.75.75 0 0 1 0 1.5H19Z"/>
              <path fill="currentColor" fillRule="evenodd" d="M6.56 6.12a.75.75 0 0 1 .96.09l2.02 2.02a.7.7 0 0 1-.5 1.19h-1.3v1.54h1.3a.7.7 0 0 1 .5 1.19l-2.02 2.02a.75.75 0 0 1-1.3-.52v-1.15a.75.75 0 0 1-.75-.75V8.54a.75.75 0 0 1 .75-.75v-1.15a.75.75 0 0 1 .34-.52ZM17.44 6.12a.75.75 0 0 0-.96.09l-2.02 2.02a.7.7 0 0 0 .5 1.19h1.3v1.54h-1.3a.7.7 0 0 0-.5 1.19l2.02 2.02a.75.75 0 0 0 1.3-.52v-1.15a.75.75 0 0 0 .75-.75V8.54a.75.75 0 0 0-.75-.75v-1.15a.75.75 0 0 0-.34-.52Z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className={styles.headerActionBtn} aria-label="Start Video Call">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14.5 3a3.5 3.5 0 0 1 3.5 3.5v1.086l4.159-2.426a.5.5 0 0 1 .746.435v8.81a.5.5 0 0 1-.746.435L18 12.414v1.086a3.5 3.5 0 0 1-3.5 3.5h-8A3.5 3.5 0 0 1 3 13.5v-7A3.5 3.5 0 0 1 6.5 3h8Z"/>
            </svg>
          </button>
          <button className={styles.headerActionBtn} aria-label="Pinned Messages">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87901V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"/>
            </svg>
          </button>
          <button className={styles.headerActionBtn} aria-label="Add Friends to DM">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M13 9a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM5 18.5a3.5 3.5 0 0 1 3.5-3.5h5a3.5 3.5 0 0 1 3.5 3.5V21H5v-2.5Z"/>
              <path fill="currentColor" d="M19 14a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z"/>
            </svg>
          </button>
          <div className={styles.searchWrapper}>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <button className={styles.headerActionBtn} aria-label="Inbox">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"/>
            </svg>
          </button>
          <button className={styles.headerActionBtn} aria-label="Help">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Messages Area */}
      <div className={styles.messagesWrapper}>
        <div className={styles.messagesScroller}>
          {/* DM Welcome */}
          <div className={styles.dmWelcome}>
            <div className={styles.welcomeAvatar}>
              <img src={friend.avatar} alt={friend.username} />
            </div>
            <h2 className={styles.welcomeUsername}>{friend.username}</h2>
            <p className={styles.welcomeDescription}>
              This is the beginning of your direct message history with <strong>{friend.username}</strong>.
            </p>
            <div className={styles.welcomeActions}>
              <button className={styles.welcomeAction}>
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M13 9a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/>
                  <path fill="currentColor" d="M5 18.5a3.5 3.5 0 0 1 3.5-3.5h5a3.5 3.5 0 0 1 3.5 3.5V21H5v-2.5Z"/>
                </svg>
                Remove Friend
              </button>
              <button className={styles.welcomeAction}>
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M18.66 3.85a.75.75 0 0 0-1.21-.22L9.46 11.3a.75.75 0 0 0 .52 1.29h4.4l-4.25 7.56a.75.75 0 0 0 1.21.22l7.99-7.67a.75.75 0 0 0-.52-1.29h-4.4l4.25-7.56Z" clipRule="evenodd"/>
                </svg>
                Block
              </button>
            </div>
          </div>

          {/* Messages List */}
          <div className={styles.messagesList}>
            {dmMessages.map((msg, idx) => {
              const showHeader = idx === 0 || dmMessages[idx - 1].isMe !== msg.isMe;
              return (
                <div 
                  key={msg.id} 
                  className={`${styles.message} ${showHeader ? styles.messageWithHeader : styles.messageCompact}`}
                >
                  {showHeader ? (
                    <>
                      <div 
                        className={styles.avatar}
                        style={{ 
                          backgroundImage: `url(${msg.isMe ? "/discord-assets/avatar1.jpg" : friend.avatar})`,
                        }}
                      />
                      <div className={styles.messageContent}>
                        <div className={styles.messageHeader}>
                          <span className={styles.authorName}>
                            {msg.isMe ? "You" : friend.username}
                          </span>
                          <span className={styles.timestamp}>{msg.timestamp}</span>
                        </div>
                        <div className={styles.messageText}>{msg.content}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className={styles.compactTimestamp}>
                        {msg.timestamp.split(" at ")[1]}
                      </span>
                      <div className={styles.messageContent}>
                        <div className={styles.messageText}>{msg.content}</div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <form className={styles.messageForm}>
        <div className={styles.messageInputWrapper}>
          <div className={styles.inputButtons}>
            <button type="button" className={styles.inputButton} aria-label="Upload a file">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="transparent"/>
                <path fill="currentColor" fillRule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
          <div className={styles.inputContainer}>
            <input 
              type="text" 
              className={styles.messageInput} 
              placeholder={`Message @${friend.username}`}
              aria-label={`Message @${friend.username}`}
            />
          </div>
          <div className={styles.inputButtons}>
            <button type="button" className={styles.inputButton} aria-label="Send a gift">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M4.96 8a4 4 0 0 1 7.74-1.76 4.01 4.01 0 0 1 5.53-.47 4 4 0 0 1 2.21 5.23H22v2h-2v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8H2v-2h1.56A4 4 0 0 1 4.96 8ZM7 9a2 2 0 1 0 4 0v-.09A2 2 0 0 0 7.04 8.5 2 2 0 0 0 7 9Zm5 5h6v6h-6v-6Zm-2 6v-6H6v6h4Zm2.91-10h.09a2 2 0 0 0 2.58-1.86v-.05A2 2 0 0 0 12.91 8v.09a2 2 0 0 0 0 1.91ZM12 11h2.5a2 2 0 0 0 2-2h.38c.49 0 .84.46.7.93-.43 1.45-1.77 2.52-3.36 2.57h-.1A4.04 4.04 0 0 1 12 11Zm-2.5 0H12a4.04 4.04 0 0 1-2.12 1.5h-.1a3.55 3.55 0 0 1-3.36-2.57.73.73 0 0 1 .7-.93h.38a2 2 0 0 0 2 2Z" clipRule="evenodd"/>
              </svg>
            </button>
            <button type="button" className={styles.inputButton} aria-label="Select GIF">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13ZM8.5 9a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 9 9h-.5ZM11 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5h-1v4h1v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5Zm4.5-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2h-1v1.5h-1v-4h1V10h1v-.5a.5.5 0 0 0-.5-.5h-2Z"/>
              </svg>
            </button>
            <button type="button" className={styles.inputButton} aria-label="Open sticker picker">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM8.4 8.52a.4.4 0 0 0-.4.38c-.05.98.27 1.95.88 2.73A4.25 4.25 0 0 0 12 13a4.25 4.25 0 0 0 3.12-1.37c.61-.78.93-1.75.88-2.73a.4.4 0 0 0-.4-.38h-.98a.4.4 0 0 0-.38.28c-.18.6-.56 1.22-1.02 1.57-.28.22-.65.38-1.12.38s-.84-.16-1.12-.38c-.46-.35-.84-.97-1.02-1.57a.4.4 0 0 0-.38-.28H8.4Z" clipRule="evenodd"/>
              </svg>
            </button>
            <button type="button" className={styles.inputButton} aria-label="Select emoji">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7.82 6.68a1 1 0 0 1 1.32-.47c.28.12.6.22.96.29.7.14 1.4.14 2.08 0 .35-.07.68-.17.96-.29a1 1 0 0 1 .85 1.8 6.6 6.6 0 0 1-1.45.43 7.08 7.08 0 0 1-2.8 0 6.6 6.6 0 0 1-1.45-.43 1 1 0 0 1-.47-1.33Z"/>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
