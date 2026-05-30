'use client'

import { useEffect } from 'react'
import DashboardMockup from '../components/DashboardMockup'
import { ThemeToggle } from '../components/theme-toggle'

const TYPEFORM = 'https://form.typeform.com/to/FClmuFNN'

const LOGO_STYLE = { fontFamily: "'Nunito', sans-serif", fontWeight: 900 }

function KlaxoBrand() {
  return (
    <>
      <span style={LOGO_STYLE}>Klaxo</span>
      <span style={{ ...LOGO_STYLE, color: '#6366F1' }}> Business</span>
    </>
  )
}

const NAV_PILLS = [
  { id: 'inicio',    label: 'Início' },
  { id: 'problema',  label: 'Problema' },
  { id: 'como',      label: 'Como funciona' },
  { id: 'feature',   label: 'Hero Feature' },
  { id: 'pricing',   label: 'Preços' },
]

const STEPS = [
  { n: '01', title: 'Cria a organização',                 desc: 'Regista a tua empresa em segundos. Sem cartão de crédito.' },
  { n: '02', title: 'Adiciona as subscrições',            desc: 'Importa via CSV ou adiciona manualmente. Simples como uma folha de cálculo.' },
  { n: '03', title: 'Deteção automática de duplicados',   desc: 'O Klaxo identifica automaticamente ferramentas pagas em duplicado na equipa.' },
  { n: '04', title: 'Alertas e relatório mensal',         desc: 'Recebe alertas antes de cada renovação e exporta relatórios para contabilidade.' },
]

const DUP_TOOLS = [
  { initial: 'N', color: '#6366F1', name: 'Notion',     waste: '€40/mês',  accounts: '3 contas' },
  { initial: 'Z', color: '#2D8CFF', name: 'Zoom',       waste: '€159/mês', accounts: '5 contas' },
  { initial: '1', color: '#D4145A', name: '1Password',  waste: '€38/mês',  accounts: '2 contas' },
]

const PLANS = [
  {
    id: 'solo',
    name: 'Solo',
    price: '9',
    features: ['25 subscrições', '1 utilizador', 'Deteção de duplicados', 'Alertas de renovação', 'Subscrições não usadas', 'Export CSV'],
    featured: false,
  },
  {
    id: 'team',
    name: 'Team',
    price: '19',
    features: ['100 subscrições', '5 utilizadores', 'Deteção de duplicados', 'Alertas de renovação', 'Subscrições não usadas', 'Export CSV', 'Categorias personalizadas'],
    featured: true,
  },
  {
    id: 'agency',
    name: 'Agency',
    price: '39',
    features: ['Subscrições ilimitadas', '20 utilizadores', 'Multi-organização', 'Aprovação de gastos', 'Audit log', 'Suporte prioritário'],
    featured: false,
  },
]

const ROADMAP = [
  { status: 'Em breve',  color: 'green',  title: 'Dashboard + Deteção de Duplicados' },
  { status: 'Em breve',  color: 'green',  title: 'Multi-utilizador e Aprovação de Gastos' },
  { status: 'Q3 2026',   color: 'yellow', title: 'Integração Moloni & InvoiceXpress' },
  { status: 'Planeado',  color: 'violet', title: 'Open Banking PSD2' },
]

