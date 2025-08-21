
import { useState } from 'react'

function Feature({title, desc}){
  return (
    <div className="card feature">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default function App(){
  const [email, setEmail] = useState('')

  return (
    <div className="container">
      <nav className="nav">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 17l8-14 8 14H4z" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="12" cy="17" r="3" stroke="#38bdf8" strokeWidth="1.5"/>
          </svg>
          TlatOr
          <span className="badge">React + Netlify</span>
        </div>
        <a className="button" href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <div>
          <h1>Custom Lithophanes, printed fast</h1>
          <p>Upload a photo. Choose a size and shape. We 3D‑print a premium lithophane with backlight options. Built for mobile checkout.</p>
          <div className="cta">
            <a className="button primary" href="#order">Start your order</a>
            <a className="button" href="#how">How it works</a>
          </div>
        </div>
        <div className="card">
          <div className="gallery">
            <div><div className="ph">Sample #1</div></div>
            <div><div className="ph">Sample #2</div></div>
            <div><div className="ph">Sample #3</div></div>
          </div>
          <p className="small" style={{marginTop:12}}>Replace placeholders with your real photos later.</p>
        </div>
      </section>

      <section id="how" className="section">
        <h2>How it works</h2>
        <div className="grid-3">
          <Feature title="1. Upload" desc="Send a photo from phone or desktop."/>
          <Feature title="2. Customize" desc="Pick size, shape, frame, and backlight."/>
          <Feature title="3. Print & ship" desc="We print on Bambu P1S and ship in 48–72h."/>
        </div>
      </section>

      <section className="section">
        <h2>Why choose TlatOr</h2>
        <div className="grid-2">
          <div className="card"><strong>Sharp detail</strong><p className="small">0.08–0.12 mm layer height with tuned lithophane profiles.</p></div>
          <div className="card"><strong>Strong backlight</strong><p className="small">Warm or neutral LED base options with USB‑C power.</p></div>
        </div>
      </section>

      <section id="order" className="section card">
        <h2>Simple order form</h2>
        <p className="small">Hook this button to your real checkout later.</p>
        <a className="button primary" href="#">Upload a photo</a>
      </section>

      <section id="contact" className="section">
        <h2>Stay in touch</h2>
        <form className="grid-2" onSubmit={e=> e.preventDefault()}>
          <input
            value={email}
            onChange={e=>setEmail(e.target.value)}
            placeholder="Your email"
            style={{padding:12, borderRadius:10, border:'1px solid #334155', background:'#0b1220', color:'#e5e7eb'}}
          />
          <button className="button primary" type="submit">Notify me</button>
        </form>
        <p className="small" style={{marginTop:8}}>We send launch updates only.</p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} TlatOr. All rights reserved.
      </footer>
    </div>
  )
}
