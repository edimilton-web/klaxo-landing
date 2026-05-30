"use client";

import React from "react";

/* ─── shared data ─────────────────────────────────────────────────────────── */

const subs = [
  { initial: "M", color: "#0078D4", name: "Microsoft 365",    cat: "Produtividade", users: ["AR","ML"],      extra: 0, date: "Jun 5",  dateWarn: false, amount: "€12/mês", status: "duplicate", owner: "AR", ownerColor: "#6366F1" },
  { initial: "G", color: "#34A853", name: "Google Workspace", cat: "Produtividade", users: ["AR","SL","JP"], extra: 0, date: "Jun 10", dateWarn: false, amount: "€8/mês",  status: "active",    owner: "SL", ownerColor: "#EC4899" },
  { initial: "Z", color: "#2D8CFF", name: "Zoom",             cat: "Comunicação",   users: ["AR"],           extra: 0, date: "Jun 15", dateWarn: false, amount: "€15/mês", status: "unused",    owner: "AR", ownerColor: "#6366F1" },
];

const userColors = { AR: "#6366F1", ML: "#10B981", JP: "#F59E0B", SL: "#EC4899" };

/* ─── status badge (shared) ────────────────────────────────────────────────── */

const StatusBadge = ({ status, light }) => {
  const map = {
    active:    { label: "Ativa",      bg: light ? "rgba(16,185,129,.12)"  : "rgba(16,185,129,.15)",  color: light ? "#059669" : "#34D399" },
    duplicate: { label: "Duplicado",  bg: light ? "rgba(239,68,68,.10)"   : "rgba(239,68,68,.15)",   color: light ? "#DC2626" : "#F87171" },
    unused:    { label: "Não usada?", bg: light ? "rgba(245,158,11,.12)"  : "rgba(245,158,11,.15)",  color: light ? "#D97706" : "#FCD34D" },
    trial:     { label: "Trial",      bg: light ? "rgba(99,102,241,.12)"  : "rgba(99,102,241,.15)",  color: light ? "#4F46E5" : "#A5B4FC" },
  };
  const s = map[status] ?? map.active;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", padding: "2px 7px",
      borderRadius: 20, fontSize: 10, fontWeight: 600,
      background: s.bg, color: s.color, whiteSpace: "nowrap",
    }}>{s.label}</span>
  );
};

/* ─── MOBILE card (light theme) ────────────────────────────────────────────── */

