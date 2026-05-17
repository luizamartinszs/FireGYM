import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const COLORS = {
  bg: '#0F0F1A',
  card: '#15152A',
  purple: '#7B4FD4',
  purpleLight: '#A87FFF',
  input: '#1E1E35',
  inputBorder: '#2A2A45',
  textPrimary: '#FFFFFF',
  textSecondary: '#8888AA',
  textMuted: '#555570',
};

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>

            {/* Ícone */}
            <View style={styles.iconWrapper}>
              <View style={styles.iconBg}>
                <Text style={styles.iconText}>💪</Text>
              </View>
            </View>

            {/* Nome do app */}
            <View style={styles.logoRow}>
              <Text style={styles.logoGYM}>Fire</Text>
              <Text style={styles.logoFLUX}>GYM</Text>
            </View>
            <Text style={styles.tagline}>Supere seus limites hoje.</Text>

            {/* Campo email */}
            <Text style={styles.label}>Email ou Usuário</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor={COLORS.textMuted}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                selectionColor={COLORS.purple}
              />
            </View>

            {/* Campo senha */}
            <Text style={[styles.label, { marginTop: 16 }]}>Senha</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={COLORS.textMuted}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!senhaVisivel}
                autoCapitalize="none"
                selectionColor={COLORS.purple}
              />
            </View>

            {/* Esqueci senha */}
            <TouchableOpacity style={styles.forgotWrapper}>
              <Text style={styles.forgotText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            {/* Botão entrar */}
            <TouchableOpacity style={styles.btnEntrar} activeOpacity={0.85}>
              <Text style={styles.btnEntrarText}>Entrar →</Text>
            </TouchableOpacity>

            {/* Criar conta */}
            <View style={styles.criarRow}>
              <Text style={styles.criarMuted}>Novo por aqui?  </Text>
              <TouchableOpacity>
                <Text style={styles.criarLink}>Criar conta</Text>
              </TouchableOpacity>
            </View>

            {/* Termos */}
            <Text style={styles.termos}>
              Ao entrar, você concorda com nossos{' '}
              <Text style={styles.termosLink}>Termos de Uso</Text>
              {' '}e nossa missão de transformar vidas através do movimento.
            </Text>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    paddingHorizontal: 28,
    paddingVertical: 36,
    borderWidth: 1,
    borderColor: '#1E1E38',
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBg: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#1A1A30',
    borderWidth: 1,
    borderColor: '#2A2A50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 32,
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 6,
  },
  logoGYM: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.textPrimary,
    letterSpacing: 1,
  },
  logoFLUX: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.purpleLight,
    letterSpacing: 1,
  },
  tagline: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    fontSize: 14,
    marginBottom: 32,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.input,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    paddingHorizontal: 14,
    height: 52,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 15,
    padding: 0,
  },
  forgotWrapper: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 28,
  },
  forgotText: {
    color: COLORS.purpleLight,
    fontSize: 13,
  },
  btnEntrar: {
    backgroundColor: COLORS.purple,
    borderRadius: 14,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  btnEntrarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  criarRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  criarMuted: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  criarLink: {
    color: COLORS.purpleLight,
    fontSize: 14,
    fontWeight: '600',
  },
  termos: {
    color: COLORS.textMuted,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  termosLink: {
    color: COLORS.purpleLight,
    textDecorationLine: 'underline',
  },
});