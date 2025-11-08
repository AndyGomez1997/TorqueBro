import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tuempresa.obd2scanner',
  appName: 'Scanner OBD-II',
  webDir: 'web',
  server: {
    androidScheme: 'https'
  }
};

export default config;
