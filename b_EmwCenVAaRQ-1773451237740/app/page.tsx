import ServerSidebar from "@/components/ServerSidebar";
import ChannelSidebar from "@/components/ChannelSidebar";
import ChatArea from "@/components/ChatArea";
import MembersList from "@/components/MembersList";
import styles from "./page.module.css";

export default function DiscordClone() {
  return (
    <div className={styles.app}>
      <ServerSidebar />
      <ChannelSidebar />
      <div className={styles.mainContent}>
        <ChatArea />
        <MembersList />
      </div>
    </div>
  );
}
