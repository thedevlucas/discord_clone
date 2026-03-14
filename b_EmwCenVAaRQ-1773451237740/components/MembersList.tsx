"use client";

import { members } from "@/lib/data";
import type { Member } from "@/lib/data";
import styles from "./MembersList.module.css";

function StatusIndicator({ status }: { status: Member["status"] }) {
  const statusColors: Record<Member["status"], string> = {
    online: "var(--green-360)",
    idle: "var(--yellow-300)",
    dnd: "var(--red-400)",
    offline: "var(--interactive-muted)",
  };

  return (
    <div 
      className={styles.statusIndicator} 
      style={{ backgroundColor: statusColors[status] }}
      aria-label={status}
    />
  );
}

function MemberItem({ member }: { member: Member }) {
  return (
    <div className={styles.member} role="listitem">
      <div className={styles.memberContent}>
        <div className={styles.avatarWrapper}>
          <div 
            className={styles.avatar}
            style={{ 
              backgroundImage: `url(${member.avatar})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <StatusIndicator status={member.status} />
        </div>
        <div className={styles.memberInfo}>
          <span 
            className={styles.memberName}
            style={{ color: member.roleColor || "var(--text-normal)" }}
          >
            {member.username}
          </span>
          {member.activity && (
            <span className={styles.memberActivity}>{member.activity}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MembersList() {
  // Group members by status (online first, then others)
  const onlineMembers = members.filter(m => m.status !== "offline");
  const offlineMembers = members.filter(m => m.status === "offline");

  // Group by role
  const admins = onlineMembers.filter(m => m.role === "Admin");
  const moderators = onlineMembers.filter(m => m.role === "Moderator");
  const bots = onlineMembers.filter(m => m.role === "Bot");
  const regularMembers = onlineMembers.filter(m => !["Admin", "Moderator", "Bot"].includes(m.role || ""));

  return (
    <aside className={styles.membersList} aria-label="Members">
      <div className={styles.membersScroller}>
        <div className={styles.membersContent} role="list">
          {/* Admins */}
          {admins.length > 0 && (
            <>
              <h3 className={styles.membersGroup}>
                Admin - {admins.length}
              </h3>
              {admins.map(member => (
                <MemberItem key={member.id} member={member} />
              ))}
            </>
          )}

          {/* Moderators */}
          {moderators.length > 0 && (
            <>
              <h3 className={styles.membersGroup}>
                Moderator - {moderators.length}
              </h3>
              {moderators.map(member => (
                <MemberItem key={member.id} member={member} />
              ))}
            </>
          )}

          {/* Bots */}
          {bots.length > 0 && (
            <>
              <h3 className={styles.membersGroup}>
                Bot - {bots.length}
              </h3>
              {bots.map(member => (
                <MemberItem key={member.id} member={member} />
              ))}
            </>
          )}

          {/* Online Members */}
          {regularMembers.length > 0 && (
            <>
              <h3 className={styles.membersGroup}>
                Online - {regularMembers.length}
              </h3>
              {regularMembers.map(member => (
                <MemberItem key={member.id} member={member} />
              ))}
            </>
          )}

          {/* Offline Members */}
          {offlineMembers.length > 0 && (
            <>
              <h3 className={styles.membersGroup}>
                Offline - {offlineMembers.length}
              </h3>
              {offlineMembers.map(member => (
                <MemberItem key={member.id} member={member} />
              ))}
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
