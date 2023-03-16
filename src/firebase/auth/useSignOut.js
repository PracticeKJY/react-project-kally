import { useState, useCallback, useMemo } from 'react';
import { signOut as firebaseSignOut } from 'firebase/auth';

import { auth } from './index';

import { userAtom } from '../../recoil/user';

import { useResetRecoilState } from 'recoil';
/* -------------------------------------------------------------------------- */

/**
 * Firebase 인증: 로그아웃 유틸리티 훅
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  signOut: () => Promise<void>;
 * }}
 */
export function useSignOut() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [user, setUser] = useRecoilState(userAtom);
  const resetUser = useResetRecoilState(userAtom);

  const signOut = useCallback(async () => {
    setIsLoading(true);
    try {
      return await firebaseSignOut(auth);
    } catch (error) {
      setError(error);
    } finally {
      // TODO: 아톰을 리셋하는 처리를 추가
      resetUser();
      setIsLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      isLoading,
      error,
      signOut,
    }),
    [isLoading, error, signOut]
  );
}
