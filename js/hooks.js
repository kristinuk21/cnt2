// Custom hook for localStorage state
function useLocalStorage(key, initialValue) {
  const [state, setState] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });
  React.useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);
  return [state, setState];
}

// Custom hook for progress info
function useProgressInfo() {
  const [progress, setProgress] = React.useState(getProgressInfo());
  React.useEffect(() => {
    const interval = setInterval(() => setProgress(getProgressInfo()), 60000);
    return () => clearInterval(interval);
  }, []);
  return progress;
}

// Custom hook for working hours progress
function useWorkingHoursProgress() {
  const [hours, setHours] = React.useState(getWorkingHoursProgress());
  React.useEffect(() => {
    const interval = setInterval(() => setHours(getWorkingHoursProgress()), 60000);
    return () => clearInterval(interval);
  }, []);
  return hours;
}
