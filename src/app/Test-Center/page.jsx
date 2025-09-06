"use client";
import { DownloadIcon, XCircle, Eye, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [previewFile, setPreviewFile] = useState(null);
    const [progress, setProgress] = useState(0); // ✅ نسبة التحميل
    const [searchTerm, setSearchTerm] = useState("");

    const { t } = useTranslation();

    useEffect(() => {
        async function fetchFiles() {
            try {
                setLoading(true);
                const folderId = "1QFdLgMQhAQ2ks3MXz9zw0HxW5H4riMPT";
                const apiKey = "AIzaSyDQntpPvs-Pu949gcloYg3jy6G6PHJyrI0";

                const res = await fetch(
                    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`
                );
                const data = await res.json();
                setFiles(data.files || []);
            } catch (err) {
                console.error("Error fetching files:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchFiles();
    }, []);

    // ✅ محاكاة التحميل التدريجي (0 → 100%)
    useEffect(() => {
        if (previewFile && progress < 100) {
            const interval = setInterval(() => {
                setProgress((old) => Math.min(old + 5, 95)); // يوصل لحد 95% بس
            }, 200);
            return () => clearInterval(interval);
        }
    }, [previewFile, progress]);

    return (
        <div className="max-w-5xl mx-auto p-6 pt-20">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-10 text-center">
                {t("ExamPDFs")}
            </h1>

            {/* ✅ شريط البحث */}
            <div className="max-w-md mx-auto mb-8">
                <input
                    type="text"
                    placeholder={t("SearchPDFs")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 
               focus:ring-2 focus:ring-primary focus:outline-none bg-white dark:bg-gray-900 
               text-black dark:text-white placeholder-gray-400"
                />
            </div>


            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="animate-spin w-10 h-10 text-primary" />
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                    {files
                        .filter((file) =>
                            file.name.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((file) => (
                            <motion.div
                                key={file.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center gap-4 border border-gray-200 dark:border-gray-700"
                            >
                                <h2 className="font-semibold text-black dark:text-white text-center text-lg">
                                    {file.name}
                                </h2>

                                <div className="flex gap-3 flex-col sm:flex-row w-full justify-center">
                                    <a
                                        href={`https://drive.google.com/uc?id=${file.id}&export=download`}
                                        className="flex items-center gap-2 justify-center bg-primary text-white font-semibold px-4 py-2 rounded-full border border-primary hover:text-primary hover:bg-transparent transition duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t("DownloadPDF")}
                                        <DownloadIcon className="w-5 h-5" />
                                    </a>

                                    <button
                                        onClick={() => {
                                            setPreviewFile(file.id);
                                            setProgress(0); // يبدأ التحميل من الصفر
                                        }}
                                        className="flex items-center gap-2 justify-center bg-gray-800 text-white font-semibold px-4 py-2 rounded-full border border-gray-800 hover:text-gray-800 hover:bg-transparent hover:border-gray-600 transition duration-300"
                                    >
                                        {t("PreviewPDF")}
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                </div>
            )}

            <AnimatePresence>
                {previewFile && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-[9000] flex flex-col items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.button
                            onClick={() => setPreviewFile(null)}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="mb-6 flex flex-col items-center text-white text-2xl font-bold hover:text-red-500 transition"
                        >
                            <XCircle className="w-16 h-16" />
                            {t("Close")}
                        </motion.button>

                        {/* ✅ Progress Bar */}
                        {progress < 100 && (
                            <div className="w-full max-w-3xl mb-6">
                                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{
                                            width: `${progress}%`,
                                            backgroundColor:
                                                progress < 40
                                                    ? "#ef4444" // red-500
                                                    : progress < 80
                                                        ? "#eab308" // yellow-500
                                                        : "#22c55e", // green-500
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="h-3"
                                    />
                                </div>
                                <p className="text-center text-white mt-2">{progress}%</p>
                            </div>
                        )}

                        {/* iframe المعاينة */}
                        <motion.iframe
                            key={previewFile}
                            src={`https://drive.google.com/file/d/${previewFile}/preview`}
                            onLoad={() => setProgress(100)} // ✅ يوصل 100% عند التحميل
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-full max-w-5xl h-[80vh] rounded-lg border bg-white shadow-2xl ${progress < 100 ? "hidden" : "block"
                                }`}
                        ></motion.iframe>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Page;
