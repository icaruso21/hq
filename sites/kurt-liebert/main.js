// Kurt Liebert — Paintings
// Figurative portraits on found plywood — raw, irreverent, Seattle

(function () {
  'use strict';

  // ============================
  // Painting Data
  // ============================
  var paintings = [
    {
      title: 'Girl With the Faux Pearl Earring',
      year: 2019,
      medium: 'Acrylic on found plywood',
      size: '24" × 30"',
      price: 275,
      status: 'available',
      seed: 1,
      palette: ['#1a3a5c', '#d4a843', '#e8c87a', '#b8522e', '#f5e6c8'],
      face: { mood: 'sly', earring: true }
    },
    {
      title: 'Art Of Sound',
      year: 2020,
      medium: 'Acrylic on plywood',
      size: '30" × 24"',
      price: 250,
      status: 'available',
      seed: 2,
      palette: ['#b8522e', '#d4a843', '#1a1a1a', '#e06030', '#f5e6c8'],
      face: { mood: 'singing', music: true }
    },
    {
      title: 'Standing Room Only',
      year: 2021,
      medium: 'Acrylic on scrap plywood',
      size: '36" × 24"',
      price: 300,
      status: 'sold',
      seed: 3,
      palette: ['#2d5a27', '#d4a843', '#f5e6c8', '#8B6914', '#c44'],
      face: { mood: 'crowd', figures: true }
    },
    {
      title: 'Divine Intervention',
      year: 2018,
      medium: 'Acrylic on found plywood',
      size: '28" × 22"',
      price: 250,
      status: 'available',
      seed: 4,
      palette: ['#5c2d82', '#d4a843', '#f5e6c8', '#e8c87a', '#b8522e'],
      face: { mood: 'serene', halo: true }
    },
    {
      title: "If It Was Up To Me There Wouldn't Be An Establishment",
      year: 2022,
      medium: 'Acrylic on cabinet scrap',
      size: '35" × 22"',
      price: 275,
      status: 'sold',
      seed: 5,
      palette: ['#b8522e', '#1a1a1a', '#d4a843', '#f5e6c8', '#c87050'],
      face: { mood: 'defiant', text: true }
    },
    {
      title: 'Gauguin Tripping In Tahiti',
      year: 2020,
      medium: 'Acrylic on plywood',
      size: '30" × 30"',
      price: 300,
      status: 'available',
      seed: 6,
      palette: ['#d4a843', '#2d8a47', '#b8522e', '#1a3a5c', '#e8d070'],
      face: { mood: 'dreamy', tropical: true }
    },
    {
      title: 'The Man Who Controls The World Controlling The World',
      year: 2023,
      medium: 'Acrylic on found plywood',
      size: '32" × 24"',
      price: 250,
      status: 'available',
      seed: 7,
      palette: ['#1a1a1a', '#d4a843', '#b8522e', '#f5e6c8', '#4a4a4a'],
      face: { mood: 'stern', globe: true }
    },
    {
      title: 'Red House',
      year: 2019,
      medium: 'Acrylic on plywood',
      size: '24" × 24"',
      price: 225,
      status: 'sold',
      seed: 8,
      palette: ['#b8522e', '#8B6914', '#f5e6c8', '#d4a843', '#d46a4a'],
      face: { mood: 'house', scene: true }
    },
    {
      title: "Not Going Back To The Office I'm Heading Out To The Highway",
      year: 2022,
      medium: 'Acrylic on cabinet scrap',
      size: '36" × 28"',
      price: 300,
      status: 'available',
      seed: 9,
      palette: ['#4a5568', '#d4a843', '#1a3a5c', '#f5e6c8', '#b8522e'],
      face: { mood: 'free', road: true }
    },
    {
      title: "Life's Meaning",
      year: 2017,
      medium: 'Acrylic on found plywood',
      size: '35" × 22"',
      price: 250,
      status: 'sold',
      seed: 10,
      palette: ['#d4a843', '#5c2d82', '#f5e6c8', '#b8522e', '#8B6914'],
      face: { mood: 'contemplative', symbols: true }
    },
    {
      title: 'Seattle',
      year: 2021,
      medium: 'Acrylic on plywood',
      size: '28" × 22"',
      price: 225,
      status: 'available',
      seed: 11,
      palette: ['#4a6a78', '#2d5a27', '#d4a843', '#1a3a5c', '#88aacc'],
      face: { mood: 'rain', cityscape: true }
    },
    {
      title: 'My Uncle',
      year: 2023,
      medium: 'Acrylic on scrap plywood',
      size: '24" × 20"',
      price: 200,
      status: 'available',
      seed: 12,
      palette: ['#8B6914', '#f5e6c8', '#d4a843', '#1a1a1a', '#b89a50'],
      face: { mood: 'warm', portrait: true }
    }
  ];

  // ============================
  // Seeded Random
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
  // Figurative Painting Generator
  // Generates portrait/figure art in Kurt's neo-expressionist style
  // ============================
  function generatePainting(canvas, seed, palette, faceData) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
    var rng = mulberry32(seed * 7919);

    // -- Plywood base with visible grain --
    var plywoodBase = '#c8a96e';
    ctx.fillStyle = plywoodBase;
    ctx.fillRect(0, 0, w, h);

    // Detailed wood grain
    for (var g = 0; g < 50; g++) {
      var grainY = rng() * h;
      var grainAlpha = 0.04 + rng() * 0.08;
      ctx.strokeStyle = 'rgba(120, 85, 20, ' + grainAlpha + ')';
      ctx.lineWidth = 0.5 + rng() * 1.5;
      ctx.beginPath();
      ctx.moveTo(0, grainY);
      for (var gx = 0; gx < w; gx += 8) {
        grainY += (rng() - 0.5) * 3;
        ctx.lineTo(gx, grainY);
      }
      ctx.stroke();
    }

    // Wood knot (occasionally)
    if (rng() > 0.5) {
      var kx = w * 0.2 + rng() * w * 0.6;
      var ky = h * 0.2 + rng() * h * 0.6;
      var kr = 8 + rng() * 15;
      ctx.strokeStyle = 'rgba(100, 70, 20, 0.12)';
      ctx.lineWidth = 1;
      for (var ki = 0; ki < 6; ki++) {
        ctx.beginPath();
        ctx.ellipse(kx, ky, kr + ki * 4, kr + ki * 3, rng() * 0.3, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // -- Background wash (thin, letting plywood show) --
    var bgColor = palette[Math.floor(rng() * palette.length)];
    ctx.globalAlpha = 0.15 + rng() * 0.15;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);
    ctx.globalAlpha = 1;

    // Style varies by seed — all figurative
    var style = seed % 6;

    if (style === 0 || style === 5) {
      // PORTRAIT — Bold face, thick outlines
      drawPortrait(ctx, w, h, rng, palette, faceData);
    } else if (style === 1) {
      // FIGURE WITH OBJECTS — person + musical/symbolic elements
      drawFigureWithObjects(ctx, w, h, rng, palette, faceData);
    } else if (style === 2) {
      // CROWD SCENE — multiple rough figures
      drawCrowdScene(ctx, w, h, rng, palette);
    } else if (style === 3) {
      // SCENE WITH FIGURE — landscape/city + figure
      drawSceneWithFigure(ctx, w, h, rng, palette, faceData);
    } else {
      // EXPRESSIVE PORTRAIT — more abstract but still face-centered
      drawExpressivePortrait(ctx, w, h, rng, palette, faceData);
    }

    // -- Thick brushstroke texture overlay --
    for (var t = 0; t < 15; t++) {
      ctx.strokeStyle = palette[Math.floor(rng() * palette.length)];
      ctx.globalAlpha = 0.03 + rng() * 0.05;
      ctx.lineWidth = 8 + rng() * 20;
      ctx.lineCap = 'round';
      ctx.beginPath();
      var tx = rng() * w;
      var ty = rng() * h;
      ctx.moveTo(tx, ty);
      ctx.lineTo(tx + (rng() - 0.5) * 100, ty + (rng() - 0.5) * 60);
      ctx.stroke();
    }

    // -- Plywood showing through (scratches/wear) --
    ctx.globalAlpha = 0.06;
    ctx.fillStyle = '#a08040';
    for (var s = 0; s < 120; s++) {
      var sx = rng() * w;
      var sy = rng() * h;
      ctx.fillRect(sx, sy, rng() * 6 + 1, rng() * 2 + 0.5);
    }

    // -- Edge roughness (plywood isn't perfectly cut) --
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = plywoodBase;
    for (var e = 0; e < 20; e++) {
      var side = Math.floor(rng() * 4);
      var ex, ey, ew, eh;
      if (side === 0) { ex = rng() * w; ey = 0; ew = 2 + rng() * 6; eh = 2 + rng() * 8; }
      else if (side === 1) { ex = rng() * w; ey = h - 4; ew = 2 + rng() * 6; eh = 2 + rng() * 8; }
      else if (side === 2) { ex = 0; ey = rng() * h; ew = 2 + rng() * 8; eh = 2 + rng() * 6; }
      else { ex = w - 4; ey = rng() * h; ew = 2 + rng() * 8; eh = 2 + rng() * 6; }
      ctx.fillRect(ex, ey, ew, eh);
    }

    ctx.globalAlpha = 1;
  }

  // ---- PORTRAIT: Bold face with thick outlines ----
  function drawPortrait(ctx, w, h, rng, palette, face) {
    var cx = w * 0.5 + (rng() - 0.5) * w * 0.1;
    var cy = h * 0.42;
    var headW = w * 0.28 + rng() * w * 0.12;
    var headH = h * 0.22 + rng() * h * 0.1;

    // Neck/shoulders suggestion
    ctx.fillStyle = palette[0];
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.moveTo(cx - headW * 1.8, h * 0.85);
    ctx.quadraticCurveTo(cx - headW * 0.5, h * 0.55, cx, cy + headH);
    ctx.quadraticCurveTo(cx + headW * 0.5, h * 0.55, cx + headW * 1.8, h * 0.85);
    ctx.lineTo(cx + headW * 2, h);
    ctx.lineTo(cx - headW * 2, h);
    ctx.closePath();
    ctx.fill();

    // Head shape — imperfect, expressive
    var skinColor = palette[3] || '#d4a843';
    ctx.fillStyle = skinColor;
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.ellipse(cx, cy, headW, headH, 0, 0, Math.PI * 2);
    ctx.fill();

    // Bold outline
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 3 + rng() * 3;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.ellipse(cx, cy, headW, headH, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Eyes — asymmetric, expressive
    var eyeY = cy - headH * 0.15;
    var eyeSpread = headW * 0.4;
    drawEye(ctx, cx - eyeSpread, eyeY, headW * 0.22, rng, palette);
    drawEye(ctx, cx + eyeSpread, eyeY, headW * 0.2, rng, palette);

    // Nose — bold line
    ctx.strokeStyle = palette[0];
    ctx.lineWidth = 2 + rng() * 2;
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.moveTo(cx + (rng() - 0.5) * 6, eyeY + headH * 0.1);
    ctx.quadraticCurveTo(cx + headW * 0.08, cy + headH * 0.15, cx - headW * 0.05, cy + headH * 0.25);
    ctx.stroke();

    // Mouth — thick, expressive
    var mouthY = cy + headH * 0.4;
    ctx.strokeStyle = '#b8522e';
    ctx.lineWidth = 3 + rng() * 2;
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.moveTo(cx - headW * 0.3, mouthY);
    ctx.quadraticCurveTo(cx, mouthY + headH * 0.15 * (rng() > 0.5 ? 1 : -1), cx + headW * 0.3, mouthY + (rng() - 0.5) * 8);
    ctx.stroke();

    // Hair — wild strokes
    ctx.globalAlpha = 0.75;
    var hairColor = palette[Math.floor(rng() * 2)];
    for (var hi = 0; hi < 12; hi++) {
      ctx.strokeStyle = hairColor;
      ctx.lineWidth = 3 + rng() * 6;
      ctx.beginPath();
      var hx = cx + (rng() - 0.5) * headW * 2;
      ctx.moveTo(hx, cy - headH);
      ctx.quadraticCurveTo(
        hx + (rng() - 0.5) * 40,
        cy - headH - 20 - rng() * 40,
        hx + (rng() - 0.5) * 60,
        cy - headH + rng() * 20
      );
      ctx.stroke();
    }

    // Earring detail
    if (face && face.earring) {
      ctx.fillStyle = '#f5e6c8';
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.arc(cx + headW + 3, eyeY + headH * 0.2, 6 + rng() * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Halo
    if (face && face.halo) {
      ctx.strokeStyle = palette[1];
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.ellipse(cx, cy - headH * 0.8, headW * 1.2, headH * 0.3, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
  }

  // ---- Draw an expressive eye ----
  function drawEye(ctx, x, y, size, rng, palette) {
    // White
    ctx.fillStyle = '#f5f0e0';
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.ellipse(x, y, size, size * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Iris
    ctx.fillStyle = palette[0];
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.arc(x + (rng() - 0.5) * 4, y, size * 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Pupil
    ctx.fillStyle = '#1a1a1a';
    ctx.beginPath();
    ctx.arc(x + (rng() - 0.5) * 3, y, size * 0.18, 0, Math.PI * 2);
    ctx.fill();

    // Bold outline
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2 + rng();
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.ellipse(x, y, size, size * 0.6, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  // ---- FIGURE WITH OBJECTS ----
  function drawFigureWithObjects(ctx, w, h, rng, palette, face) {
    // Background color block
    ctx.fillStyle = palette[2];
    ctx.globalAlpha = 0.2;
    ctx.fillRect(w * 0.1, h * 0.05, w * 0.8, h * 0.9);

    // Standing figure
    var fx = w * 0.45 + (rng() - 0.5) * w * 0.1;
    var fy = h * 0.3;
    var fScale = 0.8 + rng() * 0.3;

    // Body — bold rectangle/trapezoid
    ctx.fillStyle = palette[0];
    ctx.globalAlpha = 0.75;
    ctx.beginPath();
    ctx.moveTo(fx - 40 * fScale, fy + 30);
    ctx.lineTo(fx + 40 * fScale, fy + 30);
    ctx.lineTo(fx + 50 * fScale, h * 0.85);
    ctx.lineTo(fx - 50 * fScale, h * 0.85);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.6;
    ctx.stroke();

    // Head
    var headR = 28 * fScale;
    ctx.fillStyle = palette[3] || '#d4a843';
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.arc(fx, fy, headR, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.7;
    ctx.stroke();

    // Face features — simple bold marks
    ctx.fillStyle = '#1a1a1a';
    ctx.globalAlpha = 0.8;
    // Eyes as dots
    ctx.beginPath();
    ctx.arc(fx - headR * 0.3, fy - headR * 0.1, 3, 0, Math.PI * 2);
    ctx.arc(fx + headR * 0.3, fy - headR * 0.1, 3, 0, Math.PI * 2);
    ctx.fill();
    // Mouth
    ctx.strokeStyle = '#b8522e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(fx, fy + headR * 0.3, headR * 0.2, 0, Math.PI);
    ctx.stroke();

    // Musical elements
    if (face && face.music) {
      // Guitar or music notes
      for (var mn = 0; mn < 5; mn++) {
        ctx.fillStyle = palette[1];
        ctx.globalAlpha = 0.5 + rng() * 0.3;
        var nx = rng() * w;
        var ny = rng() * h * 0.5;
        ctx.font = (20 + rng() * 20) + 'px serif';
        ctx.fillText('♪', nx, ny);
      }
      // Guitar shape
      ctx.strokeStyle = palette[2];
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.ellipse(fx + 60, fy + 80, 20, 30, 0.2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(fx + 60, fy + 50);
      ctx.lineTo(fx + 60, fy - 20);
      ctx.stroke();
    }

    // Arms — bold gestural lines
    ctx.strokeStyle = palette[0];
    ctx.lineWidth = 4;
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.moveTo(fx - 35 * fScale, fy + 50);
    ctx.quadraticCurveTo(fx - 80 * fScale, fy + 100, fx - 60 * fScale, fy + 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(fx + 35 * fScale, fy + 50);
    ctx.quadraticCurveTo(fx + 80 * fScale, fy + 80, fx + 70 * fScale, fy + 140);
    ctx.stroke();

    ctx.globalAlpha = 1;
  }

  // ---- CROWD SCENE ----
  function drawCrowdScene(ctx, w, h, rng, palette) {
    // Sky/background
    ctx.fillStyle = palette[3] || '#d4a843';
    ctx.globalAlpha = 0.25;
    ctx.fillRect(0, 0, w, h * 0.4);

    var numFigures = 5 + Math.floor(rng() * 4);
    for (var i = 0; i < numFigures; i++) {
      var figX = (w / (numFigures + 1)) * (i + 1) + (rng() - 0.5) * 30;
      var figY = h * 0.3 + rng() * h * 0.15;
      var figH = h * 0.35 + rng() * h * 0.2;
      var figW = 20 + rng() * 25;

      // Body
      ctx.fillStyle = palette[Math.floor(rng() * palette.length)];
      ctx.globalAlpha = 0.6 + rng() * 0.3;
      ctx.fillRect(figX - figW / 2, figY, figW, figH);

      // Head
      var headR = figW * 0.5 + rng() * 5;
      ctx.fillStyle = palette[(i + 2) % palette.length];
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.arc(figX, figY - headR, headR, 0, Math.PI * 2);
      ctx.fill();

      // Simple face
      ctx.fillStyle = '#1a1a1a';
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.arc(figX - headR * 0.25, figY - headR * 1.1, 2, 0, Math.PI * 2);
      ctx.arc(figX + headR * 0.25, figY - headR * 1.1, 2, 0, Math.PI * 2);
      ctx.fill();

      // Bold outline
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 2 + rng();
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(figX, figY - headR, headR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeRect(figX - figW / 2, figY, figW, figH);
    }

    // Ground line
    ctx.strokeStyle = palette[0];
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.82);
    for (var lx = 0; lx < w; lx += 15) {
      ctx.lineTo(lx, h * 0.82 + (rng() - 0.5) * 8);
    }
    ctx.stroke();

    ctx.globalAlpha = 1;
  }

  // ---- SCENE WITH FIGURE ----
  function drawSceneWithFigure(ctx, w, h, rng, palette, face) {
    // Sky
    var grad = ctx.createLinearGradient(0, 0, 0, h * 0.5);
    grad.addColorStop(0, palette[3] || '#4a6a78');
    grad.addColorStop(1, palette[4] || '#d4a843');
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h * 0.5);

    // Horizon buildings/trees
    ctx.fillStyle = palette[0];
    ctx.globalAlpha = 0.5;
    for (var b = 0; b < 8; b++) {
      var bx = rng() * w;
      var bw = 20 + rng() * 60;
      var bh = 40 + rng() * 120;
      ctx.fillRect(bx, h * 0.35 - bh, bw, bh);
    }

    // Road or ground
    ctx.fillStyle = palette[2] || '#4a5568';
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.5);
    ctx.lineTo(w, h * 0.45);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fill();

    // Rain (for Seattle)
    if (face && face.rain) {
      ctx.strokeStyle = '#88aacc';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.25;
      for (var r = 0; r < 50; r++) {
        var rx = rng() * w;
        var ry = rng() * h;
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx - 3, ry + 15 + rng() * 15);
        ctx.stroke();
      }
    }

    // Figure — small, off-center
    var figX = w * 0.3 + rng() * w * 0.4;
    var figY = h * 0.45;
    var figScale = 0.6 + rng() * 0.3;

    // Body
    ctx.fillStyle = palette[0];
    ctx.globalAlpha = 0.7;
    ctx.fillRect(figX - 15 * figScale, figY, 30 * figScale, 80 * figScale);

    // Head
    ctx.fillStyle = palette[3] || '#d4a843';
    ctx.globalAlpha = 0.85;
    ctx.beginPath();
    ctx.arc(figX, figY - 12 * figScale, 15 * figScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.6;
    ctx.stroke();

    // Road markings
    if (face && face.road) {
      ctx.strokeStyle = '#d4a843';
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.4;
      ctx.setLineDash([15, 20]);
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.5);
      ctx.lineTo(w * 0.48, h);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // House shape
    if (face && face.scene) {
      ctx.fillStyle = palette[0];
      ctx.globalAlpha = 0.7;
      var hx = w * 0.6 + rng() * w * 0.15;
      var hy = h * 0.25;
      // Walls
      ctx.fillRect(hx, hy, 80, 60);
      // Roof
      ctx.beginPath();
      ctx.moveTo(hx - 10, hy);
      ctx.lineTo(hx + 40, hy - 40);
      ctx.lineTo(hx + 90, hy);
      ctx.closePath();
      ctx.fill();
      // Door
      ctx.fillStyle = palette[1];
      ctx.fillRect(hx + 30, hy + 25, 20, 35);
      // Window
      ctx.fillStyle = palette[3];
      ctx.globalAlpha = 0.6;
      ctx.fillRect(hx + 10, hy + 15, 15, 15);
    }

    ctx.globalAlpha = 1;
  }

  // ---- EXPRESSIVE PORTRAIT — more gestural/loose ----
  function drawExpressivePortrait(ctx, w, h, rng, palette, face) {
    // Color field background
    ctx.fillStyle = palette[2];
    ctx.globalAlpha = 0.25;
    ctx.fillRect(w * 0.05, h * 0.05, w * 0.9, h * 0.9);

    // Big gestural head shape
    var cx = w * 0.5 + (rng() - 0.5) * 30;
    var cy = h * 0.4;

    // Multiple overlapping face shapes (expressive layers)
    for (var layer = 0; layer < 3; layer++) {
      ctx.fillStyle = palette[layer % palette.length];
      ctx.globalAlpha = 0.2 + rng() * 0.2;
      ctx.beginPath();
      ctx.ellipse(
        cx + (rng() - 0.5) * 20,
        cy + (rng() - 0.5) * 15,
        w * 0.2 + rng() * w * 0.1,
        h * 0.18 + rng() * h * 0.08,
        (rng() - 0.5) * 0.2,
        0, Math.PI * 2
      );
      ctx.fill();
    }

    // Main face
    ctx.fillStyle = palette[3] || '#d4a843';
    ctx.globalAlpha = 0.65;
    var fw = w * 0.22 + rng() * w * 0.08;
    var fh = h * 0.2 + rng() * h * 0.06;
    ctx.beginPath();
    ctx.ellipse(cx, cy, fw, fh, 0, 0, Math.PI * 2);
    ctx.fill();

    // Heavy outline
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 4 + rng() * 4;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.ellipse(cx, cy, fw, fh, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Eyes — bold, slightly mismatched (outsider art feel)
    var eyeY = cy - fh * 0.15;
    for (var ei = -1; ei <= 1; ei += 2) {
      var ex = cx + ei * fw * 0.35;
      var eyeSize = 8 + rng() * 10;
      // White
      ctx.fillStyle = '#f0ead8';
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      ctx.ellipse(ex, eyeY, eyeSize, eyeSize * 0.7, (rng() - 0.5) * 0.3, 0, Math.PI * 2);
      ctx.fill();
      // Iris
      ctx.fillStyle = palette[0];
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.arc(ex + (rng() - 0.5) * 4, eyeY, eyeSize * 0.45, 0, Math.PI * 2);
      ctx.fill();
      // Pupil
      ctx.fillStyle = '#111';
      ctx.beginPath();
      ctx.arc(ex + (rng() - 0.5) * 3, eyeY, eyeSize * 0.2, 0, Math.PI * 2);
      ctx.fill();
      // Outline
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.ellipse(ex, eyeY, eyeSize, eyeSize * 0.7, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Nose — single bold stroke
    ctx.strokeStyle = palette[0];
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.moveTo(cx, eyeY + 5);
    ctx.lineTo(cx + (rng() - 0.5) * 10, cy + fh * 0.2);
    ctx.stroke();

    // Mouth — thick arc
    ctx.strokeStyle = palette[1] || '#b8522e';
    ctx.lineWidth = 3 + rng() * 3;
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    var mY = cy + fh * 0.4;
    ctx.moveTo(cx - fw * 0.25, mY);
    ctx.quadraticCurveTo(cx, mY + 10 + rng() * 10, cx + fw * 0.25, mY - rng() * 5);
    ctx.stroke();

    // Body suggestion below
    ctx.fillStyle = palette[0];
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(cx - fw * 1.5, h);
    ctx.quadraticCurveTo(cx - fw * 0.3, cy + fh + 20, cx, cy + fh);
    ctx.quadraticCurveTo(cx + fw * 0.3, cy + fh + 20, cx + fw * 1.5, h);
    ctx.fill();

    // Symbolic elements
    if (face && face.symbols) {
      // Scattered symbols
      var symbols = ['★', '◆', '●', '✦', '◉'];
      ctx.globalAlpha = 0.4;
      for (var si = 0; si < 6; si++) {
        ctx.fillStyle = palette[Math.floor(rng() * palette.length)];
        ctx.font = (12 + rng() * 16) + 'px serif';
        ctx.fillText(symbols[Math.floor(rng() * symbols.length)], rng() * w, rng() * h);
      }
    }

    // Globe
    if (face && face.globe) {
      ctx.strokeStyle = palette[1];
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.4;
      var gx = cx + fw * 1.2;
      var gy = cy + fh * 0.5;
      ctx.beginPath();
      ctx.arc(gx, gy, 25, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(gx, gy, 25, 10, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(gx, gy, 10, 25, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Tropical elements
    if (face && face.tropical) {
      ctx.fillStyle = '#2d8a47';
      ctx.globalAlpha = 0.4;
      for (var pi = 0; pi < 4; pi++) {
        var px = rng() * w;
        var py = rng() * h;
        // Palm frond
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.quadraticCurveTo(px + 30, py - 40, px + 60, py - 20);
        ctx.quadraticCurveTo(px + 30, py - 25, px, py);
        ctx.fill();
      }
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
      generatePainting(canvas, painting.seed, painting.palette, painting.face);
      artDiv.appendChild(canvas);

      var caption = document.createElement('div');
      caption.className = 'gallery-caption';
      var title = document.createElement('h3');
      title.textContent = painting.title;
      var details = document.createElement('p');
      details.textContent = painting.medium + ', ' + painting.year + ' — ' + painting.size;

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
        sold.textContent = "Sold — in a collector's home";
        caption.appendChild(sold);
      }

      item.appendChild(artDiv);
      item.appendChild(caption);
      galleryGrid.appendChild(item);

      item.addEventListener('click', function () {
        openLightbox(idx);
      });
    });

    // Add entrance animation
    requestAnimationFrame(function () {
      var items = document.querySelectorAll('.gallery-item');
      items.forEach(function (el, i) {
        el.style.animationDelay = (i * 0.08) + 's';
        el.classList.add('fade-in');
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
    generatePainting(canvas, painting.seed, painting.palette, painting.face);
    lightboxArt.appendChild(canvas);

    lightboxTitle.textContent = painting.title;
    lightboxDetails.textContent = painting.medium + ', ' + painting.year + '\n' + painting.size;
    if (painting.status === 'available') {
      lightboxPrice.textContent = '$' + painting.price + ' — Available';
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
        message: "Found Kurt's work while browsing Ballard one afternoon. Standing Room Only now lives above our turntable setup — feels like it was made for that spot. Any other collectors in Seattle want to grab a beer sometime?",
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
  // Quirky Interactions
  // ============================

  // -- Hero typewriter effect --
  var heroTagline = document.querySelector('.hero-tagline');
  if (heroTagline) {
    var fullText = heroTagline.textContent;
    heroTagline.textContent = '';
    heroTagline.style.visibility = 'visible';
    var charIdx = 0;
    function typeNext() {
      if (charIdx < fullText.length) {
        heroTagline.textContent += fullText[charIdx];
        charIdx++;
        setTimeout(typeNext, 50 + Math.random() * 80);
      }
    }
    // Start after a short delay
    setTimeout(typeNext, 1200);
  }

  // -- Paint splatter on click (anywhere on page) --
  document.addEventListener('click', function (e) {
    if (e.target.closest('#community-board') || e.target.closest('.lightbox') || e.target.closest('input') || e.target.closest('textarea') || e.target.closest('button')) return;

    var splat = document.createElement('div');
    splat.className = 'paint-splat';
    var colors = ['#d4a843', '#b8522e', '#1a3a5c', '#5c2d82', '#2d5a27', '#8B6914'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    var size = 15 + Math.random() * 30;
    splat.style.cssText = 'left:' + e.pageX + 'px;top:' + e.pageY + 'px;width:' + size + 'px;height:' + size + 'px;background:' + color + ';';
    document.body.appendChild(splat);

    // Add drip
    if (Math.random() > 0.5) {
      var drip = document.createElement('div');
      drip.className = 'paint-drip';
      drip.style.cssText = 'left:' + (e.pageX + Math.random() * size * 0.5) + 'px;top:' + (e.pageY + size * 0.3) + 'px;background:' + color + ';';
      document.body.appendChild(drip);
      setTimeout(function () { drip.remove(); }, 4000);
    }

    setTimeout(function () { splat.remove(); }, 3500);
  });

  // -- Gallery items tilt on hover (3D perspective) --
  galleryGrid.addEventListener('mousemove', function (e) {
    var item = e.target.closest('.gallery-item');
    if (!item) return;
    var rect = item.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;
    item.style.transform = 'perspective(600px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) translateY(-4px)';
  });

  galleryGrid.addEventListener('mouseleave', function (e) {
    var items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach(function (item) {
      item.style.transform = '';
    });
  });

  // Also reset individual items
  galleryGrid.addEventListener('mouseout', function (e) {
    var item = e.target.closest('.gallery-item');
    if (item && !item.contains(e.relatedTarget)) {
      item.style.transform = '';
    }
  });

  // -- Scroll-triggered section reveals --
  var revealElements = document.querySelectorAll('.section, .about-section, .find-section');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // -- Nav color shift on scroll --
  var nav = document.getElementById('nav');
  var lastScroll = 0;
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    if (scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    // Hide/show nav on scroll direction
    if (scrollY > lastScroll && scrollY > 300) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
    }
    lastScroll = scrollY;
  });

  // -- Easter egg: Konami code plays a "bicycle" message --
  var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var konamiIndex = 0;
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        konamiIndex = 0;
        showEasterEgg();
      }
    } else {
      konamiIndex = 0;
    }
  });

  function showEasterEgg() {
    var egg = document.createElement('div');
    egg.className = 'easter-egg';
    egg.innerHTML = '<p>🚲 You found it!</p><p class="egg-sub">"In 1994, Kurt biked from NYC to Seattle playing gigs along the way."</p><p class="egg-sub">The album recorded at Paisley Park made the Huffington Post\'s most underrated albums of the \'90s.</p>';
    document.body.appendChild(egg);
    setTimeout(function () { egg.classList.add('visible'); }, 50);
    setTimeout(function () {
      egg.classList.remove('visible');
      setTimeout(function () { egg.remove(); }, 500);
    }, 6000);
  }

  // -- Wiggle effect on "KL" logo --
  var logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.addEventListener('mouseenter', function () {
      logo.classList.add('wiggle');
      setTimeout(function () { logo.classList.remove('wiggle'); }, 600);
    });
  }

  // -- Random quote rotation in footer --
  var quotes = [
    "Painting is so much different than writing songs.",
    "Painters don't ever have to paint the same painting twice.",
    "I really love being a painter. I get to be creative the whole time.",
    "From NYC to Seattle by bicycle. Now painting in the rain.",
    "Acrylic on plywood. Found objects. One of a kind."
  ];
  var footerSub = document.querySelector('.footer-sub');
  if (footerSub) {
    footerSub.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    footerSub.addEventListener('click', function () {
      footerSub.style.opacity = '0';
      setTimeout(function () {
        footerSub.textContent = quotes[Math.floor(Math.random() * quotes.length)];
        footerSub.style.opacity = '';
      }, 300);
    });
  }

  // ============================
  // Init
  // ============================
  renderGallery();
  renderPosts();

})();
