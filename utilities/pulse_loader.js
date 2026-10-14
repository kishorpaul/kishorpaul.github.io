class PulseLoader extends HTMLElement {
  connectedCallback() {
    const count    = parseInt(this.getAttribute('count')    ?? 15);
    const duration = parseFloat(this.getAttribute('duration') ?? .5);
    const gap      = parseInt(this.getAttribute('gap')      ?? 3);
    const width    = parseInt(this.getAttribute('bar-width') ?? 5);
    const height   = parseInt(this.getAttribute('bar-height') ?? 24);
    const colorTop = this.getAttribute('color-top') ?? '#1D9E75';
    const colorBot = this.getAttribute('color-bot') ?? '#5DCAA5';

    this.style.display = 'flex';
    this.style.alignItems = 'center';
    this.style.justifyContent = 'center';

    const style = document.createElement('style');
    style.textContent = `
      pulse-loader .bar-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      pulse-loader .top,
      pulse-loader .bot {
        width: ${width}px;
        animation: pulse-bar ${duration}s cubic-bezier(0.4,0,0.6,1) infinite;
        animation-delay: calc(var(--i) * (${duration}s / ${count}));
      }
      pulse-loader .top {
        border-radius: 3px 3px 0 0;
        background: ${colorTop};
      }
      pulse-loader .bot {
        border-radius: 0 0 3px 3px;
        background: ${colorBot};
      }
      @keyframes pulse-bar {
        0%, 100% { height: 4px;          opacity: 0.5; }
        35%       { height: ${height}px; opacity: 1;   }
      }
    `;
    this.appendChild(style);

    const wrap = document.createElement('div');
    wrap.style.cssText = `display:flex; align-items:center; gap:${gap}px; height:100%; position:relative;`;

    for (let i = 0; i < count; i++) {
      const bar = document.createElement('div');
      bar.className = 'bar-wrap';
      bar.style.setProperty('--i', i);
      bar.innerHTML = '<div class="top"></div><div class="bot"></div>';
      wrap.appendChild(bar);
    }

    this.appendChild(wrap);
  }
}

customElements.define('pulse-loader', PulseLoader);