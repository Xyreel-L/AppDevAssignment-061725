import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {
    MaterialCommunityIcons,
} from '@expo/vector-icons';

const COLORS = {
    deepPlum: '#5C1A3A',
    mauve: '#943565',
    midMauve: '#B04878',
    roseMauve: '#C4628F',
    whisperPink: '#F9E8F2',
    white: '#FFFFFF',
    textDark: '#2A0A1C',
    textMid: '#5C1A3A',
    textLight: '#8B4567',
    surface: '#FDF5F9',
    cardBg: '#FFFFFF',
    border: '#E8AECA',
};

interface Skill {
    id: string;
    label: string;
    category: 'analytics' | 'systems' | 'databases';
    date: string;
}

interface TechSkill {
    id: string;
    label: string;
    group: string;
}

const SKILLS: Skill[] = [
    { id: '1', label: 'Data Analytics', category: 'analytics', date: '5/25/2026' },
    { id: '2', label: 'Device Configuration and Management (Windows 10)', category: 'systems', date: '12/15/2025' },
    { id: '3', label: 'Databases', category: 'databases', date: '5/14/2025' },
];

const CATEGORY_COLORS: Record<Skill['category'], string> = {
    analytics: COLORS.deepPlum,
    systems: COLORS.mauve,
    databases: COLORS.roseMauve,
};

const TECH_SKILLS: TechSkill[] = [
    { id: 't1', label: 'React', group: 'Frontend / Web Development' },
    { id: 't2', label: 'TypeScript', group: 'Frontend / Web Development' },
    { id: 't3', label: 'JavaScript', group: 'Frontend / Web Development' },
    { id: 't4', label: 'HTML / CSS', group: 'Frontend / Web Development' },
    { id: 't5', label: 'React Native', group: 'Mobile Development' },
    { id: 't6', label: 'Expo', group: 'Mobile Development' },
    { id: 't7', label: 'Node.js', group: 'Backend Development' },
    { id: 't8', label: 'Python', group: 'Backend Development' },
    { id: 't9', label: 'MySQL', group: 'Databases / Data Layer' },
    { id: 't10', label: 'GitHub', group: 'Version Control / Collaboration' },
    { id: 't11', label: 'Figma', group: 'UI / UX Design' },
    { id: 't12', label: 'Power BI', group: 'Analytics & Data' },
    { id: 't13', label: 'Excel', group: 'Analytics & Data' },
    { id: 't14', label: 'Tableau', group: 'Analytics & Data' },
];

const TECH_GROUPS: string[] = [
    'Frontend / Web Development',
    'Mobile Development',
    'Backend Development',
    'Databases / Data Layer',
    'Analytics & Data',
    'Version Control / Collaboration',
    'UI / UX Design',
];

const CATEGORY_META: Record<string, { icon: string; colorSet: string }> = {
    'Frontend / Web Development':      { icon: 'monitor', colorSet: 'plum' },
    'Mobile Development':              { icon: 'cellphone', colorSet: 'mauve' },
    'Backend Development':             { icon: 'server', colorSet: 'rose' },
    'Databases / Data Layer':          { icon: 'database', colorSet: 'plum' },
    'Analytics & Data':                { icon: 'chart-bar', colorSet: 'mid' },
    'Version Control / Collaboration': { icon: 'source-branch', colorSet: 'gray' },
    'UI / UX Design':                  { icon: 'vector-bezier', colorSet: 'rose' },
};

const COLOR_SETS: Record<string, { circle: string; pill: string; pillText: string; iconColor: string }> = {
    plum:  { circle: '#F9E8F2', pill: '#F9E8F2', pillText: '#5C1A3A', iconColor: '#5C1A3A' },
    mauve: { circle: '#F3DDF0', pill: '#F3DDF0', pillText: '#6B1F5C', iconColor: '#943565' },
    rose:  { circle: '#FAEDF4', pill: '#FAEDF4', pillText: '#7A2252', iconColor: '#C4628F' },
    mid:   { circle: '#EEE0F3', pill: '#EEE0F3', pillText: '#5A1870', iconColor: '#7B3498' },
    gray:  { circle: '#F1EFE8', pill: '#F1EFE8', pillText: '#444441', iconColor: '#5F5E5A' },
};

