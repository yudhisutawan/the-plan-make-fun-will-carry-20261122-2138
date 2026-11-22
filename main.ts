import { mkdirSync, writeFileSync } from "node:fs";

// Deterministic, no network: the entry text is fixed in this file.


const ENTRY =
  "Day 1: spend $15 on Upwork Connects; bid within 10 min on fresh $50-100 fixed-price PDF/CSV-cleanup jobs with verified payment, 20 bids/day on Upwork+Contra. Deliver same day; escrow pays. 10 jobs=$500-$1,000. Edge: fish where buyers already posted money, not cold outreach.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
