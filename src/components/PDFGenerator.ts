import type { TravelPackage } from "@/data/packages";
import { siteConfig } from "@/data/config";

export async function generateItineraryPDF(pkg: TravelPackage): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const autoTable = (await import("jspdf-autotable")).default;

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentW = pageW - margin * 2;
  let y = margin;

  const teal: [number, number, number] = [27, 107, 120];
  const dark: [number, number, number] = [26, 26, 26];
  const gray: [number, number, number] = [100, 100, 100];
  const lightGray: [number, number, number] = [229, 231, 235];
  const white: [number, number, number] = [255, 255, 255];
  const cream: [number, number, number] = [240, 249, 250];
  const greenBg: [number, number, number] = [240, 253, 244];
  const redBg: [number, number, number] = [254, 242, 242];
  const yellowBg: [number, number, number] = [255, 251, 235];

  const checkPage = (needed: number) => {
    if (y + needed > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // ============ HEADER ============
  doc.setFillColor(...teal);
  doc.circle(margin + 6, y + 6, 6, "F");
  doc.setTextColor(...white);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("M", margin + 6, y + 7.5, { align: "center" });

  doc.setTextColor(...teal);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Manyata Travels", margin + 15, y + 5);
  doc.setTextColor(136, 136, 136);
  doc.setFontSize(6);
  doc.setFont("helvetica", "normal");
  doc.text("THE ROYAL & LOYAL JOURNEY", margin + 15, y + 9);

  doc.setTextColor(...gray);
  doc.setFontSize(7);
  doc.text(`+91 ${siteConfig.phone}`, pageW - margin, y + 3, { align: "right" });
  doc.text(siteConfig.email, pageW - margin, y + 7, { align: "right" });
  doc.text(`${siteConfig.address.city}, ${siteConfig.address.state}`, pageW - margin, y + 11, { align: "right" });

  y += 14;
  doc.setDrawColor(...teal);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageW - margin, y);
  y += 7;

  // ============ TITLE ============
  doc.setTextColor(...teal);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(pkg.title, margin, y);
  y += 5;

  doc.setTextColor(...gray);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(pkg.subtitle, margin, y);
  y += 4;

  doc.setTextColor(...dark);
  doc.setFontSize(8);
  doc.text(`${pkg.duration}  |  ${pkg.destinations.length} Destinations  |  3-Star Hotels`, margin, y);
  y += 5;

  // Destination tags
  let tagX = margin;
  doc.setFontSize(7);
  for (const dest of pkg.destinations) {
    const tw = doc.getTextWidth(dest) + 8;
    doc.setFillColor(...cream);
    doc.setDrawColor(208, 238, 242);
    doc.roundedRect(tagX, y - 3, tw, 6, 2, 2, "FD");
    doc.setTextColor(...teal);
    doc.text(dest, tagX + 4, y + 0.5);
    tagX += tw + 3;
  }
  y += 7;

  // ============ PRICING ============
  if (pkg.pricingTiers && pkg.pricingTiers.length > 0) {
    autoTable(doc, {
      startY: y,
      margin: { left: margin, right: margin },
      head: [["Travel Option", "Price (Per Person)"]],
      body: pkg.pricingTiers.map(t => [t.label, `Rs. ${t.price.toLocaleString("en-IN")}`]),
      headStyles: { fillColor: teal, textColor: white, fontStyle: "bold", fontSize: 8, cellPadding: 3 },
      bodyStyles: { fontSize: 8, cellPadding: 3, textColor: dark },
      alternateRowStyles: { fillColor: [249, 250, 251] },
      columnStyles: { 1: { fontStyle: "bold", textColor: teal } },
      theme: "grid",
      styles: { lineColor: lightGray, lineWidth: 0.2 },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    y = (doc as any).lastAutoTable.finalY + 5;
  } else {
    doc.setTextColor(...gray);
    doc.setFontSize(8);
    doc.text("Per Person:", margin, y);
    doc.setTextColor(...teal);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Rs. ${pkg.price.toLocaleString("en-IN")}`, margin + 22, y);
    doc.setTextColor(...gray);
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.text(pkg.priceNote, margin + 50, y);
    y += 6;
  }

  // ============ HIGHLIGHTS ============
  doc.setTextColor(...dark);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Trip Highlights", margin, y);
  y += 1;
  doc.setDrawColor(...lightGray);
  doc.setLineWidth(0.2);
  doc.line(margin, y, pageW - margin, y);
  y += 4;

  tagX = margin;
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  for (const h of pkg.highlights) {
    const tw = doc.getTextWidth(h) + 8;
    if (tagX + tw > pageW - margin) {
      tagX = margin;
      y += 7;
    }
    doc.setFillColor(...cream);
    doc.roundedRect(tagX, y - 3, tw, 6, 2, 2, "F");
    doc.setTextColor(...teal);
    doc.text(h, tagX + 4, y + 0.5);
    tagX += tw + 3;
  }
  y += 8;

  // ============ ITINERARY ============
  checkPage(10);
  doc.setTextColor(...dark);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Day-by-Day Itinerary", margin, y);
  y += 1;
  doc.setDrawColor(...lightGray);
  doc.setLineWidth(0.2);
  doc.line(margin, y, pageW - margin, y);
  y += 5;

  for (const day of pkg.itinerary) {
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    const descLines = doc.splitTextToSize(day.description, contentW - 12);
    const cardH = 12 + descLines.length * 3.5;
    checkPage(cardH + 3);

    // Card border
    doc.setDrawColor(...lightGray);
    doc.setLineWidth(0.2);
    doc.roundedRect(margin, y, contentW, cardH, 2, 2, "S");

    // Day badge
    const dayLabel = `Day ${day.day}`;
    doc.setFontSize(7);
    doc.setFont("helvetica", "bold");
    const badgeW = doc.getTextWidth(dayLabel) + 6;
    doc.setFillColor(...teal);
    doc.roundedRect(margin + 4, y + 3.5, badgeW, 5, 1.5, 1.5, "F");
    doc.setTextColor(...white);
    doc.text(dayLabel, margin + 7, y + 6.8);

    // Title
    doc.setTextColor(...dark);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(day.title, margin + badgeW + 8, y + 7);

    // Stay badge (right)
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    const stayW = doc.getTextWidth(day.stay) + 6;
    doc.setFillColor(...cream);
    doc.setDrawColor(208, 238, 242);
    doc.roundedRect(pageW - margin - stayW - 4, y + 3.5, stayW, 5, 1.5, 1.5, "FD");
    doc.setTextColor(...teal);
    doc.text(day.stay, pageW - margin - stayW - 1, y + 6.8);

    // Description
    doc.setTextColor(...gray);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(descLines, margin + 6, y + 12);

    y += cardH + 3;
  }

  // ============ INCLUSIONS / EXCLUSIONS ============
  // Calculate actual heights needed
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  const halfW = (contentW - 6) / 2;

  let incH = 12;
  for (const item of pkg.inclusions) {
    const lines = doc.splitTextToSize(`- ${item}`, halfW - 10);
    incH += lines.length * 3.2;
  }

  let excH = 12;
  for (const item of pkg.exclusions) {
    const lines = doc.splitTextToSize(`- ${item}`, halfW - 10);
    excH += lines.length * 3.2;
  }

  const boxH = Math.max(incH, excH) + 2;
  checkPage(boxH + 20);

  // Inclusions box
  doc.setFillColor(...greenBg);
  doc.setDrawColor(187, 247, 208);
  doc.roundedRect(margin, y, halfW, boxH, 2, 2, "FD");

  doc.setTextColor(22, 101, 52);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("What's Included", margin + 5, y + 6);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(22, 101, 52);
  let iy = y + 11;
  for (const item of pkg.inclusions) {
    const lines = doc.splitTextToSize(`- ${item}`, halfW - 10);
    doc.text(lines, margin + 5, iy);
    iy += lines.length * 3.2;
  }

  // Exclusions box
  doc.setFillColor(...redBg);
  doc.setDrawColor(254, 202, 202);
  doc.roundedRect(margin + halfW + 6, y, halfW, boxH, 2, 2, "FD");

  doc.setTextColor(153, 27, 27);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("What's Not Included", margin + halfW + 11, y + 6);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(153, 27, 27);
  let ey = y + 11;
  for (const item of pkg.exclusions) {
    const lines = doc.splitTextToSize(`- ${item}`, halfW - 10);
    doc.text(lines, margin + halfW + 11, ey);
    ey += lines.length * 3.2;
  }

  y += boxH + 5;

  // ============ NOTE ============
  checkPage(12);
  doc.setFillColor(...yellowBg);
  doc.setDrawColor(253, 230, 138);
  doc.roundedRect(margin, y, contentW, 9, 2, 2, "FD");
  doc.setTextColor(146, 64, 14);
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.text("Note:", margin + 4, y + 5.5);
  doc.setFont("helvetica", "normal");
  doc.text("Pricing is subject to change during New Year and other peak seasons. Contact us for the latest rates.", margin + 15, y + 5.5);
  y += 13;

  // ============ FOOTER ============
  checkPage(10);
  doc.setDrawColor(...lightGray);
  doc.setLineWidth(0.2);
  doc.line(margin, y, pageW - margin, y);
  y += 4;
  doc.setTextColor(153, 153, 153);
  doc.setFontSize(6);
  doc.text(`Manyata Travels  --  ${siteConfig.address.full}`, pageW / 2, y, { align: "center" });
  y += 3;
  doc.text(`Phone: +91 ${siteConfig.phone} | Email: ${siteConfig.email}`, pageW / 2, y, { align: "center" });

  doc.save(`${pkg.slug}-itinerary.pdf`);
}
