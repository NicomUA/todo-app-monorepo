export type PrismaConfig = {
  log: [
    {
      emit: 'event';
      level: 'error';
    },
    {
      emit: 'event';
      level: 'info';
    },
    {
      emit: 'event';
      level: 'warn';
    },
  ];
};

export const prismaConfig: PrismaConfig = {
  log: [
    {
      emit: 'event',
      level: 'error',
    },
    {
      emit: 'event',
      level: 'info',
    },
    {
      emit: 'event',
      level: 'warn',
    },
  ],
};
