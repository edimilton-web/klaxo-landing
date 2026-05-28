"use client"

const subs = [
  { name: "Netflix", cat: "Streaming", date: "06 Jun", days: "3 days", price: "€15.99", urgent: true, color: "#E50914", initial: "N" },
  { name: "Spotify", cat: "Music", date: "10 Jun", days: "7 days", price: "€9.99", urgent: false, color: "#1DB954", initial: "S" },
  { name: "Adobe CC", cat: "Design", date: "18 Jun", days: "15 days", price: "€54.99", urgent: false, color: "#FF0000", initial: "A" },
  { name: "GitHub", cat: "Dev Tools", date: "01 Jul", days: "28 days", price: "€4.00", urgent: false, color: "#e2e8f0", initial: "G" },
  { name: "Notion", cat: "Productivity", date: "05 Jul", days: "32 days", price: "€8.00", urgent: false, color: "#fff", initial: "N" },
]

const bars = [
  { month: "Jan", val: 68, h: 48 },
  { month: "Feb", val: 72, h: 52 },
  { month: "Mar", val: 71, h: 51 },
  { month: "Apr", val: 85, h: 61 },
  { month: "May", val: 89, h: 64 },
  { month: "Jun", val: 93, h: 68, active: true },
]

export default function DashboardMockup() {
  return (
    <div style={{
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
      background: "#0D0D12",
      userSelect: "none",
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#16161E",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
        </div>
        <div style={{
          flex: 1,
          maxWidth: 280,
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 6,
          padding: "4px 12px",
          fontSize: 11,
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
          fontFamily: "monospace",
        }}>
          app.klaxo.app/dashboard
        </div>
      </div>

      {/* App body */}
      <div style={{ display: "flex", height: 420 }}>
        {/* Sidebar */}
        <div style={{
          width: 180,
          background: "#0F0F16",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flexShrink: 0,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "0 16px 20px",
            fontSize: 15,
            fontWeight: 800,
            color: "#F0F0F5",
            letterSpacing: "-0.02em",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            <div style={{
              width: 26, height: 26, borderRadius: 7,
              background: "linear-gradient(135deg,#A78BFA 0%,#7C3AED 50%,#3B0764 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, fontWeight: 900, color: "#fff",
              fontFamily: "'Nunito', sans-serif",
              boxShadow: "0 0 12px rgba(124,92,252,0.5)",
            }}>K</div>
            Klaxo
          </div>
          {[
            { label: "Dashboard", active: true, icon: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></> },
            { label: "Subscriptions", active: false, icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></> },
            { label: "Billing", active: false, icon: <><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></> },
            { label: "Settings", active: false, icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></> },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "8px 16px",
              margin: "0 8px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: item.active ? 600 : 400,
              color: item.active ? "#F0F0F5" : "rgba(240,240,245,0.4)",
              background: item.active ? "rgba(124,92,252,0.15)" : "transparent",
              cursor: "default",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {item.icon}
              </svg>
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", background: "#0D0D12" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#F0F0F5", letterSpacing: "-0.02em" }}>
                Good morning, Eddie 👋
              </div>
              <div style={{ fontSize: 11, color: "rgba(240,240,245,0.35)", marginTop: 2 }}>
                Thursday, 29 May 2026
              </div>
            </div>
            <div style={{
              padding: "6px 14px",
              borderRadius: 8,
              background: "rgba(124,92,252,0.15)",
              border: "1px solid rgba(124,92,252,0.3)",
              fontSize: 11,
              color: "#A78BFA",
              fontWeight: 600,
              cursor: "default",
            }}>
              + Add subscription
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
            {[
              { label: "Monthly spend", value: "€92.97", badge: "↑ +€4", badgeColor: "#F59E0B", badgeBg: "rgba(245,158,11,0.12)" },
              { label: "Next renewal", value: "Netflix", badge: "⚡ 3 days", badgeColor: "#EF4444", badgeBg: "rgba(239,68,68,0.12)" },
              { label: "Active subs", value: "7", badge: "✓ All tracked", badgeColor: "#10B981", badgeBg: "rgba(16,185,129,0.12)" },
            ].map((s) => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                padding: "12px 14px",
              }}>
                <div style={{ fontSize: 10, color: "rgba(240,240,245,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#F0F0F5", letterSpacing: "-0.02em", marginBottom: 6 }}>
                  {s.value}
                </div>
                <div style={{
                  display: "inline-block",
                  padding: "2px 7px",
                  borderRadius: 5,
                  fontSize: 10,
                  fontWeight: 600,
                  color: s.badgeColor,
                  background: s.badgeBg,
                }}>
                  {s.badge}
                </div>
              </div>
            ))}
          </div>

          {/* Chart + list row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {/* Spend chart */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 10,
              padding: "14px",
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(240,240,245,0.5)", marginBottom: 14 }}>
                Monthly Spend
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 72 }}>
                {bars.map((b) => (
                  <div key={b.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{
                      width: "100%",
                      height: b.h,
                      borderRadius: "4px 4px 2px 2px",
                      background: b.active
                        ? "linear-gradient(180deg, #7C5CFC, #5B3FD9)"
                        : "rgba(124,92,252,0.25)",
                      transition: "height 0.3s",
                    }} />
                    <div style={{ fontSize: 9, color: "rgba(240,240,245,0.3)" }}>{b.month}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 10, fontSize: 10, color: "rgba(240,240,245,0.25)", textAlign: "right" }}>
                €93 this month
              </div>
            </div>

            {/* Upcoming list */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 10,
              padding: "14px",
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(240,240,245,0.5)", marginBottom: 10 }}>
                Upcoming Renewals
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {subs.slice(0, 4).map((sub) => (
                  <div key={sub.name} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: 6,
                      background: `${sub.color}22`,
                      border: `1px solid ${sub.color}44`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700, color: sub.color,
                      flexShrink: 0,
                    }}>
                      {sub.initial}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#F0F0F5", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {sub.name}
                      </div>
                      <div style={{ fontSize: 10, color: "rgba(240,240,245,0.3)" }}>{sub.date}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#F0F0F5" }}>{sub.price}</div>
                      <div style={{
                        fontSize: 9,
                        color: sub.urgent ? "#EF4444" : "rgba(240,240,245,0.3)",
                        fontWeight: sub.urgent ? 600 : 400,
                      }}>
                        {sub.days}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
