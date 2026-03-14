"use client";

import { useState, useEffect } from "react";
import { currentUser } from "@/lib/data";
import styles from "./UserSettings.module.css";

interface UserSettingsProps {
  onClose: () => void;
}

type SettingsCategory = "mi-cuenta" | "perfiles" | "privacidad" | "seguridad" | "aplicaciones" | "conexiones" | "clips" | "amigo-activo" | "nitro" | "server-boost" | "suscripciones" | "regalar" | "biblioteca" | "inventario" | "facturacion" | "aspecto" | "accesibilidad" | "voz-video" | "texto-imagenes" | "notificaciones" | "combinaciones" | "idioma" | "modo-streamer" | "avanzado" | "historial" | "que-hay-de-nuevo" | "informacion" | "cerrar-sesion";

const settingsMenu = [
  {
    title: "Ajustes de usuario",
    items: [
      { id: "mi-cuenta", label: "Mi cuenta" },
      { id: "perfiles", label: "Perfiles" },
      { id: "privacidad", label: "Privacidad y seguridad" },
      { id: "seguridad", label: "Seguridad familiar" },
      { id: "aplicaciones", label: "Aplicaciones autorizadas" },
      { id: "conexiones", label: "Conexiones" },
      { id: "clips", label: "Clips" },
      { id: "amigo-activo", label: "Estado de amigo activo" },
    ],
  },
  {
    title: "Ajustes de facturacion",
    items: [
      { id: "nitro", label: "Nitro" },
      { id: "server-boost", label: "Server Boost" },
      { id: "suscripciones", label: "Suscripciones" },
      { id: "regalar", label: "Regalos" },
      { id: "biblioteca", label: "Biblioteca de regalos" },
      { id: "inventario", label: "Inventario de la tienda" },
      { id: "facturacion", label: "Facturacion" },
    ],
  },
  {
    title: "Ajustes de la aplicacion",
    items: [
      { id: "aspecto", label: "Aspecto" },
      { id: "accesibilidad", label: "Accesibilidad" },
      { id: "voz-video", label: "Voz y video" },
      { id: "texto-imagenes", label: "Texto e imagenes" },
      { id: "notificaciones", label: "Notificaciones" },
      { id: "combinaciones", label: "Combinaciones de teclas" },
      { id: "idioma", label: "Idioma" },
      { id: "modo-streamer", label: "Modo streamer" },
      { id: "avanzado", label: "Avanzado" },
    ],
  },
  {
    title: null,
    items: [
      { id: "historial", label: "Registro de cambios" },
      { id: "que-hay-de-nuevo", label: "Que hay de nuevo" },
    ],
  },
];

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

