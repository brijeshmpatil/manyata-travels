"use client";

import { useEffect } from "react";
import type { TravelPackage } from "@/data/packages";
import { siteConfig } from "@/data/config";

export default function PrintableItinerary({ pkg }: { pkg: TravelPackage }) {
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{pkg.title} — Itinerary | Manyata Travels</title>
        <style dangerouslySetInnerHTML={{ __html: printStyles }} />
      </head>
      <body>
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <div className="logo-circle">M</div>
            <div>
              <div className="company-name">Manyata Travels</div>
              <div className="tagline">The Royal & Loyal Journey</div>
            </div>
          </div>
          <div className="header-right">
            <div>+91 {siteConfig.phone}</div>
            <div>{siteConfig.email}</div>
            <div>{siteConfig.address.city}, {siteConfig.address.state}</div>
          </div>
        </header>

        {/* Title Section */}
        <section className="title-section">
          <h1 className="pkg-title">{pkg.title}</h1>
          <p className="pkg-subtitle">{pkg.subtitle}</p>
          <div className="meta-row">
            <span className="meta-item">{pkg.duration}</span>
            <span className="meta-sep">•</span>
            <span className="meta-item">{pkg.destinations.length} Destinations</span>
            <span className="meta-sep">•</span>
            <span className="meta-item">3-Star Hotels</span>
          </div>
          <div className="dest-tags">
            {pkg.destinations.map((d) => (
              <span key={d} className="dest-tag">{d}</span>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="pricing-section">
          {pkg.pricingTiers && pkg.pricingTiers.length > 0 ? (
            <table className="pricing-table">
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
                    <td className="price-cell">₹{tier.price.toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="single-price">
              <span className="price-label">Per Person:</span>
              <span className="price-value">₹{pkg.price.toLocaleString("en-IN")}</span>
              <span className="price-note">{pkg.priceNote}</span>
            </div>
          )}
        </section>

        {/* Highlights */}
        <section className="highlights-section">
          <h2 className="section-title">Trip Highlights</h2>
          <div className="highlights-grid">
            {pkg.highlights.map((h) => (
              <span key={h} className="highlight-item">✦ {h}</span>
            ))}
          </div>
        </section>

        {/* Itinerary */}
        <section className="itinerary-section">
          <h2 className="section-title">Day-by-Day Itinerary</h2>
          {pkg.itinerary.map((day) => (
            <div key={day.day} className="day-card">
              <div className="day-header">
                <span className="day-number">Day {day.day}</span>
                <span className="day-title">{day.title}</span>
                <span className="day-stay">{day.stay}</span>
              </div>
              <p className="day-desc">{day.description}</p>
            </div>
          ))}
        </section>

        {/* Inclusions / Exclusions */}
        <section className="inc-exc-section">
          <div className="inc-exc-grid">
            <div className="inc-box">
              <h3 className="inc-title">✓ What&apos;s Included</h3>
              <ul className="inc-list">
                {pkg.inclusions.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
            <div className="exc-box">
              <h3 className="exc-title">✗ What&apos;s Not Included</h3>
              <ul className="exc-list">
                {pkg.exclusions.map((item) => (
                  <li key={item}>✗ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="note-section">
          <p>
            <strong>Note:</strong> Pricing is subject to change during New Year and other peak seasons.
            Contact us for the latest rates.
          </p>
        </section>

        {/* Footer */}
        <footer className="doc-footer">
          <div className="footer-line" />
          <div className="footer-content">
            <div>
              <strong>Manyata Travels</strong> — {siteConfig.address.full}
            </div>
            <div>
              Phone: +91 {siteConfig.phone} | Email: {siteConfig.email}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

const printStyles = `
  @page {
    margin: 1.5cm;
    size: A4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #1a1a1a;
    font-size: 11px;
    line-height: 1.5;
    padding: 0;
  }

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 2px solid #1B6B78;
    margin-bottom: 16px;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .logo-circle {
    width: 36px;
    height: 36px;
    background: #1B6B78;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
  }
  .company-name {
    font-size: 16px;
    font-weight: 700;
    color: #1B6B78;
  }
  .tagline {
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #888;
  }
  .header-right {
    text-align: right;
    font-size: 9px;
    color: #666;
    line-height: 1.6;
  }

  /* Title */
  .title-section {
    margin-bottom: 16px;
  }
  .pkg-title {
    font-size: 24px;
    font-weight: 700;
    color: #1B6B78;
    margin-bottom: 2px;
  }
  .pkg-subtitle {
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;
  }
  .meta-row {
    font-size: 10px;
    color: #444;
    margin-bottom: 8px;
  }
  .meta-sep {
    margin: 0 6px;
    color: #ccc;
  }
  .dest-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .dest-tag {
    background: #f0f9fa;
    color: #1B6B78;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 9px;
    font-weight: 600;
    border: 1px solid #d0eef2;
  }

  /* Pricing */
  .pricing-section {
    margin-bottom: 16px;
  }
  .pricing-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
  }
  .pricing-table th {
    background: #1B6B78;
    color: white;
    padding: 6px 12px;
    text-align: left;
    font-weight: 600;
  }
  .pricing-table td {
    padding: 6px 12px;
    border-bottom: 1px solid #e5e7eb;
  }
  .pricing-table tr:nth-child(even) td {
    background: #f9fafb;
  }
  .price-cell {
    font-weight: 700;
    color: #1B6B78;
  }
  .single-price {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-size: 14px;
  }
  .price-label {
    color: #666;
    font-size: 10px;
  }
  .price-value {
    font-size: 20px;
    font-weight: 700;
    color: #1B6B78;
  }
  .price-note {
    font-size: 9px;
    color: #999;
  }

  /* Highlights */
  .highlights-section {
    margin-bottom: 16px;
  }
  .section-title {
    font-size: 14px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
    padding-bottom: 4px;
    border-bottom: 1px solid #e5e7eb;
  }
  .highlights-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .highlight-item {
    font-size: 9px;
    color: #1B6B78;
    background: #f0f9fa;
    padding: 3px 10px;
    border-radius: 4px;
  }

  /* Itinerary */
  .itinerary-section {
    margin-bottom: 16px;
  }
  .day-card {
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 10px 14px;
    margin-bottom: 8px;
    break-inside: avoid;
  }
  .day-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
  }
  .day-number {
    background: #1B6B78;
    color: white;
    font-size: 8px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
  }
  .day-title {
    font-size: 12px;
    font-weight: 700;
    color: #1a1a1a;
    flex: 1;
  }
  .day-stay {
    font-size: 8px;
    color: #1B6B78;
    background: #f0f9fa;
    padding: 2px 8px;
    border-radius: 10px;
    border: 1px solid #d0eef2;
  }
  .day-desc {
    font-size: 10px;
    color: #444;
    line-height: 1.6;
  }

  /* Inclusions / Exclusions */
  .inc-exc-section {
    margin-bottom: 16px;
    break-before: auto;
  }
  .inc-exc-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .inc-box, .exc-box {
    padding: 10px 14px;
    border-radius: 6px;
    font-size: 9px;
    line-height: 1.7;
  }
  .inc-box {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
  }
  .exc-box {
    background: #fef2f2;
    border: 1px solid #fecaca;
  }
  .inc-title {
    font-size: 11px;
    font-weight: 700;
    color: #166534;
    margin-bottom: 6px;
  }
  .exc-title {
    font-size: 11px;
    font-weight: 700;
    color: #991b1b;
    margin-bottom: 6px;
  }
  .inc-list, .exc-list {
    list-style: none;
    padding: 0;
  }
  .inc-list li, .exc-list li {
    margin-bottom: 3px;
  }

  /* Note */
  .note-section {
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 6px;
    padding: 8px 14px;
    font-size: 9px;
    color: #92400e;
    margin-bottom: 16px;
  }

  /* Footer */
  .doc-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 1.5cm;
  }
  .footer-line {
    border-top: 1px solid #e5e7eb;
    margin-bottom: 6px;
  }
  .footer-content {
    font-size: 8px;
    color: #999;
    text-align: center;
    line-height: 1.6;
  }

  @media screen {
    body {
      max-width: 800px;
      margin: 20px auto;
      padding: 40px;
      background: #f5f5f5;
    }
    body > * {
      background: white;
    }
  }
`;
