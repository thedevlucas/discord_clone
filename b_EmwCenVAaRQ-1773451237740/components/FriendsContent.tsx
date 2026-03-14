"use client";

import { useState } from "react";
import { friends } from "@/lib/data";
import styles from "./FriendsContent.module.css";

type TabType = "online" | "all" | "pending" | "blocked" | "add";

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

export default function FriendsContent() {
  const [activeTab, setActiveTab] = useState<TabType>("online");
  const [searchQuery, setSearchQuery] = useState("");

  const onlineFriends = friends.filter(f => f.status !== "offline");
  const allFriends = friends;

  const displayedFriends = activeTab === "online" ? onlineFriends : allFriends;
  const filteredFriends = searchQuery 
    ? displayedFriends.filter(f => f.username.toLowerCase().includes(searchQuery.toLowerCase()))
    : displayedFriends;

  return (
    <div className={styles.friendsContent}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerIcon}>
            <FriendsIcon />
          </div>
          <h1 className={styles.headerTitle}>Amigos</h1>
          <div className={styles.divider}></div>
          
          {/* Tabs */}
          <nav className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === "online" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("online")}
            >
              En linea
            </button>
            <button 
              className={`${styles.tab} ${activeTab === "all" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("all")}
            >
              Todos
            </button>
            <button 
              className={`${styles.tab} ${activeTab === "pending" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("pending")}
            >
              Pendiente
            </button>
            <button 
              className={`${styles.tab} ${activeTab === "blocked" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("blocked")}
            >
              Bloqueado
            </button>
            <button 
              className={`${styles.tab} ${styles.addFriendTab}`}
              onClick={() => setActiveTab("add")}
            >
              Agregar amigo
            </button>
          </nav>
        </div>
        
        <div className={styles.headerRight}>
          <button className={styles.headerAction} aria-label="New Group DM">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 1.94-.57 3.86-1.51 5.63-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2.02-1.01-2.02-2.25 0-1.24.9-2.25 2.02-2.25s2.04 1.01 2.02 2.25c0 1.24-.9 2.25-2.02 2.25Zm7.4 0c-1.1 0-2.02-1.01-2.02-2.25 0-1.24.9-2.25 2.02-2.25s2.04 1.01 2.02 2.25c0 1.24-.9 2.25-2.02 2.25Z"/>
            </svg>
          </button>
          <div className={styles.divider}></div>
          <button className={styles.headerAction} aria-label="Inbox">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"/>
            </svg>
          </button>
          <button className={styles.headerAction} aria-label="Help">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className={styles.content}>
        {activeTab === "add" ? (
          <div className={styles.addFriendSection}>
            <h2 className={styles.addFriendTitle}>Agregar amigo</h2>
            <p className={styles.addFriendDescription}>
              Puedes agregar amigos con su nombre de usuario de Discord.
            </p>
            <div className={styles.addFriendInput}>
              <input 
                type="text" 
                placeholder="Puedes agregar amigos con su nombre de usuario de Discord."
                className={styles.addInput}
              />
              <button className={styles.sendRequestBtn}>
                Enviar solicitud de amistad
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Search */}
            <div className={styles.searchWrapper}>
              <input 
                type="text" 
                placeholder="Buscar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <svg className={styles.searchIcon} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0c.39-.38.39-1 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"/>
              </svg>
            </div>

            {/* Friends Count */}
            <div className={styles.friendsCount}>
              {activeTab === "online" ? "En linea" : "Todos los amigos"} - {filteredFriends.length}
            </div>

            {/* Friends List */}
            <div className={styles.friendsList}>
              {filteredFriends.map((friend) => (
                <div key={friend.id} className={styles.friendItem}>
                  <div className={styles.friendInfo}>
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
                    <div className={styles.friendDetails}>
                      <span className={styles.friendName}>{friend.username}</span>
                      <span className={styles.friendStatus}>
                        {friend.activity || (friend.status === "online" ? "En linea" : friend.status === "idle" ? "Ausente" : friend.status === "dnd" ? "No molestar" : "Desconectado")}
                      </span>
                    </div>
                  </div>
                  <div className={styles.friendActions}>
                    <button className={styles.friendActionBtn} aria-label="Message">
                      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z"/>
                      </svg>
                    </button>
                    <button className={styles.friendActionBtn} aria-label="More">
                      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Active Now Sidebar */}
      <aside className={styles.activeNow}>
        <h2 className={styles.activeNowTitle}>Activo ahora</h2>
        <div className={styles.activeNowEmpty}>
          <p className={styles.emptyTitle}>No hay nadie por aqui</p>
          <p className={styles.emptyText}>
            Cuando un amigo inicie una actividad, como jugar un juego o pasar el rato en una llamada de voz, lo mostraremos aqui.
          </p>
        </div>
      </aside>
    </div>
  );
}