export default function BusinessContent() {
  useEffect(() => {
    document.body.classList.add('biz-theme')

    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el))

    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            document.querySelectorAll('[data-navpill]').forEach((pill) => {
              pill.classList.toggle('active', pill.dataset.navpill === e.target.id)
            })
          }
        })
      },
      { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
    )
    NAV_PILLS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) navObs.observe(el)
    })

    return () => {
      document.body.classList.remove('biz-theme')
      revealObs.disconnect()
      navObs.disconnect()
    }
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── NAV ── */}
      <nav className="biz2-nav">
        <div className="biz2-nav-brand">
          <div className="biz2-nav-icon">K</div>
          <span className="biz2-nav-name"><KlaxoBrand /></span>
          <span className="biz2-launch-badge">EM LANÇAMENTO</span>
        </div>

        <div className="biz2-nav-pills">
          {NAV_PILLS.map(({ id, label }) => (
            <a
              key={id}
              className={`biz2-nav-pill${id === 'inicio' ? ' active' : ''}`}
              data-navpill={id}
              href={`#${id}`}
              onClick={(e) => scrollTo(e, id)}
            >
              {label}
            </a>
          ))}
        </div>

        <div style={{display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
          <ThemeToggle />
          <a href={TYPEFORM} className="biz2-nav-cta" target="_blank" rel="noopener noreferrer">
            Quero acesso antecipado →
          </a>
        </div>
      </nav>

      <main className="biz2-main">

        {/* ── HERO ── */}
        <section id="inicio" className="biz2-hero">
          <div className="biz2-hero-glow" />

          <div className="biz2-badge">
            <span className="biz2-badge-dot" />
            Desenvolvido em Portugal · GDPR Compliant · Em euros
          </div>

          <h1 className="biz2-h1">
            A tua empresa sabe quanto gasta em{' '}
            <span style={{ color: '#6366F1' }}>software</span>?
          </h1>

          <p className="biz2-hero-sub">
            O Klaxo Business centraliza todas as subscrições da equipa, deteta
            duplicados e envia alertas antes de cada renovação. Para equipas de
            1 a 20 pessoas.
          </p>

          <div className="biz2-hero-ctas" style={{flexDirection:'column'}}>
            <a href={TYPEFORM} className="biz2-btn-primary" target="_blank" rel="noopener noreferrer">
              Quero acesso antecipado — grátis 3 meses
            </a>
            <div style={{display:'flex',gap:'12px',flexWrap:'wrap',justifyContent:'center'}}>
              <a href="https://demobusinessklaxo.netlify.app/" target="_blank" rel="noopener noreferrer" className="biz2-btn-demo">Ver em ação →</a>
              <a href="#como" className="biz2-btn-ghost" onClick={(e) => scrollTo(e, 'como')}>
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="biz2-stats">
            <div className="biz2-stat">
              <span className="biz2-stat-val">€847</span>
              <span className="biz2-stat-label">Gasto médio/mês em PMEs portuguesas</span>
              <span className="biz2-stat-note">↑ 34% em 3 anos</span>
            </div>
            <div className="biz2-stat">
              <span className="biz2-stat-val">28%</span>
              <span className="biz2-stat-label">Das subscrições estão duplicadas ou não usadas</span>
              <span className="biz2-stat-note">≈ €237/mês desperdiçados</span>
            </div>
            <div className="biz2-stat">
              <span className="biz2-stat-val">€9</span>
              <span className="biz2-stat-label">Preço de entrada — Solo</span>
              <span className="biz2-stat-note">Trial 14 dias sem cartão</span>
            </div>
          </div>

          <div style={{ width: '100%', maxWidth: 880, margin: '52px auto 0' }}>
            <DashboardMockup />
          </div>
        </section>

        {/* ── PROBLEMA ── */}
        <section id="problema" className="biz2-section biz2-surface reveal">
          <div className="biz2-tag">O Problema</div>
          <h2 className="biz2-h2">A maioria das PMEs não sabe o que paga em software</h2>
          <div className="biz2-pain-grid">
            {[
              { icon: '🔁', val: '28%',  label: 'ferramentas duplicadas' },
              { icon: '💸', val: '€237', label: 'desperdiçados em renovações automáticas/mês' },
              { icon: '📊', val: '0',    label: 'visibilidade sobre o gasto real em software' },
            ].map((p) => (
              <div key={p.val} className="biz2-pain-card">
                <span className="biz2-pain-icon">{p.icon}</span>
                <span className="biz2-pain-val">{p.val}</span>
                <span className="biz2-pain-label">{p.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section id="como" className="biz2-section biz2-bg reveal">
          <div className="biz2-tag">Como Funciona</div>
          <h2 className="biz2-h2">Setup em 2 minutos. Zero integrações necessárias.</h2>
          <div className="biz2-steps-grid">
            {STEPS.map((s) => (
              <div key={s.n} className="biz2-step-card">
                <span className="biz2-step-num">{s.n}</span>
                <h3 className="biz2-step-title">{s.title}</h3>
                <p className="biz2-step-desc">{s.desc}</p>
                <span className="biz2-step-check">✓</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── HERO FEATURE ── */}
        <section id="feature" className="biz2-section biz2-surface reveal">
          <div className="biz2-tag">Hero Feature</div>
          <h2 className="biz2-h2">Deteção automática de subscrições duplicadas</h2>
          <div className="biz2-showcase">
            <div className="biz2-showcase-header">
              <span>Ferramenta</span>
              <span>Desperdício/mês</span>
              <span>Contas</span>
              <span>Ação</span>
            </div>
            {DUP_TOOLS.map((t) => (
              <div key={t.name} className="biz2-showcase-row">
                <div className="biz2-tool-cell">
                  <span className="biz2-tool-icon" style={{ background: t.color + '22', color: t.color }}>{t.initial}</span>
                  <span className="biz2-tool-name">{t.name}</span>
                  <span className="biz2-dup-badge">DUPLICADO</span>
                </div>
                <span className="biz2-waste-val">{t.waste}</span>
                <span className="biz2-accounts-val">{t.accounts}</span>
                <button className="biz2-resolve-btn">Resolver</button>
              </div>
            ))}
            <div className="biz2-total-bar">
              <span>Total desperdiçado identificado</span>
              <span className="biz2-total-val">€237/mês</span>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="biz2-section biz2-bg reveal">
          <div className="biz2-tag">Preços</div>
          <h2 className="biz2-h2">Simples. Transparente. Acessível para PMEs.</h2>
          <div className="biz2-pricing-grid">
            {PLANS.map((p) => (
              <div key={p.id} className={`biz2-plan${p.featured ? ' biz2-plan-featured' : ''}`}>
                {p.featured && <span className="biz2-popular-badge">Mais popular</span>}
                <div className="biz2-plan-name">{p.name}</div>
                <div className="biz2-plan-price">
                  <span className="biz2-plan-eur">€</span>
                  {p.price}
                  <span className="biz2-plan-mo">/mês</span>
                </div>
                <ul className="biz2-plan-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a
                  href={TYPEFORM}
                  className={`biz2-plan-cta${p.featured ? ' biz2-plan-cta-primary' : ' biz2-plan-cta-ghost'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Começar gratuitamente →
                </a>
              </div>
            ))}
          </div>
          <p className="biz2-pricing-note">
            14 dias grátis · Sem cartão · Coupon EARLYACCESS: 3 meses sem custos
          </p>
        </section>

        {/* ── ROADMAP ── */}
        <section className="biz2-section biz2-surface reveal">
          <div className="biz2-tag">Roadmap</div>
          <h2 className="biz2-h2">O que está a chegar</h2>
          <div className="biz2-roadmap-list">
            {ROADMAP.map((r) => (
              <div key={r.title} className="biz2-roadmap-item">
                <span className={`biz2-status-pill biz2-status-${r.color}`}>{r.status}</span>
                <span className="biz2-roadmap-title">{r.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="biz2-cta-final reveal">
          <div className="biz2-cta-glow" />
          <h2 className="biz2-cta-h2">
            Pronto para saber quanto a tua empresa realmente gasta?
          </h2>
          <div className="biz2-cta-btns">
            <a href={TYPEFORM} className="biz2-btn-primary" target="_blank" rel="noopener noreferrer">
              Quero acesso antecipado — grátis →
            </a>
          </div>
          <p className="biz2-cta-note">Sem compromisso · Trial 14 dias · Feito em Portugal 🇵🇹</p>
        </section>

        {/* ── FOOTER ── */}
        <footer className="biz2-footer">
          <span>
            <KlaxoBrand /> · business.klaxo.app · 🇵🇹 Desenvolvido em Portugal
          </span>
          <span>© 2026 Klaxo · Eddie Reis</span>
        </footer>

      </main>
    </>
  )
}
