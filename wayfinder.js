
/* Stewardship Journey Navigator v2 — ScrollSpy / Visibility / URL State. A public/static-site navigation tool; it stores only page paths, not donor data. */
(function(){'use strict';
  var BASE=[
    ['profile.html','Professional Profile','Start here','P'],
    ['career-profile.html','Detailed Career Profile','2008–Present interactive timeline','E'],
    ['workframe.html','Portfolio Workframe','Four-program map','W'],
    ['index.html','Operating Suite','Live demonstration','S'],
    ['strategic-leadership.html','Strategic Leadership','Program 1','1'],
    ['donor-impact-reporting.html','Donor Impact Reporting','Program 2','2'],
    ['team-leadership.html','Team Leadership','Program 3','3'],
    ['campaign-initiatives.html','Campaign Initiatives','Program 4','4'],
    ['playbook.html','Executive Playbook','Workflows & SOPs','B'],
    ['program-office.html','Program Office','Timelines & delivery','O'],
    ['operations.html','Operations & Alerts','Tracking & release','A'],
    ['donor-profile.html','Donor Dossier','Synthetic record','D'],
    ['communications.html','Communications Studio','Donor storytelling','C']
  ];
  var KEY='aad_wayfinder_v1';
  var route=['profile.html','workframe.html','donor-impact-reporting.html#reports','playbook.html#report','index.html#suite'];
  var config={};BASE.forEach(function(v){config[v[0]]=v});
  function file(){return document.documentElement.getAttribute('data-aad-page')||decodeURIComponent(location.pathname.split('/').pop())||'index.html'}
  function base(fileName){return fileName.split('#')[0].split('?')[0]}
  function valid(rel){return config[base(rel)]!==undefined}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function load(){try{var d=JSON.parse(localStorage.getItem(KEY)||'{}');return {visited:Array.isArray(d.visited)?d.visited:[],trail:Array.isArray(d.trail)?d.trail:[],playbook:typeof d.playbook==='string'?d.playbook:'',origin:d.origin||null}}catch(e){return {visited:[],trail:[],playbook:'',origin:null}}}
  var state=load(), lastUrl='', widget, trigger, panel, opened=false, staticPage=false;
  function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}}
  function loc(){return file()+(location.hash||'')}
  function visibleLoc(){if(!staticPage)return loc();var a=document.querySelector('a[href^="#"][aria-current="location"]');return a?file()+a.getAttribute('href'):loc()}
  function sanitize(target){if(!target)return '';var t=String(target).replace(/^\.\//,'');return valid(t)?t:''}
  function pretty(id){return (id||'').replace(/[-_]/g,' ').replace(/\b\w/g,function(x){return x.toUpperCase()})}
  function section(){var live=document.documentElement.getAttribute('data-aad-section-label');if(live)return live;var id=decodeURIComponent((location.hash||'').slice(1));if(!id)return '';
    var e=document.getElementById(id);
    if(e){var x=(e.querySelector('h1,h2,h3')||e);var t=(x.textContent||'').replace(/\s+/g,' ').trim();if(t && t.length<90)return t}
    return pretty(id)
  }
  function label(target){var v=config[base(target)];var sid=(target.split('#')[1]||'');return v?(v[1]+(sid?' · '+pretty(sid):'')):target}
  function href(route){return './'+encodeURI(route).replace(/%23/g,'#')}
  function prev(){for(var i=state.trail.length-2;i>=0;i--){if(state.trail[i]!==loc()&&valid(state.trail[i]))return state.trail[i]}return ''}
  function track(force){var l=loc();if(!valid(l))return;if(!force&&l===lastUrl)return;lastUrl=l;
    if(state.visited.indexOf(file())<0)state.visited.push(file());
    if(!state.trail.length||state.trail[state.trail.length-1]!==l)state.trail.push(l);
    if(state.trail.length>40)state.trail=state.trail.slice(-40);
    if(file()==='playbook.html')state.playbook=l;
    save();renderLaunch();if(opened)renderPanel();
  }
  function reset(){state={visited:[],trail:[],playbook:'',origin:null};lastUrl='';save();track(true)}
  function go(dest){dest=sanitize(dest);if(!dest)return;var cur=visibleLoc();if(base(dest)!==file())state.origin={from:cur,to:base(dest)};save();location.href=href(dest)}
  function list(items){return items.map(function(v){var target=v[0],isCurrent=(file()===target),done=state.visited.indexOf(target)>=0;
    return '<a class="aad-nav-link" href="'+esc(href(target))+'" data-wf-go="'+esc(target)+'" '+(isCurrent?'aria-current="page"':'')+'><span class="aad-nav-n">'+(done?'✓':esc(v[3]))+'</span><span><strong>'+esc(v[1])+'</strong><small>'+esc(v[2])+'</small></span></a>'
  }).join('')}
  function renderLaunch(){if(!trigger)return;var l=config[file()]||['','Unknown page'];var subtitle=section()||l[2]||'';
    trigger.querySelector('.aad-nav-launch-text').innerHTML='<b>You are here: '+esc(l[1])+'</b><small>'+esc(subtitle)+' · '+state.visited.length+'/'+BASE.length+' workspaces explored</small>'
  }
  function renderPanel(){if(!panel)return;var cur=file(),p=prev(),origin=state.origin&&state.origin.to===cur?sanitize(state.origin.from):'',progress=Math.round(state.visited.length/BASE.length*100);
    var recent=state.trail.slice(-7).reverse().filter(function(x,i,a){return a.indexOf(x)===i&&valid(x)}).slice(0,5);
    var next=route.find(function(x){return state.visited.indexOf(base(x))<0})||route[0];
    panel.innerHTML='<div class="aad-nav-panel-head"><div><div class="aad-nav-kicker">Your navigation compass</div><h2>Your navigation compass</h2><p>'+BASE.length+' connected workspaces · one coherent operating story</p></div><button class="aad-nav-close" type="button" data-wf-close aria-label="Close navigator">×</button></div>'+
      '<div class="aad-nav-panel-body"><nav class="aad-nav-breadcrumb" aria-label="You are here"><span>Portfolio</span><i aria-hidden="true">›</i><span>'+esc((config[cur]||["","Page"])[1])+'</span>'+(section()?'<i aria-hidden="true">›</i><strong>'+esc(section())+'</strong>':'')+'</nav><div class="aad-nav-here"><small>Current location</small><b>'+esc(section()?((config[cur]||['','Profile'])[1]+' · '+section()):label(loc()))+'</b><span>Current workspace and chapter are shown above. The visit trail remembers how you arrived here.</span></div>'+
      '<div class="aad-nav-actions">'+
      (origin?'<a class="primary" href="'+esc(href(origin))+'" data-wf-go="'+esc(origin)+'">← Return to '+esc(config[base(origin)][1])+'</a>':p?'<a class="primary" href="'+esc(href(p))+'" data-wf-go="'+esc(p)+'">← Previous stop</a>':'<a class="primary" href="./workframe.html" data-wf-go="workframe.html">Open portfolio map</a>')+
      (state.playbook&&cur!=='playbook.html'?'<a href="'+esc(href(state.playbook))+'" data-wf-go="'+esc(state.playbook)+'">Resume Playbook</a>':'<a href="./profile.html" data-wf-go="profile.html">Professional profile</a>')+
      '<a href="./workframe.html" data-wf-go="workframe.html">Four-program map</a><a href="./index.html#suite" data-wf-go="index.html#suite">Operating Suite</a></div>'+
      '<div class="aad-nav-guide"><b>Reading position</b><span>ScrollSpy highlights the visible section. Use the links to jump instantly, and Return to retrace your path.</span></div>'+
      '<div class="aad-nav-group"><h3>Exploration trail <span>'+state.visited.length+'/'+BASE.length+' visited</span></h3><div class="aad-nav-progress"><i style="width:'+progress+'%"></i></div><p style="font-size:10.5px;color:#607486;margin:5px 0 0">Visited means opened—not approved, completed, or verified.</p></div>'+
      '<div class="aad-nav-group"><h3>Suggested 5-stop reviewer path</h3><div class="aad-nav-route">'+route.map(function(t,i){return '<a href="'+esc(href(t))+'" data-wf-go="'+esc(t)+'" data-done="'+(state.visited.indexOf(base(t))>=0)+'" '+(file()===base(t)?'aria-current="step"':'')+'>'+(state.visited.indexOf(base(t))>=0?'✓ ':'')+(i+1)+'. '+esc(['Profile','Map','Reports','Playbook','Suite'][i])+'</a>'}).join('')+'</div><div class="aad-nav-actions" style="margin-bottom:0"><a class="primary" href="'+esc(href(next))+'" data-wf-go="'+esc(next)+'">Next unvisited stop →</a><a href="./workframe.html#programs" data-wf-go="workframe.html#programs">See four programs</a></div></div>'+
      '<div class="aad-nav-group"><h3>Four stewardship programs</h3><div class="aad-nav-link-list">'+list(BASE.slice(4,8))+'</div></div>'+
      '<div class="aad-nav-group"><h3>Foundations & working tools</h3><div class="aad-nav-link-list">'+list(BASE.slice(0,4).concat(BASE.slice(8)))+'</div></div>'+
      '<div class="aad-nav-group"><h3>Recent stops</h3><div class="aad-nav-trail">'+(recent.length?recent.map(function(t){return '<a href="'+esc(href(t))+'" data-wf-go="'+esc(t)+'"><span>'+esc(label(t))+'</span><small>Go ↗</small></a>'}).join(''):'<small>No places visited yet</small>')+'</div></div>'+
      '<div class="aad-nav-footer"><p>Your trail is stored in this browser only. No donor data or message content is collected.</p><button class="aad-nav-reset" type="button" data-wf-reset>Clear visit history</button></div></div>';
  }
  function toggle(force){opened=typeof force==='boolean'?force:!opened;widget.setAttribute('data-open',String(opened));trigger.setAttribute('aria-expanded',String(opened));if(opened){renderPanel();panel.focus()}}

  /* The global ScrollSpy is deliberately limited to document-style pages.
     SPA pages own their tab/page state, and the detailed career profile owns its
     eight-step section tracker. This prevents competing observers. */
  function setupStaticScrollSpy(){
    var page=file();
    var paths={
      'profile.html':['record','experience','mission','programs','first-year','path','credentials'],
      'workframe.html':['programs','journey','cases','contract','tools','qa']
    };
    var ids=paths[page];
    if(!ids)return;
    var nodes=ids.map(function(id){return document.getElementById(id)}).filter(Boolean);
    if(!nodes.length)return;
    staticPage=true;
    var navs=Array.from(document.querySelectorAll('a[href^="#"]')).filter(function(a){
      var id=(a.getAttribute('href')||'').slice(1);
      return ids.indexOf(id)>=0;
    });
    var lastLabel='';
    function labelOf(node){
      var head=node.querySelector('h2,h3');
      var text=head?(head.textContent||'').trim().replace(/\s+/g,' '):pretty(node.id);
      var i=nodes.indexOf(node);
      return String(i+1).padStart(2,'0')+' of '+String(nodes.length).padStart(2,'0')+' · '+(text.length>53?text.slice(0,51)+'…':text);
    }
    function choose(){
      var line=Math.min(window.innerHeight*0.36, window.innerHeight-20),chosen=nodes[0];
      nodes.forEach(function(node){if(node.getBoundingClientRect().top<=line)chosen=node});
      var newLabel=labelOf(chosen);
      navs.forEach(function(link){
        if(link.getAttribute('href')==='#'+chosen.id)link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
      if(newLabel!==lastLabel){
        lastLabel=newLabel;
        document.documentElement.setAttribute('data-aad-section-label',newLabel);
        document.dispatchEvent(new CustomEvent('aad-sectionchange',{detail:{id:chosen.id,label:newLabel}}));
      }
    }
    var pending=false;
    function schedule(){if(pending)return;pending=true;requestAnimationFrame(function(){pending=false;choose()})}
    if('IntersectionObserver' in window){
      var spy=new IntersectionObserver(schedule,{rootMargin:'-30% 0px -60% 0px',threshold:0});
      nodes.forEach(function(n){spy.observe(n)});
    }
    // Passive fallback plus resilience to large dynamic content changes.
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule);
    window.addEventListener('hashchange',schedule);
    document.addEventListener('click',function(e){
      if(e.defaultPrevented || e.button!==0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)return;
      var a=e.target.closest('a[href^="#"]');if(!a)return;
      var id=(a.getAttribute('href')||'').slice(1), target=document.getElementById(id);
      if(!target||ids.indexOf(id)<0)return;
      e.preventDefault();
      var header=document.querySelector('.top,.topbar');
      var h=(header&&getComputedStyle(header).position==='sticky')?header.getBoundingClientRect().height:0;
      var y=Math.max(0,window.scrollY+target.getBoundingClientRect().top-h-14);
      window.scrollTo({top:y,behavior:'instant'});
      history.replaceState(history.state,'','#'+encodeURIComponent(id));
      choose();track(true);
    },true);
    choose();
  }
  /* A second IntersectionObserver records whether the hero has been passed.
     It only changes the visual state of the compact control; never scrolls. */
  function setupHeroVisibility(){
    var hero=document.querySelector('.hero,.hero-card,header.hero,.masthead');
    if(!hero || !('IntersectionObserver' in window))return;
    var seen=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(widget)widget.classList.toggle('aad-past-hero',!entry.isIntersecting&&entry.boundingClientRect.bottom<0);
      });
    },{rootMargin:'-64px 0px 0px 0px',threshold:0});
    seen.observe(hero);
  }

  function init(){if(document.getElementById('aad-wayfinder'))return;
    widget=document.createElement('aside');widget.id='aad-wayfinder';widget.className='aad-nav-widget';widget.setAttribute('data-open','false');widget.setAttribute('aria-label','Stewardship journey navigator');
    widget.innerHTML='<div class="aad-nav-panel" id="aad-nav-panel" tabindex="-1" aria-label="Portfolio navigation and visit tracking"></div><button type="button" class="aad-nav-launch" id="aad-nav-launch" aria-expanded="false" aria-controls="aad-nav-panel"><span class="aad-nav-glyph" aria-hidden="true">⌖</span><span class="aad-nav-launch-text"></span><span class="aad-nav-expander" aria-hidden="true">▤</span></button>';
    document.body.appendChild(widget);trigger=document.getElementById('aad-nav-launch');panel=document.getElementById('aad-nav-panel');
    trigger.addEventListener('click',function(){toggle()});
    widget.addEventListener('click',function(e){var x=e.target.closest('[data-wf-close],[data-wf-reset],a[data-wf-go]');if(!x)return;
      if(x.hasAttribute('data-wf-close')){toggle(false);return}
      if(x.hasAttribute('data-wf-reset')){reset();return}
      e.preventDefault();go(x.getAttribute('data-wf-go'))
    });
    document.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a||widget.contains(a))return;
      var raw=a.getAttribute('href')||'';if(!raw||raw.startsWith('mailto:')||raw.startsWith('tel:')||raw.startsWith('javascript:'))return;
      // Relative same-folder links work on GitHub Pages and when opened offline.
      // Absolute links are accepted only for this origin.
      var dest='';
      if(!/^[a-z]+:/i.test(raw) && !raw.startsWith('//')){
        dest=decodeURIComponent(raw.split('?')[0].split('#')[0].replace(/^\.\//,''));
        if(dest.includes('/'))dest='';
      } else {
        var url;try{url=new URL(raw,location.href)}catch(e){return}
        if(url.origin!==location.origin)return;
        dest=decodeURIComponent(url.pathname.split('/').pop())||'index.html';
      }
      if(!config[dest]||dest===file())return;
      var from=loc();if(staticPage){var live=(document.documentElement.getAttribute('data-aad-section-label')||''); var active=document.querySelector('a[href^="#"][aria-current="location"]');if(active)from=file()+active.getAttribute('href');} state.origin={from:from,to:dest};save();
    },true);
    document.addEventListener('aad-sectionchange',function(){renderLaunch();if(opened)renderPanel()});
    window.addEventListener('hashchange',function(){track()});
    window.addEventListener('popstate',function(){track()});
    window.addEventListener('keydown',function(e){if(e.key==='Escape'&&opened)toggle(false)});
    document.addEventListener('click',function(e){if(opened&&!widget.contains(e.target))toggle(false)});
    setupStaticScrollSpy();setupHeroVisibility();
    track(true);
    // Several existing pages change chapter using history.replaceState without a hashchange event.
    setInterval(function(){if(loc()!==lastUrl)track()},750);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
