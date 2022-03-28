export function increaseTargetValue(clickType, mockArr) {
  return [...mockArr].map(({ key, value }) => {
    if (key === clickType) {
      return { key, value: value + 1 };
    } else {
      return { key, value };
    }
  });
}