export default function UserSettings({ onClose }: UserSettingsProps) {
  const [activeCategory, setActiveCategory] = useState<SettingsCategory>("mi-cuenta");

  // Handle ESC key to close settings
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className={styles.settingsWrapper}>
      {/* Left Fill */}
      <div className={styles.leftFill}></div>
      
      {/* Sidebar */}
      <nav className={styles.sidebar}>
        <div className={styles.sidebarScroller}>
          {settingsMenu.map((section, idx) => (
            <div key={idx} className={styles.section}>
              {section.title && (
                <h3 className={styles.sectionTitle}>{section.title}</h3>
              )}
              {section.items.map((item) => (
                <button
                  key={item.id}
                  className={`${styles.menuItem} ${activeCategory === item.id ? styles.active : ""}`}
                  onClick={() => setActiveCategory(item.id as SettingsCategory)}
                >
                  {item.label}
                </button>
              ))}
              {idx < settingsMenu.length - 1 && <div className={styles.divider}></div>}
            </div>
          ))}
          
          <div className={styles.divider}></div>
          
          <button className={styles.menuItem} onClick={onClose}>
            <span>Cerrar sesion</span>
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.44 14.54A3.99 3.99 0 0 0 20 11V5c0-2.2-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4v6c0 1.54.87 2.87 2.14 3.54l-.01.01c-.28.12-.5.32-.67.57l-3.43 5.05A1.99 1.99 0 0 0 5.7 23h10.6c1.4 0 2.34-1.45 1.72-2.69l-3.43-5.05a1.4 1.4 0 0 0-.66-.56l-.01-.01.02-.01c-.28-.12-.5-.31-.67-.57l3.43-5.05a2 2 0 0 0-.72-2.83H10V11c0 2.2 1.8 4 4 4a4 4 0 0 0 3.44-1.96Z"/>
            </svg>
          </button>
          
          <div className={styles.versionInfo}>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className={styles.version}>Canary 367085 (a1b2c3d)</div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className={styles.content}>
        <div className={styles.contentScroller}>
          <div className={styles.contentInner}>
            {activeCategory === "mi-cuenta" && (
              <div className={styles.accountSettings}>
                <h2 className={styles.pageTitle}>Mi cuenta</h2>
                
                {/* User Card */}
                <div className={styles.userCard}>
                  <div className={styles.userBanner}></div>
                  <div className={styles.userCardBody}>
                    <div className={styles.userAvatarSection}>
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
                      <div className={styles.userMainInfo}>
                        <span className={styles.displayName}>{currentUser.username}</span>
                        <span className={styles.username}>{currentUser.username.toLowerCase()}</span>
                      </div>
                      <button className={styles.editProfileBtn}>Editar perfil de usuario</button>
                    </div>
                    
                    <div className={styles.userDetails}>
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <span className={styles.label}>Nombre para mostrar</span>
                          <span className={styles.value}>{currentUser.username}</span>
                        </div>
                        <button className={styles.editBtn}>Editar</button>
                      </div>
                      
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <span className={styles.label}>Nombre de usuario</span>
                          <span className={styles.value}>{currentUser.username.toLowerCase()}</span>
                        </div>
                        <button className={styles.editBtn}>Editar</button>
                      </div>
                      
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <span className={styles.label}>Correo electronico</span>
                          <span className={styles.value}>c****@gmail.com</span>
                        </div>
                        <button className={styles.editBtn}>Editar</button>
                      </div>
                      
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <span className={styles.label}>Numero de telefono</span>
                          <span className={styles.value}>No has agregado un numero de telefono.</span>
                        </div>
                        <button className={styles.editBtn}>Agregar</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Password and Authentication */}
                <div className={styles.settingsSection}>
                  <h3 className={styles.sectionHeader}>Contrasena y autenticacion</h3>
                  <button className={styles.primaryBtn}>Cambiar contrasena</button>
                  
                  <div className={styles.twoFactorSection}>
                    <h4 className={styles.subHeader}>Autenticacion de dos factores</h4>
                    <p className={styles.description}>
                      Protege tu cuenta de Discord con una capa adicional de seguridad. Una vez configurado, necesitaras tanto tu contrasena como un codigo de autenticacion de tu dispositivo movil para iniciar sesion.
                    </p>
                    <button className={styles.secondaryBtn}>Habilitar autenticacion de dos factores</button>
                  </div>
                </div>

                {/* Account Removal */}
                <div className={styles.settingsSection}>
                  <h3 className={styles.sectionHeader}>Eliminacion de cuenta</h3>
                  <p className={styles.description}>
                    Desactivar tu cuenta significa que puedes recuperarla en cualquier momento despues de realizar esta accion.
                  </p>
                  <div className={styles.dangerButtons}>
                    <button className={styles.dangerBtn}>Desactivar cuenta</button>
                    <button className={styles.dangerBtnOutline}>Eliminar cuenta</button>
                  </div>
                </div>
              </div>
            )}

            {activeCategory !== "mi-cuenta" && (
              <div className={styles.placeholderContent}>
                <h2 className={styles.pageTitle}>
                  {settingsMenu.flatMap(s => s.items).find(i => i.id === activeCategory)?.label || "Ajustes"}
                </h2>
                <p className={styles.description}>
                  Esta seccion esta en desarrollo.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Right Fill with Close Button */}
      <div className={styles.rightFill}>
        <div className={styles.closeSection}>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close Settings">
            <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z"/>
            </svg>
          </button>
          <span className={styles.closeLabel}>ESC</span>
        </div>
      </div>
    </div>
  );
}
