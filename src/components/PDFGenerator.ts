import type { TravelPackage } from "@/data/packages";
import { siteConfig } from "@/data/config";

function buildHTML(pkg: TravelPackage): string {
  const destinations = pkg.destinations.map(d => `<span class="tag">${d}</span>`).join("");
  const highlights = pkg.highlights.map(h => `<span class="hl">✦ ${h}</span>`).join("");

  const pricing = pkg.pricingTiers && pkg.pricingTiers.length > 0
    ? `<table class="ptable">
        <thead><tr><th>Travel Option</th><th>Price (Per Person)</th></tr></thead>
        <tbody>${pkg.pricingTiers.map(t => `<tr><td>${t.label}</td><td class="pc">₹${t.price.toLocaleString("en-IN")}</td></tr>`).join("")}</tbody>
      </table>`
    : `<div class="sp"><span class="sl">Per Person:</span> <span class="sv">₹${pkg.price.toLocaleString("en-IN")}</span> <span class="sn">${pkg.priceNote}</span></div>`;

  const itinerary = pkg.itinerary.map(day =>
    `<div class="dc">
      <div class="dh">
        <span class="dn">Day ${day.day}</span>
        <span class="dt">${day.title}</span>
        <span class="ds">${day.stay}</span>
      </div>
      <p class="dd">${day.description}</p>
    </div>`
  ).join("");

  const inclusions = pkg.inclusions.map(i => `<li>✓ ${i}</li>`).join("");
  const exclusions = pkg.exclusions.map(e => `<li>✗ ${e}</li>`).join("");

  return `
    <div id="pdf-content" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1a1a1a;font-size:10px;line-height:1.45;padding:12px;">
      <style>
        .hdr{display:flex;justify-content:space-between;align-items:center;padding-bottom:8px;border-bottom:2px solid #1B6B78;margin-bottom:16px}
        .hl-l{display:flex;align-items:center;gap:10px}
        .logo{width:32px;height:32px;background:#1B6B78;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px}
        .cn{font-size:14px;font-weight:700;color:#1B6B78}
        .tl{font-size:7px;text-transform:uppercase;letter-spacing:2px;color:#888}
        .hr{text-align:right;font-size:8px;color:#666;line-height:1.5}
        .pt{font-size:20px;font-weight:700;color:#1B6B78;margin:0 0 1px}
        .ps{font-size:10px;color:#666;margin:0 0 4px}
        .meta{font-size:9px;color:#444;margin-bottom:6px}
        .sep{margin:0 5px;color:#ccc}
        .tags{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px}
        .tag{background:#f0f9fa;color:#1B6B78;padding:2px 8px;border-radius:10px;font-size:8px;font-weight:600;border:1px solid #d0eef2}
        .stl{font-size:12px;font-weight:700;color:#1a1a1a;margin:0 0 5px;padding-bottom:3px;border-bottom:1px solid #e5e7eb}
        .hls{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px}
        .hl{font-size:8px;color:#1B6B78;background:#f0f9fa;padding:2px 8px;border-radius:4px}
        .ptable{width:100%;border-collapse:collapse;font-size:9px;margin-bottom:12px}
        .ptable th{background:#1B6B78;color:#fff;padding:4px 10px;text-align:left;font-weight:600}
        .ptable td{padding:4px 10px;border-bottom:1px solid #e5e7eb}
        .ptable tr:nth-child(even) td{background:#f9fafb}
        .pc{font-weight:700;color:#1B6B78}
        .sp{display:flex;align-items:baseline;gap:8px;margin-bottom:12px}
        .sl{color:#666;font-size:9px}
        .sv{font-size:16px;font-weight:700;color:#1B6B78}
        .sn{font-size:8px;color:#999}
        .dc{border:1px solid #e5e7eb;border-radius:5px;padding:6px 10px;margin-bottom:5px;page-break-inside:avoid}
        .dh{display:flex;align-items:center;gap:6px;margin-bottom:2px}
        .dn{background:#1B6B78;color:#fff;font-size:7px;font-weight:700;padding:2px 6px;border-radius:8px;text-transform:uppercase}
        .dt{font-size:10px;font-weight:700;color:#1a1a1a;flex:1}
        .ds{font-size:7px;color:#1B6B78;background:#f0f9fa;padding:1px 6px;border-radius:8px;border:1px solid #d0eef2}
        .dd{font-size:9px;color:#444;line-height:1.45;margin:0}
        .ieg{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
        .ib{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:5px;padding:6px 10px;font-size:8px;line-height:1.5}
        .eb{background:#fef2f2;border:1px solid #fecaca;border-radius:5px;padding:6px 10px;font-size:8px;line-height:1.5}
        .it{font-size:9px;font-weight:700;color:#166534;margin:0 0 3px}
        .et{font-size:9px;font-weight:700;color:#991b1b;margin:0 0 3px}
        .ib ul,.eb ul{list-style:none;padding:0;margin:0}
        .ib li,.eb li{margin-bottom:1px}
        .note{background:#fffbeb;border:1px solid #fde68a;border-radius:5px;padding:5px 10px;font-size:8px;color:#92400e;margin-bottom:10px}
        .ft{border-top:1px solid #e5e7eb;padding-top:5px;font-size:7px;color:#999;text-align:center;line-height:1.5;margin-top:6px}
      </style>

      <div class="hdr">
        <div class="hl-l">
          <div class="logo">M</div>
          <div><div class="cn">Manyata Travels</div><div class="tl">The Royal & Loyal Journey</div></div>
        </div>
        <div class="hr">+91 ${siteConfig.phone}<br>${siteConfig.email}<br>${siteConfig.address.city}, ${siteConfig.address.state}</div>
      </div>

      <h1 class="pt">${pkg.title}</h1>
      <p class="ps">${pkg.subtitle}</p>
      <div class="meta">${pkg.duration} <span class="sep">•</span> ${pkg.destinations.length} Destinations <span class="sep">•</span> 3-Star Hotels</div>
      <div class="tags">${destinations}</div>

      ${pricing}

      <h2 class="stl">Trip Highlights</h2>
      <div class="hls">${highlights}</div>

      <h2 class="stl">Day-by-Day Itinerary</h2>
      ${itinerary}

      <div style="margin-top:14px"></div>
      <div class="ieg">
        <div class="ib"><h3 class="it">✓ What's Included</h3><ul>${inclusions}</ul></div>
        <div class="eb"><h3 class="et">✗ What's Not Included</h3><ul>${exclusions}</ul></div>
      </div>

      <div class="note"><strong>Note:</strong> Pricing is subject to change during New Year and other peak seasons. Contact us for the latest rates.</div>

      <div class="ft"><strong>Manyata Travels</strong> — ${siteConfig.address.full}<br>Phone: +91 ${siteConfig.phone} | Email: ${siteConfig.email}</div>
    </div>
  `;
}

export async function generateItineraryPDF(pkg: TravelPackage): Promise<void> {
  const html2pdf = (await import("html2pdf.js")).default;

  const container = document.createElement("div");
  container.innerHTML = buildHTML(pkg);
  container.style.position = "absolute";
  container.style.left = "-9999px";
  document.body.appendChild(container);

  const element = container.querySelector("#pdf-content");

  const options = {
    margin: [8, 8, 8, 8],
    filename: `${pkg.slug}-itinerary.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (html2pdf() as any).set(options).from(element).save();

  document.body.removeChild(container);
}
