const useWebApp = () => {
    const WebApp = typeof window !== 'undefined' && (window as any)?.Telegram?.WebApp
        ? (window as any).Telegram.WebApp
        : null;
    return WebApp;
}

export default useWebApp;