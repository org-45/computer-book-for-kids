"use client"
import {FC, useEffect} from 'react';
import Script from 'next/script';

const CommentSection: FC = () => {
    useEffect(() => {
        // ensure that `initCommentSection` is available after the script is loaded
        if (typeof window !== 'undefined' && window.initCommentSection) {
            window.initCommentSection({
                siteId: 'f8077252-10fc-4cd3-8a12-23f5d1155ca3',
                turnstileDataSiteKey: '0x4AAAAAAAy0L57kCD6aNVAD',
            });
        }
    }, []);

    return (
        <>
            {/* Placeholder for the comment section */}
            <div id="comment-section"></div>

            {/* Load the external script for the comment widget */}
            <Script
                src="https://chimebox.me/comment-widget-glowy-dynamic.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // check if `initCommentSection` exists after the script is loaded
                    if (typeof window !== 'undefined' && window.initCommentSection) {
                        window.initCommentSection({
                            siteId: 'f8077252-10fc-4cd3-8a12-23f5d1155ca3',
                            turnstileDataSiteKey: '0x4AAAAAAAy0L57kCD6aNVAD',
                        });
                    } else {
                        console.error('initCommentSection is not available on the window object');
                    }
                }}
            />
        </>
    );
};

export default CommentSection;
