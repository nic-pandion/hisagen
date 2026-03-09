// HISAGEN Knowledge Base - Data Index
// Central export for all knowledge base data
// Created: 2026-01-17

// Type exports
export * from '../types/knowledge-base';

// Data exports
export { communications, getCommunicationsByYear, getCommunicationTags, getProjectStatusUpdates, getLatestProjectStatus, getHistoricalProjectStatus, formatStatusDate } from './communications';
export { research, getResearchByYear, getResearchTags, getResearchBySubtype } from './research';
export { ecosystem, getEcosystemByEngagement, getEcosystemTags, getEcosystemBySubtype } from './ecosystem';
export { evidence, getEvidenceByProject, getEvidenceBySubtype, getEvidenceTags, getVerifiedEvidence, getUgandaPilotEvidence, getRwandaPilotEvidence, getEvidenceByDataType } from './evidence';
export { milestones, getMilestonesByStatus, getMilestonesBySubtype, getMilestoneTags, getCriticalPathMilestones, getMilestonesByProject } from './milestones';

// Funding landscape exports
export { tier1Funders, tier2Funders, allCuratedFunders, getFunderById, getFundersByCategory, applicationTimeline, landscapeStats } from './funding-landscape';
export type { CuratedFunder, FunderCategory, TimelineEntry } from './funding-landscape';

// Import for combined operations
import { communications } from './communications';
import { research } from './research';
import { ecosystem } from './ecosystem';
import { evidence } from './evidence';
import { milestones } from './milestones';
import type { KnowledgeEntry } from '../types/knowledge-base';

// Combined data access
export function getAllEntries(): KnowledgeEntry[] {
  return [
    ...communications,
    ...research,
    ...ecosystem,
    ...evidence,
    ...milestones,
  ];
}

// Global tag collection
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  getAllEntries().forEach(entry => entry.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

// Search across all entries
export function searchEntries(query: string): KnowledgeEntry[] {
  const lowerQuery = query.toLowerCase();
  return getAllEntries().filter(entry =>
    entry.title.toLowerCase().includes(lowerQuery) ||
    entry.summary.toLowerCase().includes(lowerQuery) ||
    entry.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

// Filter by tags
export function filterByTags(tags: string[]): KnowledgeEntry[] {
  if (tags.length === 0) return getAllEntries();
  return getAllEntries().filter(entry =>
    tags.some(tag => entry.tags.includes(tag))
  );
}

// Get entries by date range
export function getEntriesByDateRange(start: string, end: string): KnowledgeEntry[] {
  return getAllEntries().filter(entry => {
    const date = entry.date;
    return date >= start && date <= end;
  });
}

// Get recent entries (sorted by date, descending)
export function getRecentEntries(limit: number = 10): KnowledgeEntry[] {
  return getAllEntries()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

// Get all unique projects
export function getAvailableProjects(): string[] {
  const projectSet = new Set<string>();
  getAllEntries().forEach(entry => {
    if (entry.project && entry.project !== 'global') projectSet.add(entry.project);
  });
  return Array.from(projectSet).sort();
}

// Filter entries by project (strict — only entries tagged to that project)
export function getEntriesByProject(project: string | null): KnowledgeEntry[] {
  if (!project) return getAllEntries();
  return getAllEntries().filter(entry => entry.project === project);
}

// Stats for dashboard (optionally filtered by project)
export function getKnowledgeBaseStats(projectFilter?: string | null) {
  const matchesProject = (entry: { project?: string }) =>
    !projectFilter || entry.project === projectFilter;

  const filteredComms = communications.filter(matchesProject);
  const filteredResearch = research.filter(matchesProject);
  const filteredEcosystem = ecosystem.filter(matchesProject);
  const filteredEvidence = evidence.filter(matchesProject);
  const filteredMilestones = milestones.filter(matchesProject);

  const allFiltered = [
    ...filteredComms, ...filteredResearch, ...filteredEcosystem,
    ...filteredEvidence, ...filteredMilestones,
  ];

  return {
    total: allFiltered.length,
    communications: filteredComms.length,
    research: filteredResearch.length,
    ecosystem: filteredEcosystem.length,
    evidence: filteredEvidence.length,
    milestones: filteredMilestones.length,
    uniqueTags: new Set(allFiltered.flatMap(e => e.tags)).size,
  };
}
