import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// Simple UI components: ไม่พึ่ง shadcn/lucide เพื่อให้ย้ายไปรันใน GitHub ง่าย
function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-2xl shadow-sm ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, onClick, className = "", variant = "default", type = "button" }) {
  const base = "px-4 py-2 rounded-xl text-sm font-medium transition";
  const style = variant === "outline"
    ? "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
    : "bg-slate-900 text-white hover:bg-slate-800";
  return (
    <button type={type} onClick={onClick} className={`${base} ${style} ${className}`}>
      {children}
    </button>
  );
}

const ICONS = {
  flask: "🧪",
  leaf: "🌿",
  chart: "📊",
  clipboard: "📋",
  book: "📘",
  file: "📄",
  plus: "+",
  search: "🔎",
  camera: "📷",
  download: "⬇️",
  calculator: "🧮",
  warning: "⚠️",
  check: "✅",
  sprout: "🌱",
  money: "💰",
};

function IconBox({ icon, className = "" }) {
  return (
    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-lg ${className}`}>
      {icon}
    </span>
  );
}

const TODAY_FOR_DEMO = "2026-04-27T00:00:00";

const initialProjects = [
  {
    id: "P-001",
    name: "Low-cost Tissue Culture Medium",
    type: "อาหารเพาะเลี้ยงต้นทุนต่ำ",
    status: "Active",
    goal: "ลดต้นทุนอาหารเพาะเลี้ยงโดยใช้ปุ๋ย 20-20-20+TE และสารที่หาได้ง่าย",
  },
  {
    id: "P-002",
    name: "Low-cost Filter Lid",
    type: "ฝาเพาะเลี้ยงแบบมี filter",
    status: "Active",
    goal: "เพิ่มการแลกเปลี่ยนก๊าซ ลดอาการฉ่ำน้ำ และลดการปนเปื้อน",
  },
  {
    id: "P-003",
    name: "Indicator Media",
    type: "อาหารเปลี่ยนสีเตือนความเสี่ยง",
    status: "Planning",
    goal: "ใช้สีจากธรรมชาติหรือ indicator เพื่อแจ้งเตือนความผิดปกติของอาหาร",
  },
];

// ราคาตัวอย่าง: ผู้ใช้แก้ได้ในหน้า Cost Analysis
// หน่วยคิดราคาเป็น บาท/หน่วย ที่ระบุ เช่น บาท/g หรือ บาท/ml
const defaultIngredientPrices = [
  { name: "20-20-20+TE", unit: "g", pricePerUnit: 0.35, note: "ราคาตัวอย่าง แก้ตามราคาซื้อจริง" },
  { name: "15-0-0+27CaO", unit: "ml", pricePerUnit: 0.12, note: "stock solution / ปุ๋ยแคลเซียม" },
  { name: "MgSO4", unit: "ml", pricePerUnit: 0.08, note: "stock solution" },
  { name: "Sugar", unit: "g", pricePerUnit: 0.03, note: "น้ำตาลทราย" },
  { name: "Agar", unit: "g", pricePerUnit: 2.5, note: "วุ้น/agar ราคาเปลี่ยนได้" },
  { name: "BA", unit: "ml", pricePerUnit: 1.5, note: "ฮอร์โมน ตัวอย่างราคา" },
  { name: "NAA", unit: "ml", pricePerUnit: 1.2, note: "ฮอร์โมน ตัวอย่างราคา" },
];

const initialFormulas = [
  {
    id: "F1",
    name: "F1 Banana Growth Medium",
    plant: "กล้วย",
    finalVolumeMl: 1000,
    servings: 40,
    ingredients: [
      { name: "20-20-20+TE", amount: 2, unit: "g" },
      { name: "15-0-0+27CaO", amount: 10, unit: "ml" },
      { name: "MgSO4", amount: 10, unit: "ml" },
      { name: "Sugar", amount: 30, unit: "g" },
      { name: "Agar", amount: 7, unit: "g" },
    ],
  },
  {
    id: "F2",
    name: "F2 + BA/NAA Test",
    plant: "กล้วย / ไม้ด่าง",
    finalVolumeMl: 1000,
    servings: 40,
    ingredients: [
      { name: "20-20-20+TE", amount: 2, unit: "g" },
      { name: "15-0-0+27CaO", amount: 10, unit: "ml" },
      { name: "MgSO4", amount: 10, unit: "ml" },
      { name: "Sugar", amount: 30, unit: "g" },
      { name: "Agar", amount: 7, unit: "g" },
      { name: "BA", amount: 1, unit: "ml" },
      { name: "NAA", amount: 1, unit: "ml" },
    ],
  },
];

const initialExperiments = [
  {
    id: "EXP-001",
    project: "Low-cost Tissue Culture Medium",
    title: "เปรียบเทียบสูตร F1 กับสูตร F2",
    startDate: "2026-04-20",
    plant: "กล้วย",
    formula: "F1 / F2",
    hypothesis: "สูตร F1 ต้นทุนต่ำสามารถเลี้ยงกล้วยได้ใกล้เคียงสูตรที่เติมฮอร์โมน",
    status: "Running",
  },
  {
    id: "EXP-002",
    project: "Low-cost Filter Lid",
    title: "ทดสอบฝา filter เทียบกับฝาปิดปกติ",
    startDate: "2026-04-22",
    plant: "กล้วย",
    formula: "F1",
    hypothesis: "ฝา filter ช่วยลดอาการฉ่ำน้ำและเพิ่มความแข็งแรงของต้น",
    status: "Running",
  },
];

const initialCultures = [
  { id: "BAN-F1-001", experiment: "EXP-001", plant: "กล้วย", formula: "F1", startDate: "2026-04-20", status: "Active", note: "ยอดเขียวดี ยังไม่พบเชื้อ" },
  { id: "BAN-F1-002", experiment: "EXP-001", plant: "กล้วย", formula: "F1", startDate: "2026-04-20", status: "Contamination", note: "พบฝ้าขาวบริเวณผิวอาหาร" },
  { id: "BAN-F2-001", experiment: "EXP-001", plant: "กล้วย", formula: "F2", startDate: "2026-04-20", status: "Rooting", note: "เริ่มมีรากขาว 2 จุด" },
  { id: "LID-F1-001", experiment: "EXP-002", plant: "กล้วย", formula: "F1 + Filter Lid", startDate: "2026-04-22", status: "Active", note: "ใบไม่ฉ่ำน้ำ ภาชนะไม่เกิดหยดน้ำมาก" },
];

function safeDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function daysFrom(dateString, today = TODAY_FOR_DEMO) {
  const start = safeDate(dateString);
  const now = safeDate(today);
  if (!start || !now) return 0;
  return Math.max(0, Math.floor((now - start) / (1000 * 60 * 60 * 24)));
}

function makeCultureId(plant, formula, count) {
  const plantCode = String(plant || "ไม่ระบุ").trim().slice(0, 3).toUpperCase().replace(/\s+/g, "") || "NEW";
  const formulaCode = String(formula || "F1").trim().replace(/\s+/g, "-");
  const runningNumber = String(count + 1).padStart(3, "0");
  return `${plantCode}-${formulaCode}-${runningNumber}`;
}

function calculateStats(cultures) {
  const total = cultures.length;
  const contaminated = cultures.filter((c) => c.status === "Contamination").length;
  const active = cultures.filter((c) => c.status === "Active" || c.status === "Rooting").length;
  const survival = total ? Math.round((active / total) * 100) : 0;
  const contamRate = total ? Math.round((contaminated / total) * 100) : 0;
  return { total, contaminated, active, survival, contamRate };
}

function getPriceRecord(prices, ingredientName) {
  return prices.find((p) => p.name === ingredientName) || null;
}

function calculateIngredientCost(ingredient, prices) {
  const price = getPriceRecord(prices, ingredient.name);
  if (!price) return { total: 0, pricePerUnit: 0, matched: false };
  return {
    total: Number(ingredient.amount || 0) * Number(price.pricePerUnit || 0),
    pricePerUnit: Number(price.pricePerUnit || 0),
    matched: true,
  };
}

function calculateFormulaCost(formula, prices) {
  const rows = formula.ingredients.map((ingredient) => {
    const result = calculateIngredientCost(ingredient, prices);
    return {
      ...ingredient,
      pricePerUnit: result.pricePerUnit,
      cost: result.total,
      matched: result.matched,
    };
  });
  const totalCost = rows.reduce((sum, item) => sum + item.cost, 0);
  const costPerMl = formula.finalVolumeMl ? totalCost / formula.finalVolumeMl : 0;
  const costPerBottle = formula.servings ? totalCost / formula.servings : 0;
  return { rows, totalCost, costPerMl, costPerBottle };
}

function formatMoney(value) {
  return Number(value || 0).toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function findFormulaCost(formulas, prices, formulaId) {
  const formula = formulas.find((f) => f.id === formulaId);
  if (!formula) return null;
  return calculateFormulaCost(formula, prices);
}

function runSelfTests() {
  const results = [];
  const assert = (name, condition) => results.push({ name, pass: Boolean(condition) });

  assert("daysFrom calculates demo age", daysFrom("2026-04-20") === 7);
  assert("daysFrom never returns negative", daysFrom("2026-05-01") === 0);
  assert("daysFrom handles invalid date", daysFrom("not-a-date") === 0);
  assert("makeCultureId pads running number", makeCultureId("กล้วย", "F1", 4).endsWith("005"));

  const stats = calculateStats(initialCultures);
  assert("stats total count", stats.total === 4);
  assert("stats contamination count", stats.contaminated === 1);
  assert("stats survival percentage", stats.survival === 75);

  const f1Cost = calculateFormulaCost(initialFormulas[0], defaultIngredientPrices);
  assert("formula cost uses ingredient price table", Math.abs(f1Cost.totalCost - 21.4) < 0.001);
  assert("formula cost per bottle works", Math.abs(f1Cost.costPerBottle - 0.535) < 0.001);

  return results;
}

const SELF_TEST_RESULTS = runSelfTests();

function StatusBadge({ status }) {
  const styles = {
    Active: "bg-emerald-100 text-emerald-700",
    Running: "bg-blue-100 text-blue-700",
    Planning: "bg-amber-100 text-amber-700",
    Contamination: "bg-red-100 text-red-700",
    Rooting: "bg-purple-100 text-purple-700",
    Closed: "bg-slate-100 text-slate-700",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status] || "bg-slate-100 text-slate-700"}`}>{status}</span>;
}

