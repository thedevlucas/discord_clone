"use client";

import { useState } from "react";
import ServerSidebar from "@/components/ServerSidebar";
import FriendsSidebar from "@/components/FriendsSidebar";
import FriendsContent from "@/components/FriendsContent";
import ChannelSidebar from "@/components/ChannelSidebar";
import ChatArea from "@/components/ChatArea";
import MembersList from "@/components/MembersList";
import UserSettings from "@/components/UserSettings";
import DMChat from "@/components/DMChat";
import GroupChat from "@/components/GroupChat";
import styles from "./page.module.css";

type ViewType = "home" | "server" | "dm" | "group";

export default function DiscordClone() {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);
  const [selectedDMId, setSelectedDMId] = useState<string | null>(null);
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSelectHome = () => {
    setCurrentView("home");
    setSelectedServerId(null);
    setSelectedDMId(null);
    setSelectedGroupId(null);
  };

  const handleSelectServer = (serverId: string) => {
    setCurrentView("server");
    setSelectedServerId(serverId);
    setSelectedDMId(null);
    setSelectedGroupId(null);
  };

  const handleSelectDM = (friendId: string) => {
    setCurrentView("dm");
    setSelectedDMId(friendId);
    setSelectedServerId(null);
    setSelectedGroupId(null);
  };

  const handleSelectGroup = (groupId: string) => {
    setCurrentView("group");
    setSelectedGroupId(groupId);
    setSelectedServerId(null);
    setSelectedDMId(null);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className={styles.app}>
      <ServerSidebar 
        onSelectHome={handleSelectHome}
        onSelectServer={handleSelectServer}
        selectedServerId={selectedServerId}
        isHome={currentView === "home" || currentView === "dm" || currentView === "group"}
      />
      <div className={styles.mainContent}>
        {currentView === "home" && (
          <>
            <FriendsSidebar 
              onOpenSettings={handleOpenSettings} 
              onSelectDM={handleSelectDM}
              onSelectGroup={handleSelectGroup}
              selectedDMId={selectedDMId}
              selectedGroupId={selectedGroupId}
            />
            <FriendsContent />
          </>
        )}
        {currentView === "dm" && selectedDMId && (
          <>
            <FriendsSidebar 
              onOpenSettings={handleOpenSettings} 
              onSelectDM={handleSelectDM}
              onSelectGroup={handleSelectGroup}
              selectedDMId={selectedDMId}
              selectedGroupId={selectedGroupId}
            />
            <DMChat friendId={selectedDMId} />
          </>
        )}
        {currentView === "group" && selectedGroupId && (
          <>
            <FriendsSidebar 
              onOpenSettings={handleOpenSettings} 
              onSelectDM={handleSelectDM}
              onSelectGroup={handleSelectGroup}
              selectedDMId={selectedDMId}
              selectedGroupId={selectedGroupId}
            />
            <GroupChat groupId={selectedGroupId} />
          </>
        )}
        {currentView === "server" && (
          <>
            <ChannelSidebar onOpenSettings={handleOpenSettings} />
            <ChatArea />
            <MembersList />
          </>
        )}
      </div>

      {/* Settings Overlay */}
      {isSettingsOpen && (
        <UserSettings onClose={handleCloseSettings} />
      )}
    </div>
  );
}
