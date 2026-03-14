"use client";

import { currentUser, friends, Friend } from "@/lib/data";
import styles from "./FriendsSidebar.module.css";

interface FriendsSidebarProps {
  onOpenSettings: () => void;
  onSelectFriend: (friend: Friend) => void;
  selectedFriendId: string | null;
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

function FriendsIcon() {
  return (
    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
      <path fill="currentColor" d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.25.56 1.25 1.25V5h.75c.69 0 1.25.56 1.25 1.25S6.94 7.5 6.25 7.5H5.5v.75c0 .69-.56 1.25-1.25 1.25S3 8.94 3 8.25V7.5h-.75C1.56 7.5 1 6.94 1 6.25S1.56 5 2.25 5H3Z"/>
      <path fill="currentColor" d="M13 12c-3.73 0-6.86 1.57-8.36 3.83a2 2 0 0 0-.34 1.12v1.3c0 .97.78 1.75 1.75 1.75h13.9c.97 0 1.75-.78 1.75-1.75v-1.3a2 2 0 0 0-.34-1.12C19.86 13.57 16.73 12 13 12Z"/>
    </svg>
  );
}

function NitroIcon() {
  return (
    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.47 5.17a.5.5 0 0 1 .47-.17h1.4c.22 0 .43.15.49.38l.5 2.12h.27a.5.5 0 0 1 .48.35l.79 2.4c.05.14.05.3 0 .45l-1.56 4.7a.5.5 0 0 1-.47.35H3.06a.5.5 0 0 1-.47-.65l.88-2.65H2.83a.5.5 0 0 1-.47-.67l.88-2.61H2.55a.5.5 0 0 1-.47-.33l-.55-1.65a.5.5 0 0 1 .08-.45l1.86-2.47Z"/>
      <path fill="currentColor" d="M20.53 5.17a.5.5 0 0 0-.47-.17h-1.4a.5.5 0 0 0-.49.38l-.5 2.12h-.27a.5.5 0 0 0-.48.35l-.79 2.4a.5.5 0 0 0 0 .45l1.56 4.7c.07.2.25.35.47.35h2.28c.36 0 .6-.36.47-.65l-.88-2.65h.64c.35 0 .6-.35.47-.67l-.88-2.61h.69c.23 0 .43-.14.47-.33l.55-1.65a.5.5 0 0 0-.08-.45l-1.86-2.47Z"/>
      <path fill="currentColor" d="M12.9 4.62a1 1 0 0 0-1.8 0l-2.1 4.5 2.1 6.38h1.8l2.1-6.38-2.1-4.5Z"/>
      <path fill="currentColor" d="M8.5 16.5v3.15c0 .2.12.38.3.47l3 1.5c.13.06.27.06.4 0l3-1.5a.5.5 0 0 0 .3-.47V16.5h-7Z"/>
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M2.75 2A.75.75 0 0 0 2 2.75v1.5c0 .69.56 1.25 1.25 1.25H4v13c0 1.38 1.12 2.5 2.5 2.5h11c1.38 0 2.5-1.12 2.5-2.5v-13h.75c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 0-.75-.75H2.75ZM15.25 10a3.25 3.25 0 0 1-6.5 0 1 1 0 1 0-2 0 5.25 5.25 0 0 0 10.5 0 1 1 0 1 0-2 0Z"/>
    </svg>
  );
}

export default function FriendsSidebar({ onOpenSettings, onSelectFriend, selectedFriendId }: FriendsSidebarProps) {
  // Get recent DM friends (top 8)
  const recentDMs = friends.filter(f => f.status !== "offline").slice(0, 8);

  return (
    <div className={styles.friendsSidebar}>
      {/* Header */}
      <header className={styles.header}>
        <button className={styles.searchButton}>
          <span>Buscar o empezar una conversacion</span>
        </button>
      </header>

      {/* Navigation */}
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <a href="#" className={`${styles.navItem} ${styles.active}`}>
              <FriendsIcon />
              <span>Amigos</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.navItem}>
              <NitroIcon />
              <span>Nitro</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.navItem}>
              <ShopIcon />
              <span>Tienda</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Direct Messages Header */}
      <div className={styles.dmHeader}>
        <span className={styles.dmHeaderText}>Mensajes directos</span>
        <button className={styles.addDmButton} aria-label="Create DM">
          <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2h-8v8a1 1 0 1 1-2 0v-8H3a1 1 0 1 1 0-2h8V3a1 1 0 0 1 1-1Z"/>
          </svg>
        </button>
      </div>

      {/* DM List */}
      <div className={styles.dmList}>
        <ul className={styles.dmListItems}>
          {recentDMs.map((friend) => (
            <li key={friend.id}>
              <button 
                onClick={() => onSelectFriend(friend)} 
                className={`${styles.dmItem} ${selectedFriendId === friend.id ? styles.dmItemActive : ''}`}
              >
                <div className={styles.avatarWrapper}>
                  <div 
                    className={styles.avatar}
                    style={{ 
                      backgroundImage: `url(${friend.avatar})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  <StatusIndicator status={friend.status} />
                </div>
                <div className={styles.dmInfo}>
                  <span className={styles.dmName}>{friend.username}</span>
                  {friend.activity && (
                    <span className={styles.dmActivity}>{friend.activity}</span>
                  )}
                </div>
                <span className={styles.closeButton} aria-label="Close DM" onClick={(e) => e.stopPropagation()}>
                  <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z"/>
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* User Panel */}
      <div className={styles.userPanel}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatarWrapper}>
            <div 
              className={styles.userAvatar}
              style={{ 
                backgroundImage: `url(${currentUser.avatar})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />
            <StatusIndicator status={currentUser.status} />
          </div>
          <div className={styles.userDetails}>
            <span className={styles.username}>{currentUser.username}</span>
            <span className={styles.userStatus}>En linea</span>
          </div>
        </div>
        <div className={styles.userActions}>
          <button className={styles.userActionBtn} aria-label="Mute">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z"/>
              <path fill="currentColor" d="M6 10a1 1 0 0 0-2 0 8 8 0 0 0 7 7.94V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.06A8 8 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z"/>
            </svg>
          </button>
          <button className={styles.userActionBtn} aria-label="Deafen">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 3a9 9 0 0 0-8.95 10h1.87a5 5 0 0 1 4.1 2.13l1.37 1.97a3.1 3.1 0 0 1-1.17 4.52 7.8 7.8 0 0 1-3.43-1.98 1.06 1.06 0 0 1-.16-.18A10.97 10.97 0 0 1 1 12C1 5.92 5.92 1 12 1s11 4.92 11 11c0 2.8-1.05 5.35-2.77 7.29l-.14.17a7.8 7.8 0 0 1-3.43 1.98 3.1 3.1 0 0 1-1.17-4.52l1.37-1.97a5 5 0 0 1 4.1-2.13h1.86A9 9 0 0 0 12 3Z"/>
            </svg>
          </button>
          <button className={styles.userActionBtn} onClick={onOpenSettings} aria-label="User Settings">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.06-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.06.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24a10.96 10.96 0 0 0 2.04-2.04c.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.06.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a10.96 10.96 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.06-.45-.18-.93-.64-.98a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
