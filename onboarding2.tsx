import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const objetivos = ['Hipertrofia', 'Emagrecimento', 'Resistência', 'Saúde Geral'];
const niveis = ['Iniciante', 'Intermediário', 'Avançado'];
const limitacoes = ['Joelho', 'Ombro', 'Coluna', 'Quadril'];

export default function Onboarding2() {
  const [objetivoSelecionado, setObjetivoSelecionado] = useState('Hipertrofia');
  const [nivelSelecionado, setNivelSelecionado] = useState('Intermediário');
  const [limitacoesSelecionadas, setLimitacoesSelecionadas] = useState<string[]>(['Ombro']);

  const toggleLimitacao = (item: string) => {
    setLimitacoesSelecionadas(prev =>
      prev.includes(item) ? prev.filter(l => l !== item) : [...prev, item]
    );
  };

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
        <Text style={styles.progressLabel}>Perfil Inteligente</Text>
        <Text style={styles.progressCount}>2/3</Text>
      </View>
      <View style={styles.progressBarRow}>
        <View style={[styles.progressSegment, { backgroundColor: '#7C3AED' }]} />
        <View style={[styles.progressSegment, { backgroundColor: '#7C3AED' }]} />
        <View style={styles.progressSegment} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Título */}
        <View style={styles.tituloContainer}>
          <Text style={styles.titulo}>
            Seu <Text style={styles.tituloDestaque}>Perfil</Text>
          </Text>
          <Text style={styles.subtitulo}>
            Conte-nos sobre você para criarmos um plano perfeito para sua evolução.
          </Text>
        </View>

        {/* Objetivo */}
        <View style={styles.secaoContainer}>
          <View style={styles.secaoHeader}>
            <Text style={styles.secaoIcone}>🎯</Text>
            <Text style={styles.secaoTitulo}>Qual seu objetivo principal?</Text>
          </View>
          <View style={styles.objetivosGrid}>
            {objetivos.map(obj => (
              <TouchableOpacity
                key={obj}
                style={[
                  styles.objetivoBtn,
                  objetivoSelecionado === obj && styles.objetivoBtnSelecionado,
                ]}
                onPress={() => setObjetivoSelecionado(obj)}
                activeOpacity={0.8}
              >
                <Text style={[
                  styles.objetivoBtnText,
                  objetivoSelecionado === obj && styles.objetivoBtnTextSelecionado,
                ]}>
                  {obj}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Nível */}
        <View style={styles.nivelCard}>
          <View style={styles.nivelHeader}>
            <View style={styles.nivelHeaderLeft}>
              <Text style={styles.secaoIcone}>📊</Text>
              <Text style={styles.secaoTitulo}>Nível de Experiência</Text>
            </View>
            <View style={styles.nivelBadge}>
              <Text style={styles.nivelBadgeText}>{nivelSelecionado}</Text>
            </View>
          </View>
          <View style={styles.niveisRow}>
            {niveis.map(nivel => (
              <TouchableOpacity
                key={nivel}
                style={[
                  styles.nivelBtn,
                  nivelSelecionado === nivel && styles.nivelBtnSelecionado,
                ]}
                onPress={() => setNivelSelecionado(nivel)}
                activeOpacity={0.8}
              >
                <Text style={[
                  styles.nivelBtnText,
                  nivelSelecionado === nivel && styles.nivelBtnTextSelecionado,
                ]}>
                  {nivel}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Limitações */}
        <View style={styles.secaoContainer}>
          <View style={styles.secaoHeader}>
            <Text style={styles.secaoIcone}>🩹</Text>
            <Text style={styles.secaoTitulo}>Limitações ou Lesões?</Text>
          </View>
          <View style={styles.limitacoesGrid}>
            {limitacoes.map(item => {
              const selecionado = limitacoesSelecionadas.includes(item);
              return (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.limitacaoBtn,
                    selecionado && styles.limitacaoBtnSelecionado,
                  ]}
                  onPress={() => toggleLimitacao(item)}
                  activeOpacity={0.8}
                >
                  <View style={[styles.checkbox, selecionado && styles.checkboxSelecionado]}>
                    {selecionado && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <Text style={[
                    styles.limitacaoText,
                    selecionado && styles.limitacaoTextSelecionado,
                  ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Botão próximo */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnProximo}
          activeOpacity={0.85}
          onPress={() => router.push('/onboarding3')}
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
  secaoContainer: {
    marginBottom: 24,
  },
  secaoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  secaoIcone: {
    fontSize: 18,
  },
  secaoTitulo: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  objetivosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  objetivoBtn: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 50,
    backgroundColor: '#1A1A2E',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  objetivoBtnSelecionado: {
    borderColor: '#7C3AED',
    backgroundColor: '#1E1030',
  },
  objetivoBtnText: {
    color: '#9CA3AF',
    fontSize: 15,
    fontWeight: '600',
  },
  objetivoBtnTextSelecionado: {
    color: '#FFFFFF',
  },
  nivelCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  nivelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  nivelHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nivelBadge: {
    backgroundColor: '#1E1030',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  nivelBadgeText: {
    color: '#A855F7',
    fontSize: 13,
    fontWeight: '700',
  },
  niveisRow: {
    flexDirection: 'row',
    gap: 8,
  },
  nivelBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#0F0F1A',
    borderWidth: 1.5,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  nivelBtnSelecionado: {
    borderColor: '#7C3AED',
    backgroundColor: '#1E1030',
  },
  nivelBtnText: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '600',
  },
  nivelBtnTextSelecionado: {
    color: '#FFFFFF',
  },
  limitacoesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  limitacaoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#1A1A2E',
    borderWidth: 1.5,
    borderColor: 'transparent',
    width: '47%',
  },
  limitacaoBtnSelecionado: {
    borderColor: '#7C3AED',
    backgroundColor: '#1E1030',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#4B5563',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelecionado: {
    backgroundColor: '#7C3AED',
    borderColor: '#7C3AED',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  limitacaoText: {
    color: '#9CA3AF',
    fontSize: 15,
    fontWeight: '600',
  },
  limitacaoTextSelecionado: {
    color: '#FFFFFF',
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