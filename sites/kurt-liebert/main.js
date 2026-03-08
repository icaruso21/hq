// Kurt Liebert — Paintings
// Gallery, Community Board, and site interactions

(function () {
  'use strict';

  // ============================
  // Painting Data
  // ============================
  var paintings = [
    {
      title: 'Girl With the Faux Pearl Earring',
      year: 2019,
      medium: 'Acrylic on plywood',
      size: '24" \u00d7 30"',
      price: 275,
      status: 'available',
      seed: 1,
      palette: ['#1a3a5c', '#d4a843', '#f5e6c8', '#8B6914', '#2a4a6c']
    },
    {
      title: 'Art Of Sound',
      year: 2020,
      medium: 'Acrylic on plywood',
      size: '30" \u00d7 24"',
      price: 250,
      status: 'available',
      seed: 2,
      palette: ['#b8522e', '#d4a843', '#1a1a1a', '#f5e6c8', '#8B6914']
    },
    {
      title: 'Standing Room Only',
      year: 2021,
      medium: 'Acrylic on plywood',
      size: '36" \u00d7 24"',
      price: 300,
      status: 'sold',
      seed: 3,
      palette: ['#2d5a27', '#d4a843', '#f5e6c8', '#8B6914', '#4a7a44']
    },
    {
      title: 'Divine Intervention',
      year: 2018,
      medium: 'Acrylic on plywood',
      size: '28" \u00d7 22"',
      price: 250,
      status: 'available',
      seed: 4,
      palette: ['#5c2d82', '#d4a843', '#f5e6c8', '#8B6914', '#7c4da2']
    },
    {
      title: "If It Was Up To Me There Wouldn't Be An Establishment",
      year: 2022,
      medium: 'Acrylic on plywood',
      size: '35" \u00d7 22"',
      price: 275,
      status: 'sold',
      seed: 5,
      palette: ['#b8522e', '#1a1a1a', '#d4a843', '#f5e6c8', '#c87050']
    },
    {
      title: 'Gauguin Tripping In Tahiti',
      year: 2020,
      medium: 'Acrylic on plywood',
      size: '30" \u00d7 30"',
      price: 300,
      status: 'available',
      seed: 6,
      palette: ['#d4a843', '#2d5a27', '#b8522e', '#1a3a5c', '#f5e6c8']
    },
    {
      title: 'The Man Who Controls The World Controlling The World',
      year: 2023,
      medium: 'Acrylic on plywood',
      size: '32" \u00d7 24"',
      price: 250,
      status: 'available',
      seed: 7,
      palette: ['#1a1a1a', '#d4a843', '#b8522e', '#f5e6c8', '#4a4a4a']
    },
    {
      title: 'Red House',
      year: 2019,
      medium: 'Acrylic on plywood',
      size: '24" \u00d7 24"',
      price: 225,
      status: 'sold',
      seed: 8,
      palette: ['#b8522e', '#8B6914', '#f5e6c8', '#d4a843', '#d46a4a']
    },
    {
      title: "Not Going Back To The Office I'm Heading Out To The Highway",
      year: 2022,
      medium: 'Acrylic on plywood',
      size: '36" \u00d7 28"',
      price: 300,
      status: 'available',
      seed: 9,
      palette: ['#4a5568', '#d4a843', '#1a3a5c', '#f5e6c8', '#6a7588']
    },
    {
      title: "Life's Meaning",
      year: 2017,
      medium: 'Acrylic on plywood',
      size: '35" \u00d7 22"',
      price: 250,
      status: 'sold',
      seed: 10,
      palette: ['#d4a843', '#5c2d82', '#f5e6c8', '#b8522e', '#8B6914']
    },
    {
      title: 'Seattle',
      year: 2021,
      medium: 'Acrylic on plywood',
      size: '28" \u00d7 22"',
      price: 225,
      status: 'available',
      seed: 11,
      palette: ['#4a5568', '#2d5a27', '#d4a843', '#1a3a5c', '#f5e6c8']
    },
    {
      title: 'My Uncle',
      year: 2023,
      medium: 'Acrylic on plywood',
      size: '24" \u00d7 20"',
      price: 200,
      status: 'available',
      seed: 12,
      palette: ['#8B6914', '#f5e6c8', '#d4a843', '#1a1a1a', '#b89a50']
    }
  ];

  // ============================
  // Seeded Random for Procedural Art
  // ============================
  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  // ============================
  // Procedural Painting Generator
  // ============================
  function generatePainting(canvas, seed, palette) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var rng = mulberry32(seed * 7919);

    // Plywood background
    ctx.fillStyle = '#c8a96e';
    ctx.fillRect(0, 0, w, h);

    // Wood grain lines
    ctx.strokeStyle = 'rgba(139, 105, 20, 0.15)';
    ctx.lineWidth = 1;
    for (var i = 0; i < 30; i++) {
      ctx.beginPath();
      var y = rng() * h;
      ctx.moveTo(0, y);
      for (var x = 0; x < w; x += 20) {
        ctx.lineTo(x, y + (rng() - 0.5) * 8);
      }
      ctx.stroke();
    }

    // Painting style varies by seed
    var style = seed % 4;

    if (style === 0) {
      // Bold shapes — flat color blocks
      var count = 5 + Math.floor(rng() * 4);
      for (var j = 0; j < count; j++) {
        ctx.fillStyle = palette[Math.floor(rng() * palette.length)];
        ctx.globalAlpha = 0.6 + rng() * 0.4;
        var bx = rng() * w * 0.8;
        var by = rng() * h * 0.8;
        var bw = 40 + rng() * (w * 0.5);
        var bh = 40 + rng() * (h * 0.5);
        ctx.fillRect(bx, by, bw, bh);
      }
      // Central figure suggestion
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = palette[0];
      ctx.beginPath();
      ctx.ellipse(w / 2 + (rng() - 0.5) * 60, h * 0.4, 30 + rng() * 30, 40 + rng() * 40, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (style === 1) {
      // Expressionist strokes
      for (var k = 0; k < 20; k++) {
        ctx.strokeStyle = palette[Math.floor(rng() * palette.length)];
        ctx.lineWidth = 4 + rng() * 20;
        ctx.globalAlpha = 0.5 + rng() * 0.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        var sx = rng() * w;
        var sy = rng() * h;
        ctx.moveTo(sx, sy);
        ctx.bezierCurveTo(
          sx + (rng() - 0.5) * 200, sy + (rng() - 0.5) * 200,
          sx + (rng() - 0.5) * 200, sy + (rng() - 0.5) * 200,
          sx + (rng() - 0.5) * 300, sy + (rng() - 0.5) * 300
        );
        ctx.stroke();
      }
    } else if (style === 2) {
      // Geometric / folk art
      for (var m = 0; m < 8; m++) {
        ctx.fillStyle = palette[Math.floor(rng() * palette.length)];
        ctx.globalAlpha = 0.7 + rng() * 0.3;
        ctx.beginPath();
        var cx = rng() * w;
        var cy = rng() * h;
        var sides = 3 + Math.floor(rng() * 4);
        var radius = 20 + rng() * 80;
        for (var s = 0; s <= sides; s++) {
          var angle = (s / sides) * Math.PI * 2 - Math.PI / 2;
          var px = cx + Math.cos(angle) * radius;
          var py = cy + Math.sin(angle) * radius;
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
      }
      // Accent lines
      for (var n = 0; n < 5; n++) {
        ctx.strokeStyle = palette[Math.floor(rng() * palette.length)];
        ctx.lineWidth = 2 + rng() * 6;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.moveTo(rng() * w, rng() * h);
        ctx.lineTo(rng() * w, rng() * h);
        ctx.stroke();
      }
    } else {
      // Layered washes
      for (var p = 0; p < 6; p++) {
        ctx.fillStyle = palette[Math.floor(rng() * palette.length)];
        ctx.globalAlpha = 0.2 + rng() * 0.3;
        ctx.beginPath();
        ctx.moveTo(rng() * w, rng() * h);
        ctx.bezierCurveTo(rng() * w, rng() * h, rng() * w, rng() * h, rng() * w, rng() * h);
        ctx.bezierCurveTo(rng() * w, rng() * h, rng() * w, rng() * h, rng() * w, rng() * h);
        ctx.closePath();
        ctx.fill();
      }
      // Accent marks
      for (var q = 0; q < 12; q++) {
        ctx.fillStyle = palette[Math.floor(rng() * palette.length)];
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(rng() * w, rng() * h, 3 + rng() * 12, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Texture overlay — plywood showing through
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = '#8B6914';
    for (var t = 0; t < 200; t++) {
      var tx = rng() * w;
      var ty = rng() * h;
      ctx.fillRect(tx, ty, rng() * 4 + 1, rng() * 2 + 1);
    }

    ctx.globalAlpha = 1;
  }

  // ============================
  // Gallery
  // ============================
  var galleryGrid = document.getElementById('gallery-grid');
  var currentFilter = 'all';

  function renderGallery() {
    galleryGrid.innerHTML = '';
    var filtered = paintings.filter(function (p) {
      if (currentFilter === 'all') return true;
      return p.status === currentFilter;
    });

    filtered.forEach(function (painting) {
      var idx = paintings.indexOf(painting);
      var item = document.createElement('div');
      item.className = 'gallery-item';
      item.dataset.index = idx;

      var artDiv = document.createElement('div');
      artDiv.className = 'gallery-art';
      var canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = 500;
      generatePainting(canvas, painting.seed, painting.palette);
      artDiv.appendChild(canvas);

      var caption = document.createElement('div');
      caption.className = 'gallery-caption';
      var title = document.createElement('h3');
      title.textContent = painting.title;
      var details = document.createElement('p');
      details.textContent = painting.medium + ', ' + painting.year + ' \u2014 ' + painting.size;

      caption.appendChild(title);
      caption.appendChild(details);

      if (painting.status === 'available') {
        var price = document.createElement('p');
        price.className = 'price';
        price.textContent = '$' + painting.price;
        caption.appendChild(price);
      } else {
        var sold = document.createElement('p');
        sold.className = 'sold-tag';
        sold.textContent = "Sold \u2014 in a collector's home";
        caption.appendChild(sold);
      }

      item.appendChild(artDiv);
      item.appendChild(caption);
      galleryGrid.appendChild(item);

      item.addEventListener('click', function () {
        openLightbox(idx);
      });
    });
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderGallery();
    });
  });

  // ============================
  // Lightbox
  // ============================
  var lightbox = document.getElementById('lightbox');
  var lightboxArt = document.getElementById('lightbox-art');
  var lightboxTitle = document.getElementById('lightbox-title');
  var lightboxDetails = document.getElementById('lightbox-details');
  var lightboxPrice = document.getElementById('lightbox-price');

  function openLightbox(index) {
    var painting = paintings[index];
    lightboxArt.innerHTML = '';
    var canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 750;
    generatePainting(canvas, painting.seed, painting.palette);
    lightboxArt.appendChild(canvas);

    lightboxTitle.textContent = painting.title;
    lightboxDetails.textContent = painting.medium + ', ' + painting.year + '\n' + painting.size;
    if (painting.status === 'available') {
      lightboxPrice.textContent = '$' + painting.price + ' \u2014 Available';
      lightboxPrice.style.opacity = '1';
    } else {
      lightboxPrice.textContent = 'Sold';
      lightboxPrice.style.opacity = '0.6';
    }

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // ============================
  // Community Board (localStorage)
  // ============================
  var STORAGE_KEY = 'kurt-liebert-community';

  function loadPosts() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : getDefaultPosts();
    } catch (e) {
      return getDefaultPosts();
    }
  }

  function savePosts(postsData) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(postsData));
    } catch (e) {
      // Storage full or unavailable
    }
  }

  function getDefaultPosts() {
    return [
      {
        id: 1,
        name: 'Sarah M.',
        piece: "Life's Meaning",
        message: 'Picked this up at Sparklebarn last year. It hangs in our hallway and every guest asks about it. The plywood texture catches the light in the most beautiful way.',
        time: '2025-12-15T10:30:00',
        replies: [
          { name: 'Dave K.', text: 'Love that piece! The colors are incredible in person.', time: '2025-12-16T14:20:00' }
        ]
      },
      {
        id: 2,
        name: 'Marcus T.',
        piece: 'Standing Room Only',
        message: "Found Kurt's work while browsing Ballard one afternoon. Standing Room Only now lives above our turntable setup \u2014 feels like it was made for that spot. Any other collectors in Seattle want to grab a beer sometime?",
        time: '2026-01-08T16:45:00',
        replies: []
      },
      {
        id: 3,
        name: 'Jenny L.',
        piece: 'Red House',
        message: "Bought Red House as a gift for my partner. We're both former musicians so the whole backstory with Bicycle and the pivot to painting really resonated with us. Kurt signed the back for us too.",
        time: '2026-02-20T09:15:00',
        replies: [
          { name: 'Marcus T.', text: "That's awesome! Have you heard the Bicycle album? It's genuinely great.", time: '2026-02-21T11:00:00' }
        ]
      }
    ];
  }

  var posts = loadPosts();
  var postsList = document.getElementById('posts-list');

  function formatTime(isoString) {
    var d = new Date(isoString);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function renderPosts() {
    postsList.innerHTML = '';
    if (posts.length === 0) {
      postsList.innerHTML = '<p class="no-posts">No posts yet. Be the first to share your story.</p>';
      return;
    }

    var sorted = posts.slice().sort(function (a, b) {
      return new Date(b.time) - new Date(a.time);
    });

    sorted.forEach(function (post) {
      var card = document.createElement('div');
      card.className = 'post-card';

      var header = document.createElement('div');
      header.className = 'post-header';
      var nameEl = document.createElement('span');
      nameEl.className = 'post-name';
      nameEl.textContent = post.name;
      header.appendChild(nameEl);

      if (post.piece) {
        var pieceEl = document.createElement('span');
        pieceEl.className = 'post-piece';
        pieceEl.textContent = 'owns \u201c' + post.piece + '\u201d';
        header.appendChild(pieceEl);
      }

      var timeEl = document.createElement('span');
      timeEl.className = 'post-time';
      timeEl.textContent = formatTime(post.time);
      header.appendChild(timeEl);

      var messageEl = document.createElement('p');
      messageEl.className = 'post-message';
      messageEl.textContent = post.message;

      card.appendChild(header);
      card.appendChild(messageEl);

      // Replies
      if (post.replies && post.replies.length > 0) {
        var repliesDiv = document.createElement('div');
        repliesDiv.className = 'post-replies';
        post.replies.forEach(function (r) {
          var reply = document.createElement('div');
          reply.className = 'reply';
          reply.innerHTML = '<span class="reply-name">' + escapeHtml(r.name) + '</span> <span class="reply-text">' + escapeHtml(r.text) + '</span>';
          repliesDiv.appendChild(reply);
        });
        card.appendChild(repliesDiv);
      }

      // Reply button
      var replyBtn = document.createElement('button');
      replyBtn.className = 'post-reply-btn';
      replyBtn.textContent = 'Reply';
      replyBtn.addEventListener('click', function () {
        var existing = card.querySelector('.reply-form');
        if (existing) {
          existing.remove();
          return;
        }

        var form = document.createElement('div');
        form.className = 'reply-form';
        form.innerHTML = '<input type="text" placeholder="Your name" maxlength="50"><textarea placeholder="Reply..." maxlength="300" rows="1"></textarea><button>Send</button>';
        card.appendChild(form);

        form.querySelector('button').addEventListener('click', function () {
          var rName = form.querySelector('input').value.trim();
          var rText = form.querySelector('textarea').value.trim();
          if (!rName || !rText) return;

          if (!post.replies) post.replies = [];
          post.replies.push({ name: rName, text: rText, time: new Date().toISOString() });
          savePosts(posts);
          renderPosts();
        });
      });
      card.appendChild(replyBtn);

      postsList.appendChild(card);
    });
  }

  // Post submission
  document.getElementById('post-submit').addEventListener('click', function () {
    var name = document.getElementById('post-name').value.trim();
    var piece = document.getElementById('post-piece').value.trim();
    var message = document.getElementById('post-message').value.trim();

    if (!name || !message) return;

    posts.push({
      id: Date.now(),
      name: name,
      piece: piece,
      message: message,
      time: new Date().toISOString(),
      replies: []
    });

    savePosts(posts);
    renderPosts();

    document.getElementById('post-name').value = '';
    document.getElementById('post-piece').value = '';
    document.getElementById('post-message').value = '';
  });

  // ============================
  // Mobile Nav Toggle
  // ============================
  document.querySelector('.nav-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });

  // ============================
  // Init
  // ============================
  renderGallery();
  renderPosts();

})();
