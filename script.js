const options = {
    // TODO replace letters, fix invisibly zero-width spaces or whatever after some of them
    shape: {letter: "𐡎", description: "shape (1: circle, 2: square, 3: triangle, 4: line)", min: 1, max: 4, step: 1, default: 1},
    radius: {letter: "𐡀", description: "radius of shape", min: 0, max: 3000, step: 10, default: 500},
    rotationspeed: {letter: "𐤒", description: "rotation speed (in degrees per iteration)", min: -5, max: 5, step: 0.05, default: 0},
    rotationoriginhori: {letter: "𐤈", description: "horizontal origin of rotation as a fraction of the canvas width", min: 0, max: 1, step: 0.01, default: 0.5},
    rotationoriginverti: {letter: "𐤊", description: "vertical origin of rotation as a fraction of the canvas height", min: 0, max: 1, step: 0.01, default: 0.5},
    expansionhori: {letter: "𐤗‎", description: "horizontal rate of expansion or contraction per iteration", min: 0.95, max: 1.05, step: 0.001, default: 1},
    expansionverti: {letter: "𐤓‎", description: "horizontal rate of expansion or contraction per iteration", min: 0.95, max: 1.05, step: 0.001, default: 1},
    thickness: {letter: "𐤇", description: "line thiccness in pixels", min: 0.1, max: 4, step: 0.1, default: 1},

    segments: {letter: "𐡔", description: "number of line segments the shape is comprised of", min: 100, max: 20000, step: 100, default: 1000},
    skipchance: {letter: "𐡜", description: "chance each line segment will be skipped during drawing in each iteration", min: 0, max: 1, step: 0.01, default: 0},

    fps: {letter: "𐡚", description: "frames/iterations per second (probably limited by your system at the high end of the scale)", min: 1, max: 240, step: 1, default: 60},
    iterations: {letter: "𐡘", description: "iterations before stopping", min: 10, max: 2000, step: 1, default: 100},
    width: {letter: "𐡏", description: "canvas width in pixels", min: 500, max: 2560, step: 1, default: 1024},
    height: {letter: "𐡉", description: "canvas height in pixels", min: 500, max: 2560, step: 1, default: 1024},
    horicenter: {letter: "𐤔", description: "horizontal center as a fraction of the canvas width", min: 0, max: 1, step: 0.01, default: 0.5},
    vericenter: {letter: "𐤘‎", description: "vertical center as a fraction of the canvas height", min: 0, max: 1, step: 0.01, default: 0.5},

    canvasred: {letter: "𐤏", description: "red component of background color", min: 0, max: 255, step: 1, default: 255, class: "red"},
    canvasgreen: {letter: "𐤏", description: "green component of background color", min: 0, max: 255, step: 1, default: 255, class: "green"},
    canvasblue: {letter: "𐤏", description: "blue component of background color", min: 0, max: 255, step: 1, default: 255, class: "blue"},
    canvasopacity: {letter: "𐤑‎", description: "opacity of background color", min: 0, max: 1, step: 0.01, default: 1, class: "halftransparent"},

    linered: {letter: "𐤟‎", description: "red component of line color", min: 0, max: 255, step: 1, default: 0, class: "red"},
    linegreen: {letter: "𐤟‎", description: "green component of line color", min: 0, max: 255, step: 1, default: 0, class: "green"},
    lineblue: {letter: "𐤟‎", description: "blue component of line color", min: 0, max: 255, step: 1, default: 0, class: "blue"},
    lineopacity: {letter: "𐤑‎", description: "opacity of line segments", min: 0, max: 1, step: 0.01, default: 1, class: "halftransparent"},

    blendmode: {letter: "𐤀", description: "blend mode used during line drawing (0: source-over, 1: multiply, 2: screen, 3: overlay, 4: darken, 5: lighten, 6: color-dodge, 7: color-burn, 8: hard-light, 9: soft-light, 10: difference, 11: exclusion)", min: 0, max: 11, step: 1, default: 0},

    fadeoutspeed: {letter: "𐡞", description: "rate at which line segments disappear in later iterations (-1 to disable)", min: -1, max: 1000, step: 1, default: -1},

    initialrotation:  {letter: "I", description: "initial rotation of shape (in degrees)", min: 0, max: 359, step: 1, default: 0},

    revealspeed: {letter: "R", description: "rate at which line segments are added (-1 to disable)", min: -1, max: 500, step: 1, default: -1},

    translationhori: {letter: "H", description: "horizontal rate of linear movement per iteration (in pixels)", min: -10, max: 10, step: 0.1, default: 0},
    translationverti: {letter: "V", description: "vertical rate of linear movement per iteration (in pixels)", min: -10, max: 10, step: 0.1, default: 0},

    rotationperiod: {letter: "P", description: "period of sinusoidal rotation variance (in iterations, -1 to disable)", min: -1, max: 1000, step: 1, default: -1},

    wavinessphori: {letter: "W", description: "period of horizontal sinusoidal expansion variance (in line segments, -1 to disable)", min: -1, max: 10000, step: 1, default: -1},
    wavinesspverti: {letter: "V", description: "period of vertical sinusoidal expansion variance (in line segments, -1 to disable)", min: -1, max: 10000, step: 1, default: -1},
    wavinessahori: {letter: "X", description: "amplitude of horizontal sinusoidal expansion variance", min: 0, max: 10, step: 0.1, default: 1},
    wavinessaverti: {letter: "X", description: "amplitude of vertical sinusoidal expansion variance", min: 0, max: 10, step: 0.1, default: 1},

    jitter: {letter: "J", description: "jitter added to the shape in each iteration", min: 0, max: 10, step: 0.1, default: 1},

    // Note: When adding more options, only add to the bottom in order not to
    // break the prefixing used to shorten option keys in presets and shared
    // links. Option keys should use only a-z, and obviously there shouldn't be
    // any duplicate keys (not like that would work). The defaults should be
    // zero values, effectively no-ops, or, where that doesn't make sense,
    // sensible defaults since newly added options must not modify the behavior
    // of existing presets or shared links.
};

