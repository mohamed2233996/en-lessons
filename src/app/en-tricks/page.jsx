'use client';
import { AlertTriangleIcon, BookOpenIcon, FacebookIcon, HeartIcon, Loader2Icon, MessageCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import tricksImg from "@/imges/enTrick.png"


const Page = () => {
    const { t } = useTranslation();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const pageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;
        const accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;

        if (!pageId || !accessToken) {
            setError('Environment variables are missing.');
            setLoading(false);
            return;
        }

        fetch(`https://graph.facebook.com/${pageId}/posts?fields=message,full_picture,created_time,permalink_url,likes.summary(true),comments.summary(true)&access_token=${accessToken}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error.message);
                } else {
                    setPosts(data.data || []);
                    console.log(data.data)
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Network error:', err);
                setError('Network error occurred.');
                setLoading(false);
            });
    }, []);

    function removeEmojis(text) {
        return text.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\u24C2|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDFFF])/g,
            ''
        );
    }

    function isNewPost(dateStr) {
        const postDate = new Date(dateStr);
        const now = new Date();
        const diffInDays = (now - postDate) / (1000 * 60 * 60 * 24);
        return diffInDays <= 3;
    }


    return (
        <div className="pb-20 pt-44 px-6 text-center bg-gray-50 dark:bg-dark min-h-screen">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-10">
                {t('LatestPosts')}
            </h2>
            <p className="text-lg mb-6 text-dark dark:text-white">
                {t('trickDescription')}
            </p>

            {loading ? (
                <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-300 animate-pulse">
                    <Loader2Icon className="w-6 h-6 animate-spin" />
                    <p>{t('Loadingposts')}</p>
                </div>
            ) : error ? (
                <div className="flex flex-col items-center gap-2 text-red-500">
                    <AlertTriangleIcon className="w-6 h-6" />
                    <p>Error: {error}</p>
                </div>
            ) : posts.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">{t('Noposts')}</p>
            ) : (
                <div className="space-y-8 max-w-4xl mx-auto">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition space-y-4 text-left"
                        >
                            {/* صورة البوست إن وجدت */}
                            <img
                                src={post.full_picture || "/enTrick.png"}
                                alt="Post visual"
                                className="w-[400px] mx-auto rounded-xl object-cover mb-4"
                            />
                            <div className="flex gap-3 items-start ltr">
                                <BookOpenIcon className="w-6 h-6 min-w-6 text-blue-600 dark:text-blue-400 mt-1" />
                                <div className="flex-1">
                                    <p className="text-dark dark:text-gray-100 whitespace-pre-line text-right">
                                        {removeEmojis(post.message || 'No content in this post.')}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                        {new Date(post.created_time).toLocaleString()}
                                        {isNewPost(post.created_time) && (
                                            <span className='absolute bg-primary text-white dark:text-dark w-20 cursor-default h-20 flex items-center justify-center rounded-full
                                            top-2 md:right-24 sm:right-6 right-2'>
                                                <span className='costamF'>{t("New")}</span>
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* تفاعلات + زر */}
                            <div className="flex justify-between items-center mt-4 text-gray-600 dark:text-gray-300 text-sm">
                                <div className="flex gap-4 items-center">
                                    <div className="flex items-center gap-1">
                                        <HeartIcon className="w-4 h-4 text-pink-500" />
                                        {post.likes?.summary?.total_count || 0}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageCircleIcon className="w-4 h-4 text-blue-400" />
                                        {post.comments?.summary?.total_count || 0}
                                    </div>
                                </div>
                                <a
                                    href={post.permalink_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    <FacebookIcon className="w-4 h-4" />
                                    {t("ViewFacebook")}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
