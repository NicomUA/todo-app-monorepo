import { JwtService } from '@nestjs/jwt';
import { ConfigurationService } from '@todo-app/config';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard(new JwtService(), new ConfigurationService())).toBeDefined();
  });
});
