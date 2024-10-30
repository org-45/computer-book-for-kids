// src/global.d.ts
export {};

declare global {
    interface Window {
        initCommentSection: (options: {siteId: string; turnstileDataSiteKey: string}) => void;
    }
}
