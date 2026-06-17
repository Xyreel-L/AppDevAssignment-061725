import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

const COLORS = {
  deepPlum: '#5C1A3A',
  richMauve: '#7B2D52',
  mauve: '#943565',
  midMauve: '#B04878',
  roseMauve: '#C4628F',
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

export default function HomeScreen(): React.JSX.Element {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Hero */}
      <View style={styles.heroCard}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../../assets/images/avatar.jpg')}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.heroName}>Xyreel Castromero Laguras</Text>
        <Text style={styles.heroTagline}>IT Student · Business Analytics</Text>
        <View style={styles.heroDivider} />
        <View style={styles.heroMeta}>
          <View style={styles.metaPill}><Text style={styles.metaText}>21 y/o</Text></View>
          <View style={styles.metaPill}><Text style={styles.metaText}>♀ Female</Text></View>
          <View style={styles.metaPill}><Text style={styles.metaText}>3rd Year</Text></View>
        </View>
      </View>

      {/* About Me */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <View style={styles.aboutCard}>
          <Text style={styles.aboutText}>
            Hi! I'm <Text style={styles.highlightText}>Xyreel</Text> — a 3rd-year BS Information
            Technology student specializing in{' '}
            <Text style={styles.highlightText}>Business Analytics</Text>.
          </Text>
          <Text style={styles.aboutText}>
            I'm into tech and proud of earning three IT Specialist certifications from Certiport in
            Device Configuration and Management, Databases, and Data Analytics. These show I can set
            up devices, organize data, and actually make sense of it. I like turning what I learn
            into apps, dashboards, and solutions that are both useful and easy to understand.
          </Text>
        </View>
      </View>

      {/* Cert Badges */}
      <Text style={styles.sectionTitle}>My Certifications</Text>
      <View style={styles.statsRow}>
        <View style={styles.statBadgeWrapper}>
          <Image
            source={require('../../assets/images/cert-analytics.png')}
            style={styles.statBadge}
            resizeMode="cover"
          />
        </View>
        <View style={styles.statBadgeWrapper}>
          <Image
            source={require('../../assets/images/cert-devices.png')}
            style={styles.statBadge}
            resizeMode="cover"
          />
        </View>
        <View style={styles.statBadgeWrapper}>
          <Image
            source={require('../../assets/images/cert-databases.png')}
            style={styles.statBadge}
            resizeMode="cover"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  heroCard: {
    backgroundColor: COLORS.deepPlum,
    borderRadius: 20,
    alignItems: 'center',
    padding: 24,
    marginBottom: 16,
    shadowColor: COLORS.deepPlum,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.roseMauve,
    overflow: 'hidden',
    marginBottom: 14,
    backgroundColor: COLORS.richMauve,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  heroName: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  heroTagline: {
    color: COLORS.palePink,
    fontSize: 13,
    marginTop: 4,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  heroDivider: {
    width: 40,
    height: 2,
    backgroundColor: COLORS.roseMauve,
    borderRadius: 1,
    marginVertical: 14,
  },
  heroMeta: {
    flexDirection: 'row',
    gap: 8,
  },
  metaPill: {
    backgroundColor: COLORS.richMauve,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  metaText: {
    color: COLORS.palePink,
    fontSize: 12,
    fontWeight: '600',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 10,
    letterSpacing: 0.3,
  },
  aboutCard: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.midMauve,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    gap: 10,
  },
  aboutText: {
    color: COLORS.textMid,
    fontSize: 14,
    lineHeight: 22,
  },
  highlightText: {
    color: COLORS.midMauve,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 8,
  },
  statBadgeWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  statBadge: {
    width: 95,
    height: 95,
  },
});