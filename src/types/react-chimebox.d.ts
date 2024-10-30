// src/types/react-chimebox.d.ts
declare module 'react-chimebox' {
    import React from 'react';

    interface CommentWidgetProps {
        siteId: string;
        turnstileDataSiteKey: string;
    }

    const CommentWidget: React.FC<CommentWidgetProps>;

    export default CommentWidget;
}
