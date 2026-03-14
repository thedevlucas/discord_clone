"use client";

import { servers } from "@/lib/data";
import styles from "./ServerSidebar.module.css";

interface ServerSidebarProps {
  onSelectHome: () => void;
  onSelectServer: (serverId: string) => void;
  selectedServerId: string | null;
  isHome: boolean;
}

export default function ServerSidebar({ 
  onSelectHome, 
  onSelectServer, 
  selectedServerId, 
  isHome 
}: ServerSidebarProps) {
  return (
    <nav className={styles.serverSidebar} aria-label="Servers">
      <ul className={styles.serverList}>
        {/* Home / DMs Button */}
        <li className={styles.serverItem}>
          <div className={styles.pillWrapper}>
            {isHome && <span className={`${styles.pill} ${styles.pillSelected}`}></span>}
          </div>
          <div 
            className={`${styles.serverIconWrapper} ${isHome ? styles.selected : ""}`}
            onClick={onSelectHome}
          >
            <div className={`${styles.serverIcon} ${isHome ? styles.serverIconSelected : ""}`} data-home="true">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="28" height="20" fill="none" viewBox="0 0 28 20">
                <path fill="currentColor" d="M23.02 1.108A22.27 22.27 0 0 0 17.47 0c-.27.46-.57 1.09-.78 1.58a21.03 21.03 0 0 0-6.1 0C10.4 1.09 10.09.46 9.83 0a22.2 22.2 0 0 0-5.55 1.11C.62 6.32-.38 11.42.12 16.45c2.3 1.66 4.53 2.68 6.72 3.35a16.6 16.6 0 0 0 1.47-2.34c-.81-.3-1.59-.67-2.33-1.1.2-.14.38-.28.57-.43A15.9 15.9 0 0 0 13.32 18c2.4 0 4.72-.7 6.78-2.07.18.15.37.3.56.43-.73.43-1.51.8-2.32 1.1.43.84.93 1.62 1.46 2.34 2.2-.67 4.42-1.69 6.72-3.35.58-5.99-.99-11.19-4.5-15.77ZM9.5 13.47c-1.4 0-2.54-1.27-2.54-2.82s1.12-2.82 2.54-2.82 2.56 1.27 2.54 2.82c0 1.55-1.12 2.82-2.54 2.82Zm9.38 0c-1.4 0-2.54-1.27-2.54-2.82s1.12-2.82 2.54-2.82 2.56 1.27 2.54 2.82c0 1.55-1.12 2.82-2.54 2.82Z"/>
              </svg>
            </div>
          </div>
        </li>

        {/* Separator */}
        <li className={styles.separator}>
          <div className={styles.separatorLine}></div>
        </li>

        {/* Server List */}
        {servers.slice(1).map((server) => {
          const isSelected = selectedServerId === server.id;
          return (
            <li key={server.id} className={styles.serverItem}>
              <div className={styles.pillWrapper}>
                {(isSelected || server.hasNotification) && (
                  <span 
                    className={`${styles.pill} ${isSelected ? styles.pillSelected : styles.pillNotification}`}
                  ></span>
                )}
              </div>
              <div 
                className={`${styles.serverIconWrapper} ${isSelected ? styles.selected : ""}`}
                data-has-notification={server.hasNotification}
                onClick={() => onSelectServer(server.id)}
              >
                {server.icon ? (
                  <div 
                    className={`${styles.serverIcon} ${isSelected ? styles.serverIconSelected : ""}`}
                    style={{ 
                      backgroundImage: `url(${server.icon})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                    title={server.name}
                  >
                    <span className="sr-only">{server.name}</span>
                  </div>
                ) : (
                  <div className={styles.serverIcon} title={server.name}>
                    {server.name.charAt(0).toUpperCase()}
                  </div>
                )}
                {server.notificationCount && server.notificationCount > 0 && (
                  <div className={styles.notificationBadge}>
                    {server.notificationCount}
                  </div>
                )}
              </div>
            </li>
          );
        })}

        {/* Separator */}
        <li className={styles.separator}>
          <div className={styles.separatorLine}></div>
        </li>

        {/* Add Server Button */}
        <li className={styles.serverItem}>
          <div className={styles.pillWrapper}></div>
          <div className={styles.serverIconWrapper}>
            <div className={styles.serverIcon} data-action="add">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2h-8v8a1 1 0 1 1-2 0v-8H3a1 1 0 1 1 0-2h8V3a1 1 0 0 1 1-1Z"/>
              </svg>
            </div>
          </div>
        </li>

        {/* Explore Button */}
        <li className={styles.serverItem}>
          <div className={styles.pillWrapper}></div>
          <div className={styles.serverIconWrapper}>
            <div className={styles.serverIcon} data-action="explore">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                <path fill="currentColor" fillRule="evenodd" d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM7.74 9.3A2 2 0 0 1 9.3 7.75l7.22-1.45a1 1 0 0 1 1.18 1.18l-1.45 7.22a2 2 0 0 1-1.57 1.57l-7.22 1.45a1 1 0 0 1-1.18-1.18L7.74 9.3Z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
