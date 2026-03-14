"use client";

import { useState } from "react";
import ServerSidebar from "@/components/ServerSidebar";
import FriendsSidebar from "@/components/FriendsSidebar";
import FriendsContent from "@/components/FriendsContent";
import ChannelSidebar from "@/components/ChannelSidebar";
import ChatArea from "@/components/ChatArea";
import MembersList from "@/components/MembersList";
import UserSettings from "@/components/UserSettings";
import styles from "./page.module.css";

type ViewType = "home" | "server" | "settings";

export default function DiscordClone() {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);

  const handleSelectHome = () => {
    setCurrentView("home");
    setSelectedServerId(null);
  };

  const handleSelectServer = (serverId: string) => {
    setCurrentView("server");
    setSelectedServerId(serverId);
  };

  const handleOpenSettings = () => {
    setCurrentView("settings");
  };

  const handleCloseSettings = () => {
    setCurrentView(selectedServerId ? "server" : "home");
  };

  // Settings view - full screen
  if (currentView === "settings") {
    return <UserSettings onClose={handleCloseSettings} />;
  }

  return (
    <div className={styles.app}>
      <ServerSidebar 
        onSelectHome={handleSelectHome}
        onSelectServer={handleSelectServer}
        selectedServerId={selectedServerId}
        isHome={currentView === "home"}
      />
      <div className={styles.mainContent}>
        {currentView === "home" ? (
          <>
            <FriendsSidebar onOpenSettings={handleOpenSettings} />
            <FriendsContent />
          </>
        ) : (
          <>
            <ChannelSidebar onOpenSettings={handleOpenSettings} />
            <ChatArea />
            <MembersList />
          </>
        )}
      </div>
    </div>
  );
}