const TechSkillsSection: React.FC = () => (
    <View style={styles.techSection}>
        <Text style={styles.screenHeading}>Technical Skills</Text>
        <Text style={styles.screenSubheading}>Tools and technologies I work with.</Text>

        {TECH_GROUPS.map((group) => {
            const meta = CATEGORY_META[group];
            const colors = COLOR_SETS[meta.colorSet];
            const groupSkills = TECH_SKILLS.filter((s) => s.group === group);

            return (
                <View key={group} style={styles.categoryCard}>
                    <View style={styles.cardHead}>
                        <View style={[styles.iconCircle, { backgroundColor: colors.circle }]}>
                            <MaterialCommunityIcons
                                name={meta.icon as any}
                                size={20}
                                color={colors.iconColor}
                            />
                        </View>
                        <View style={styles.headText}>
                            <Text style={styles.catName}>{group}</Text>
                            <Text style={styles.skillCount}>
                                {groupSkills.length} skill{groupSkills.length !== 1 ? 's' : ''}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.cardDivider} />

                    <View style={styles.pillRow}>
                        {groupSkills.map((s) => (
                            <View key={s.id} style={[styles.pill, { backgroundColor: colors.pill }]}>
                                <Text style={[styles.pillText, { color: colors.pillText }]}>
                                    {s.label}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            );
        })}
    </View>
);

const CertCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <View style={[styles.certCard, { borderLeftColor: CATEGORY_COLORS[skill.category] }]}>
        <View style={styles.certTop}>
            <View style={[styles.certIconBadge, { backgroundColor: CATEGORY_COLORS[skill.category] + '18' }]}>
                <Text style={styles.certIcon}>
                    {skill.category === 'analytics' ? '📊' : skill.category === 'systems' ? '🖥️' : '🗄️'}
                </Text>
            </View>
            <View style={styles.certTextBlock}>
                <Text style={styles.certSpecialist}>IT Specialist — Certiport</Text>
                <Text style={styles.certLabel}>{skill.label}</Text>
            </View>
        </View>
        <View style={[styles.certDateRow, { borderTopColor: CATEGORY_COLORS[skill.category] + '33' }]}>
            <Text style={styles.certDateLabel}>Exam Passed</Text>
            <View style={[styles.certDateBadge, { backgroundColor: CATEGORY_COLORS[skill.category] }]}>
                <Text style={styles.certDateText}>{skill.date}</Text>
            </View>
        </View>
    </View>
);

export default function SkillsScreen(): React.JSX.Element {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
        >
            <TechSkillsSection />

            <View style={styles.divider} />

            <Text style={styles.screenHeading}>Certifications</Text>
            <Text style={styles.screenSubheading}>
                IT Specialist certifications earned through Certiport exams.
            </Text>
            {SKILLS.map((skill) => (
                <CertCard key={skill.id} skill={skill} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.surface },
    content: { padding: 16, paddingBottom: 32 },
    screenHeading: { fontSize: 22, fontWeight: '800', color: COLORS.textDark, marginBottom: 4 },
    screenSubheading: { fontSize: 13, color: COLORS.textLight, marginBottom: 20, lineHeight: 18 },

    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: 24,
    },

    // Tech skills - category cards
    techSection: {
        marginBottom: 4,
    },
    categoryCard: {
        backgroundColor: COLORS.white,
        borderRadius: 16,
        marginBottom: 12,
        borderWidth: 0.5,
        borderColor: COLORS.border,
        overflow: 'hidden',
    },
    cardHead: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 16,
        paddingTop: 14,
        paddingBottom: 10,
    },
    iconCircle: {
        width: 38,
        height: 38,
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headText: {
        flex: 1,
    },
    catName: {
        fontSize: 14,
        fontWeight: '700',
        color: COLORS.textDark,
        marginBottom: 1,
    },
    skillCount: {
        fontSize: 11,
        color: COLORS.textLight,
    },
    cardDivider: {
        height: 0.5,
        backgroundColor: COLORS.whisperPink,
        marginHorizontal: 16,
    },
    pillRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 7,
        padding: 12,
        paddingHorizontal: 16,
        paddingBottom: 14,
    },
    pill: {
        borderRadius: 999,
        paddingHorizontal: 11,
        paddingVertical: 4,
    },
    pillText: {
        fontSize: 12,
        fontWeight: '600',
    },

    // Cert cards
    certCard: {
        backgroundColor: COLORS.cardBg,
        borderRadius: 16,
        marginBottom: 14,
        borderLeftWidth: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        overflow: 'hidden',
    },
    certTop: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 14 },
    certIconBadge: { width: 48, height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
    certIcon: { fontSize: 24 },
    certTextBlock: { flex: 1 },
    certSpecialist: { fontSize: 10, fontWeight: '700', color: COLORS.textLight, letterSpacing: 0.8, marginBottom: 4, textTransform: 'uppercase' },
    certLabel: { fontSize: 14, fontWeight: '700', color: COLORS.textDark, lineHeight: 20 },
    certDateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderTopWidth: 1,
        backgroundColor: COLORS.whisperPink,
    },
    certDateLabel: { fontSize: 11, color: COLORS.textLight, fontWeight: '600' },
    certDateBadge: { borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4 },
    certDateText: { color: COLORS.white, fontSize: 11, fontWeight: '700' },
});