let optionShorts = {};
let shortsOptions = {};
Object.keys(options).forEach(n => {
    for (let i = 1; i < n.length; i++) {
        let prefix = n.substring(0, i);
        if (!Object.values(optionShorts).includes(prefix)) {
            optionShorts[n] = prefix;
            shortsOptions[prefix] = n;
            break;
        }
    }
});

const optionSections = {
    "": ["shape", "radius", "horicenter", "vericenter"],
    "expansion": ["expansionhori", "expansionverti", "revealspeed", "fadeoutspeed"],
    "waviness": ["jitter", "wavinessphori", "wavinessahori", "wavinesspverti", "wavinessaverti"],
    "rotation": ["initialrotation", "rotationspeed", "rotationoriginhori", "rotationoriginverti", "rotationperiod"],
    "movement": ["translationhori", "translationverti"],
    "line": ["segments", "skipchance", "thickness", "linered", "linegreen", "lineblue", "lineopacity", "blendmode"],
    "canvas": ["width", "height", "canvasred", "canvasgreen", "canvasblue", "canvasopacity"],
    "nitpicky details": ["fps", "iterations"],

};

const defaults = Object.fromEntries(Object.entries(options).map(([n, o]) => [n, o.default]));

let optionValues = JSON.parse(JSON.stringify(defaults));

function setupOptions() {
    let rendered = "";
    Object.keys(optionSections).forEach(s => {
        rendered += `<hr><h2>${s}</h2>`;
        optionSections[s].forEach(n => {
            const o = options[n];
            const v = optionValues[n];
            let c = "";
            if (o.hasOwnProperty("class")) {
                c = o.class;
            }
            rendered += `<label class="${c}"><div class="letter">${o.letter}</div><input type="range" min="${o.min}" max="${o.max}" step="${o.step}" value="${v}" name="${n}" oninput="handleOptionInput(this)"><div class="value">${v}</div><div class="description">${o.description}</div></label>`;
        });
    });
    document.querySelector(".bitsnbobs").innerHTML = rendered;
}

