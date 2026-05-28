"use client"

const SUBS = [
  { name: "Slack",        team: "All teams",  price: "€87",   days: "8 days",  initial: "S", color: "#4A154B", urgent: false },
  { name: "Adobe CC",     team: "Design",     price: "€124",  days: "3 days",  initial: "A", color: "#FF0000", urgent: true  },
  { name: "Notion",       team: "Product",    price: "€32",   days: "12 days", initial: "N", color: "#888",    urgent: false },
  { name: "Figma",        team: "Design",     price: "€45",   days: "19 days", initial: "F", color: "#0ACF83", urgent: false },
  { name: "GitHub",       team: "Dev",        price: "€19",   days: "24 days", initial: "G", color: "#e2e8f0", urgent: false },
]

const BARS = [
  { month: "Jan", h: 44 },
  { month: "Feb", h: 52 },
  { month: "Mar", h: 49 },
  { month: "Apr", h: 61 },
  { month: "May", h: 58 },
  { month: "Jun", h: 68, active: true },
]

export default function DashboardMockup() {
  return (
    <div style={{
      width: "100%",
      maxWidth: 860,
      margin: "0 auto",
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
      background: "#0D0D12",
      userSelect: "none",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#16161E",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        </div>
        <div style={{
          flex: 1, maxWidth: 260, margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 6, padding: "4px 12px",
          fontSize: 11, color: "rgba(255,255,255,0.35)",
          textAlign: "center", fontFamily: "monospace",
        }}>
          business.klaxo.app/dashboard
        </div>
      </div>

      {/* App body */}
      <div style={{ display: "flex", height: 400 }}>

        {/* Sidebar */}
        <div style={{
          width: 170, background: "#0F0F16",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "18px 0", display: "flex",
          flexDirection: "column", gap: 2, flexShrink: 0,
        }}>
          {/* Logo */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "0 14px 18px",
            fontSize: 14, fontWeight: 800, color: "#F0F0F5",
            letterSpacing: "-0.02em",
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 6,
              background: "linear-gradient(135deg,#4F6EF7,#3A5CE5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 900, color: "#fff",
              fontFamily: "'Nunito', sans-serif",
              boxShadow: "0 0 10px rgba(79,110,247,0.5)",
            }}>K</div>
            <span>Klaxo <strong>Business</strong></span>
          </div>

          {/* Nav items */}
          {[
            { label: "Dashboard", active: true },
            { label: "Subscriptions", active: false },
            { label: "Team", active: false },
            { label: "Reports", active: false },
          ].map((item) => (
            <div key={item.label} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "7px 14px", margin: "0 7px", borderRadius: 7,
              fontSize: 11.5,
              fontWeight: item.active ? 600 : 400,
              color: item.active ? "#F0F0F5" : "rgba(240,240,245,0.4)",
              background: item.active ? "rgba(79,110,247,0.15)" : "transparent",
              cursor: "default",
            }}>
              {item.label}
            </div>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, overflow: "auto", padding: "18px 20px", background: "#0D0D12" }}>

          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#F0F0F5", letterSpacing: "-0.02em" }}>
              Overview
            </div>
            <div style={{
              padding: "5px 12px", borderRadius: 7,
              background: "rgba(79,110,247,0.15)",
              border: "1px solid rgba(79,110,247,0.3)",
              fontSize: 10.5, color: "#7B9EFF", fontWeight: 600, cursor: "default",
            }}>
              + Add subscription
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 16 }}>
            {[
              { label: "Monthly spend",  value: "€1,247", badge: "↑ 8%",       bc: "#F59E0B", bb: "rgba(245,158,11,.12)" },
              { label: "Active tools",   value: "12",     badge: "2 renewing",  bc: "#EF4444", bb: "rgba(239,68,68,.12)"  },
              { label: "Team members",   value: "6",      badge: "✓ All set",   bc: "#10B981", bb: "rgba(16,185,129,.12)" },
            ].map((s) => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 9, padding: "11px 13px",
              }}>
                <div style={{ fontSize: 9.5, color: "rgba(240,240,245,.35)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 5 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#F0F0F5", letterSpacing: "-.02em", marginBottom: 5 }}>
                  {s.value}
                </div>
                <div style={{
                  display: "inline-block", padding: "2px 6px", borderRadius: 4,
                  fontSize: 9.5, fontWeight: 600, color: s.bc, background: s.bb,
                }}>
                  {s.badge}
                </div>
              </div>
            ))}
          </div>

          {/* Chart + list */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 10 }}>

            {/* Spend chart */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 9, padding: "13px",
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(240,240,245,.45)", marginBottom: 12 }}>
                Monthly Spend
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 68 }}>
                {BARS.map((b) => (
                  <div key={b.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{
                      width: "100%", height: b.h, borderRadius: "3px 3px 2px 2px",
                      background: b.active
                        ? "linear-gradient(180deg,#4F6EF7,#3A5CE5)"
                        : "rgba(79,110,247,0.22)",
                    }} />
                    <div style={{ fontSize: 8, color: "rgba(240,240,245,.28)" }}>{b.month}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 8, fontSize: 9, color: "rgba(240,240,245,.22)", textAlign: "right" }}>
                €1,247 this month
              </div>
            </div>

            {/* Subscriptions list */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 9, padding: "13px",
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(240,240,245,.45)", marginBottom: 10 }}>
                Upcoming Renewals
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {SUBS.map((s) => (
                  <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 5,
                      background: `${s.color}22`,
                      border: `1px solid ${s.color}55`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700, color: s.color === "#888" ? "#aaa" : s.color,
                      flexShrink: 0,
                    }}>
                      {s.initial}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#F0F0F5", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {s.name}
                      </div>
                      <div style={{ fontSize: 9.5, color: "rgba(240,240,245,.3)" }}>{s.team}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#F0F0F5" }}>{s.price}</div>
                      <div style={{
                        fontSize: 9, fontWeight: s.urgent ? 600 : 400,
                        color: s.urgent ? "#EF4444" : "rgba(240,240,245,.3)",
                      }}>
                        {s.days}
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
