import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet,
} from 'react-native';

const COLORS = {
  deepPlum: '#5C1A3A',
  whisperPink: '#F9E8F2',
  white: '#FFFFFF',
  textDark: '#2A0A1C',
  textMid: '#5C1A3A',
  textLight: '#8B4567',
  surface: '#FDF5F9',
  cardBg: '#FFFFFF',
  border: '#E8AECA',
};

const ContactModal: React.FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => (
  <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
    <View style={styles.modalOverlay}>
      <View style={styles.modalCard}>
        <Text style={styles.modalTitle}>👋 Say Hello!</Text>
        <Text style={styles.modalBody}>
          Thanks for reaching out! Feel free to drop me an email at:
        </Text>
        <View style={styles.modalEmailBox}>
          <Text style={styles.modalEmail}>lagurascx@email.com</Text>
        </View>
        <Text style={styles.modalBody}>
          JK. Please don't email me, I'm not checking it often. This is just a demo app to showcase my skills and projects.
        </Text>
        <TouchableOpacity style={styles.modalCloseBtn} onPress={onClose} activeOpacity={0.85}>
          <Text style={styles.modalCloseBtnText}>Got it!</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default function ContactScreen(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.screenHeading}>Get in Touch</Text>
      <Text style={styles.screenSubheading}>
        Open to collaborations, internships, and new ideas.
      </Text>

      <View style={styles.contactCard}>
        {[
          { icon: '📧', label: 'Email', value: 'lagurascx@email.com' },
          { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/XLaguras' },
          { icon: '🐱', label: 'GitHub', value: 'github.com/Xyreel-L' },
          { icon: '📍', label: 'Location', value: 'Lian, Batangas, Philippines' },
        ].map((item) => (
          <View key={item.label} style={styles.contactRow}>
            <Text style={styles.contactIcon}>{item.icon}</Text>
            <View style={styles.contactTextBlock}>
              <Text style={styles.contactLabel}>{item.label}</Text>
              <Text style={styles.contactValue}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.85}
      >
        <Text style={styles.ctaButtonText}>✉️  Send Me a Message</Text>
      </TouchableOpacity>

      <Text style={styles.contactFooter}>
        I usually respond within a lifetime. Let's rest and enjoy the journey!
      </Text>

      <ContactModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  content: { padding: 16, paddingBottom: 32 },
  screenHeading: { fontSize: 22, fontWeight: '800', color: COLORS.textDark, marginBottom: 4 },
  screenSubheading: { fontSize: 13, color: COLORS.textLight, marginBottom: 20, lineHeight: 18 },
  contactCard: {
    backgroundColor: COLORS.cardBg, borderRadius: 16, padding: 16, marginBottom: 20,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 6, elevation: 2, gap: 16,
  },
  contactRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  contactIcon: { fontSize: 24, width: 36, textAlign: 'center' },
  contactTextBlock: { flex: 1 },
  contactLabel: { fontSize: 11, color: COLORS.textLight, fontWeight: '600', letterSpacing: 0.5, marginBottom: 2 },
  contactValue: { fontSize: 14, color: COLORS.textDark, fontWeight: '500' },
  ctaButton: {
    backgroundColor: COLORS.deepPlum, borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginBottom: 16,
    shadowColor: COLORS.deepPlum, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.35, shadowRadius: 10, elevation: 6,
  },
  ctaButtonText: { color: COLORS.white, fontSize: 15, fontWeight: '700', letterSpacing: 0.5 },
  contactFooter: { textAlign: 'center', color: COLORS.textLight, fontSize: 13, lineHeight: 18 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(44, 10, 30, 0.6)', justifyContent: 'flex-end' },
  modalCard: { backgroundColor: COLORS.white, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 28, paddingBottom: 40 },
  modalTitle: { fontSize: 22, fontWeight: '800', color: COLORS.textDark, marginBottom: 12, textAlign: 'center' },
  modalBody: { fontSize: 14, color: COLORS.textMid, lineHeight: 22, textAlign: 'center', marginBottom: 12 },
  modalEmailBox: {
    backgroundColor: COLORS.whisperPink, borderRadius: 10, paddingVertical: 12, paddingHorizontal: 16,
    marginVertical: 8, borderWidth: 1, borderColor: COLORS.border, alignItems: 'center',
  },
  modalEmail: { color: COLORS.deepPlum, fontWeight: '700', fontSize: 15 },
  modalCloseBtn: { backgroundColor: COLORS.deepPlum, borderRadius: 14, paddingVertical: 14, alignItems: 'center', marginTop: 20 },
  modalCloseBtnText: { color: COLORS.white, fontWeight: '700', fontSize: 15 },
});