function handleOptionInput(e) {
    unselectPreset();
    optionValues[e.name] = parseFloat(e.value);
    e.parentElement.querySelector(".value").innerText = parseFloat(e.value);
    refreshShareSheetUrl();
    restartRendering(optionValues);
}
function refreshRenderedOption(name) {
    const e = document.querySelector(`.bitsnbobs [name=${name}]`);
    const v = optionValues[name];
    e.value = v;
    e.parentElement.querySelector(".value").innerText = v;
}
function refreshAllRenderedOptions() {
    Object.keys(optionValues).forEach(refreshRenderedOption);
}

const presets = {
    "ⵋ": "s4r320ro-0.2ex1.003t0.5se5000i450v0.13c223ca216can168l201li96lin34line0.25b10fa711re100tra1.1rotat100wav2740wavi0.8wavin0.1",
    "ⴳ": "s4r550t4se100i335v0c151ca172can207l201li230lin255line0.66b9fa336in180tra-3wa150wav24wavi0.1wavin0.1j0.5",
    "ⵉ": "s2r300ro-0.2e1.002ex0.995t0.5se5000i460c42ca47can72l158li180lin212line0.25b3tra0.9rotat100wav576wavin0.1j1.3",
    "ⵄ": "s2r520ro0.15e0.996ex0.997se10510i1474line0.02fa1000wa398wav268wavi0.1wavin0.1",
    "ⵞ": "r160ro-0.65e1.005ex1.006t0.5i402w2560h2560c0ca0can17l255li244lin204line0.05fa1000wa300j10",
    "ⴶ": "r1080ro-0.9e0.999ex0.997t0.5se5600sk0.31i201w2560h2560c44ca55can78l192li183lin201b6fa201re172tr0.9wav2200",
    "ⵇ": "s4r980ro-4.65e0.995ex0.995t4se100sk0.5i240w2372h1708c89ca107can72l255li255lin255line0.66b3rotat730j0",
    "ⴾ": "r200ro0.3rota0.4e1.007ex1.007t0.8se8000i508w2560ho0.14c4ca4can12l196li174lin211line0.8b6fa658in357tr4rotat66wa1970wav2643wavi0.2wavin0.2j0.5",
    "ⴻ": "s3r550ro-0.2e0.999ex0.985t0.5se2900i335ho0.36v0.42c26ca22can47l204li181lin145line0.66fa336in238tra-3wa150wav24wavi0.1wavin0.1j0.7",
    "ⴷ": "r10ro-1e1.037ex1.037t2se1300sk0.1i220w946h946ho0.43c11ca15can20l159li204lin148re13rotat60wa358wav415wavi0.4wavin0.3j0",
    "ⵃ": "s2r130ro-0.1t0.4i259w1698c44ca44can44l179li179lin179b6fa225re25wa816wav336wavi3.2",
    "ⵘ": "s4ro4e0.99ex0.983t0.8i278v0.01c16ca26can27l173li179lin147b8in183tr-3.7wa50wav40j0.2",
    "ⴱ": "s2r320ro0.15e0.997ex0.997se10510i1474line0.02fa1000re37",
    "ⴴ": "s2r1280ro-0.35rot0.12rota0.13e0.989ex0.989t4se100sk0.67i450w2560h2560c38ca18can10l188li72b6fa1000rotat600wa18wav47wavi0.1wavin0.1",
    "ⵓ": "s4r390ro0.15e0.994se5000i565w857h1372v0.04c53ca39can48l255li255lin255line0.24b3fa803tra1.8wa6000wav6000wavi0.1wavin0.4j0.1",
    "ⴲ": "r1850ro0.7rot0.25rota0.25e0.994ex0.994t0.5se11000sk0.74i603w2560h2560ho0.52ca238can239l172li168lin168line0.04b10rotat170wav1300j8",
    "ⵁ": "s2r250ro5rot0rota0e0.995ex0.995t3se100i316w500h500c0ca0can64l255li255b10j0",
    "ⴼ": "s2r1250ro0.025e0.994ex0.994t0.5se8000sk0.74i1388w2560h2560line0.35wav1300",
    "ⴸ": "s3r1600ro0.2e0.99ex0.998se6400i402w1114h1580v0c5ca23can37l175li141lin140line0.27b8fa403wav747j3.4",
    "ⴿ": "r30ro2.75e1.05ex1.05t0.2se2000sk0.5i58w2005c16ca21can36l130li163lin199b6wa432wav47wavi5wavin5j10",
    "ⵥ": "s4r1080ro-0.9t0.5se5600sk0.31i201w2560h2560c44ca55can78l163li183lin201b6fa201re172tr0.9wav2200",
    "ⵅ": "s2r100ro-1e1.01ex1.01t0.3se10000sk0.5i259ho0.56v0.46c13ca13can51l238li243lin230fa302tr1tra1rotat500j0.1",
    "ⵆ": "s3r650ro5t2se400sk0.25i77w1995h1995c20ca23can39l227li235lin255b8in41j0",
    "ⵌ": "r200ro4e1.05ex0.958se5000sk0.8i508w1580h1580ho0.51v0.52c44ca55can96l126li164lin240b2tr10tra10j0.2",
    "ⵍ": "s4r460ro0.05rot0.68rota1e0.999ex1.05t2se3000sk0.5i201v0.94c0ca34can28l238li169lin54line0.75b3fa196rotat9j0.2",
    "ⵎ": "s4r630ro0.1t0.3se4000i1206v0c244ca242can222l53lin12line0.3tr-0.1tra1rotat403wav3749wavin0.1j0.4",
    "ⵐ": "s2r1010ro-0.95rot0.65rota0.2e0.977ex0.969i58w1401h1401ho0.33v0.31fa384re35wa95wav47wavi1.2wavin2j0.1",
    "ⵒ": "s3r1820ro5rot0.46rota0.22e0.96ex0.965t1.5se4000i297w2560h2560ho0.77v0.52c0ca0can0l233li243lin255b8fa384rotat192wa432wav143wavi1.2wavin0.5j0.1",
    "ⵖ": "r400ro-0.4rota0.64e1.01ex1.01se10000i192h2560v0.64c229ca210can136l172li102lin194b7tra-1.3rotat201wa1874wav3557wavi1.2wavin0.9j0.2",
    "ⴵ": "s4r100ro-2.5e0.98ex1.01i1005ho0.22v0.22c7ca10can16l196li219lin255line0.16fa1000rotat384wa287wav576wavi3wavin3j0.2",
    "ⵙ": "r10ro2.55rot0.51rota0e1.05ex1.05t0.2se5000w1342h1342ho1v0c177ca63can32l227li173lin99rotat100wa47wavi8j0.1",
    "ⵚ": "r250ro1.9e1.007ex1.01se10000i402w2560h2560c77ca89can167l183li173lin194b3tr2.2rotat201wa4615wav2932wavi0.5j0.1",
    "ⵛ": "",
    "ⵟ": "",
    "ⵠ": "",
    "ⵡ": "",
    "ⵢ": "",
    "ⵣ": "",
    "ⵤ": "",
    "⌘": "",
};