function StatCard({ icon, label, value, sub }) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">{label}</p>
            <h3 className="mt-1 text-3xl font-bold text-slate-900">{value}</h3>
            <p className="mt-1 text-xs text-slate-500">{sub}</p>
          </div>
          <IconBox icon={icon} />
        </div>
      </CardContent>
    </Card>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
    </div>
  );
}

export default function TissueResearchNotebookApp() {
  const [tab, setTab] = useState("dashboard");
  const [query, setQuery] = useState("");
  const [projects] = useState(initialProjects);
  const [formulas] = useState(initialFormulas);
  const [experiments] = useState(initialExperiments);
  const [cultures, setCultures] = useState(initialCultures);
  const [prices, setPrices] = useState(defaultIngredientPrices);
  const [selectedFormulaId, setSelectedFormulaId] = useState("F1");
  const [newCulture, setNewCulture] = useState({ plant: "กล้วย", formula: "F1", status: "Active", note: "" });

  const stats = useMemo(() => calculateStats(cultures), [cultures]);
  const testsPassed = SELF_TEST_RESULTS.every((test) => test.pass);
  const f1Cost = useMemo(() => findFormulaCost(formulas, prices, "F1"), [formulas, prices]);
  const selectedFormula = formulas.find((f) => f.id === selectedFormulaId) || formulas[0];
  const selectedFormulaCost = useMemo(() => calculateFormulaCost(selectedFormula, prices), [selectedFormula, prices]);

  const filteredCultures = cultures.filter((c) =>
    [c.id, c.plant, c.formula, c.status, c.note].join(" ").toLowerCase().includes(query.toLowerCase())
  );

  function updatePrice(index, key, value) {
    setPrices((prev) => prev.map((item, i) => i === index ? { ...item, [key]: key === "pricePerUnit" ? Number(value) : value } : item));
  }

  function addCulture() {
    const item = {
      id: makeCultureId(newCulture.plant, newCulture.formula, cultures.length),
      experiment: "EXP-NEW",
      plant: newCulture.plant || "ไม่ระบุ",
      formula: newCulture.formula || "F1",
      startDate: new Date().toISOString().slice(0, 10),
      status: newCulture.status || "Active",
      note: newCulture.note || "",
    };
    setCultures([item, ...cultures]);
    setNewCulture({ plant: "กล้วย", formula: "F1", status: "Active", note: "" });
  }

  const tabs = [
    ["dashboard", "Dashboard", ICONS.chart],
    ["projects", "Projects", ICONS.book],
    ["experiments", "Experiments", ICONS.clipboard],
    ["cultures", "Culture Records", ICONS.leaf],
    ["formulas", "Formulas", ICONS.flask],
    ["costs", "Cost Analysis", ICONS.money],
    ["reports", "Reports", ICONS.file],
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-900 md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <IconBox icon={ICONS.sprout} className="bg-emerald-100 text-2xl" />
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">Tissue Research Notebook</h1>
              <p className="text-sm text-slate-500">เว็บแอปบันทึกงานวิจัยเพาะเลี้ยงเนื้อเยื่อ + คำนวณต้นทุนจริง</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setTab("cultures")}>{ICONS.plus} New Record</Button>
            <Button variant="outline" onClick={() => setTab("reports")}>{ICONS.download} Export</Button>
          </div>
        </header>

        <nav className="mb-6 grid grid-cols-2 gap-2 md:grid-cols-7">
          {tabs.map(([key, label, icon]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center justify-center gap-2 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                tab === key ? "bg-slate-900 text-white shadow" : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </nav>

        {tab === "dashboard" && (
          <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-5">
              <StatCard icon={ICONS.leaf} label="Culture ทั้งหมด" value={stats.total} sub="บันทึกทั้งหมดในระบบ" />
              <StatCard icon={ICONS.check} label="กำลังรอด/โต" value={stats.active} sub="Active + Rooting" />
              <StatCard icon={ICONS.warning} label="ปนเปื้อน" value={stats.contaminated} sub={`${stats.contamRate}% contamination`} />
              <StatCard icon={ICONS.chart} label="Survival Rate" value={`${stats.survival}%`} sub="คำนวณจากข้อมูลล่าสุด" />
              <StatCard icon={ICONS.calculator} label="ต้นทุน F1" value={`${formatMoney(f1Cost?.totalCost)}฿`} sub={`${formatMoney(f1Cost?.costPerBottle)} บาท/ขวด`} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-5">
                  <SectionTitle title="Research Insight" />
                  <div className="space-y-3 text-sm text-slate-600">
                    <p>สูตร F1 คำนวณต้นทุนจากราคาวัตถุดิบจริงในหน้า Cost Analysis</p>
                    <p>ต้นทุนต่อขวด = ต้นทุนรวมต่อ 1 L ÷ จำนวนขวดที่เทได้</p>
                    <p>ควรอัปเดตราคาวัตถุดิบจากราคาที่คุณซื้อจริง เช่น Agar, น้ำตาล, ปุ๋ย และ stock solution</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <SectionTitle title="Next Experiments" />
                  <div className="space-y-3">
                    {experiments.map((e) => (
                      <div key={e.id} className="rounded-2xl border p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-semibold">{e.title}</p>
                            <p className="text-xs text-slate-500">{e.id} • {e.plant} • {daysFrom(e.startDate)} days</p>
                          </div>
                          <StatusBadge status={e.status} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-5">
                <SectionTitle title="App Self-Test" subtitle="ใช้ตรวจสอบ logic สำคัญ เช่น การนับวันและการคำนวณต้นทุน" />
                <div className="mb-3 text-sm font-semibold">
                  Status: <span className={testsPassed ? "text-emerald-700" : "text-red-700"}>{testsPassed ? "Passed" : "Failed"}</span>
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  {SELF_TEST_RESULTS.map((test) => (
                    <div key={test.name} className="rounded-xl bg-slate-100 px-3 py-2 text-sm">
                      {test.pass ? "✅" : "❌"} {test.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {tab === "projects" && (
          <section className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.id}>
                <CardContent className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs text-slate-500">{p.id}</p>
                    <StatusBadge status={p.status} />
                  </div>
                  <h2 className="text-lg font-bold">{p.name}</h2>
                  <p className="mt-1 text-sm text-emerald-700">{p.type}</p>
                  <p className="mt-4 text-sm text-slate-600">{p.goal}</p>
                </CardContent>
              </Card>
            ))}
          </section>
        )}

        {tab === "experiments" && (
          <section className="space-y-4">
            {experiments.map((e) => (
              <Card key={e.id}>
                <CardContent className="p-5">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs text-slate-500">{e.id} • เริ่ม {e.startDate} • {daysFrom(e.startDate)} days</p>
                      <h2 className="mt-1 text-xl font-bold">{e.title}</h2>
                      <p className="mt-1 text-sm text-slate-500">Project: {e.project}</p>
                      <p className="mt-3 text-sm text-slate-700"><b>Hypothesis:</b> {e.hypothesis}</p>
                    </div>
                    <StatusBadge status={e.status} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        )}

        {tab === "cultures" && (
          <section className="space-y-4">
            <Card>
              <CardContent className="grid gap-3 p-5 md:grid-cols-5">
                <input className="rounded-2xl border px-4 py-3 text-sm" placeholder="ชนิดพืช" value={newCulture.plant} onChange={(e) => setNewCulture({ ...newCulture, plant: e.target.value })} />
                <input className="rounded-2xl border px-4 py-3 text-sm" placeholder="สูตรอาหาร" value={newCulture.formula} onChange={(e) => setNewCulture({ ...newCulture, formula: e.target.value })} />
                <select className="rounded-2xl border px-4 py-3 text-sm" value={newCulture.status} onChange={(e) => setNewCulture({ ...newCulture, status: e.target.value })}>
                  <option>Active</option>
                  <option>Rooting</option>
                  <option>Contamination</option>
                  <option>Closed</option>
                </select>
                <input className="rounded-2xl border px-4 py-3 text-sm" placeholder="หมายเหตุ" value={newCulture.note || ""} onChange={(e) => setNewCulture({ ...newCulture, note: e.target.value })} />
                <Button onClick={addCulture}>{ICONS.plus} เพิ่ม Culture</Button>
              </CardContent>
            </Card>

            <div className="relative">
              <span className="absolute left-4 top-3 text-slate-400">{ICONS.search}</span>
              <input className="w-full rounded-2xl border bg-white py-3 pl-11 pr-4 text-sm shadow-sm" placeholder="ค้นหา Culture ID, สูตร, สถานะ..." value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>

            <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
              <table className="w-full min-w-[820px] text-left text-sm">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="p-4">Culture ID</th><th className="p-4">Plant</th><th className="p-4">Formula</th><th className="p-4">Age</th><th className="p-4">Status</th><th className="p-4">Note</th><th className="p-4">Photo</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCultures.map((c) => (
                    <tr key={c.id} className="border-t">
                      <td className="p-4 font-semibold">{c.id}</td><td className="p-4">{c.plant}</td><td className="p-4">{c.formula}</td><td className="p-4">{daysFrom(c.startDate)} วัน</td><td className="p-4"><StatusBadge status={c.status} /></td><td className="p-4 text-slate-600">{c.note}</td><td className="p-4"><Button variant="outline">{ICONS.camera}</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {tab === "formulas" && (
          <section className="grid gap-4 md:grid-cols-2">
            {formulas.map((f) => {
              const cost = calculateFormulaCost(f, prices);
              return (
                <Card key={f.id}>
                  <CardContent className="p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">{f.id} • {f.finalVolumeMl} ml • {f.servings} ขวด</p>
                        <h2 className="text-xl font-bold">{f.name}</h2>
                      </div>
                      <IconBox icon={ICONS.flask} className="bg-emerald-100" />
                    </div>
                    <p className="text-sm text-slate-500">Plant: {f.plant}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {cost.rows.map((i) => <li key={`${f.id}-${i.name}`}>• {i.name} {i.amount} {i.unit} × {formatMoney(i.pricePerUnit)} บาท/{i.unit} = {formatMoney(i.cost)} บาท</li>)}
                    </ul>
                    <div className="mt-4 grid gap-2 rounded-2xl bg-slate-100 p-3 text-sm font-semibold">
                      <p>ต้นทุนรวม: {formatMoney(cost.totalCost)} บาท/L</p>
                      <p>ต้นทุนต่อขวด: {formatMoney(cost.costPerBottle)} บาท/ขวด</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </section>
        )}

        {tab === "costs" && (
          <section className="space-y-4">
            <Card>
              <CardContent className="p-5">
                <SectionTitle title="Cost Analysis / คำนวณต้นทุนจริง" subtitle="แก้ราคาวัตถุดิบตามราคาที่คุณซื้อจริง แล้วระบบจะคำนวณสูตรอัตโนมัติ" />
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-100 text-slate-600">
                      <tr><th className="p-3">วัตถุดิบ</th><th className="p-3">หน่วย</th><th className="p-3">ราคา/หน่วย</th><th className="p-3">หมายเหตุ</th></tr>
                    </thead>
                    <tbody>
                      {prices.map((item, index) => (
                        <tr key={item.name} className="border-t">
                          <td className="p-3 font-medium">{item.name}</td>
                          <td className="p-3">{item.unit}</td>
                          <td className="p-3"><input className="w-28 rounded-xl border px-3 py-2" type="number" step="0.01" value={item.pricePerUnit} onChange={(e) => updatePrice(index, "pricePerUnit", e.target.value)} /> บาท/{item.unit}</td>
                          <td className="p-3 text-slate-500">{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <SectionTitle title="Formula Cost Breakdown" subtitle="รายละเอียดที่มาของต้นทุนในแต่ละสูตร" />
                  <select className="rounded-2xl border px-4 py-3 text-sm" value={selectedFormulaId} onChange={(e) => setSelectedFormulaId(e.target.value)}>
                    {formulas.map((f) => <option key={f.id} value={f.id}>{f.id} - {f.name}</option>)}
                  </select>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <StatCard icon={ICONS.money} label="ต้นทุนรวม" value={`${formatMoney(selectedFormulaCost.totalCost)}฿`} sub={`ต่อ ${selectedFormula.finalVolumeMl} ml`} />
                  <StatCard icon={ICONS.calculator} label="ต้นทุนต่อ ml" value={`${formatMoney(selectedFormulaCost.costPerMl)}฿`} sub="ใช้เปรียบเทียบสูตร" />
                  <StatCard icon={ICONS.flask} label="ต้นทุนต่อขวด" value={`${formatMoney(selectedFormulaCost.costPerBottle)}฿`} sub={`${selectedFormula.servings} ขวด/L`} />
                </div>

                <div className="mt-5 overflow-x-auto rounded-2xl border">
                  <table className="w-full min-w-[820px] text-left text-sm">
                    <thead className="bg-slate-100 text-slate-600">
                      <tr><th className="p-3">วัตถุดิบ</th><th className="p-3">ปริมาณ</th><th className="p-3">ราคา/หน่วย</th><th className="p-3">คำนวณ</th><th className="p-3">ต้นทุน</th></tr>
                    </thead>
                    <tbody>
                      {selectedFormulaCost.rows.map((row) => (
                        <tr key={row.name} className="border-t">
                          <td className="p-3 font-medium">{row.name}</td>
                          <td className="p-3">{row.amount} {row.unit}</td>
                          <td className="p-3">{formatMoney(row.pricePerUnit)} บาท/{row.unit}</td>
                          <td className="p-3 text-slate-500">{row.amount} × {formatMoney(row.pricePerUnit)}</td>
                          <td className="p-3 font-semibold">{formatMoney(row.cost)} บาท</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {tab === "reports" && (
          <section className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-5">
                <h2 className="text-xl font-bold">Auto Summary Report</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <p><b>จำนวน Culture:</b> {stats.total}</p>
                  <p><b>Survival Rate:</b> {stats.survival}%</p>
                  <p><b>Contamination Rate:</b> {stats.contamRate}%</p>
                  <p><b>ต้นทุน F1:</b> {formatMoney(f1Cost?.totalCost)} บาท/L หรือ {formatMoney(f1Cost?.costPerBottle)} บาท/ขวด</p>
                  <p><b>ข้อเสนอแนะ:</b> อัปเดตราคาวัตถุดิบจริงทุกครั้งที่ซื้อ เพื่อให้ต้นทุนแม่นยำ</p>
                </div>
                <Button className="mt-5">{ICONS.file} สร้างรายงาน PDF</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h2 className="text-xl font-bold">Report Template</h2>
                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>1. ชื่อการทดลอง</p><p>2. วัตถุประสงค์</p><p>3. สมมติฐาน</p><p>4. วัสดุและวิธีการ</p><p>5. ตารางผลการทดลอง</p><p>6. ตารางต้นทุนสูตรอาหาร</p><p>7. สรุปผลและแผนทดลองต่อ</p>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  );
}