function MobileDashboard() {
  const kpis = [
    { label: "Monthly spend",   value: "€847",  sub: "+12% vs last mo",    color: "#DC2626", icon: "↑" },
    { label: "Active subs",     value: "18",    sub: "+5 this quarter",     color: "#6366F1", icon: "↗" },
    { label: "Saved this year", value: "€890",  sub: "4 duplicates fixed",  color: "#059669", icon: "↓" },
  ];

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      background: "#FFFFFF",
      borderRadius: 16,
      border: "1px solid #E4E4E7",
      overflow: "hidden",
      boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
      userSelect: "none",
    }}>
      {/* Header */}
      <div style={{
        padding: "14px 16px", borderBottom: "1px solid #F0F0F3",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "#FAFAFA",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 24, height: 24, background: "#6366F1", borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path d="M2 7L7 2L12 7L7 12Z" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="7" cy="7" r="1.8" fill="white" />
            </svg>
          </div>
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#18181B", letterSpacing: -0.3 }}>Acme Corp</span>
            <span style={{ fontSize: 11, color: "#9CA3AF", marginLeft: 6 }}>May 2026</span>
          </div>
        </div>
        <div style={{
          fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 20,
          background: "rgba(239,68,68,.10)", color: "#DC2626",
        }}>2 alerts</div>
      </div>

      {/* Duplicate alert */}
      <div style={{
        margin: "12px 14px 0",
        background: "#FEF2F2", border: "1px solid #FECACA",
        borderRadius: 10, padding: "9px 12px",
        display: "flex", alignItems: "flex-start", gap: 8,
      }}>
        <span style={{ fontSize: 13, color: "#EF4444", lineHeight: 1, marginTop: 1 }}>⚠</span>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#DC2626" }}>
            2 subscrições duplicadas detetadas — €127/mês desperdiçados
          </div>
          <div style={{ fontSize: 11, color: "#EF4444", opacity: 0.8, marginTop: 2 }}>
            Microsoft 365 · Zoom
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: 8, padding: "12px 14px",
      }}>
        {kpis.map((k) => (
          <div key={k.label} style={{
            background: "#F8F8FB", border: "1px solid #E4E4E7",
            borderRadius: 10, padding: "10px 10px 8px",
          }}>
            <div style={{ fontSize: 9, color: "#9CA3AF", fontWeight: 500, marginBottom: 4 }}>{k.label}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#18181B", letterSpacing: -0.5, lineHeight: 1 }}>{k.value}</div>
            <div style={{ fontSize: 9, color: k.color, marginTop: 4, fontWeight: 500 }}>{k.icon} {k.sub}</div>
          </div>
        ))}
      </div>

      {/* Mini subscription list */}
      <div style={{ padding: "0 14px 14px" }}>
        <div style={{
          background: "#F8F8FB", border: "1px solid #E4E4E7",
          borderRadius: 10, overflow: "hidden",
        }}>
          <div style={{
            padding: "9px 12px", borderBottom: "1px solid #F0F0F3",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>Subscriptions</span>
            <span style={{ fontSize: 10, color: "#6B7280" }}>68 total</span>
          </div>
          {subs.slice(0, 4).map((s, i) => (
            <div key={s.name} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "8px 12px",
              borderBottom: i < 3 ? "1px solid #F0F0F3" : "none",
              background: "#FFFFFF",
            }}>
              <div style={{
                width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                background: `${s.color}18`, color: s.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, fontWeight: 700,
              }}>{s.initial}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#18181B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name}</div>
                <div style={{ fontSize: 10, color: "#9CA3AF" }}>{s.cat}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                <span style={{ fontSize: 12, color: "#374151", fontWeight: 500 }}>{s.amount}</span>
                <StatusBadge status={s.status} light />
              </div>
            </div>
          ))}
          <div style={{
            padding: "8px 12px", textAlign: "center",
            fontSize: 11, color: "#6366F1", fontWeight: 600,
            background: "#FAFAFA", borderTop: "1px solid #F0F0F3",
          }}>View all 68 →</div>
        </div>
      </div>
    </div>
  );
}

/* ─── DESKTOP dashboard (dark theme) ─────────────────────────────────────── */