function setupPresets() {
    let rendered = "";
    Object.keys(presets).forEach(n => {
        const p = presets[n];
        rendered += `<button name="${n}" onclick="handlePresetClick(this)">${n}</button>`;
    });
    document.querySelector(".presets").innerHTML = rendered;
}
function handlePresetClick(e) {
    unselectPreset();
    applyPreset(presets[e.name]);
    e.classList.add("selected");
}
function applyPreset(preset) {
    const opts = parseShareHash(preset);
    applyOptions(opts);
}
function applyOptions(opts) {

    // first reset everything to defaults...
    optionValues = Object.assign(optionValues, defaults);

    // then apply the new, possibly-incomplete options
    optionValues = Object.assign(optionValues, opts);

    refreshAllRenderedOptions();
    refreshShareSheetUrl();
    restartRendering(optionValues);
}
function applyRandomPreset() {
    const i = Math.floor(Math.random() * Object.keys(presets).length);
    const l = Object.keys(presets)[i];
    const p = presets[l];
    applyPreset(p);
    const e = document.querySelector(`.presets button[name=${l}]`)
    e.classList.add("selected");
}
function unselectPreset() {
    const selectedPreset = document.querySelector(".presets .selected");
    if (selectedPreset) {
        selectedPreset.classList.remove("selected");
    }
}

