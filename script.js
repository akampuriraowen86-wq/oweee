const room=document.getElementById('room');const modal=document.getElementById('modal');const comments=document.getElementById('comments');
const rooms=[{name:"Amina's Evening Live",host:'Amina',handle:'@amina_owitok',viewers:'1.2K'},{name:"Jaxon's Talk",host:'Jaxon',handle:'@jaxon',viewers:'846'},{name:"Maya's Creator Room",host:'Maya',handle:'@maya',viewers:'532'}];
function addComment(user,text){const el=document.createElement('div');el.className='comment';el.innerHTML=`<b>${user}</b>${text}`;comments.appendChild(el);while(comments.children.length>7)comments.removeChild(comments.firstChild)}
document.querySelectorAll('.hero-card').forEach((card,i)=>card.addEventListener('click',()=>openRoom(i)));
function openRoom(i){const r=rooms[i]||rooms[0];document.getElementById('roomName').textContent=r.host;document.getElementById('roomHandle').textContent=r.handle;document.querySelector('.room-viewers').textContent=r.viewers;comments.innerHTML='';addComment(r.host,'Welcome to my LIVE!');addComment('OwiTok','Be respectful in the chat.');room.classList.remove('hidden')}
document.getElementById('closeRoom').onclick=()=>room.classList.add('hidden');
document.getElementById('likeBtn').onclick=e=>{e.currentTarget.textContent=e.currentTarget.textContent==='♡'?'♥':'♡'};
document.getElementById('commentBtn').onclick=()=>{const text=prompt('Write a comment');if(text&&text.trim())addComment('You',text.trim())};
document.getElementById('giftBtn').onclick=()=>addComment('You','🎁 sent a gift');
document.getElementById('shareBtn').onclick=async()=>{try{await navigator.share({title:'OwiTok LIVE',text:'Watch this LIVE on OwiTok'});}catch(e){}};
document.getElementById('goLive').onclick=()=>modal.classList.remove('hidden');document.getElementById('closeModal').onclick=()=>modal.classList.add('hidden');document.getElementById('startPreview').onclick=()=>{modal.classList.add('hidden');alert('LIVE setup is ready for the next backend/streaming integration.')};
document.getElementById('backBtn').onclick=()=>history.back();document.getElementById('searchBtn').onclick=()=>alert('LIVE search will be connected to the OwiTok backend.');
document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>{const n=b.dataset.nav;if(n==='live')return;if(n==='home')location.href='./';if(n==='profile')alert('Open your OwiTok profile from the main app.');if(n==='create')alert('Use Create to upload a video.');if(n==='inbox')alert('Inbox will be connected to the OwiTok backend.');});
