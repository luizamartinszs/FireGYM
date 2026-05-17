import { router } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.7)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const progressWidth = useRef(new Animated.Value(0)).current;
  const statusOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.sequence([

      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
     
    ]).start();

    Animated.timing(progressWidth, {
      toValue: width * 0.6,
      duration: 2500,
      delay: 800,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      router.replace('/login');
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A14" />

      <View style={styles.glow} />

      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      >
        <View style={styles.iconWrapper}>
          <Text style={styles.iconText}>💪</Text>
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.nameFire}>Fire</Text>
          <Text style={styles.nameGym}>GYM</Text>
        </View>

        <Animated.Text style={[styles.subtitle, { opacity: taglineOpacity }]}>
          INTELIGENCIA FITNESS
        </Animated.Text>
      </Animated.View>

      <Animated.View style={[styles.bottomContainer, { opacity: statusOpacity }]}>
        <View style={styles.progressBg}>
          <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
        </View>

        <Text style={styles.statusText}>Iniciando seu ambiente de treino...</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A14',
    alignItems: 'center',
    justifyContent: 'center',
  },

  glow: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#6B21FF',
    opacity: 0.08,
    top: height * 0.25,
    alignSelf: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  iconWrapper: {
    width: 100,
    height: 100,
    borderRadius: 28,
    backgroundColor: '#1A1030',
    borderWidth: 1.5,
    borderColor: '#6B21FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    shadowColor: '#6B21FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 10,
  },

  iconText: {
    fontSize: 52,
  },

  nameRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  nameFire: {
    fontSize: 42,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 3,
  },

  nameGym: {
    fontSize: 42,
    fontWeight: '900',
    color: '#A855F7',
    letterSpacing: 3,
  },

  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    letterSpacing: 4,
    fontWeight: '500',
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
    width: '100%',
  },

  progressBg: {
    width: width * 0.6,
    height: 3,
    backgroundColor: '#1E1E35',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },

  progressBar: {
    height: '100%',
    backgroundColor: '#7C3AED',
    borderRadius: 10,
  },

  statusText: {
    color: '#4B5563',
    fontSize: 12,
    letterSpacing: 0.5,
  },
});