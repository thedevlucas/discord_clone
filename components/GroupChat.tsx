"use client";

import { groupChats, groupMessages, currentUser } from "@/lib/data";
import styles from "./GroupChat.module.css";

interface GroupChatProps {
  groupId: string;
}

function StatusIndicator({ status }: { status: string }) {
  const statusColors: Record<string, string> = {
    online: "var(--green-360)",
    idle: "var(--yellow-300)",
    dnd: "var(--red-400)",
    offline: "var(--interactive-muted)",
  };

  return (
    <div 
      className={styles.statusIndicator} 
      style={{ backgroundColor: statusColors[status] || statusColors.offline }}
    />
  );
}

function GroupIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM16.62 13.17c-.22.29-.65.37-.92.14-.34-.3-.7-.57-1.09-.82-.52-.33-.7-1.05-.47-1.63.11-.27.2-.57.26-.87.11-.54.55-1 1.1-.92 1.6.2 3.04.92 4.15 1.98.3.27-.25.95-.65.95a3 3 0 0 0-2.38 1.17ZM15.19 15.61c.13.16.02.39-.19.39a3 3 0 0 0-1.52 5.59c.2.12.26.41.02.41h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5a7.5 7.5 0 0 1 13.19-4.89ZM9.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15.5 22Z"/>
      <path fill="currentColor" d="M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"/>
    </svg>
  );
}