function randomize() {
    // TODO exclude fps/iterations/size/etc.? only randomize a few sliders at a time?
    let randomized = JSON.parse(JSON.stringify(defaults));
    Object.keys(options).forEach(n => {
        const o = options[n];
        const v = optionValues[n];

        const minScaled = o.min / o.step;
        const maxScaled = o.max / o.step;
        let rand = parseInt(minScaled + Math.random() * (maxScaled - minScaled)) * o.step;
        // TODO deal with dumb floating point stringification stuff
        if (!o.step.toString().includes(".")) {
            rand = parseInt(rand);
        }
        randomized[n] = rand;
    });
    applyOptions(randomized);
}

function downloadFile(hrefData, filename) {
    const a = document.createElement("a");
    a.href = hrefData;
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    a.outerHTML = "";
}
function download() {
    const date = new Date().toISOString().replace(/\:/g, ".");
    const hash = generateShareHash(optionValues);
    const filename = `uji_${date}_${hash}.png`;
    downloadFile(canvas.toDataURL(), filename);
}

function generateShareHash(opts) {
    let hash = "";
    Object.keys(opts).forEach(n => {

        // omit values identical to defaults
        if (opts[n] === defaults[n]) {
            return;
        }

        const l = optionShorts[n];
        const v = opts[n];
        hash += `${l}${v}`;
    });
    return hash;
}
function generateShareURL(opts) {
    const baseUrl = window.location.href.replace(window.location.hash, "");
    const hash = generateShareHash(opts);
    const url = `${baseUrl}#${hash}`;
    return url;
}
function parseShareHash(hash) {
    //const matches = [...hash.matchAll(/([a-z]+)([0-9.\-]+)/g)];
    let matches = [];
    const regex = /([a-z]+)([0-9.\-]+)/g;
    let temp;
    while ((temp = regex.exec(hash)) !== null) {
        matches.push(temp);
    }

    if (!matches) return false;
    let opts = {};
    matches.forEach(m => {
        const n = shortsOptions[m[1]];
        if (!n) return false;
        const v = parseFloat(m[2]);
        if (v === undefined) return false;  // important not to use !v here since !0 => true
        opts[n] = v;
    })
    return opts;
}
function parseShareURL(url) {
    const hash = url.split('#')[1];
    if (!hash) return false;
    return parseShareHash(hash);
}
function tryExtractingOptionsFromUrl() {
    return parseShareURL(window.location.href);
}
function copyShareLink() {
    const caring = document.querySelector(".caring");
    caring.focus();
    caring.select();

    let successful = false;
    let error = "";
    try {
        successful = document.execCommand("copy");
    } catch (err) {
        error = err;
    }

    const shareStatus = document.querySelector(".share-status");
    if (successful) {
        shareStatus.innerText = "Success!";
    } else {
        let text = "Couldn't copy"
        if (error) text += ` (${err})`
        text += " – try copying the URL manually."

        shareStatus.innerText = text;
    }
    shareStatus.style.display = "block";
}
function refreshShareSheetUrl() {
    const shareUrl = generateShareURL(optionValues);
    document.querySelector(".caring").value = shareUrl;
    document.querySelector(".share-status").style.display = "none";
}
function share() {
    const shareButton = document.querySelector(".share");
    const shareSheet = document.querySelector(".share-sheet");

    if (shareSheet.style.display == "block") {
        shareSheet.style.display = "none";
        shareButton.classList.remove("active");
    } else {
        refreshShareSheetUrl();
        document.querySelector(".share-status").style.display = "none";
        shareSheet.style.display = "block";
        shareButton.classList.add("active");
    }
}

// out-of-place rotation of p = [x₁,y₁] around o = [x₂,y₂], based on
// http://stackoverflow.com/a/2259502
function rotate(o, p, angle) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);

    // copy point
    p = [p[0],p[1]];

    // translate point back to origin
    p[0] -= o[0];
    p[1] -= o[1];

    // rotate point
    const xnew = p[0] * c - p[1] * s;
    const ynew = p[0] * s + p[1] * c;

    // translate point back
    p[0] = xnew + o[0];
    p[1] = ynew + o[1];

    return p;
}

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
let inter = null;
let line = null;

