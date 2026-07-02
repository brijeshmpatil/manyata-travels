"use client";

import { useEffect } from "react";
import type { TravelPackage } from "@/data/packages";
import { siteConfig } from "@/data/config";

export default function PrintableItinerary({ pkg }: { pkg: TravelPackage }) {
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="print-doc">
      <style dangerouslySetInnerHTML={{ __html: printStyles }} />

      {/* Header */}
      <header className="doc-header">
        <div className="doc-header-left">
          <div className="doc-logo">M</div>
          <div>
            <div className="doc-company">Manyata Travels</div>
            <div className="doc-tagline">The Royal & Loyal Journey</div>
          </div>
        </div>
        <div className="doc-header-right">
          <div>+91 {siteConfig.phone}</div>
          <div>{siteConfig.email}</div>
          <div>{siteConfig.address.city}, {siteConfig.address.state}</div>
        </div>
      </header>

      {/* Title */}
      <section className="doc-title-section">
        <h1 className="doc-pkg-title">{pkg.title}</h1>
        <p className="doc-pkg-subtitle">{pkg.subtitle}</p>
        <div className="doc-meta">
          <span>{pkg.duration}</span>
          <span className="doc-sep">•</span>
          <span>{pkg.destinations.length} Destinations</span>
          <span className="doc-sep">•</span>
          <span>3-Star Hotels</span>
        </div>
        <div className="doc-dest-tags">
          {pkg.destinations.map((d) => (
            <span key={d} className="doc-dest-tag">{d}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="doc-pricing">
        {pkg.pricingTiers && pkg.pricingTiers.length > 0 ? (
          <table className="doc-price-table">
            <thead>
              <tr>
                <th>Travel Option</th>
                <th>Price (Per Person)</th>
              </tr>
            </thead>
            <tbody>
              {pkg.pricingTiers.map((tier) => (
                <tr key={tier.label}>
                  <td>{tier.label}</td>
                  <td className="doc-price-cell">₹{tier.price.toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="doc-single-price">
            <span className="doc-price-label">Per Person:</span>
            <span className="doc-price-val">₹{pkg.price.toLocaleString("en-IN")}</span>
            <span className="doc-price-note">{pkg.priceNote}</span>
          </div>
        )}
      </section>

      {/* Highlights */}
      <section className="doc-highlights">
        <h2 className="doc-section-title">Trip Highlights</h2>
        <div className="doc-highlight-grid">
          {pkg.highlights.map((h) => (
            <span key={h} className="doc-highlight-item">✦ {h}</span>
          ))}
        </div>
      </section>

      {/* Itinerary */}
      <section className="doc-itinerary">
        <h2 className="doc-section-title">Day-by-Day Itinerary</h2>
        {pkg.itinerary.map((day) => (
          <div key={day.day} className="doc-day-card">
            <div className="doc-day-header">
              <span className="doc-day-num">Day {day.day}</span>
              <span className="doc-day-title">{day.title}</span>
              <span className="doc-day-stay">{day.stay}</span>
            </div>
            <p className="doc-day-desc">{day.description}</p>
          </div>
        ))}
      </section>

      {/* Inclusions / Exclusions */}
      <section className="doc-inc-exc">
        <div className="doc-inc-exc-grid">
          <div className="doc-inc-box">
            <h3 className="doc-inc-title">✓ What&apos;s Included</h3>
            <ul>
              {pkg.inclusions.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <div className="doc-exc-box">
            <h3 className="doc-exc-title">✗ What&apos;s Not Included</h3>
            <ul>
              {pkg.exclusions.map((item) => (
                <li key={item}>✗ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="doc-note">
        <strong>Note:</strong> Pricing is subject to change during New Year and other peak seasons.
        Contact us for the latest rates.
      </section>

      {/* Footer */}
      <div className="doc-footer">
        <strong>Manyata Travels</strong> — {siteConfig.address.full}<br />
        Phone: +91 {siteConfig.phone} | Email: {siteConfig.email}
      </div>
    </div>
  );
}

const printStyles = `
  @page { margin: 1.2cm; size: A4; }

  /* Hide Next.js chrome */
  nav, footer, [aria-label="Chat on WhatsApp"],
  button[aria-label="Open Next.js Dev Tools"] { display: none !important; }

  body { margin: 0; padding: 0; background: white; }

  .print-doc {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #1a1a1a; font-size: 11px; line-height: 1.5;
    max-width: 800px; margin: 0 auto; padding: 20px;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }

  .doc-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 2px solid #1B6B78; margin-bottom: 14px; }
  .doc-header-left { display: flex; align-items: center; gap: 10px; }
  .doc-logo { width: 34px; height: 34px; background: #1B6B78; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 15px; }
  .doc-company { font-size: 15px; font-weight: 700; color: #1B6B78; }
  .doc-tagline { font-size: 7px; text-transform: uppercase; letter-spacing: 2px; color: #888; }
  .doc-header-right { text-align: right; font-size: 9px; color: #666; line-height: 1.6; }

  .doc-title-section { margin-bottom: 14px; }
  .doc-pkg-title { font-size: 22px; font-weight: 700; color: #1B6B78; margin: 0 0 2px; }
  .doc-pkg-subtitle { font-size: 11px; color: #666; margin: 0 0 6px; }
  .doc-meta { font-size: 10px; color: #444; margin-bottom: 8px; }
  .doc-sep { margin: 0 6px; color: #ccc; }
  .doc-dest-tags { display: flex; flex-wrap: wrap; gap: 5px; }
  .doc-dest-tag { background: #f0f9fa; color: #1B6B78; padding: 2px 9px; border-radius: 10px; font-size: 9px; font-weight: 600; border: 1px solid #d0eef2; }

  .doc-pricing { margin-bottom: 14px; }
  .doc-price-table { width: 100%; border-collapse: collapse; font-size: 10px; }
  .doc-price-table th { background: #1B6B78; color: white; padding: 5px 10px; text-align: left; font-weight: 600; }
  .doc-price-table td { padding: 5px 10px; border-bottom: 1px solid #e5e7eb; }
  .doc-price-table tr:nth-child(even) td { background: #f9fafb; }
  .doc-price-cell { font-weight: 700; color: #1B6B78; }
  .doc-single-price { display: flex; align-items: baseline; gap: 8px; }
  .doc-price-label { color: #666; font-size: 10px; }
  .doc-price-val { font-size: 18px; font-weight: 700; color: #1B6B78; }
  .doc-price-note { font-size: 9px; color: #999; }

  .doc-highlights { margin-bottom: 14px; }
  .doc-section-title { font-size: 13px; font-weight: 700; color: #1a1a1a; margin: 0 0 6px; padding-bottom: 4px; border-bottom: 1px solid #e5e7eb; }
  .doc-highlight-grid { display: flex; flex-wrap: wrap; gap: 5px; }
  .doc-highlight-item { font-size: 9px; color: #1B6B78; background: #f0f9fa; padding: 2px 9px; border-radius: 4px; }

  .doc-itinerary { margin-bottom: 14px; }
  .doc-day-card { border: 1px solid #e5e7eb; border-radius: 6px; padding: 8px 12px; margin-bottom: 6px; break-inside: avoid; }
  .doc-day-header { display: flex; align-items: center; gap: 8px; margin-bottom: 3px; }
  .doc-day-num { background: #1B6B78; color: white; font-size: 7px; font-weight: 700; padding: 2px 7px; border-radius: 8px; text-transform: uppercase; }
  .doc-day-title { font-size: 11px; font-weight: 700; color: #1a1a1a; flex: 1; }
  .doc-day-stay { font-size: 7px; color: #1B6B78; background: #f0f9fa; padding: 2px 7px; border-radius: 8px; border: 1px solid #d0eef2; }
  .doc-day-desc { font-size: 10px; color: #444; line-height: 1.5; margin: 0; }

  .doc-inc-exc { margin-bottom: 14px; }
  .doc-inc-exc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .doc-inc-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 8px 12px; font-size: 9px; line-height: 1.6; }
  .doc-exc-box { background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 8px 12px; font-size: 9px; line-height: 1.6; }
  .doc-inc-title { font-size: 10px; font-weight: 700; color: #166534; margin: 0 0 4px; }
  .doc-exc-title { font-size: 10px; font-weight: 700; color: #991b1b; margin: 0 0 4px; }
  .doc-inc-box ul, .doc-exc-box ul { list-style: none; padding: 0; margin: 0; }
  .doc-inc-box li, .doc-exc-box li { margin-bottom: 2px; }

  .doc-note { background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 6px 12px; font-size: 9px; color: #92400e; margin-bottom: 14px; }

  .doc-footer { border-top: 1px solid #e5e7eb; padding-top: 6px; font-size: 8px; color: #999; text-align: center; line-height: 1.6; }

  @media screen {
    body { background: #f0f0f0; }
    .print-doc { background: white; box-shadow: 0 2px 20px rgba(0,0,0,0.1); border-radius: 4px; margin: 20px auto; }
  }
`;
