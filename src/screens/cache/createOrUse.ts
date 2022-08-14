const cache: Record<string, any> = {};
/*
    타입스크립트 기본 제공 타입.
    C#의 dictionary 같은 것.
    cache[key]에 값이 있으면 그 값 리턴, 없으면 넣었던 콜백함수 그대로 리턴.
    캐시를 구현하는 전형적인 방법임.
*/

export const createOrUse = <T>(key: string, callback: () => T) => {
  if (!cache[key]) cache[key] = callback();
  return cache[key];
};
