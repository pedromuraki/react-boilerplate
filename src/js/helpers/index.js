import history from '../router/history';

export const pathnameToString = pathname => {
  if (pathname === '/') return 'Início';
  return pathname.charAt(1).toUpperCase() + pathname.slice(2);
};

export const changePage = pathname => {
  history.push(pathname);
};
