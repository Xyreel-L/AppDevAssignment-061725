import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';

// Mauve palette tokens
const C = {
  deepPlum: '#5C1A3A',
  richMauve: '#7B2D52',
  mauve: '#943565',
  midMauve: '#B04878',
  roseMauve: '#C4628F',
  softPink: '#D98BAC',
  blushPink: '#E8AECA',
  palePink: '#F2CCE0',
  whisperPink: '#F9E8F2',
  white: '#FFFFFF',
  textDark: '#2A0A1C',
  textMid: '#5C1A3A',
  textLight: '#8B4567',
  surface: '#FDF5F9',
  cardBg: '#FFFFFF',
  border: '#E8AECA',
};

interface ExploreCardProps {
  emoji: string;
  title: string;
  description: string;
  accentColor: string;
  onPress?: () => void;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  emoji,
  title,
  description,
  accentColor,
  onPress,
}) => (
  <TouchableOpacity
    style={[styles.exploreCard, { borderLeftColor: accentColor }]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.exploreEmoji}>{emoji}</Text>
    <View style={styles.exploreTextBlock}>
      <Text style={styles.exploreTitle}>{title}</Text>
      <Text style={styles.exploreDesc}>{description}</Text>
    </View>
    <Text style={[styles.exploreArrow, { color: accentColor }]}>›</Text>
  </TouchableOpacity>
);

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, subtitle, isLast = false }) => (
  <View style={styles.timelineItem}>
    <View style={styles.timelineLeft}>
      <View style={styles.timelineDot} />
      {!isLast && <View style={styles.timelineLine} />}
    </View>
    <View style={styles.timelineRight}>
      <Text style={styles.timelineYear}>{year}</Text>
      <Text style={styles.timelineTitle}>{title}</Text>
      <Text style={styles.timelineSubtitle}>{subtitle}</Text>
    </View>
  </View>
);

export default function ExploreScreen(): React.JSX.Element {
  const handlePress = (item: string): void => {
    Alert.alert('🌟 Explore', `You tapped on "${item}". More details coming soon!`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Get to know more of me</Text>
      <Text style={styles.subheading}>
        A deeper look into my academic journey and creative world.
      </Text>

      {/* Interests */}
      <Text style={styles.sectionLabel}>✨ Interests & Focus Areas</Text>
      {[
        {
          emoji: '📱',
          title: 'Mobile Development',
          description: 'Building cross-platform apps with React Native and Expo.',
          accentColor: C.deepPlum,
        },
        {
          emoji: '📊',
          title: 'Business Analytics',
          description: 'Translating raw data into actionable insights and dashboards.',
          accentColor: C.mauve,
        },
        {
          emoji: '🎨',
          title: 'UI/UX Design',
          description: 'Crafting clean, intuitive, and human-centered interfaces.',
          accentColor: C.midMauve,
        },
        {
          emoji: '🤖',
          title: 'AI & Automation',
          description: 'Exploring how AI can streamline business and academic workflows.',
          accentColor: C.roseMauve,
        },
      ].map((item) => (
        <ExploreCard
          key={item.title}
          {...item}
          onPress={() => handlePress(item.title)}
        />
      ))}

      {/* Academic Timeline */}
      <Text style={styles.sectionLabel}>🎓 Academic Journey</Text>
      <View style={styles.timelineCard}>
        <TimelineItem
          year="2023"
          title="Started BS Information Technology"
          subtitle="Batangas State University - TNEU ARASOF Campus"
        />
        <TimelineItem
          year="2023"
          title="Balayan Senior High School Graduate"
          subtitle="Technical-Vocational Track - ICT Strand"
        />
        <TimelineItem
          year="2021"
          title="St. Anne Academy Graduate"
          subtitle="Inabot ng pandemic."
          isLast
        />
      </View>

      {/* Fun Facts */}
      <Text style={styles.sectionLabel}>🎀 Fun Facts</Text>
      <View style={styles.funFactsGrid}>
        {[
          { emoji: '🌷͙֒', fact: 'Wala lang' },
          { emoji: '🎵', fact: 'Listens to OPM RnB' },
          { emoji: '🦢', fact: 'Wala ulit' },
          { emoji: '🌸', fact: 'Eme lang' },
        ].map((item) => (
          <View key={item.fact} style={styles.funFactCard}>
            <Text style={styles.funFactEmoji}>{item.emoji}</Text>
            <Text style={styles.funFactText}>{item.fact}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.surface,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: C.textDark,
    marginBottom: 4,
  },
  subheading: {
    fontSize: 13,
    color: C.textLight,
    marginBottom: 24,
    lineHeight: 18,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: C.textDark,
    marginBottom: 12,
    marginTop: 8,
    letterSpacing: 0.3,
  },

  // Explore Cards
  exploreCard: {
    backgroundColor: C.cardBg,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  exploreEmoji: {
    fontSize: 28,
  },
  exploreTextBlock: {
    flex: 1,
  },
  exploreTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: C.textDark,
    marginBottom: 2,
  },
  exploreDesc: {
    fontSize: 12,
    color: C.textLight,
    lineHeight: 17,
  },
  exploreArrow: {
    fontSize: 22,
    fontWeight: '700',
  },

  // Timeline
  timelineCard: {
    backgroundColor: C.cardBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: 14,
    minHeight: 70,
  },
  timelineLeft: {
    alignItems: 'center',
    width: 16,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: C.midMauve,
    marginTop: 4,
  },
  timelineLine: {
    flex: 1,
    width: 2,
    backgroundColor: C.border,
    marginTop: 4,
  },
  timelineRight: {
    flex: 1,
    paddingBottom: 16,
  },
  timelineYear: {
    fontSize: 11,
    fontWeight: '700',
    color: C.midMauve,
    letterSpacing: 1,
    marginBottom: 2,
  },
  timelineTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: C.textDark,
    marginBottom: 2,
  },
  timelineSubtitle: {
    fontSize: 12,
    color: C.textLight,
    lineHeight: 17,
  },

  // Fun Facts
  funFactsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 8,
  },
  funFactCard: {
    backgroundColor: C.cardBg,
    borderRadius: 14,
    padding: 16,
    width: '47%',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  funFactEmoji: {
    fontSize: 28,
  },
  funFactText: {
    fontSize: 12,
    color: C.textMid,
    fontWeight: '600',
    textAlign: 'center',
  },
});