const r = Math.random;
const blendModes = ["source-over", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion"];

function restartRendering(opts) {
    clearInterval(inter);

    const w = opts.width;
    const h = opts.height;
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);

    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = `rgba(${opts.canvasred},${opts.canvasgreen},${opts.canvasblue},${opts.canvasopacity})`;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = `rgba(${opts.linered},${opts.linegreen},${opts.lineblue},${opts.lineopacity})`;
    ctx.globalCompositeOperation = blendModes[opts.blendmode];

    // generate initial line
    const center = [w * opts.horicenter, h * opts.vericenter];
    const radius = opts.radius;
    const segments = opts.segments;
    line = [];
    for (let i = 0; i < segments; i++) {
        let x, y;
        if (opts.shape == 1) {
            x = center[0] + radius * Math.cos((i / segments) * 2 * Math.PI);
            y = center[1] + radius * Math.sin((i / segments) * 2 * Math.PI);
        } else if (opts.shape == 2) {
            if (i < segments / 4) {
                x = center[0] - radius + 2 * radius * (i / (segments / 4));
                y = center[1] - radius;
            } else if (i < segments / 2) {
                x = center[0] + radius;
                y = center[1] - radius + 2 * radius * ((i - segments / 4) / (segments / 4));
            } else if (i < 3 * segments / 4) {
                x = center[0] + radius - 2 * radius * ((i - segments / 2) / (segments / 4));
                y = center[1] + radius;
            } else {
                x = center[0] - radius;
                y = center[1] + radius - 2 * radius * ((i - 3 * segments / 4) / (segments / 4));
            }
        } else if (opts.shape == 3) {
            if (i < segments / 3) {
                x = center[0] - radius + 2 * radius * (i / (segments / 3));
                y = center[1] + radius;
            } else if (i < 2 * segments / 3) {
                x = center[0] + radius - radius * ((i - segments / 3) / (segments / 3));
                y = center[1] + radius - 2 * radius * ((i - segments / 3) / (segments / 3));
            } else {
                x = center[0] - radius * ((i - 2 * segments / 3) / (segments / 3));
                y = center[1] - radius + 2 * radius * ((i - 2 * segments / 3) / (segments / 3));
            }
        } else if (opts.shape == 4) {
            x = center[0] - radius + 2 * radius * (i / segments);
            y = center[1];
        }

        line.push([x,y]);
    }

    if (opts.initialrotation > 0) {
        line = line.map(p => {
            return rotate([w / 2, h / 2], p, opts.initialrotation * (Math.PI / 180));
        });
    }

    // thing goes brr
    let n = 0;
    inter = setInterval(() => {
        if (n++ > opts.iterations) clearInterval(inter);

        ctx.beginPath();

        line = line.map((p, i) => {
            let x = p[0];
            let y = p[1];

            if (   i == 0
                || r() < opts.skipchance
                || (opts.fadeoutspeed > -1 && n > i % r() * opts.fadeoutspeed)
                || (opts.revealspeed > -1 && i / opts.revealspeed > n)
                ) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }

            x = center[0] + (x - center[0] + (r() - 0.5) * opts.jitter) * opts.expansionhori + opts.translationhori + ((opts.wavinessphori > -1) ? (opts.wavinessahori * Math.sin(2 * Math.PI * i / opts.wavinessphori)) : 0);  // TODO also amplitude of waviness
            y = center[1] + (y - center[1] + (r() - 0.5) * opts.jitter) * opts.expansionverti + opts.translationverti + ((opts.wavinesspverti > -1) ? (opts.wavinessaverti * Math.sin(2 * Math.PI * i / opts.wavinesspverti)) : 0);

            return rotate([w * opts.rotationoriginhori, h * opts.rotationoriginverti], [x, y], (opts.rotationspeed * (Math.PI / 180)) * ((opts.rotationperiod > -1) ? Math.sin(2 * Math.PI * n / opts.rotationperiod) : 1));
        });

        ctx.lineWidth = opts.thickness;
        ctx.stroke();

    }, 1000 / opts.fps);
}

window.addEventListener('load', e => {
    setupPresets();
    setupOptions();

    const opts = tryExtractingOptionsFromUrl();
    if (opts) {
        applyOptions(opts);
    } else {
        applyRandomPreset();
    }
});
