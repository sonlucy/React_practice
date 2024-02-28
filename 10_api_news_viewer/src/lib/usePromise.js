// usePromise 커스텀 Hook 만들기

import { useState, useEffect } from 'react';

const usePromise = (promiseCreator, deps) => {
  // 로딩중 / 완료 / 실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);   // 대기 중
  const [resolved, setResolved] = useState(null);  // 완료 결과
  const [error, setError] = useState(null);        // 실패 결과

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}

export default usePromise;