export default function DashboardMockup() {
  return (
    <>
      <style>{`
        .dm-mobile { display: none; }
        .dm-outer  { width: 100%; display: flex; justify-content: center; overflow: hidden; }
        .dm-scaler { width: 860px; flex-shrink: 0; }

        @media (max-width: 900px) { .dm-scaler { zoom: 0.88; } }
        @media (max-width: 760px) { .dm-scaler { zoom: 0.74; } }
        @media (max-width: 640px) {
          .dm-mobile { display: block; }
          .dm-outer  { display: none; }
        }
      `}</style>

      {/* Mobile light card */}
      <div className="dm-mobile">
        <MobileDashboard />
      </div>

      {/* Desktop full dashboard */}
      <div className="dm-outer">
        <div className="dm-scaler">
          <div style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            background: "#141418", borderRadius: 14, overflow: "hidden",
            border: "1px solid #282835", display: "flex",
            width: 860, height: 580, fontSize: 13, userSelect: "none",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          }}>

            {/* Sidebar */}
            <aside style={{
              width: 196, background: "#17171E",
              borderRight: "1px solid #252530",
              display: "flex", flexDirection: "column", flexShrink: 0,
            }}>
              <div style={{ padding: 16, borderBottom: "1px solid #252530" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 26, height: 26, background: "#6366F1", borderRadius: 7,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7L7 2L12 7L7 12Z" stroke="white" strokeWidth="1.5" fill="none" />
                      <circle cx="7" cy="7" r="1.8" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#F4F4F5", letterSpacing: -0.4 }}>Klaxo</div>
                    <div style={{ fontSize: 9, color: "#888896", fontWeight: 500 }}>Business</div>
                  </div>
                </div>
                <div style={{
                  marginTop: 10, background: "#212128", border: "1px solid #303038",
                  borderRadius: 8, padding: "7px 10px", display: "flex", alignItems: "center", gap: 7,
                }}>
                  <div style={{
                    width: 20, height: 20, background: "#6366F1", borderRadius: 5,
                    flexShrink: 0, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 9, fontWeight: 700, color: "#fff",
                  }}>AC</div>
                  <div style={{ flex: 1, fontSize: 11, color: "#D4D4D8", fontWeight: 500 }}>Acme Corp</div>
                  <div style={{ color: "#888896", fontSize: 11 }}>▾</div>
                </div>
              </div>

              {[
                { label: "Main", items: [
                  { icon: "▣", name: "Dashboard",     active: true },
                  { icon: "↻", name: "Subscriptions", badge: "68", badgeType: "p" },
                  { icon: "⚡", name: "Duplicates",    badge: "2",  badgeType: "r" },
                  { icon: "◆", name: "Insights",      badge: "4",  badgeType: "y" },
                ]},
                { label: "Manage", items: [
                  { icon: "◎", name: "Team",       badge: "5", badgeType: "p" },
                  { icon: "☰", name: "Reports" },
                  { icon: "↓", name: "Export CSV" },
                ]},
                { label: "Account", items: [
                  { icon: "⚙", name: "Settings" },
                  { icon: "◇", name: "Billing" },
                ]},
              ].map((group) => (
                <div key={group.label}>
                  <div style={{
                    padding: "8px 10px 2px", fontSize: 9, color: "#52525F",
                    fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 8,
                  }}>{group.label}</div>
                  {group.items.map((item) => (
                    <div key={item.name} style={{
                      display: "flex", alignItems: "center", gap: 8, padding: "6px 10px",
                      color: item.active ? "#F4F4F5" : "#888896",
                      borderRadius: 6, margin: "1px 6px", fontSize: 12,
                      background: item.active ? "rgba(99,102,241,.14)" : "transparent",
                    }}>
                      <span style={{ fontSize: 13, width: 16, textAlign: "center", color: item.active ? "#818CF8" : undefined }}>
                        {item.icon}
                      </span>
                      {item.name}
                      {item.badge && (
                        <span style={{
                          marginLeft: "auto", padding: "1px 6px", borderRadius: 20, fontSize: 9, fontWeight: 700,
                          background: item.badgeType === "r" ? "rgba(239,68,68,.2)" : item.badgeType === "y" ? "rgba(245,158,11,.2)" : "rgba(99,102,241,.2)",
                          color: item.badgeType === "r" ? "#F87171" : item.badgeType === "y" ? "#FCD34D" : "#A5B4FC",
                        }}>{item.badge}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <div style={{ marginTop: "auto", padding: 10 }}>
                <div style={{ background: "#212128", border: "1px solid #303038", borderRadius: 10, padding: 10 }}>
                  <div style={{ fontSize: 10, color: "#888896", marginBottom: 3 }}>Current plan</div>
                  <div style={{ fontSize: 12, color: "#D4D4D8", fontWeight: 600, marginBottom: 8 }}>Team · €19/mo</div>
                  <div style={{ height: 3, background: "#303038", borderRadius: 2 }}>
                    <div style={{ width: "68%", height: "100%", background: "#6366F1", borderRadius: 2 }} />
                  </div>
                  <div style={{ fontSize: 10, color: "#68687A", marginTop: 4 }}>68 / 100 subscriptions</div>
                </div>
              </div>
            </aside>

            {/* Main */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

              {/* Topbar */}
              <div style={{
                padding: "12px 20px", borderBottom: "1px solid #252530",
                background: "#15151A", display: "flex", alignItems: "center",
                justifyContent: "space-between", flexShrink: 0,
              }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#F4F4F5" }}>Dashboard</div>
                  <div style={{ fontSize: 11, color: "#68687A", marginTop: 1 }}>Good morning, Ana · May 2026</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ display: "flex", background: "#212128", border: "1px solid #303038", borderRadius: 7, overflow: "hidden" }}>
                    {["Month", "Quarter", "Year"].map((t, i) => (
                      <span key={t} style={{ fontSize: 11, padding: "5px 9px", color: i === 1 ? "#fff" : "#888896", background: i === 1 ? "#6366F1" : "transparent" }}>{t}</span>
                    ))}
                  </div>
                  {["⚙", "🔔", "?"].map((icon, i) => (
                    <div key={i} style={{
                      width: 30, height: 30, background: "#212128", border: "1px solid #303038",
                      borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#888896", fontSize: 12, position: "relative",
                    }}>
                      {icon}
                      {i === 1 && <div style={{ position: "absolute", top: 5, right: 5, width: 5, height: 5, background: "#EF4444", borderRadius: "50%" }} />}
                    </div>
                  ))}
                  <div style={{
                    width: 28, height: 28, background: "#6366F1", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 700, color: "#fff",
                  }}>AR</div>
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, overflow: "hidden", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>

                {/* Alert */}
                <div style={{
                  background: "rgba(239,68,68,.07)", border: "1px solid rgba(239,68,68,.18)",
                  borderRadius: 9, padding: "9px 13px",
                  display: "flex", alignItems: "center", gap: 10, flexShrink: 0,
                }}>
                  <span style={{ fontSize: 14, color: "#EF4444" }}>⚠</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#FCA5A5" }}>⚠ 2 subscrições duplicadas detetadas — €127/mês desperdiçados</div>
                    <div style={{ fontSize: 11, color: "#F87171", opacity: 0.7, marginTop: 1 }}>Microsoft 365 · Zoom</div>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#EF4444", whiteSpace: "nowrap" }}>Review duplicates →</div>
                </div>

                {/* KPIs */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, flexShrink: 0 }}>
                  {[
                    { label: "Monthly spend",        value: "€847",    delta: "+12% vs last month",   dir: "up", sparkHi: [5,6] },
                    { label: "Yearly projection",    value: "€10.164", delta: "+8% vs last year",      dir: "up", sparkHi: [4,5,6] },
                    { label: "Active subscriptions", value: "18",      delta: "+5 this quarter",       dir: "up", sparkHi: [3,4,5,6] },
                    { label: "Saved this year",      value: "€890",    delta: "4 duplicates resolved", dir: "dn", sparkHi: [4,5,6], green: true },
                    { label: "Possibly unused",      value: "3 subs",  delta: "€380/month at risk",    dir: "am", sparkHi: [4,5,6], warn: true, cta: "Review insights →" },
                  ].map((kpi) => {
                    const heights = [35, 50, 44, 62, 55, 80, 100];
                    return (
                      <div key={kpi.label} style={{
                        background: kpi.warn ? "rgba(245,158,11,.05)" : "#1A1A22",
                        border: `1px solid ${kpi.warn ? "rgba(245,158,11,.22)" : "#282835"}`,
                        borderRadius: 10, padding: 12,
                      }}>
                        <div style={{ fontSize: 10, color: kpi.warn ? "#92400E" : "#68687A", fontWeight: 500, marginBottom: 7 }}>{kpi.label}</div>
                        <div style={{ height: 18, display: "flex", alignItems: "flex-end", gap: 2, marginBottom: 5 }}>
                          {heights.map((h, i) => (
                            <div key={i} style={{
                              width: 4, height: `${h}%`, borderRadius: 1,
                              background: kpi.sparkHi && kpi.sparkHi.includes(i)
                                ? (kpi.warn ? "#F59E0B" : "#6366F1")
                                : (kpi.warn ? "rgba(245,158,11,.25)" : "rgba(99,102,241,.25)"),
                            }} />
                          ))}
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1, color: kpi.green ? "#10B981" : kpi.warn ? "#F59E0B" : "#F4F4F5" }}>{kpi.value}</div>
                        <div style={{ fontSize: 10, marginTop: 5, display: "flex", alignItems: "center", gap: 3, color: kpi.dir === "up" ? "#F87171" : kpi.dir === "dn" ? "#34D399" : "#FCD34D" }}>
                          {kpi.dir === "up" ? "↑" : kpi.dir === "dn" ? "↓" : "→"} {kpi.delta}
                        </div>
                        {kpi.cta && <div style={{ fontSize: 10, color: "#818CF8", fontWeight: 600, marginTop: 4 }}>{kpi.cta}</div>}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 200px", gap: 10, flex: 1, minHeight: 0 }}>

                  {/* Table */}
                  <div style={{ background: "#1A1A22", border: "1px solid #282835", borderRadius: 10, padding: 14, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#A1A1AA", marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
                      All subscriptions
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 20, fontWeight: 600, background: "rgba(239,68,68,.15)", color: "#F87171" }}>5 need action</span>
                        {["▼ Filter", "+ Add"].map((btn) => (
                          <span key={btn} style={{ fontSize: 10, color: "#52525F", background: "#212128", border: "1px solid #303038", borderRadius: 6, padding: "3px 8px" }}>{btn}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ flex: 1, overflow: "hidden" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                        <thead>
                          <tr>
                            {["", "Name", "Category", "Users", "Next billing", "Monthly", "Status", "Owner"].map((h) => (
                              <th key={h} style={{ fontSize: 10, color: "#68687A", fontWeight: 500, textAlign: "left", padding: "0 8px 8px", borderBottom: "1px solid #282835", whiteSpace: "nowrap" }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {subs.map((s) => (
                            <tr key={s.name}>
                              <td style={{ padding: "7px 8px", borderBottom: "1px solid #212128" }}>
                                <div style={{ width: 20, height: 20, borderRadius: 5, background: `${s.color}20`, color: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700 }}>{s.initial}</div>
                              </td>
                              <td style={{ padding: "7px 8px", borderBottom: "1px solid #212128", color: "#E4E4E7", fontWeight: 500 }}>{s.name}</td>
                              <td style={{ padding: "7px 8px", borderBottom: "1px solid #212128", color: "#68687A" }}>{s.cat}</td>
                              <td style={{ padding: "7px 8px", borderBottom: "1px solid #212128" }}>
                                <div style={{ display: "flex" }}>
                                  {s.users.map((u, i) => (
                                    <div key={i} style={{ width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #1A1A22", fontSize: 7, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: i === 0 ? 0 : -5, background: userColors[u] ?? "#6366F1", color: "#fff", zIndex: s.users.length - i, position: "relative" }}>{u}</div>
                                  ))}
                                  {s.extra > 0 && <div style={{ width: 18, height: 18, borderRadius: "50%", border: "1.5px solid #1A1A22", fontSize: 7, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: -5, background: "#303038", color: "#888896", position: "relative" }}>+{s.extra}</div>}
                                </div>
                              </td>
                              <td style={{ padding: "7px 8px", borderBottom: "1px solid #212128", color: s.dateWarn ? "#F87171" : "#68687A", whiteSpace: "nowrap" }}>{s.date}{s.dateWarn ? " ⚡" : ""}</td>
                              <td style={{ padding: "7px 8px", borderBottom: "1px solid #212128", color: "#A1A1AA", textAlign: "right" }}>{s.amount}</td>
                              <td style={{ padding: "7px 8px", borderBottom: "1px solid #212128" }}><StatusBadge status={s.status} /></td>
                              <td style={{ padding: "7px 8px", borderBottom: "1px solid #212128" }}>
                                <div style={{ width: 20, height: 20, background: s.ownerColor, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 8, fontWeight: 700, color: "#fff" }}>{s.owner}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div style={{ marginTop: 8, textAlign: "center", fontSize: 10, color: "#52525F", paddingTop: 8, borderTop: "1px solid #212128" }}>View all 68 subscriptions →</div>
                  </div>

                  {/* Right col */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ background: "#1A1A22", border: "1px solid #282835", borderRadius: 10, padding: 12, flex: 1 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#A1A1AA", marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        Action required
                        <span style={{ fontSize: 10, padding: "2px 7px", borderRadius: 20, fontWeight: 600, background: "rgba(239,68,68,.15)", color: "#F87171" }}>5</span>
                      </div>
                      {[
                        { dot: "#6366F1", name: "Vercel Pro renewal",    right: "3d",  rightColor: "#818CF8" },
                        { dot: "#6366F1", name: "GitHub Teams renewal",  right: "5d",  rightColor: "#818CF8" },
                        { dot: "#EF4444", name: "Slack Pro duplicate",   right: "dup", rightColor: "#F87171" },
                        { dot: "#F59E0B", name: "Notion — 67d inactive", right: "€48", rightColor: "#FCD34D" },
                        { dot: "#A5B4FC", name: "Linear trial ending",   right: "7d",  rightColor: "#A5B4FC" },
                      ].map((item) => (
                        <div key={item.name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "1px solid #212128" }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.dot, flexShrink: 0 }} />
                          <div style={{ flex: 1, fontSize: 11, color: "#D4D4D8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                          <div style={{ fontSize: 10, color: item.rightColor, flexShrink: 0 }}>{item.right}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: "#1A1A22", border: "1px solid #282835", borderRadius: 10, padding: 12, flex: 1 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#A1A1AA", marginBottom: 12 }}>By category</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <svg width="64" height="64" viewBox="0 0 64 64" style={{ flexShrink: 0 }}>
                          <circle cx="32" cy="32" r="24" fill="none" stroke="#282835" strokeWidth="10" />
                          <circle cx="32" cy="32" r="24" fill="none" stroke="#6366F1" strokeWidth="10" strokeDasharray="53 98"  strokeDashoffset="-24" />
                          <circle cx="32" cy="32" r="24" fill="none" stroke="#10B981" strokeWidth="10" strokeDasharray="28 123" strokeDashoffset="-77" />
                          <circle cx="32" cy="32" r="24" fill="none" stroke="#F59E0B" strokeWidth="10" strokeDasharray="17 134" strokeDashoffset="-105" />
                          <circle cx="32" cy="32" r="24" fill="none" stroke="#EC4899" strokeWidth="10" strokeDasharray="14 137" strokeDashoffset="-122" />
                          <text x="32" y="36" textAnchor="middle" fontSize="10" fill="#F4F4F5" fontWeight="600" fontFamily="Inter">68</text>
                        </svg>
                        <div style={{ flex: 1 }}>
                          {[
                            { color: "#6366F1", label: "Dev Tools",    pct: "35%" },
                            { color: "#10B981", label: "Productivity", pct: "18%" },
                            { color: "#F59E0B", label: "Marketing",    pct: "11%" },
                            { color: "#EC4899", label: "Design",       pct: "9%"  },
                            { color: "#52525F", label: "Other",        pct: "27%" },
                          ].map((item) => (
                            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, color: "#A1A1AA", padding: "2px 0" }}>
                              <div style={{ width: 7, height: 7, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                              {item.label}
                              <span style={{ marginLeft: "auto", color: "#D4D4D8", fontWeight: 500 }}>{item.pct}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
