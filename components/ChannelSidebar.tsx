"use client";

import { categories, currentServer, currentUser } from "@/lib/data";
import styles from "./ChannelSidebar.module.css";

interface ChannelSidebarProps {
  onOpenSettings: () => void;
}

function HashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" fillRule="evenodd" d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z" clipRule="evenodd"/>
    </svg>
  );
}

function VoiceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"/>
      <path fill="currentColor" d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"/>
    </svg>
  );
}

function AnnouncementIcon({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.7.73-.14 1.9.83 1.73 1.32-.24 2.96-.5 4.76-.56l1.77 3.03c.33.6 1.14.6 1.48 0l1.77-3.03c1.8.06 3.44.32 4.75.56.97.17 1.53-1 .83-1.73l-.02-.02Zm-9.35-2.5c0-.66.54-1.2 1.2-1.2h1.09c.67 0 1.2.54 1.2 1.2v1.1c0 .66-.53 1.2-1.2 1.2h-1.09a1.2 1.2 0 0 1-1.2-1.2v-1.1Zm1.2-8.2c-.6 0-1.1.45-1.2 1.04l-.38 3.12a1.2 1.2 0 0 0 1.18 1.34h.88a1.2 1.2 0 0 0 1.19-1.34l-.38-3.12a1.21 1.21 0 0 0-1.2-1.04h-.1Z"/>
    </svg>
  );
}

function ChevronIcon({ className, expanded }: { className?: string; expanded?: boolean }) {
  return (
    <svg 
      className={className} 
      aria-hidden="true" 
      role="img" 
      xmlns="http://www.w3.org/2000/svg" 
      width="12" 
      height="12" 
      fill="none" 
      viewBox="0 0 24 24"
      style={{ transform: expanded ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.1s ease" }}
    >
      <path fill="currentColor" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"/>
    </svg>
  );
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

export default function ChannelSidebar({ onOpenSettings }: ChannelSidebarProps) {
  return (
    <div className={styles.channelSidebar}>
      {/* Server Header */}
      <header className={styles.serverHeader}>
        <button className={styles.serverHeaderButton}>
          <h2 className={styles.serverName}>{currentServer.name}</h2>
          <ChevronIcon className={styles.chevronIcon} expanded />
        </button>
      </header>

      {/* Channel List */}
      <div className={styles.channelList}>
        <div className={styles.channelListContent}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category}>
              {category.name && (
                <div className={styles.categoryHeader}>
                  <ChevronIcon className={styles.categoryChevron} expanded={category.isExpanded} />
                  <h3 className={styles.categoryName}>{category.name}</h3>
                </div>
              )}
              <ul className={styles.channelListItems}>
                {category.channels.map((channel) => (
                  <li key={channel.id}>
                    <a 
                      href="#" 
                      className={`${styles.channelItem} ${channel.isActive ? styles.active : ""} ${channel.hasUnread ? styles.unread : ""}`}
                    >
                      <div className={styles.channelIcon}>
                        {channel.type === "voice" && <VoiceIcon />}
                        {channel.type === "text" && <HashIcon />}
                        {channel.type === "announcement" && <AnnouncementIcon />}
                      </div>
                      <span className={styles.channelName}>{channel.name}</span>
                      <div className={styles.channelActions}>
                        <button className={styles.channelActionBtn} aria-label="Create Invite">
                          <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM16.62 13.17c-.22.29-.65.37-.92.14-.34-.3-.7-.57-1.09-.82-.52-.33-.7-1.05-.47-1.63.11-.27.2-.57.26-.87.11-.54.55-1 1.1-.92 1.6.2 3.04.92 4.15 1.98.3.27-.25.95-.65.95a3 3 0 0 0-2.38 1.17ZM15.19 15.61c.13.16.02.39-.19.39a3 3 0 0 0-1.52 5.59c.2.12.26.41.02.41h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5a7.5 7.5 0 0 1 13.19-4.89ZM9.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15.5 22Z"/>
                            <path fill="currentColor" d="M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z"/>
                          </svg>
                        </button>
                        <button className={styles.channelActionBtn} aria-label="Edit Channel">
                          <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.06-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.06.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24a10.96 10.96 0 0 0 2.04-2.04c.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.06.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a10.96 10.96 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.06-.45-.18-.93-.64-.98a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* User Panel */}
      <div className={styles.userPanel}>
        <div className={styles.userInfo}>
          <div className={styles.avatarWrapper}>
            <div 
              className={styles.avatar}
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
            <span className={styles.discriminator}>Online</span>
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
