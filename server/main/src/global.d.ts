declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }

  interface EnvConfig {
    db: import('@nestjs/typeorm').TypeOrmModuleOptions;
  }
}

export {};
