"use client";

import { useState, useEffect } from "react";
import { currentUser } from "@/lib/data";
import styles from "./UserSettings.module.css";

interface UserSettingsProps {
  onClose: () => void;
}

type SettingsCategory = "mi-cuenta" | "perfiles" | "privacidad" | "seguridad" | "aplicaciones" | "conexiones" | "clips" | "amigo-activo" | "nitro" | "tienda-nitro" | "server-boost" | "suscripciones" | "regalar" | "biblioteca" | "inventario" | "facturacion" | "aspecto" | "accesibilidad" | "voz-video" | "texto-imagenes" | "notificaciones" | "combinaciones" | "idioma" | "modo-streamer" | "avanzado" | "historial" | "que-hay-de-nuevo" | "informacion" | "cerrar-sesion";

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
      { id: "tienda-nitro", label: "Tienda Nitro" },
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

            {activeCategory === "nitro" && (
              <div className={styles.nitroPage}>
                <h2 className={styles.pageTitle}>Nitro</h2>
                
                {/* Hero Section */}
                <div className={styles.nitroHero}>
                  <div className={styles.nitroHeroContent}>
                    <div className={styles.nitroLogo}>
                      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C22.0738794,9.14892503 21.9135916,9.07073545 21.8034849,8.93995846 L20.5029371,7.35769734 L20.5029371,9.35789159 C20.5029371,9.77582472 20.1476968,10.1240466 19.7213402,10.1240466 L19.2949836,10.1240466 C18.868627,10.1240466 18.5133867,9.77582472 18.5133867,9.35789159 L18.5133867,5.07798549 C18.5133867,4.65765931 18.868627,4.31183048 19.2949836,4.31183048 L19.6463761,4.31183048 C19.8192611,4.31183048 19.9795489,4.39002006 20.0896555,4.52079705 L21.3902033,6.10305765 L21.3902033,5.07798549 C21.3902033,4.65765931 21.7454436,4.31183048 22.17198,4.31183048 L22.5765496,4.31183048 C23.0029062,4.31183048 23.3581465,4.65765931 23.3581465,5.07798549 L23.3581465,9.35789159 C23.3581465,9.77582472 23.0029062,10.1240466 22.5765496,10.1240466 L22.2467643,10.1240466 Z M9.94776493,9.14892503 C9.77487994,9.14892503 9.61459219,9.07073545 9.50448555,8.93995846 L8.20393773,7.35769734 L8.20393773,9.35789159 C8.20393773,9.77582472 7.84869743,10.1240466 7.42234084,10.1240466 L6.99598425,10.1240466 C6.56962766,10.1240466 6.21438735,9.77582472 6.21438735,9.35789159 L6.21438735,5.07798549 C6.21438735,4.65765931 6.56962766,4.31183048 6.99598425,4.31183048 L7.34737668,4.31183048 C7.52026167,4.31183048 7.68054942,4.39002006 7.79065606,4.52079705 L9.09120389,6.10305765 L9.09120389,5.07798549 C9.09120389,4.65765931 9.4464442,4.31183048 9.87280079,4.31183048 L10.2774704,4.31183048 C10.7038272,4.31183048 11.0590673,4.65765931 11.0590673,5.07798549 L11.0590673,9.35789159 C11.0590673,9.77582472 10.7038272,10.1240466 10.2774704,10.1240466 L9.94776493,10.1240466 L9.94776493,9.14892503 Z M2.98966977,5.07798549 C2.98966977,4.65765931 2.63442946,4.31183048 2.20807287,4.31183048 L1.78171628,4.31183048 C1.35535969,4.31183048 0.999948837,4.65765931 0.999948837,5.07798549 C0.999948837,5.49831168 1.35535969,5.8441405 1.78171628,5.8441405 L2.20807287,5.8441405 C2.63442946,5.8441405 2.98966977,5.49831168 2.98966977,5.07798549 Z M5.71873646,5.07798549 C5.71873646,5.49831168 5.36349615,5.8441405 4.93713956,5.8441405 L2.98966977,5.8441405 L2.98966977,7.26792599 L4.93713956,7.26792599 C5.36349615,7.26792599 5.71873646,7.61375481 5.71873646,8.03408099 C5.71873646,8.45680022 5.36349615,8.8002221 4.93713956,8.8002221 L2.56229859,8.8002221 C2.136113,8.8002221 1.78171628,8.45680022 1.78171628,8.03408099 L1.78171628,5.29455506 C1.78171628,4.87182888 2.136113,4.52840699 2.56229859,4.52840699 L4.93713956,4.52840699 C5.36349615,4.52840699 5.71873646,4.87182888 5.71873646,5.29455506 L5.71873646,5.07798549 Z M17.9269041,6.53484519 C17.9269041,8.14529594 16.6262279,9.45015896 15.0079802,9.45015896 L12.4196945,9.45015896 C11.9933379,9.45015896 11.6380976,9.10433013 11.6380976,8.6840039 L11.6380976,5.29455506 C11.6380976,4.87182888 11.9933379,4.52840699 12.4196945,4.52840699 L15.0079802,4.52840699 C16.6262279,4.52840699 17.9269041,5.83327002 17.9269041,7.44372077 L17.9269041,6.53484519 Z M16.137225,7.21793599 C16.137225,6.39004292 15.4532996,5.70934377 14.6213336,5.70934377 L13.4276479,5.70934377 L13.4276479,8.72652874 L14.6213336,8.72652874 C15.4532996,8.72652874 16.137225,8.04582907 16.137225,7.21793599 Z"/>
                      </svg>
                      <span className={styles.nitroText}>NITRO</span>
                    </div>
                    <p className={styles.nitroTagline}>Desbloquea lo mejor de Discord</p>
                    <p className={styles.nitroDescription}>
                      Suscribete a Nitro para obtener emojis personalizados, stickers animados, mejores subidas de archivos y mucho mas.
                    </p>
                  </div>
                  <div className={styles.nitroHeroImage}>
                    <div className={styles.nitroRocket}>
                      <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
                        <path d="M48 8C25.91 8 8 25.91 8 48s17.91 40 40 40 40-17.91 40-40S70.09 8 48 8z" fill="url(#paint0_linear)"/>
                        <path d="M48 24l-12 24h24L48 24z" fill="#fff"/>
                        <path d="M36 48v16h24V48H36z" fill="#fff"/>
                        <path d="M32 64l8 8h16l8-8H32z" fill="#fff"/>
                        <defs>
                          <linearGradient id="paint0_linear" x1="8" y1="8" x2="88" y2="88" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5865F2"/>
                            <stop offset="1" stopColor="#EB459E"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Plans */}
                <div className={styles.nitroPlans}>
                  {/* Nitro Basic */}
                  <div className={styles.nitroPlan}>
                    <div className={styles.planHeader}>
                      <span className={styles.planBadge}>NITRO BASIC</span>
                    </div>
                    <div className={styles.planPrice}>
                      <span className={styles.priceAmount}>$2.99</span>
                      <span className={styles.priceUnit}>/mes</span>
                    </div>
                    <ul className={styles.planFeatures}>
                      <li>Emojis personalizados en cualquier lugar</li>
                      <li>Stickers personalizados en cualquier lugar</li>
                      <li>50 MB de subidas</li>
                      <li>Insignia de Nitro en tu perfil</li>
                    </ul>
                    <button className={styles.planBtn}>Suscribirse</button>
                  </div>

                  {/* Nitro Full */}
                  <div className={`${styles.nitroPlan} ${styles.nitroPlanFeatured}`}>
                    <div className={styles.planHeader}>
                      <span className={styles.planBadge}>NITRO</span>
                      <span className={styles.planBadgePopular}>MAS POPULAR</span>
                    </div>
                    <div className={styles.planPrice}>
                      <span className={styles.priceAmount}>$9.99</span>
                      <span className={styles.priceUnit}>/mes</span>
                    </div>
                    <ul className={styles.planFeatures}>
                      <li>Emojis personalizados en cualquier lugar</li>
                      <li>Stickers personalizados en cualquier lugar</li>
                      <li>500 MB de subidas</li>
                      <li>Streaming HD</li>
                      <li>2 Server Boosts incluidos</li>
                      <li>Insignia de Nitro en tu perfil</li>
                      <li>Fondo de perfil personalizado</li>
                      <li>Decoraciones de avatar</li>
                    </ul>
                    <button className={`${styles.planBtn} ${styles.planBtnPrimary}`}>Suscribirse</button>
                  </div>
                </div>

                {/* Features Grid */}
                <div className={styles.nitroFeatures}>
                  <h3 className={styles.nitrFeaturesTitle}>Todo lo que incluye Nitro</h3>
                  <div className={styles.featureGrid}>
                    <div className={styles.featureCard}>
                      <div className={styles.featureIcon}>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h4>Emojis personalizados</h4>
                      <p>Usa emojis de cualquier servidor en el que estes.</p>
                    </div>
                    <div className={styles.featureCard}>
                      <div className={styles.featureIcon}>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h4>Subidas mas grandes</h4>
                      <p>Comparte archivos de hasta 500 MB.</p>
                    </div>
                    <div className={styles.featureCard}>
                      <div className={styles.featureIcon}>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h4>Streaming HD</h4>
                      <p>Transmite en 4K a 60fps.</p>
                    </div>
                    <div className={styles.featureCard}>
                      <div className={styles.featureIcon}>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h4>Server Boosts</h4>
                      <p>2 boosts incluidos con tu suscripcion.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeCategory === "tienda-nitro" && (
              <div className={styles.nitroShopPage}>
                <h2 className={styles.pageTitle}>Tienda Nitro</h2>
                <p className={styles.shopSubtitle}>Personaliza tu perfil con articulos exclusivos</p>

                {/* Categories Filter */}
                <div className={styles.shopCategories}>
                  <button className={`${styles.categoryBtn} ${styles.categoryBtnActive}`}>Todo</button>
                  <button className={styles.categoryBtn}>Decoraciones de avatar</button>
                  <button className={styles.categoryBtn}>Efectos de perfil</button>
                  <button className={styles.categoryBtn}>Temas de perfil</button>
                  <button className={styles.categoryBtn}>Sonidos</button>
                </div>

                {/* Avatar Decorations Section */}
                <div className={styles.shopSection}>
                  <div className={styles.shopSectionHeader}>
                    <h3 className={styles.shopSectionTitle}>Decoraciones de avatar</h3>
                    <a href="#" className={styles.viewAllLink}>Ver todo</a>
                  </div>
                  <div className={styles.shopGrid}>
                    <div className={styles.shopItem}>
                      <div className={styles.shopItemPreview} style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)' }}>
                        <div className={styles.avatarDecoration}>
                          <div className={styles.mockAvatar}></div>
                          <div className={styles.decorationRing} style={{ borderColor: '#ff6b6b' }}></div>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Llamas ardientes</span>
                        <span className={styles.shopItemPrice}>$3.99</span>
                      </div>
                    </div>
                    <div className={styles.shopItem}>
                      <div className={styles.shopItemPreview} style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #5865f2 100%)' }}>
                        <div className={styles.avatarDecoration}>
                          <div className={styles.mockAvatar}></div>
                          <div className={styles.decorationRing} style={{ borderColor: '#00d4ff' }}></div>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Aura de hielo</span>
                        <span className={styles.shopItemPrice}>$3.99</span>
                      </div>
                    </div>
                    <div className={styles.shopItem}>
                      <div className={styles.shopItemPreview} style={{ background: 'linear-gradient(135deg, #eb459e 0%, #fee75c 100%)' }}>
                        <div className={styles.avatarDecoration}>
                          <div className={styles.mockAvatar}></div>
                          <div className={styles.decorationRing} style={{ borderColor: '#eb459e' }}></div>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Arcoiris magico</span>
                        <span className={styles.shopItemPrice}>$4.99</span>
                      </div>
                    </div>
                    <div className={styles.shopItem}>
                      <div className={styles.shopItemPreview} style={{ background: 'linear-gradient(135deg, #57f287 0%, #00d4ff 100%)' }}>
                        <div className={styles.avatarDecoration}>
                          <div className={styles.mockAvatar}></div>
                          <div className={styles.decorationRing} style={{ borderColor: '#57f287' }}></div>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Naturaleza viva</span>
                        <span className={styles.shopItemPrice}>$3.99</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Effects Section */}
                <div className={styles.shopSection}>
                  <div className={styles.shopSectionHeader}>
                    <h3 className={styles.shopSectionTitle}>Efectos de perfil</h3>
                    <a href="#" className={styles.viewAllLink}>Ver todo</a>
                  </div>
                  <div className={styles.shopGrid}>
                    <div className={styles.shopItem}>
                      <div className={styles.shopItemPreview} style={{ background: 'linear-gradient(135deg, #5865f2 0%, #eb459e 100%)' }}>
                        <div className={styles.effectPreview}>
                          <span className={styles.effectEmoji}>&#10024;</span>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Estrellas brillantes</span>
                        <span className={styles.shopItemPrice}>$5.99</span>
                      </div>
                    </div>
                    <div className={styles.shopItem}>
                      <div className={styles.shopItemPreview} style={{ background: 'linear-gradient(135deg, #1e1e2e 0%, #4a4a6a 100%)' }}>
                        <div className={styles.effectPreview}>
                          <span className={styles.effectEmoji}>&#127769;</span>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Noche estrellada</span>
                        <span className={styles.shopItemPrice}>$5.99</span>
                      </div>
                    </div>
                    <div className={styles.shopItem}>
                      <div className={styles.shopItemPreview} style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' }}>
                        <div className={styles.effectPreview}>
                          <span className={styles.effectEmoji}>&#127800;</span>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Petalos de sakura</span>
                        <span className={styles.shopItemPrice}>$5.99</span>
                      </div>
                    </div>
                    <div className={styles.shopItem}>
                      <div className={styles.shopItemPreview} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                        <div className={styles.effectPreview}>
                          <span className={styles.effectEmoji}>&#9889;</span>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Rayos electricos</span>
                        <span className={styles.shopItemPrice}>$6.99</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Themes Section */}
                <div className={styles.shopSection}>
                  <div className={styles.shopSectionHeader}>
                    <h3 className={styles.shopSectionTitle}>Temas de perfil</h3>
                    <a href="#" className={styles.viewAllLink}>Ver todo</a>
                  </div>
                  <div className={styles.shopGridLarge}>
                    <div className={styles.shopItemLarge}>
                      <div className={styles.themePreview} style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d1b4e 100%)' }}>
                        <div className={styles.themeMockProfile}>
                          <div className={styles.themeBanner} style={{ background: 'linear-gradient(90deg, #5865f2, #eb459e)' }}></div>
                          <div className={styles.themeMockAvatar}></div>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Cyberpunk</span>
                        <span className={styles.shopItemPrice}>$7.99</span>
                      </div>
                    </div>
                    <div className={styles.shopItemLarge}>
                      <div className={styles.themePreview} style={{ background: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 50%, #3d7a52 100%)' }}>
                        <div className={styles.themeMockProfile}>
                          <div className={styles.themeBanner} style={{ background: 'linear-gradient(90deg, #57f287, #00d4ff)' }}></div>
                          <div className={styles.themeMockAvatar}></div>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Bosque encantado</span>
                        <span className={styles.shopItemPrice}>$7.99</span>
                      </div>
                    </div>
                    <div className={styles.shopItemLarge}>
                      <div className={styles.themePreview} style={{ background: 'linear-gradient(135deg, #2c1810 0%, #4a2c1a 50%, #6b3d22 100%)' }}>
                        <div className={styles.themeMockProfile}>
                          <div className={styles.themeBanner} style={{ background: 'linear-gradient(90deg, #ff6b6b, #ffa500)' }}></div>
                          <div className={styles.themeMockAvatar}></div>
                        </div>
                      </div>
                      <div className={styles.shopItemInfo}>
                        <span className={styles.shopItemName}>Otono calido</span>
                        <span className={styles.shopItemPrice}>$7.99</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nitro Banner */}
                <div className={styles.shopNitroBanner}>
                  <div className={styles.bannerContent}>
                    <h3>Obten mas con Nitro</h3>
                    <p>Suscribete a Nitro para acceder a descuentos exclusivos y articulos gratuitos cada mes.</p>
                  </div>
                  <button className={styles.bannerBtn}>Ver planes de Nitro</button>
                </div>
              </div>
            )}

            {activeCategory !== "mi-cuenta" && activeCategory !== "nitro" && activeCategory !== "tienda-nitro" && (
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
