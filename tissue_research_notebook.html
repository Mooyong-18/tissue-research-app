<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Tissue Research Notebook</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Sarabun', sans-serif; background: #f0f4f0; color: #1a2a1a; min-height: 100vh; }
  :root {
    --green-dark: #1b4332; --green-mid: #2d6a4f; --green-light: #52b788;
    --green-pale: #d8f3dc; --green-xpale: #f0faf2;
    --red: #e63946; --red-pale: #fde8ea;
    --amber: #e9922e; --amber-pale: #fef3e2;
    --blue: #2176ae; --blue-pale: #e3f1fb;
    --purple: #7b5ea7; --purple-pale: #f0ebfa;
    --gray: #6c757d; --border: #d4e6d4; --white: #fff;
    --radius: 14px; --shadow: 0 2px 12px rgba(0,60,0,0.08);
  }

  /* Layout */
  .app { display: flex; flex-direction: column; min-height: 100vh; }
  .header { background: var(--green-dark); color: #fff; padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; }
  .header-title { display: flex; align-items: center; gap: 0.75rem; }
  .header-title h1 { font-size: 1.3rem; font-weight: 700; }
  .header-title p { font-size: 0.8rem; opacity: 0.75; }
  .header-logo { width: 42px; height: 42px; background: var(--green-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; }
  .header-btns { display: flex; gap: 0.5rem; }
  .btn { padding: 0.45rem 1rem; border-radius: 8px; border: none; cursor: pointer; font-size: 0.82rem; font-family: inherit; font-weight: 600; transition: all 0.15s; }
  .btn-white { background: rgba(255,255,255,0.15); color: #fff; border: 1px solid rgba(255,255,255,0.3); }
  .btn-white:hover { background: rgba(255,255,255,0.25); }
  .btn-green { background: var(--green-light); color: var(--green-dark); }
  .btn-green:hover { background: #40a070; }
  .btn-outline { background: #fff; color: var(--green-dark); border: 1px solid var(--border); }
  .btn-outline:hover { background: var(--green-xpale); }
  .btn-danger { background: var(--red-pale); color: var(--red); border: 1px solid #f5c6cb; }
  .btn-sm { padding: 0.3rem 0.7rem; font-size: 0.78rem; }

  /* Nav */
  .nav { background: #fff; border-bottom: 1px solid var(--border); display: flex; overflow-x: auto; gap: 0; }
  .nav-btn { padding: 0.9rem 1.1rem; border: none; background: none; cursor: pointer; font-family: inherit; font-size: 0.82rem; font-weight: 600; color: var(--gray); white-space: nowrap; border-bottom: 3px solid transparent; transition: all 0.15s; display: flex; align-items: center; gap: 0.4rem; }
  .nav-btn.active { color: var(--green-mid); border-bottom-color: var(--green-mid); }
  .nav-btn:hover:not(.active) { background: var(--green-xpale); color: var(--green-mid); }

  /* Main */
  .main { padding: 1.5rem; max-width: 1200px; margin: 0 auto; width: 100%; }

  /* Cards */
  .card { background: #fff; border-radius: var(--radius); border: 1px solid var(--border); padding: 1.25rem; box-shadow: var(--shadow); }
  .card-grid { display: grid; gap: 1rem; }
  .card-grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
  .card-grid-3 { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
  .card-grid-4 { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }
  .card-grid-5 { grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); }
  .card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--green-dark); }

  /* Stat cards */
  .stat-card { background: #fff; border-radius: var(--radius); border: 1px solid var(--border); padding: 1.1rem; box-shadow: var(--shadow); }
  .stat-label { font-size: 0.78rem; color: var(--gray); margin-bottom: 0.3rem; }
  .stat-value { font-size: 1.9rem; font-weight: 700; color: var(--green-dark); line-height: 1.1; }
  .stat-sub { font-size: 0.75rem; color: var(--gray); margin-top: 0.3rem; }
  .stat-icon { font-size: 1.5rem; float: right; opacity: 0.6; }

  /* Badges */
  .badge { display: inline-block; padding: 0.25rem 0.7rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
  .badge-green { background: var(--green-pale); color: var(--green-dark); }
  .badge-blue { background: var(--blue-pale); color: var(--blue); }
  .badge-amber { background: var(--amber-pale); color: #8b5e0e; }
  .badge-red { background: var(--red-pale); color: var(--red); }
  .badge-purple { background: var(--purple-pale); color: var(--purple); }
  .badge-gray { background: #f0f0f0; color: var(--gray); }

  /* Table */
  .table-wrap { overflow-x: auto; border-radius: var(--radius); border: 1px solid var(--border); }
  table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
  th { background: var(--green-xpale); padding: 0.75rem 1rem; text-align: left; font-weight: 700; font-size: 0.78rem; color: var(--green-mid); white-space: nowrap; }
  td { padding: 0.7rem 1rem; border-top: 1px solid var(--border); vertical-align: middle; }
  tr:hover td { background: var(--green-xpale); }

  /* Forms */
  .form-row { display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: flex-end; }
  input, select, textarea { font-family: inherit; font-size: 0.85rem; padding: 0.55rem 0.85rem; border: 1px solid var(--border); border-radius: 8px; background: #fff; color: inherit; width: 100%; transition: border 0.15s; }
  input:focus, select:focus, textarea:focus { outline: none; border-color: var(--green-light); box-shadow: 0 0 0 3px rgba(82,183,136,0.15); }
  label { font-size: 0.78rem; font-weight: 600; color: var(--gray); display: block; margin-bottom: 0.3rem; }
  .field { flex: 1; min-width: 120px; }

  /* Search */
  .search-wrap { position: relative; margin-bottom: 1rem; }
  .search-wrap input { padding-left: 2.5rem; }
  .search-icon { position: absolute; left: 0.85rem; top: 50%; transform: translateY(-50%); color: var(--gray); font-size: 1rem; pointer-events: none; }

  /* Section title */
  .section-title { margin-bottom: 1rem; }
  .section-title h2 { font-size: 1.15rem; font-weight: 700; color: var(--green-dark); }
  .section-title p { font-size: 0.82rem; color: var(--gray); margin-top: 0.2rem; }

  /* Project card */
  .project-card { border-left: 4px solid var(--green-light); }
  .project-id { font-size: 0.75rem; color: var(--gray); margin-bottom: 0.5rem; }
  .project-name { font-size: 1.05rem; font-weight: 700; color: var(--green-dark); }
  .project-type { font-size: 0.82rem; color: var(--green-mid); font-weight: 600; margin: 0.25rem 0; }
  .project-goal { font-size: 0.83rem; color: #444; margin-top: 0.75rem; line-height: 1.5; }

  /* Experiment */
  .exp-card { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; }
  .exp-id { font-size: 0.75rem; color: var(--gray); }
  .exp-title { font-size: 1rem; font-weight: 700; color: var(--green-dark); margin: 0.3rem 0; }
  .exp-hypo { font-size: 0.83rem; color: #444; margin-top: 0.5rem; line-height: 1.5; border-left: 3px solid var(--green-pale); padding-left: 0.75rem; }

  /* Formula */
  .formula-ingredient { font-size: 0.82rem; color: #444; padding: 0.3rem 0; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; }
  .formula-ingredient:last-child { border-bottom: none; }
  .formula-summary { background: var(--green-xpale); border-radius: 8px; padding: 0.75rem 1rem; margin-top: 0.75rem; font-size: 0.85rem; }
  .formula-summary b { color: var(--green-dark); }

  /* Cost table */
  .cost-highlight { background: var(--green-xpale); }
  .cost-total { font-weight: 700; color: var(--green-dark); }

  /* Test result */
  .test-item { padding: 0.5rem 0.75rem; border-radius: 8px; background: var(--green-xpale); font-size: 0.82rem; display: flex; align-items: center; gap: 0.5rem; }
  .test-pass { color: var(--green-mid); }
  .test-fail { background: var(--red-pale); color: var(--red); }

  /* Summary block */
  .summary-item { display: flex; justify-content: space-between; padding: 0.6rem 0; border-bottom: 1px solid var(--border); font-size: 0.85rem; }
  .summary-item:last-child { border-bottom: none; }

  /* Modal overlay */
  .modal-bg { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.35); z-index: 100; align-items: center; justify-content: center; }
  .modal-bg.open { display: flex; }
  .modal { background: #fff; border-radius: var(--radius); padding: 1.5rem; max-width: 500px; width: 90%; box-shadow: 0 8px 40px rgba(0,0,0,0.18); }
  .modal h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem; color: var(--green-dark); }
  .modal-footer { display: flex; gap: 0.5rem; justify-content: flex-end; margin-top: 1.25rem; }

  /* Responsive */
  @media (max-width: 600px) {
    .main { padding: 1rem; }
    .header { padding: 0.85rem 1rem; }
    .stat-value { font-size: 1.5rem; }
  }

  /* Tabs content visibility */
  .tab-content { display: none; }
  .tab-content.active { display: block; }
  .gap-1 { gap: 1rem; }
  .mt-1 { margin-top: 1rem; }
  .mt-05 { margin-top: 0.5rem; }
  .mb-1 { margin-bottom: 1rem; }
</style>
</head>
<body>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">

<div class="app">
  <!-- Header -->
  <div class="header">
    <div class="header-title">
      <div class="header-logo">🌱</div>
      <div>
        <h1>Tissue Research Notebook</h1>
        <p>บันทึกงานวิจัยเพาะเลี้ยงเนื้อเยื่อ + คำนวณต้นทุนจริง</p>
      </div>
    </div>
    <div class="header-btns">
      <button class="btn btn-white" onclick="showTab('cultures')">+ New Record</button>
      <button class="btn btn-green" onclick="exportReport()">⬇ Export</button>
    </div>
  </div>

  <!-- Nav -->
  <nav class="nav">
    <button class="nav-btn active" onclick="showTab('dashboard')" data-tab="dashboard">📊 Dashboard</button>
    <button class="nav-btn" onclick="showTab('projects')" data-tab="projects">📘 Projects</button>
    <button class="nav-btn" onclick="showTab('experiments')" data-tab="experiments">📋 Experiments</button>
    <button class="nav-btn" onclick="showTab('cultures')" data-tab="cultures">🌿 Culture Records</button>
    <button class="nav-btn" onclick="showTab('formulas')" data-tab="formulas">🧪 Formulas</button>
    <button class="nav-btn" onclick="showTab('costs')" data-tab="costs">💰 Cost Analysis</button>
    <button class="nav-btn" onclick="showTab('reports')" data-tab="reports">📄 Reports</button>
  </nav>

  <div class="main">

    <!-- DASHBOARD -->
    <div class="tab-content active" id="tab-dashboard">
      <div class="card-grid card-grid-5 mb-1" id="stat-cards"></div>
      <div class="card-grid card-grid-2 mt-1">
        <div class="card">
          <h3>💡 Research Insight</h3>
          <p style="font-size:0.85rem;color:#444;line-height:1.7">
            สูตร F1 คำนวณต้นทุนจากราคาวัตถุดิบจริงในหน้า Cost Analysis<br>
            <b>ต้นทุนต่อขวด</b> = ต้นทุนรวมต่อ 1 L ÷ จำนวนขวดที่เทได้<br>
            ควรอัปเดตราคาวัตถุดิบจากราคาที่คุณซื้อจริง
          </p>
        </div>
        <div class="card">
          <h3>🔬 Experiments ที่กำลังดำเนิน</h3>
          <div id="exp-quick-list"></div>
        </div>
      </div>
      <div class="card mt-1">
        <h3>✅ App Self-Test</h3>
        <p style="font-size:0.82rem;color:var(--gray);margin-bottom:0.75rem">ตรวจสอบ logic สำคัญ เช่น การนับวัน และการคำนวณต้นทุน</p>
        <div class="card-grid card-grid-2 gap-1" id="test-results"></div>
      </div>
    </div>

    <!-- PROJECTS -->
    <div class="tab-content" id="tab-projects">
      <div class="card-grid card-grid-3" id="projects-list"></div>
    </div>

    <!-- EXPERIMENTS -->
    <div class="tab-content" id="tab-experiments">
      <div id="exp-list" style="display:flex;flex-direction:column;gap:1rem;"></div>
    </div>

    <!-- CULTURES -->
    <div class="tab-content" id="tab-cultures">
      <div class="card mb-1">
        <h3 style="margin-bottom:0.85rem">➕ เพิ่ม Culture ใหม่</h3>
        <div class="form-row">
          <div class="field"><label>ชนิดพืช</label><input id="nc-plant" placeholder="เช่น กล้วย" value="กล้วย"></div>
          <div class="field"><label>สูตรอาหาร</label><input id="nc-formula" placeholder="เช่น F1" value="F1"></div>
          <div class="field"><label>สถานะ</label>
            <select id="nc-status">
              <option>Active</option><option>Rooting</option><option>Contamination</option><option>Closed</option>
            </select>
          </div>
          <div class="field" style="flex:2"><label>หมายเหตุ</label><input id="nc-note" placeholder="บันทึกสั้นๆ"></div>
          <div class="field" style="flex:0;min-width:130px">
            <label>&nbsp;</label>
            <button class="btn btn-green" onclick="addCulture()" style="width:100%">+ เพิ่ม Culture</button>
          </div>
        </div>
      </div>

      <div class="search-wrap">
        <span class="search-icon">🔎</span>
        <input id="culture-search" placeholder="ค้นหา Culture ID, สูตร, สถานะ..." oninput="renderCulturesTable()">
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Culture ID</th><th>Plant</th><th>Formula</th><th>อายุ</th><th>Status</th><th>หมายเหตุ</th><th>จัดการ</th>
            </tr>
          </thead>
          <tbody id="cultures-tbody"></tbody>
        </table>
      </div>
    </div>

    <!-- FORMULAS -->
    <div class="tab-content" id="tab-formulas">
      <div class="card-grid card-grid-2" id="formulas-list"></div>
    </div>

    <!-- COST ANALYSIS -->
    <div class="tab-content" id="tab-costs">
      <div class="card mb-1">
        <div class="section-title">
          <h2>💰 ตารางราคาวัตถุดิบ</h2>
          <p>แก้ราคาตามที่คุณซื้อจริง ระบบจะคำนวณสูตรอัตโนมัติ</p>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>วัตถุดิบ</th><th>หน่วย</th><th>ราคา/หน่วย (บาท)</th><th>หมายเหตุ</th></tr></thead>
            <tbody id="price-tbody"></tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;flex-wrap:wrap;gap:0.5rem;">
          <div class="section-title" style="margin:0">
            <h2>📊 Formula Cost Breakdown</h2>
            <p>รายละเอียดต้นทุนในแต่ละสูตร</p>
          </div>
          <select id="formula-select" onchange="renderCostBreakdown()" style="width:auto;min-width:200px"></select>
        </div>
        <div class="card-grid card-grid-3 mb-1" id="cost-stat-cards"></div>
        <div class="table-wrap mt-1">
          <table>
            <thead><tr><th>วัตถุดิบ</th><th>ปริมาณ</th><th>ราคา/หน่วย</th><th>คำนวณ</th><th>ต้นทุน (บาท)</th></tr></thead>
            <tbody id="cost-tbody"></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- REPORTS -->
    <div class="tab-content" id="tab-reports">
      <div class="card-grid card-grid-2">
        <div class="card">
          <h3>📄 Auto Summary Report</h3>
          <div id="report-summary" style="margin-top:0.75rem"></div>
          <button class="btn btn-green mt-1" onclick="window.print()">🖨 พิมพ์รายงาน</button>
        </div>
        <div class="card">
          <h3>📋 Report Template</h3>
          <ol style="font-size:0.85rem;color:#444;line-height:2;padding-left:1.2rem">
            <li>ชื่อการทดลอง</li>
            <li>วัตถุประสงค์</li>
            <li>สมมติฐาน</li>
            <li>วัสดุและวิธีการ</li>
            <li>ตารางผลการทดลอง</li>
            <li>ตารางต้นทุนสูตรอาหาร</li>
            <li>สรุปผลและแผนทดลองต่อ</li>
          </ol>
        </div>
      </div>
    </div>

  </div><!-- /main -->
</div><!-- /app -->

<script>
// ==================== DATA ====================
const TODAY = "2026-04-27";

const projects = [
  { id:"P-001", name:"Low-cost Tissue Culture Medium", type:"อาหารเพาะเลี้ยงต้นทุนต่ำ", status:"Active", goal:"ลดต้นทุนอาหารเพาะเลี้ยงโดยใช้ปุ๋ย 20-20-20+TE และสารที่หาได้ง่าย" },
  { id:"P-002", name:"Low-cost Filter Lid", type:"ฝาเพาะเลี้ยงแบบมี filter", status:"Active", goal:"เพิ่มการแลกเปลี่ยนก๊าซ ลดอาการฉ่ำน้ำ และลดการปนเปื้อน" },
  { id:"P-003", name:"Indicator Media", type:"อาหารเปลี่ยนสีเตือนความเสี่ยง", status:"Planning", goal:"ใช้สีจากธรรมชาติหรือ indicator เพื่อแจ้งเตือนความผิดปกติของอาหาร" },
];

const experiments = [
  { id:"EXP-001", project:"Low-cost Tissue Culture Medium", title:"เปรียบเทียบสูตร F1 กับสูตร F2", startDate:"2026-04-20", plant:"กล้วย", formula:"F1 / F2", hypothesis:"สูตร F1 ต้นทุนต่ำสามารถเลี้ยงกล้วยได้ใกล้เคียงสูตรที่เติมฮอร์โมน", status:"Running" },
  { id:"EXP-002", project:"Low-cost Filter Lid", title:"ทดสอบฝา filter เทียบกับฝาปิดปกติ", startDate:"2026-04-22", plant:"กล้วย", formula:"F1", hypothesis:"ฝา filter ช่วยลดอาการฉ่ำน้ำและเพิ่มความแข็งแรงของต้น", status:"Running" },
];

let cultures = [
  { id:"BAN-F1-001", experiment:"EXP-001", plant:"กล้วย", formula:"F1", startDate:"2026-04-20", status:"Active", note:"ยอดเขียวดี ยังไม่พบเชื้อ" },
  { id:"BAN-F1-002", experiment:"EXP-001", plant:"กล้วย", formula:"F1", startDate:"2026-04-20", status:"Contamination", note:"พบฝ้าขาวบริเวณผิวอาหาร" },
  { id:"BAN-F2-001", experiment:"EXP-001", plant:"กล้วย", formula:"F2", startDate:"2026-04-20", status:"Rooting", note:"เริ่มมีรากขาว 2 จุด" },
  { id:"LID-F1-001", experiment:"EXP-002", plant:"กล้วย", formula:"F1 + Filter Lid", startDate:"2026-04-22", status:"Active", note:"ใบไม่ฉ่ำน้ำ ภาชนะไม่เกิดหยดน้ำมาก" },
];

let prices = [
  { name:"20-20-20+TE", unit:"g", pricePerUnit:0.35, note:"ราคาตัวอย่าง แก้ตามราคาซื้อจริง" },
  { name:"15-0-0+27CaO", unit:"ml", pricePerUnit:0.12, note:"stock solution / ปุ๋ยแคลเซียม" },
  { name:"MgSO4", unit:"ml", pricePerUnit:0.08, note:"stock solution" },
  { name:"Sugar", unit:"g", pricePerUnit:0.03, note:"น้ำตาลทราย" },
  { name:"Agar", unit:"g", pricePerUnit:2.5, note:"วุ้น/agar ราคาเปลี่ยนได้" },
  { name:"BA", unit:"ml", pricePerUnit:1.5, note:"ฮอร์โมน ตัวอย่างราคา" },
  { name:"NAA", unit:"ml", pricePerUnit:1.2, note:"ฮอร์โมน ตัวอย่างราคา" },
];

const formulas = [
  { id:"F1", name:"F1 Banana Growth Medium", plant:"กล้วย", finalVolumeMl:1000, servings:40,
    ingredients:[
      { name:"20-20-20+TE", amount:2, unit:"g" }, { name:"15-0-0+27CaO", amount:10, unit:"ml" },
      { name:"MgSO4", amount:10, unit:"ml" }, { name:"Sugar", amount:30, unit:"g" }, { name:"Agar", amount:7, unit:"g" }
    ]
  },
  { id:"F2", name:"F2 + BA/NAA Test", plant:"กล้วย / ไม้ด่าง", finalVolumeMl:1000, servings:40,
    ingredients:[
      { name:"20-20-20+TE", amount:2, unit:"g" }, { name:"15-0-0+27CaO", amount:10, unit:"ml" },
      { name:"MgSO4", amount:10, unit:"ml" }, { name:"Sugar", amount:30, unit:"g" }, { name:"Agar", amount:7, unit:"g" },
      { name:"BA", amount:1, unit:"ml" }, { name:"NAA", amount:1, unit:"ml" }
    ]
  },
];

// ==================== HELPERS ====================
function daysFrom(dateStr) {
  const s = new Date(dateStr), n = new Date(TODAY);
  if (isNaN(s)) return 0;
  return Math.max(0, Math.floor((n - s) / 86400000));
}

function fmt(v, d=2) {
  return Number(v||0).toLocaleString('th-TH', {minimumFractionDigits:d, maximumFractionDigits:d});
}

function getPrice(name) {
  return prices.find(p => p.name === name);
}

function calcFormulaCost(formula) {
  const rows = formula.ingredients.map(ing => {
    const p = getPrice(ing.name);
    const pu = p ? p.pricePerUnit : 0;
    return { ...ing, pricePerUnit: pu, cost: ing.amount * pu, matched: !!p };
  });
  const total = rows.reduce((s, r) => s + r.cost, 0);
  return { rows, total, perMl: formula.finalVolumeMl ? total/formula.finalVolumeMl : 0, perBottle: formula.servings ? total/formula.servings : 0 };
}

function calcStats() {
  const total = cultures.length;
  const contam = cultures.filter(c => c.status === "Contamination").length;
  const active = cultures.filter(c => c.status === "Active" || c.status === "Rooting").length;
  return { total, contam, active, survival: total ? Math.round(active/total*100) : 0, contamRate: total ? Math.round(contam/total*100) : 0 };
}

function makeCultureId(plant, formula, count) {
  const pc = String(plant||'').slice(0,3).toUpperCase().replace(/\s+/g,'') || 'NEW';
  const fc = String(formula||'F1').replace(/\s+/g,'-');
  return `${pc}-${fc}-${String(count+1).padStart(3,'0')}`;
}

function statusBadge(status) {
  const map = {
    Active:"badge-green", Running:"badge-blue", Planning:"badge-amber",
    Contamination:"badge-red", Rooting:"badge-purple", Closed:"badge-gray"
  };
  return `<span class="badge ${map[status]||'badge-gray'}">${status}</span>`;
}

// ==================== SELF-TEST ====================
function runTests() {
  const assert = (name, cond) => ({ name, pass: Boolean(cond) });
  const f1Cost = calcFormulaCost(formulas[0]);
  const stats = calcStats();
  return [
    assert("daysFrom คำนวณอายุถูก", daysFrom("2026-04-20") === 7),
    assert("daysFrom ไม่ติดลบ", daysFrom("2026-05-01") === 0),
    assert("daysFrom invalid date → 0", daysFrom("not-a-date") === 0),
    assert("makeCultureId pad 3 หลัก", makeCultureId("กล้วย","F1",4).endsWith("005")),
    assert("stats นับ total ถูก", stats.total === 4),
    assert("stats นับ contamination ถูก", stats.contam === 1),
    assert("stats survival 75%", stats.survival === 75),
    assert("ต้นทุน F1 ≈ 21.40 บาท", Math.abs(f1Cost.total - 21.4) < 0.001),
    assert("ต้นทุนต่อขวด F1 ≈ 0.535 บาท", Math.abs(f1Cost.perBottle - 0.535) < 0.001),
  ];
}

// ==================== RENDER FUNCTIONS ====================
function renderDashboard() {
  const stats = calcStats();
  const f1 = calcFormulaCost(formulas[0]);
  const statData = [
    { icon:"🌿", label:"Culture ทั้งหมด", value:stats.total, sub:"บันทึกทั้งหมดในระบบ" },
    { icon:"✅", label:"กำลังรอด/โต", value:stats.active, sub:"Active + Rooting" },
    { icon:"⚠️", label:"ปนเปื้อน", value:stats.contam, sub:`${stats.contamRate}% contamination` },
    { icon:"📊", label:"Survival Rate", value:`${stats.survival}%`, sub:"คำนวณจากข้อมูลล่าสุด" },
    { icon:"💰", label:"ต้นทุน F1", value:`${fmt(f1.total)}฿`, sub:`${fmt(f1.perBottle)} บาท/ขวด` },
  ];
  document.getElementById('stat-cards').innerHTML = statData.map(s =>
    `<div class="stat-card"><span class="stat-icon">${s.icon}</span><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div><div class="stat-sub">${s.sub}</div></div>`
  ).join('');

  document.getElementById('exp-quick-list').innerHTML = experiments.map(e =>
    `<div style="display:flex;justify-content:space-between;align-items:center;padding:0.65rem 0;border-bottom:1px solid var(--border)">
      <div>
        <div style="font-weight:700;font-size:0.88rem">${e.title}</div>
        <div style="font-size:0.75rem;color:var(--gray)">${e.id} • ${e.plant} • ${daysFrom(e.startDate)} วัน</div>
      </div>
      ${statusBadge(e.status)}
    </div>`
  ).join('');

  const tests = runTests();
  const allPass = tests.every(t => t.pass);
  document.getElementById('test-results').innerHTML =
    `<div style="grid-column:1/-1;margin-bottom:0.5rem;font-size:0.85rem;font-weight:600">
      Status: <span style="color:${allPass?'var(--green-mid)':'var(--red)'}">${allPass?'✅ All Passed':'❌ Some Failed'}</span>
    </div>` +
    tests.map(t =>
      `<div class="test-item ${t.pass?'':'test-fail'}">${t.pass?'✅':'❌'} ${t.name}</div>`
    ).join('');
}

function renderProjects() {
  document.getElementById('projects-list').innerHTML = projects.map(p =>
    `<div class="card project-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
        <span class="project-id">${p.id}</span>${statusBadge(p.status)}
      </div>
      <div class="project-name">${p.name}</div>
      <div class="project-type">${p.type}</div>
      <div class="project-goal">${p.goal}</div>
    </div>`
  ).join('');
}

function renderExperiments() {
  document.getElementById('exp-list').innerHTML = experiments.map(e =>
    `<div class="card">
      <div class="exp-card">
        <div>
          <div class="exp-id">${e.id} • เริ่ม ${e.startDate} • ${daysFrom(e.startDate)} วัน</div>
          <div class="exp-title">${e.title}</div>
          <div style="font-size:0.8rem;color:var(--gray)">Project: ${e.project}</div>
          <div class="exp-hypo">Hypothesis: ${e.hypothesis}</div>
        </div>
        ${statusBadge(e.status)}
      </div>
    </div>`
  ).join('');
}

function renderCulturesTable() {
  const q = (document.getElementById('culture-search')?.value || '').toLowerCase();
  const filtered = cultures.filter(c =>
    [c.id, c.plant, c.formula, c.status, c.note].join(' ').toLowerCase().includes(q)
  );
  document.getElementById('cultures-tbody').innerHTML = filtered.map((c, i) =>
    `<tr>
      <td><b>${c.id}</b></td>
      <td>${c.plant}</td>
      <td>${c.formula}</td>
      <td>${daysFrom(c.startDate)} วัน</td>
      <td>${statusBadge(c.status)}</td>
      <td style="max-width:200px;font-size:0.82rem">${c.note}</td>
      <td>
        <select class="btn btn-sm btn-outline" onchange="changeStatus(${cultures.indexOf(c)}, this.value)" style="width:auto">
          ${['Active','Rooting','Contamination','Closed'].map(s=>`<option ${c.status===s?'selected':''}>${s}</option>`).join('')}
        </select>
      </td>
    </tr>`
  ).join('');
}

function changeStatus(idx, val) {
  cultures[idx].status = val;
  renderCulturesTable();
  renderDashboard();
  renderReports();
}

function addCulture() {
  const plant = document.getElementById('nc-plant').value || 'ไม่ระบุ';
  const formula = document.getElementById('nc-formula').value || 'F1';
  const status = document.getElementById('nc-status').value;
  const note = document.getElementById('nc-note').value;
  cultures.unshift({
    id: makeCultureId(plant, formula, cultures.length),
    experiment: 'EXP-NEW', plant, formula,
    startDate: TODAY, status, note
  });
  document.getElementById('nc-note').value = '';
  renderCulturesTable();
  renderDashboard();
  renderReports();
}

function renderFormulas() {
  document.getElementById('formulas-list').innerHTML = formulas.map(f => {
    const cost = calcFormulaCost(f);
    return `<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
        <div>
          <div style="font-size:0.75rem;color:var(--gray)">${f.id} • ${f.finalVolumeMl} ml • ${f.servings} ขวด</div>
          <div style="font-size:1.05rem;font-weight:700;color:var(--green-dark)">${f.name}</div>
          <div style="font-size:0.8rem;color:var(--green-mid)">🌱 ${f.plant}</div>
        </div>
        <div style="font-size:1.8rem">🧪</div>
      </div>
      <div>
        ${cost.rows.map(r => `<div class="formula-ingredient"><span>${r.name} ${r.amount} ${r.unit}</span><span>${fmt(r.cost)} บาท</span></div>`).join('')}
      </div>
      <div class="formula-summary">
        <b>ต้นทุนรวม:</b> ${fmt(cost.total)} บาท/L &nbsp;|&nbsp; <b>ต่อขวด:</b> ${fmt(cost.perBottle)} บาท
      </div>
    </div>`;
  }).join('');
}

function renderPriceTable() {
  document.getElementById('price-tbody').innerHTML = prices.map((p, i) =>
    `<tr>
      <td><b>${p.name}</b></td>
      <td>${p.unit}</td>
      <td>
        <input type="number" step="0.01" min="0" value="${p.pricePerUnit}" style="width:100px;display:inline"
          onchange="updatePrice(${i}, this.value)"> บาท/${p.unit}
      </td>
      <td style="font-size:0.8rem;color:var(--gray)">${p.note}</td>
    </tr>`
  ).join('');
}

function updatePrice(i, val) {
  prices[i].pricePerUnit = parseFloat(val) || 0;
  renderCostBreakdown();
  renderFormulas();
  renderDashboard();
  renderReports();
}

function renderCostBreakdown() {
  const sel = document.getElementById('formula-select');
  if (!sel) return;
  const fid = sel.value || 'F1';
  const formula = formulas.find(f => f.id === fid) || formulas[0];
  const cost = calcFormulaCost(formula);

  document.getElementById('cost-stat-cards').innerHTML = [
    { icon:"💰", label:"ต้นทุนรวม", value:`${fmt(cost.total)}฿`, sub:`ต่อ ${formula.finalVolumeMl} ml` },
    { icon:"🧮", label:"ต้นทุนต่อ ml", value:`${fmt(cost.perMl)}฿`, sub:"ใช้เปรียบเทียบสูตร" },
    { icon:"🧪", label:"ต้นทุนต่อขวด", value:`${fmt(cost.perBottle)}฿`, sub:`${formula.servings} ขวด/L` },
  ].map(s => `<div class="stat-card"><span class="stat-icon">${s.icon}</span><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div><div class="stat-sub">${s.sub}</div></div>`).join('');

  document.getElementById('cost-tbody').innerHTML = cost.rows.map(r =>
    `<tr>
      <td><b>${r.name}</b></td><td>${r.amount} ${r.unit}</td>
      <td>${fmt(r.pricePerUnit)} บาท/${r.unit}</td>
      <td style="color:var(--gray);font-size:0.82rem">${r.amount} × ${fmt(r.pricePerUnit)}</td>
      <td class="cost-total">${fmt(r.cost)} บาท</td>
    </tr>`
  ).join('') +
  `<tr class="cost-highlight"><td colspan="4" style="font-weight:700;color:var(--green-dark)">ต้นทุนรวม</td><td class="cost-total">${fmt(cost.total)} บาท</td></tr>`;
}

function renderCosts() {
  const sel = document.getElementById('formula-select');
  if (sel && sel.options.length === 0) {
    formulas.forEach(f => {
      const opt = document.createElement('option');
      opt.value = f.id; opt.text = `${f.id} - ${f.name}`;
      sel.appendChild(opt);
    });
  }
  renderPriceTable();
  renderCostBreakdown();
}

function renderReports() {
  const stats = calcStats();
  const f1 = calcFormulaCost(formulas[0]);
  document.getElementById('report-summary').innerHTML = [
    { label:"จำนวน Culture ทั้งหมด", value:`${stats.total} ขวด` },
    { label:"Survival Rate", value:`${stats.survival}%` },
    { label:"Contamination Rate", value:`${stats.contamRate}%` },
    { label:"ต้นทุน F1 ต่อ 1 L", value:`${fmt(f1.total)} บาท` },
    { label:"ต้นทุน F1 ต่อขวด", value:`${fmt(f1.perBottle)} บาท/ขวด` },
    { label:"คำแนะนำ", value:"อัปเดตราคาวัตถุดิบจริงทุกครั้งที่ซื้อ" },
  ].map(item =>
    `<div class="summary-item"><span style="color:var(--gray)">${item.label}</span><span style="font-weight:600">${item.value}</span></div>`
  ).join('');
}

function exportReport() {
  const stats = calcStats();
  const f1 = calcFormulaCost(formulas[0]);
  const lines = [
    "=== Tissue Research Notebook - Report ===",
    `Date: ${TODAY}`,
    ``,
    `--- Culture Summary ---`,
    `Total: ${stats.total}`,
    `Survival: ${stats.survival}%`,
    `Contamination: ${stats.contamRate}%`,
    ``,
    `--- Cost F1 ---`,
    `Total/L: ${fmt(f1.total)} THB`,
    `Per bottle: ${fmt(f1.perBottle)} THB`,
    ``,
    `--- Culture Records ---`,
    ...cultures.map(c => `${c.id} | ${c.plant} | ${c.formula} | ${c.status} | ${c.note}`),
  ];
  const blob = new Blob([lines.join('\n')], {type:'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `tissue-report-${TODAY}.txt`;
  a.click();
}

// ==================== TAB NAVIGATION ====================
function showTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tabName)?.classList.add('active');
  document.querySelector(`.nav-btn[data-tab="${tabName}"]`)?.classList.add('active');

  if (tabName === 'dashboard') renderDashboard();
  else if (tabName === 'projects') renderProjects();
  else if (tabName === 'experiments') renderExperiments();
  else if (tabName === 'cultures') renderCulturesTable();
  else if (tabName === 'formulas') renderFormulas();
  else if (tabName === 'costs') renderCosts();
  else if (tabName === 'reports') renderReports();
}

// ==================== INIT ====================
renderDashboard();
</script>
</body>
</html>
