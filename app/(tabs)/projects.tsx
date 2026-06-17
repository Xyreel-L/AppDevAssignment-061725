import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const COLORS = {
  deepPlum: '#5C1A3A',
  midMauve: '#B04878',
  whisperPink: '#F9E8F2',
  textDark: '#2A0A1C',
  textLight: '#8B4567',
  textMid: '#5C1A3A',
  surface: '#FDF5F9',
  cardBg: '#FFFFFF',
  border: '#E8AECA',
};

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  emoji: string;
  status: 'Completed' | 'In Progress' | 'Concept';
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Library Management System',
    description:
      'A desktop-based system for managing library operations including book cataloging, borrowing and return tracking, and member management.',
    techStack: ['Java', 'SQL'],
    emoji: '📚',
    status: 'Completed',
  },
  {
    id: '2',
    title: 'GrainSmart Inventory Management System',
    description:
      'An inventory management solution tailored for grain products. Handles stock tracking, supplier records, and inventory reporting and logistics.',
    techStack: ['Java', 'SQL'],
    emoji: '🌾',
    status: 'Completed',
  },
  {
    id: '3',
    title: "Rider's Choice Loyalty and Rewards Management System",
    description:
      'A loyalty and rewards platform for riders, featuring point tracking, reward redemption, and customer engagement analytics.',
    techStack: ['PHP', 'SQL', 'Python'],
    emoji: '🏍️',
    status: 'Completed',
  },
  {
    id: '4',
    title: "Drip n' Style",
    description:
      'A web-based fashion retail management system for handling product listings of a clothing retailer, order management, and customer records.',
    techStack: ['PHP', 'SQL'],
    emoji: '👗',
    status: 'Completed',
  },
  {
    id: '5',
    title: 'NutriGuard',
    description:
      '"NutriGuard is a tool made for Barangay Nutrition Scholars and Barangay Health Workers in Tuy, Batangas. It helps them keep track of residents’ health, monitor nutrition, and quickly see who might be at risk, so they can give better care to the community.',
    techStack: ['PHP', 'SQL'],
    emoji: '🥗',
    status: 'Completed',
  },
  {
  id: '6',
    title: 'iCARE++',
    description:
      'iCARE++ is a digital tool designed to support student nurses in building their clinical competency, with a strong focus on digital literacy. It helps them practice documentation, patient data management, and technology‑based learning, preparing them to be confident and tech‑ready in modern healthcare settings.',
    techStack: ['hindi pa sigurado'],
    emoji: '💊',
    status: 'In Progress',
  },
];

const STATUS_COLORS: Record<Project['status'], string> = {
  Completed: '#2D7A4F',
  'In Progress': COLORS.midMauve,
  Concept: COLORS.textLight,
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardEmoji}>{project.emoji}</Text>
      <View style={styles.cardTitleBlock}>
        <Text style={styles.cardTitle}>{project.title}</Text>
        <View style={[styles.statusBadge, { backgroundColor: STATUS_COLORS[project.status] + '22' }]}>
          <Text style={[styles.statusText, { color: STATUS_COLORS[project.status] }]}>
            {project.status}
          </Text>
        </View>
      </View>
    </View>
    <Text style={styles.cardDesc}>{project.description}</Text>
    <View style={styles.techRow}>
      {project.techStack.map((tech) => (
        <View key={tech} style={styles.techPill}>
          <Text style={styles.techText}>{tech}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default function ProjectsScreen(): React.JSX.Element {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.screenHeading}>Project Showcase</Text>
      <Text style={styles.screenSubheading}>Things I've built, explored, and iniyakan.</Text>
      {PROJECTS.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  content: { padding: 16, paddingBottom: 32 },
  screenHeading: { fontSize: 22, fontWeight: '800', color: COLORS.textDark, marginBottom: 4 },
  screenSubheading: { fontSize: 13, color: COLORS.textLight, marginBottom: 20, lineHeight: 18 },
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10, gap: 12 },
  cardEmoji: { fontSize: 32, marginTop: 2 },
  cardTitleBlock: { flex: 1, gap: 6 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: COLORS.textDark },
  statusBadge: { alignSelf: 'flex-start', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 3 },
  statusText: { fontSize: 11, fontWeight: '700', letterSpacing: 0.3 },
  cardDesc: { fontSize: 13, color: COLORS.textLight, lineHeight: 20, marginBottom: 12 },
  techRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  techPill: {
    backgroundColor: COLORS.whisperPink,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  techText: { fontSize: 11, color: COLORS.textMid, fontWeight: '600' },
});