const LIBRARY_ID = '754178';
const catalog = [
  { title: 'The Grave', image: 'thegrave-test-cover.jpeg', video: '5800724a-7318-4cba-bb47-625cad9bb4ef', genre: 'Skräck · Thriller', year: '1989', original: 'The Grave', director: 'Elias Vinter', cast: 'Lena Bratt, Jonas Ek, Birgitta Holm', runtime: '101 min', rating: '15 år', audio: 'Hi-Fi Stereo', price: '39 kr', tagline: 'Vissa gravar ska aldrig öppnas.', summary: 'En nattvakt hittar en nygrävd grav bakom den gamla kyrkogården. När han börjar undersöka saken väcks något som borde ha förblivit begravt.' },
  { title: 'Toy Store', image: 'toystore-cover.jpeg', video: 'd0174d3c-0882-4bba-b725-fa3e9b863f06', genre: 'Skräck · Mysterium', year: '1988', original: 'Toy Store', director: 'Karin Ståhl', cast: 'Mikael Roos, Eva Lund, Per Åkesson', runtime: '96 min', rating: '15 år', audio: 'Hi-Fi Stereo', price: '35 kr', tagline: 'Lekarna tar aldrig slut.', summary: 'I en leksaksbutik som bara öppnar efter midnatt börjar föremålen röra sig på egen hand. En desperat natt blir snart en kamp mot butikens mörka hemlighet.' },
  { title: "Don't Look Twice", image: 'dont-look-twice-cover.jpeg', video: 'c06c6a15-c907-4020-84de-466055248256', genre: 'Skräck · Thriller', year: '1990', original: "Don't Look Twice", director: 'Maja Lennart', cast: 'Anna Berg, Henrik Dahl, Sofia Nordin', runtime: '92 min', rating: '15 år', audio: 'PAL · Stereo', price: '40 kr', tagline: 'Vänd dig aldrig om.', summary: 'Efter ett mystiskt möte på en ödslig väg börjar varje spegel visa något som inte borde finnas där. Ju mer hon försöker förstå, desto närmare kommer det.' }
  ,{ title: 'Clown Prank', image: 'clown-prank.jpeg', video: '14e08eb0-a0ef-45ae-83a4-c6c2b08101c9', genre: 'Skräckkomedi', year: '1991', original: 'Clown Prank', director: 'Arthur P. Sterling', cast: 'Arthur P. Sterling, Alwyn Bagait, Gary Sterling', runtime: '93 min', rating: '15 år', audio: 'Hi-Fi Stereo', price: '35 kr', tagline: 'Han är inte här för att mörda dig... bara för att jävlas.', summary: 'En förrymd cirkusclown terroriserar en stillsam förort med bisarra practical jokes i en absurd och psykologiskt påfrestande skräckkomedi.' }
  ,{ title: 'Pump-O-Ween', image: 'pump-o-ween.jpeg', video: '22a040b4-324a-4fb2-8d37-b138b73bd7a9', genre: 'Skräck', year: '1988', original: 'Pump-O-Ween', director: 'Anna Bergman', cast: 'Anna Bergman, Johan Nilsson, Elin Sjöberg', runtime: '96 min', rating: '15 år', audio: 'VHS · Stereo', price: '35 kr', tagline: 'The night the patch came alive.', summary: 'En pumpa vaknar till liv och jagar två ungdomar genom höstnatten i en klassisk svensk videobutiksskräckis.' }
  ,{ title: 'Subliminal', image: 'subliminal.jpeg', video: '0ff1869a-1abf-4c48-bebf-b9e9268d7ef8', genre: 'Psykologisk thriller', year: '1989', original: 'Subliminal', director: 'Nolene Shife', cast: 'Nolene Shife, Gareth Rain, Chilled A. Many', runtime: '94 min', rating: '15 år', audio: 'Hi-Fi Stereo', price: '35 kr', tagline: 'Du såg honom först.', summary: 'På sista tåget hem upptäcker en kvinna en främling som verkar känna till hennes innersta tankar.' }
  ,{ title: 'Zombie Invasion', image: 'zombie-invasion.jpeg', video: '55a37057-d047-4a5c-a91c-a6b13840ad88', genre: 'Skräck · Action', year: '1987', original: 'Zombie Invasion', director: 'Lars Nyman', cast: 'Per Holm, Eva Sten, Jan Fors', runtime: '96 min', rating: '15 år', audio: 'VHS · Stereo', price: '39 kr', tagline: 'De döda går igen.', summary: 'När de döda reser sig över staden måste en liten grupp överlevare kämpa sig ut genom natten.' }
  ,{ title: 'The Architect', image: 'the-architect.jpeg', video: '3e10bd97-15a1-4319-b2fe-1f970ea2be5b', genre: 'Gotisk thriller', year: '1990', original: 'The Architect', director: 'Alan Smithée', cast: 'Richard Drucker, Elizabeth Lynch, Anthony Bell', runtime: '103 min', rating: '15 år', audio: 'PAL · Stereo', price: '35 kr', tagline: 'Vissa hus bygger tillbaka.', summary: 'Ett gammalt slott gömmer ritningar som verkar förändras varje natt och leder arkitekten allt djupare in i mörkret.' }
  ,{ title: 'The Veil', image: 'the-veil.jpeg', video: 'f90c5e5a-90e2-4f95-8cb5-ab45ffd19f24', genre: 'Gothic thriller', year: '1988', original: 'The Veil', director: 'Alan Smithée', cast: 'Richard Drucker, Elizabeth Lynch, Anthony Bell', runtime: '98 min', rating: '15 år', audio: 'PAL · Stereo', price: '35 kr', tagline: 'Masks, secrets and murder.', summary: 'Under en maskerad i Venedig avslöjas en hemlighet som borde ha förblivit dold bakom slöjan.' }
  ,{ title: 'The Container', image: 'the-container.jpeg', video: 'cc09b3b4-3c51-4a59-8e30-ff4b18a83640', genre: 'Skräck', year: '1989', original: 'The Container', director: 'Jonas Haunt', cast: 'Maria Ek, Oskar Lind, Lena Vik', runtime: '91 min', rating: '15 år', audio: 'PAL · Stereo', price: '35 kr', tagline: 'De trodde att det var tomt... de hade fel.', summary: 'Ett tonårspar öppnar en övergiven fraktcontainer och släpper lös något som aldrig borde ha hittats.' }
  ,{ title: 'Stenungson', image: 'stenungson.jpeg', video: 'c2915b14-3f26-405d-8bb7-822717321912', genre: 'Svenskt drama · Mysterium', year: '1987', original: 'Stenungson', director: 'Andersson Andersson', cast: 'Bertil Andersson, Johan Johansson, Ann Svensson', runtime: '108 min', rating: '11 år', audio: 'Hi-Fi Stereo', price: '35 kr', tagline: 'Alla familjer har sina hemligheter.', summary: 'På en isolerad ö avslöjar en främling familjen Stenungsons hemlighet när solen går ner.' }
  ,{ title: 'Snowblind', image: 'snowblind.jpeg', video: '94bbd71b-230c-436b-83cc-44f165cd6b02', genre: 'Romantisk thriller', year: '1986', original: 'Snowblind', director: 'Kaj Hansen', cast: 'Anna Berg, Johan Lindgren', runtime: '95 min', rating: '15 år', audio: 'PAL · Stereo', price: '35 kr', tagline: 'En isande upplevelse du aldrig glömmer.', summary: 'En vinterstorm stänger in två främlingar på ett fjällhotell där snön döljer ett gammalt brott.' }
  ,{ title: 'Skuggninjans Hämnd', image: 'skuggninjans-hamnd.jpeg', video: '5acf8925-2734-44ad-b830-341da7c74563', genre: 'Svensk actionthriller', year: '1987', original: 'Skuggninjans Hämnd', director: 'Mikael Storm', cast: 'Lars Ek, Maria Dahl, Göran Nordin', runtime: '96 min', rating: '15 år', audio: 'VHS Hi-Fi Stereo', price: '35 kr', tagline: 'Mörkret döljer hans ilska.', summary: 'En maskerad hämnare återvänder till Stockholm när ett gammalt svek kräver blodig upprättelse.' }
  ,{ title: 'Nattens Skräck', image: 'nattens-skrack.jpeg', video: 'b3165a3a-dbb6-4a94-9f11-612dfbb50c6d', genre: 'Svensk skräck', year: '1988', original: 'Nattens Skräck', director: 'VTC Film', cast: 'Eva Berg, Peter Holm, Sara Lind', runtime: '92 min', rating: '15 år', audio: 'PAL · Stereo', price: '35 kr', tagline: 'De kom för spänning. Nu jagar döden dem.', summary: 'En grupp vänner firar natten på Marstrands fästning när en okänd gestalt börjar jaga dem genom de mörka valven.' }
];
const movies = Array.from({ length: 20 }, (_, i) => catalog[i % catalog.length]);
// Full wrap layout: back | spine | front. Fractions can be tuned per scan.
catalog.find(movie => movie.title === 'Clown Prank').wrap = {
  image: 'clown-prank-wrap.png', backEnd: 0.452, spineEnd: 0.550
};
catalog.find(movie => movie.title === 'Zombie Invasion').wrap = {
  image: 'zombie-invasion-wrap.jpg', backEnd: 0.444, spineEnd: 0.556
};
const caseStage = document.querySelector('#case-stage');
const caseObject = document.querySelector('#detail-cover');
let caseAngle = 0;
let caseDrag = null;
let autoRotateTimer = null;
let autoRotateResumeTimer = null;
function stopAutoRotate() {
  window.clearInterval(autoRotateTimer);
  window.clearTimeout(autoRotateResumeTimer);
  autoRotateTimer = null;
}
function startAutoRotate() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || autoRotateTimer || !dialog.open) return;
  autoRotateTimer = window.setInterval(() => rotateCase(caseAngle + 1.5), 250);
}
function resumeAutoRotate() {
  stopAutoRotate();
  autoRotateResumeTimer = window.setTimeout(startAutoRotate, 1800);
}
function rotateCase(angle, animate = true) {
  caseAngle = angle;
  caseObject.classList.toggle('is-dragging', !animate);
  caseObject.style.transform = `rotateY(${angle}deg)`;
  const normalized = ((Math.round(angle) % 360) + 360) % 360;
  caseStage.setAttribute('aria-valuenow', normalized);
  caseStage.setAttribute('aria-valuetext', `${normalized} grader`);
  document.querySelectorAll('[data-case-angle]').forEach(button => {
    button.setAttribute('aria-pressed', String(normalized === Number(button.dataset.caseAngle)));
  });
}
function showCase(movie) {
  document.querySelector('.case-viewer').classList.add('is-expanded');
  document.querySelector('#case-zoom').setAttribute('aria-pressed', 'true');
  document.querySelector('#case-zoom').textContent = 'Förminska';
  const front = caseObject.querySelector('.case-front');
  const back = caseObject.querySelector('.case-back');
  const spine = caseObject.querySelector('.case-spine');
  const edge = caseObject.querySelector('.case-edge');
  const top = caseObject.querySelector('.case-top');
  const bottom = caseObject.querySelector('.case-bottom');
  const faces = [front, back, spine, edge, top, bottom];
  faces.forEach(face => { face.style.backgroundImage = ''; face.style.backgroundSize = ''; face.style.backgroundPosition = ''; });
  caseObject.classList.toggle('has-wrap', Boolean(movie.wrap));
  [front, back, spine, edge, top, bottom].forEach(face => { face.style.backgroundImage = `url("assets/${movie.image}")`; });
  spine.querySelector('span').textContent = movie.title;
  const copy = caseObject.querySelector('.case-back-copy');
  copy.replaceChildren();
  [movie.title, movie.tagline, movie.summary, `${movie.year} · ${movie.runtime} · ${movie.rating}`, movie.audio].forEach((text, index) => {
    const line = document.createElement(index === 0 ? 'h3' : 'p');
    line.textContent = text;
    copy.appendChild(line);
  });
  if (movie.wrap) {
    const { image, backEnd, spineEnd } = movie.wrap;
    [[back, 0, backEnd], [spine, backEnd, spineEnd], [front, spineEnd, 1]].forEach(([face, start, end]) => {
      const width = end - start;
      face.style.backgroundImage = `url("assets/${image}")`;
      face.style.backgroundSize = `${100 / width}% 100%`;
      face.style.backgroundPosition = `${start / (1 - width) * 100}% 50%`;
    });
    // The far edge is the transparent VHS case side, sized to the full right face.
    edge.style.backgroundImage = 'url("assets/vhs-right-side2.jpeg")';
    edge.style.backgroundSize = '100% 100%';
    edge.style.backgroundPosition = 'center';
    // Top and bottom use the front artwork instead of an artificial black plastic surface.
    const frontWidth = 1 - spineEnd;
    [top, bottom].forEach(face => {
      face.style.backgroundImage = `url("assets/${image}")`;
      face.style.backgroundSize = `${100 / frontWidth}% 100%`;
      face.style.backgroundPosition = '100% 50%';
    });
  }
  rotateCase(22, false);
}
caseStage.addEventListener('pointerdown', event => {
  if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
  stopAutoRotate();
  caseStage.focus({ preventScroll: true });
  caseDrag = { id: event.pointerId, x: event.clientX, angle: caseAngle };
  caseStage.setPointerCapture(event.pointerId);
});
document.querySelector('#case-zoom').addEventListener('click', event => {
  const expanded = document.querySelector('.case-viewer').classList.toggle('is-expanded');
  event.currentTarget.setAttribute('aria-pressed', String(expanded));
  event.currentTarget.textContent = expanded ? 'Förminska' : 'Förstora';
});
caseStage.addEventListener('pointermove', event => {
  if (!caseDrag || event.pointerId !== caseDrag.id) return;
  rotateCase(caseDrag.angle + (event.clientX - caseDrag.x) * 0.65, false);
});
function endCaseDrag() {
  caseDrag = null;
  caseObject.classList.remove('is-dragging');
  resumeAutoRotate();
}
['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => caseStage.addEventListener(type, endCaseDrag));
caseStage.addEventListener('keydown', event => {
  let angle;
  if (event.key === 'ArrowLeft') angle = caseAngle - 15;
  if (event.key === 'ArrowRight') angle = caseAngle + 15;
  if (event.key === 'Enter' || event.key === ' ') angle = Math.round(caseAngle / 180) * 180 + 180;
  if (event.key === 'Home') angle = 0;
  if (angle === undefined) return;
  event.preventDefault();
  rotateCase(angle);
  resumeAutoRotate();
});
document.querySelectorAll('[data-case-angle]').forEach(button => button.addEventListener('click', () => {
  const target = Number(button.dataset.caseAngle);
  rotateCase(caseAngle + ((target - caseAngle + 540) % 360 + 360) % 360 - 180);
  resumeAutoRotate();
}));
const shelf = document.querySelector('#shelf');
const shelfVideo = document.querySelector('.store-video-bg iframe');
const dialog = document.querySelector('#movie-dialog');
const trailerMount = document.querySelector('#trailer-mount');
const trailerPanel = document.querySelector('.trailer');
const fields = { genre:'#detail-genre', title:'#detail-title', year:'#detail-year', summary:'#detail-summary', tagline:'#detail-tagline', original:'#detail-original', director:'#detail-director', cast:'#detail-cast', runtime:'#detail-runtime', rating:'#detail-rating', audio:'#detail-audio', price:'#rent-price' };
let current;
  if (shelfVideo) {
    const playBackground = () => {
      const send = (method, value) => {
        const message = { context:'player.js', version:'0.0.11', method, ...(value === undefined ? {} : { value }) };
        shelfVideo.contentWindow?.postMessage(JSON.stringify(message), '*');
        shelfVideo.contentWindow?.postMessage(message, '*');
      };
      send('setLoop', true);
      send('setVolume', 0);
      send('play');
    };
  shelfVideo.addEventListener('load', playBackground);
  [500, 1500, 3000].forEach(ms => setTimeout(playBackground, ms));
}
let activeFrame = null;
const setText = (key, value) => { const el = document.querySelector(fields[key]); if (el) el.textContent = value; };

// Skicka kommandon direkt enligt Player.js-protokollet som Bunny-spelaren använder.
function sendPlayerCommand(method, value) {
  if (!activeFrame?.contentWindow) return;
  const message = { context: 'player.js', version: '0.0.11', method };
  if (value !== undefined) message.value = value;
  activeFrame.contentWindow.postMessage(JSON.stringify(message), '*');
  activeFrame.contentWindow.postMessage(message, '*');
}

function loadTrailer(movie) {
  trailerPanel.classList.remove('is-playing');
  trailerMount.replaceChildren();
  const iframe = document.createElement('iframe');
  iframe.id = 'trailer-player';
  iframe.title = `${movie.title} trailer`;
  iframe.allow = 'autoplay; fullscreen; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.loading = 'eager';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  activeFrame = iframe;

  iframe.addEventListener('load', () => {
    sendPlayerCommand('setCurrentTime', 0);
    sendPlayerCommand('setLoop', true);
    sendPlayerCommand('setVolume', 15);
    sendPlayerCommand('unmute');
    sendPlayerCommand('play');
    try {
      const player = new playerjs.Player(iframe);
      player.on('ready', () => { player.setCurrentTime(0); player.setVolume(15); player.unmute(); player.play(); });
    } catch (_) { /* autoplay och postMessage används som fallback */ }
  }, { once: true });

  iframe.src = `https://iframe.mediadelivery.net/embed/${LIBRARY_ID}/${movie.video}?autoplay=true&muted=true&loop=true&preload=true&playsinline=true&start=0&rememberPosition=false`;
  trailerMount.appendChild(iframe);
  window.setTimeout(() => trailerPanel.classList.add('is-playing'), 4000);
}

window.addEventListener('message', event => {
  if (!activeFrame || event.source !== activeFrame.contentWindow) return;
  let data = event.data;
  try { if (typeof data === 'string') data = JSON.parse(data); } catch (_) { return; }
  if (data?.event === 'play' || data?.event === 'playing' || data?.event === 'timeupdate') trailerPanel.classList.add('is-playing');
});
function openFilm(index) {
  current = movies[index];
  showCase(current);
  Object.entries(current).forEach(([key, value]) => { if (key in fields) setText(key, value); });
  dialog.showModal();
  caseStage.focus({ preventScroll: true });
  startAutoRotate();
  loadTrailer(current);
}
function closeFilm() {
  stopAutoRotate();
  if (dialog.open) dialog.close();
  if (activeFrame) activeFrame.src = 'about:blank';
  trailerMount.replaceChildren();
  trailerPanel.classList.remove('is-playing');
  activeFrame = null;
}

// En webbläsare kan återställa ett öppet dialogelement efter omladdning.
// Börja därför alltid från hyllan och skapa en helt ny spelare vid nästa val.
dialog.removeAttribute('open');
trailerMount.replaceChildren();
for (let row = 0; row < 4; row++) {
  const rowEl = document.createElement('div'); rowEl.className = 'shelf-row';
  for (let col = 0; col < 5; col++) {
    const index = row * 5 + col, movie = movies[index];
    const cover = document.createElement('button');
    cover.className = 'vhs'; cover.type = 'button'; cover.dataset.index = index; cover.setAttribute('aria-label', movie.title);
    cover.style.backgroundImage = `url("assets/${movie.image}")`;
    rowEl.appendChild(cover);
  }
  shelf.appendChild(rowEl);
}
shelf.addEventListener('click', e => { const cover = e.target.closest('.vhs'); if (cover) openFilm(Number(cover.dataset.index)); });
document.querySelector('.close').addEventListener('click', closeFilm);
dialog.addEventListener('click', e => { if (e.target === dialog) closeFilm(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && dialog.open) closeFilm(); });
