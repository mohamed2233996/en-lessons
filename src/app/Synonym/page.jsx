"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


const SynonymFinder = () => {
    const { t, i18n } = useTranslation();
    const [word, setWord] = useState("");
    const [results, setResults] = useState([]);
    const [translated, setTranslated] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSynonyms = async () => {
        if (!word) return;
        setLoading(true);

        try {
            const res = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
            const data = await res.json();
            const words = data.map((item) => item.word);
            setResults(words);

            // ترجمة الكلمات إلى العربية
            const translations = await Promise.all(
                words.map(async (w) => {
                    const res = await fetch(
                        `https://api.mymemory.translated.net/get?q=${w}&langpair=en|${i18n.language === "ar" ? "ar" : "ar"}`
                    );
                    const data = await res.json();
                    return data.responseData.translatedText || "";
                })
            );

            setTranslated(translations);
        } catch (error) {
            console.error(t("errors.fetchError"), error);
        }

        setLoading(false);
    };

    return (
        <div className="pb-20 pt-44 md:pt-32 lg:pt-20 px-6 text-center bg-gray-50 dark:bg-dark min-h-screen bg-[linear-gradient(to_right,#de94942e_1px,transparent_1px),linear-gradient(to_bottom,#de94942e_1px,transparent_1px)] bg-[size:20px_20px]">
            <div className="container m-auto flex flex-col items-center justify-center">
                <h1 className="text-3xl text-primary dark:text-primary font-bold mb-6">{t("title")}</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t("Sydescription")}</p>
                <input
                    type="text"
                    placeholder={t("inputPlaceholder")}
                    className="border border-primary/50 bg-white dark:bg-dark w-3/4 text-black dark:text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
                <button
                    onClick={fetchSynonyms}
                    className="mt-4 bg-primary text-white py-2 px-6 rounded-md hover:bg-transparent hover:text-primary border border-primary dark:text-black dark:bg-primary dark:hover:bg-transparent dark:hover:text-primary dark:hover:border-primary font-bold transition-all"
                    disabled={loading}
                >
                    {loading ? t("loading") : t("search")}
                </button>

                {results.length > 0 && (
                    <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded mt-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold text-primary mb-2">{t("results")}</h2>
                        {results.length === 0 ? (
                            <p className="text-gray-600 dark:text-gray-300">{t("noResults")}</p>
                        ) : null}
                        {results.map((w, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                                className="bg-white dark:bg-dark border border-primary/30 dark:border-primary text-right p-3 my-2 rounded flex justify-between items-center"
                            >
                                <span className="text-black dark:text-white">{w}</span>
                                <span className="text-primary">
                                    ({translated[i] || t("translating")})
                                </span>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SynonymFinder;