export default function GroupChat({ groupId }: GroupChatProps) {
  const group = groupChats.find(g => g.id === groupId);
  const messages = groupMessages[groupId] || [];

  if (!group) {
    return (
      <div className={styles.chatArea}>
        <div className={styles.noContent}>
          <p>Grupo no encontrado</p>
        </div>
      </div>
    );
  }

  // Get sender info from group members
  const getSender = (senderId: string) => {
    if (senderId === currentUser.id) return currentUser;
    return group.members.find(m => m.id === senderId) || { 
      id: senderId, 
      username: "Unknown", 
      avatar: "", 
      status: "offline" as const 
    };
  };

  // Process messages to determine which should show headers
  const processedMessages = messages.map((msg, idx) => ({
    ...msg,
    showHeader: idx === 0 || messages[idx - 1].senderId !== msg.senderId,
    sender: getSender(msg.senderId),
  }));

  return (
    <div className={styles.chatArea}>
      {/* Header */}
      <header className={styles.channelHeader}>
        <div className={styles.channelInfo}>
          <div className={styles.groupIconWrapper}>
            <div className={styles.groupAvatars}>
              {group.members.slice(0, 2).map((member, idx) => (
                <div 
                  key={member.id}
                  className={styles.groupAvatarSmall}
                  style={{ 
                    backgroundImage: `url(${member.avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 2 - idx
                  }}
                />
              ))}
            </div>
          </div>
          <h1 className={styles.channelName}>{group.name}</h1>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.headerActionBtn} aria-label="Start Voice Call">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19.25 4.75a2.5 2.5 0 0 1 .55 2.76l-.04.08-.39.77A9.95 9.95 0 0 0 18.5 12a9.95 9.95 0 0 0 .87 3.64l.39.77.04.08a2.5 2.5 0 0 1-.55 2.76l-1.31 1.3A2.5 2.5 0 0 1 14.7 22c-6.34-1.05-11.65-6.36-12.7-12.7a2.5 2.5 0 0 1 1.45-2.24l1.3-1.31a2.5 2.5 0 0 1 2.76-.55l.08.04.77.39c1.1.55 2.34.87 3.64.87.42 0 .83-.03 1.23-.08l.41-.06c1.01-.18 1.95-.52 2.82-.96l.77-.39.08-.04a2.5 2.5 0 0 1 2.76.55l1.3 1.31L19.25 4.75Z"/>
            </svg>
          </button>
          <button className={styles.headerActionBtn} aria-label="Start Video Call">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14.5 4.5a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 2 17V7a2.5 2.5 0 0 1 2.5-2.5h10Zm7.04 1.54a1 1 0 0 1 .96.26l.04.04.01.01c.11.13.18.27.22.43l.03.15v10.14c0 .18-.05.36-.13.52l-.06.1-.07.1a1 1 0 0 1-.43.3l-.14.04c-.18.03-.37 0-.53-.07l-.1-.06-3.84-2.55V9.15l3.84-2.55a1 1 0 0 1 .2-.06Z"/>
            </svg>
          </button>
          <button className={styles.headerActionBtn} aria-label="Pinned Messages">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87901V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"/>
            </svg>
          </button>
          <button className={styles.headerActionBtn} aria-label="Add Friends to DM">
            <GroupIcon />
          </button>
          <button className={styles.headerActionBtn} aria-label="Show Members">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM16.62 13.17c-.22.29-.65.37-.92.14-.34-.3-.7-.57-1.09-.82-.52-.33-.7-1.05-.47-1.63.11-.27.2-.57.26-.87.11-.54.55-1 1.1-.92 1.6.2 3.04.92 4.15 1.98.3.27-.25.95-.65.95a3 3 0 0 0-2.38 1.17ZM15.19 15.61c.13.16.02.39-.19.39a3 3 0 0 0-1.52 5.59c.2.12.26.41.02.41h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5a7.5 7.5 0 0 1 13.19-4.89ZM9.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            </svg>
          </button>
          <div className={styles.searchWrapper}>
            <input 
              type="text" 
              className={styles.searchInput} 
              placeholder="Buscar"
              aria-label="Buscar"
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
          {/* Group Welcome */}
          <div className={styles.groupWelcome}>
            <div className={styles.welcomeAvatars}>
              {group.members.slice(0, 3).map((member, idx) => (
                <div 
                  key={member.id}
                  className={styles.welcomeAvatar}
                  style={{ 
                    backgroundImage: `url(${member.avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 3 - idx
                  }}
                />
              ))}
            </div>
            <h2 className={styles.welcomeTitle}>{group.name}</h2>
            <p className={styles.welcomeDescription}>
              Bienvenido a <strong>{group.name}</strong>. Este es el inicio del chat de grupo.
            </p>
            <div className={styles.membersList}>
              <span className={styles.membersLabel}>Miembros: </span>
              {group.members.map((member, idx) => (
                <span key={member.id} className={styles.memberName}>
                  {member.username}{idx < group.members.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>

          {/* Messages List */}
          <ol className={styles.messagesList}>
            {processedMessages.map((msg) => (
              <li 
                key={msg.id} 
                className={`${styles.message} ${msg.showHeader ? styles.messageWithHeader : styles.messageCompact}`}
              >
                {msg.showHeader ? (
                  <>
                    <div 
                      className={styles.avatar}
                      style={{ 
                        backgroundImage: `url(${msg.sender.avatar})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                    />
                    <div className={styles.messageContent}>
                      <div className={styles.messageHeader}>
                        <span className={styles.authorName}>
                          {msg.sender.username}
                        </span>
                        <span className={styles.timestamp}>{msg.timestamp}</span>
                      </div>
                      <div className={styles.messageText}>{msg.content}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <span className={styles.compactTimestamp}>{msg.timestamp.split(" at ")[1]}</span>
                    <div className={styles.messageContent}>
                      <div className={styles.messageText}>{msg.content}</div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ol>
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
              placeholder={`Enviar mensaje a ${group.name}`}
              aria-label={`Enviar mensaje a ${group.name}`}
            />
          </div>
          <div className={styles.inputButtons}>
            <button type="button" className={styles.inputButton} aria-label="Send a gift">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M4.3 3h15.4c.55 0 1.08.23 1.44.6.36.39.55.9.51 1.43l-.55 10.2c-.08 1.31-1.15 2.4-2.46 2.48l-8.1.44a2.5 2.5 0 0 1-2.56-2.19L6.12 3.89A1 1 0 0 0 5.13 3H4.3A.3.3 0 0 0 4 3.3v.4c0 .17.13.3.3.3h.7a1 1 0 0 1 1 1v1.93a.77.77 0 0 0 .8.77h8.4a.77.77 0 0 0 .8-.77V5a1 1 0 0 1 1-1h.7a.3.3 0 0 0 .3-.3v-.4a.3.3 0 0 0-.3-.3h-.4a.3.3 0 0 0-.3.3v.4c0 .17-.13.3-.3.3H7.3a.3.3 0 0 1-.3-.3v-.4a.3.3 0 0 0-.3-.3H4.3A.3.3 0 0 0 4 3.3v.4c0 .17.13.3.3.3Zm3.3 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd"/>
              </svg>
            </button>
            <button type="button" className={styles.inputButton} aria-label="Select GIF">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm7.13 3.88A.7.7 0 0 0 8 9.75v4.5a.7.7 0 0 0 1.13.55l3.5-2.25a.7.7 0 0 0 0-1.1l-3.5-2.25V9.38Z"/>
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
