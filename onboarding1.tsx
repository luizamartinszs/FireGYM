import { router } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const beneficios = [
  {
    icon: '🏋️',
    titulo: 'Treinos Personalizados',
    descricao: 'Guias visuais em 3D e evolução baseada no seu perfil inteligente.',
  },
  {
    icon: '👥',
    titulo: 'Aulas & Lotação',
    descricao: 'Reserve aulas facilmente e acompanhe a lotação da academia em tempo real.',
  },
  {
    icon: '🔥',
    titulo: 'Streak & Gamificação',
    descricao: 'Mantenha o foco, suba no ranking social e desbloqueie conquistas.',
  },
];

export default function Onboarding1() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0F1A" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.replace('/login')}>
          <Text style={styles.pularText}>Pular</Text>
        </TouchableOpacity>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Benefícios</Text>
        <Text style={styles.progressCount}>1/3</Text>
      </View>
      <View style={styles.progressBarRow}>
        <View style={[styles.progressSegment, { backgroundColor: '#7C3AED' }]} />
        <View style={styles.progressSegment} />
        <View style={styles.progressSegment} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>
            Eleve seu <Text style={styles.tituloDestaque}>Treino</Text>
          </Text>
          <Text style={styles.subtitulo}>
            Descubra como o FireGym transforma sua rotina de exercícios com tecnologia inteligente e comunidade.
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          {beneficios.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.iconWrapper}>
                <Text style={styles.iconText}>{item.icon}</Text>
              </View>
              <View style={styles.cardTexts}>
                <Text style={styles.cardTitulo}>{item.titulo}</Text>
                <Text style={styles.cardDescricao}>{item.descricao}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Botão próximo */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnProximo}
          activeOpacity={0.85}
          onPress={() => router.push('/onboarding2')}
        >
          <Text style={styles.btnProximoText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1A',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 28,
  },
  pularText: {
    color: '#9CA3AF',
    fontSize: 15,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  progressLabel: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  progressCount: {
    color: '#A855F7',
    fontWeight: '600',
    fontSize: 14,
  },
  progressBarRow: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 20,
    marginBottom: 28,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: 10,
    backgroundColor: '#1E1E35',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  tituloContainer: {
    marginBottom: 24,
  },
  titulo: {
    fontSize: 34,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  tituloDestaque: {
    color: '#A855F7',
  },
  subtitulo: {
    fontSize: 15,
    color: '#9CA3AF',
    lineHeight: 22,
  },
  cardsContainer: {
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
    borderRadius: 16,
    padding: 16,
    gap: 14,
  },
  iconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#1E1030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  cardTexts: {
    flex: 1,
  },
  cardTitulo: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 4,
  },
  cardDescricao: {
    color: '#9CA3AF',
    fontSize: 13,
    lineHeight: 18,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 12,
  },
  btnProximo: {
    backgroundColor: '#7C3AED',
    borderRadius: 50,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnProximoText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});