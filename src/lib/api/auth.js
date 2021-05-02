import client from './client';

<<<<<<< HEAD
// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 회원가입
export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
=======
export const login = ({ username, password }) => {
  client.post('/api/auth/login', { username, password });
};

export const register = ({ username, password }) => {
  client.post('api/auth/register', { username, password });
};

export const check = () => client.get('/api/auth/check');
>>>>>>> eb990b350175a89f94ce336362c2869c5efef5a9
